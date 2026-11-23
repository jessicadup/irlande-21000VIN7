// ======================================================================
//  cartes.js : formulaire d'ajout / modification de cartes
//  (Logements, Visites). Les données elles-mêmes passent par partage.js.
// ======================================================================
let styleOk = false;
function injecterStyle(){
  if (styleOk || document.getElementById("cf-style")) { styleOk = true; return; }
  const st = document.createElement("style");
  st.id = "cf-style";
  st.textContent = `
  .cf-modal{position:fixed; inset:0; z-index:80; background:rgba(20,24,28,0.85); display:flex; align-items:flex-start; justify-content:center; padding:16px; overflow-y:auto;}
  .cf-box{background:var(--slate); border:1px solid rgba(139,154,150,0.3); border-radius:var(--radius); padding:24px; width:100%; max-width:480px; margin:auto;}
  .cf-box h3{margin:0 0 14px;}
  .cf-row{display:block; margin-bottom:12px;}
  .cf-row > span{display:block; color:var(--stone); font-size:0.85rem; margin-bottom:4px;}
  .cf-aide{display:block; color:var(--stone); font-size:0.78rem; margin-top:4px;}
  .cf-input{width:100%; padding:9px 12px; font:inherit; background:var(--basalt); color:var(--fog); border:1px solid var(--stone); border-radius:var(--radius);}
  textarea.cf-input{resize:vertical;}
  .cf-err{min-height:1.3em; color:var(--amber); font-size:0.85rem; margin:4px 0;}
  .cf-actions{display:flex; justify-content:flex-end; gap:8px; margin-top:8px; flex-wrap:wrap;}
  .cf-actions button{font:inherit; cursor:pointer; border-radius:var(--radius); padding:7px 14px; border:1px solid var(--amber); background:transparent; color:var(--amber);}
  .cf-actions button:hover{background:var(--amber); color:var(--basalt);}
  .cf-actions .cf-ok{background:var(--amber); color:var(--basalt);}
  .cf-actions .cf-del{border-color:var(--stone); color:var(--stone); margin-right:auto;}`;
  document.head.appendChild(st);
  styleOk = true;
}

export function nouvelId(){ return "c" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }

// Lecture d'un montant saisi : accepte « 450 », « 450,50 », « 1 200 € ». Vide = vide.
export function lireMontant(txt){
  const t = String(txt).trim().replace(",", ".").replace(/[£€\s]/g, "");
  if (t === "") return {vide:true};
  const n = Number(t);
  return (isFinite(n) && n >= 0) ? {n} : {invalide:true};
}

// champs : [{cle, label, type:"texte"|"long"|"choix"|"montant"|"lien", requis, options:[{v,l}], aide}]
export function ouvrirFormulaire({titre, champs, valeurs, onValider, onSupprimer}){
  injecterStyle();
  valeurs = valeurs || {};
  const modal = document.createElement("div"); modal.className = "cf-modal";
  const form = document.createElement("form"); form.className = "cf-box"; form.noValidate = true;
  const h = document.createElement("h3"); h.textContent = titre; form.appendChild(h);
  const ctrl = {};
  champs.forEach(ch => {
    const lab = document.createElement("label"); lab.className = "cf-row";
    const sp = document.createElement("span"); sp.textContent = ch.label + (ch.requis ? " *" : ""); lab.appendChild(sp);
    let el;
    if (ch.type === "long"){ el = document.createElement("textarea"); el.rows = 3; }
    else if (ch.type === "choix"){
      el = document.createElement("select");
      ch.options.forEach(o => { const op = document.createElement("option"); op.value = o.v; op.textContent = o.l; el.appendChild(op); });
    } else {
      el = document.createElement("input"); el.type = "text"; el.autocomplete = "off";
      if (ch.type === "montant") el.setAttribute("inputmode", "decimal");
      if (ch.type === "lien"){ el.setAttribute("inputmode", "url"); el.placeholder = "https://..."; }
    }
    el.className = "cf-input"; el.name = ch.cle;
    const v = valeurs[ch.cle];
    el.value = (v === null || v === undefined) ? "" : (ch.type === "montant" ? String(v).replace(".", ",") : String(v));
    if (ch.type === "choix" && el.value === "") el.value = ch.options[0].v;
    lab.appendChild(el);
    if (ch.aide){ const a = document.createElement("small"); a.className = "cf-aide"; a.textContent = ch.aide; lab.appendChild(a); }
    form.appendChild(lab);
    ctrl[ch.cle] = el;
  });
  const err = document.createElement("div"); err.className = "cf-err"; err.setAttribute("role", "alert"); form.appendChild(err);
  const actions = document.createElement("div"); actions.className = "cf-actions";
  if (onSupprimer){
    const del = document.createElement("button"); del.type = "button"; del.className = "cf-del"; del.textContent = "Supprimer";
    del.addEventListener("click", () => { if (window.confirm("Supprimer définitivement cette carte ?")){ fermer(); onSupprimer(); } });
    actions.appendChild(del);
  }
  const ann = document.createElement("button"); ann.type = "button"; ann.className = "cf-cancel"; ann.textContent = "Annuler";
  const ok = document.createElement("button"); ok.type = "submit"; ok.className = "cf-ok"; ok.textContent = "Enregistrer";
  actions.appendChild(ann); actions.appendChild(ok); form.appendChild(actions);
  modal.appendChild(form); document.body.appendChild(modal);

  function fermer(){ document.removeEventListener("keydown", surTouche); modal.remove(); }
  function surTouche(e){ if (e.key === "Escape") fermer(); }
  document.addEventListener("keydown", surTouche);
  ann.addEventListener("click", fermer);
  modal.addEventListener("click", e => { if (e.target === modal) fermer(); });
  form.addEventListener("submit", async e => {
    e.preventDefault();
    const out = {}; let erreur = "";
    champs.forEach(ch => {
      const brut = ctrl[ch.cle].value.trim();
      if (ch.requis && brut === ""){ erreur = erreur || "« " + ch.label + " » est obligatoire."; return; }
      if (ch.type === "montant"){
        if (brut === ""){ out[ch.cle] = null; return; }
        const m = lireMontant(brut);
        if (m.invalide){ erreur = erreur || "« " + ch.label + " » : entre un nombre (ex. 450 ou 450,50)."; return; }
        out[ch.cle] = m.n;
      } else if (ch.type === "lien"){
        if (brut !== "" && !/^https?:\/\//i.test(brut)){ erreur = erreur || "Le lien doit commencer par https://"; return; }
        out[ch.cle] = brut;
      } else out[ch.cle] = brut;
    });
    if (erreur){ err.textContent = erreur; return; }
    fermer();
    await onValider(out);
  });
  const premier = form.querySelector(".cf-input"); if (premier) premier.focus();
}
