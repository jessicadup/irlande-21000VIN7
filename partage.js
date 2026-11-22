// ======================================================================
//  partage.js : partage des données entre appareils (Firebase Firestore)
//  + code familial pour autoriser les modifications.
//  Utilisé par les pages dont le contenu peut être modifié en ligne.
// ======================================================================
const FB = "https://www.gstatic.com/firebasejs/10.12.2/";
const firebaseConfig = {
  apiKey: "AIzaSyC2wHpHCCa4LUBG_767vJcE2aETSZjmJ0U",
  authDomain: "voyage-irlande.firebaseapp.com",
  projectId: "voyage-irlande",
  storageBucket: "voyage-irlande.firebasestorage.app",
  messagingSenderId: "163154306449",
  appId: "1:163154306449:web:d493591120eecac71fe630"
};
// Empreinte (SHA-256) du code familial : le code lui-même n'est écrit nulle part.
const CODE_HASH = "8879addeb18c6b29e8b89960f3310224792fbe08e955aabc3956bd4f29f1bc72";
const CLE_EDITEUR = "irlande_editeur";

export const _hooks = { importer: url => import(url) };
let db = null, fs = null;

// ---------- Connexion à la base ----------
export async function connecter(){
  if (db) return true;
  try{
    const appMod = await _hooks.importer(FB + "firebase-app.js");
    fs = await _hooks.importer(FB + "firebase-firestore.js");
    db = fs.getFirestore(appMod.initializeApp(firebaseConfig));
    return true;
  }catch(e){
    console.warn("Base en ligne indisponible :", e);
    db = null;
    return false;
  }
}

// Écoute un document en direct. onData(données | null si vide, venantDuCache)
export function ecouter(docId, onData, onErreur){
  if (!db) return () => {};
  return fs.onSnapshot(
    fs.doc(db, "voyage", docId),
    snap => onData(snap.exists() ? (snap.data().data || {}) : null, !!(snap.metadata && snap.metadata.fromCache)),
    err => { if (onErreur) onErreur(err); }
  );
}

// Ajoute/modifie quelques champs sans écraser le reste (deux personnes peuvent cocher en même temps).
export async function fusionner(docId, patch){
  if (!db) throw new Error("Base indisponible");
  await fs.setDoc(fs.doc(db, "voyage", docId), { data: patch, maj: new Date().toISOString() }, { merge: true });
}

// ---------- Code familial ----------
async function empreinte(texte){
  if (!(window.crypto && window.crypto.subtle)) throw new Error("Contexte non sécurisé");
  const octets = new TextEncoder().encode(texte);
  const h = await window.crypto.subtle.digest("SHA-256", octets);
  return Array.from(new Uint8Array(h)).map(x => x.toString(16).padStart(2, "0")).join("");
}
export function estEditeur(){
  try{ return localStorage.getItem(CLE_EDITEUR) === CODE_HASH; }catch(e){ return false; }
}
export async function deverrouiller(code){
  const h = await empreinte(String(code).trim().toLowerCase());
  if (h !== CODE_HASH) return false;
  try{ localStorage.setItem(CLE_EDITEUR, h); }catch(e){}
  return true;
}
export function verrouiller(){
  try{ localStorage.removeItem(CLE_EDITEUR); }catch(e){}
}

// ---------- Barre « Modifier » (en bas à droite) ----------
function injecterStyle(){
  if (document.getElementById("pm-style")) return;
  const st = document.createElement("style");
  st.id = "pm-style";
  st.textContent = `
  .pm-bar{position:fixed; right:16px; bottom:calc(16px + env(safe-area-inset-bottom, 0px)); z-index:60; display:flex; align-items:center; gap:12px;
    background:var(--slate); border:1px solid rgba(139,154,150,0.3); border-radius:var(--radius); padding:8px 12px; font-size:0.82rem; color:var(--stone); box-shadow:0 4px 18px rgba(0,0,0,0.45);}
  .pm-bar.actif{border-color:var(--amber); color:var(--fog);}
  .pm-bar button, .pm-box button{font:inherit; cursor:pointer; border-radius:var(--radius); padding:6px 12px; border:1px solid var(--amber); background:transparent; color:var(--amber);}
  .pm-bar button:hover, .pm-box button:hover{background:var(--amber); color:var(--basalt);}
  .pm-modal{position:fixed; inset:0; z-index:70; background:rgba(20,24,28,0.82); display:flex; align-items:center; justify-content:center; padding:16px;}
  .pm-modal[hidden]{display:none;}
  .pm-box{background:var(--slate); border:1px solid rgba(139,154,150,0.3); border-radius:var(--radius); padding:24px; width:100%; max-width:340px;}
  .pm-box h3{margin:0 0 6px;}
  .pm-box p{margin:0 0 14px; color:var(--stone); font-size:0.9rem;}
  .pm-input{width:100%; padding:10px 12px; font:inherit; background:var(--basalt); color:var(--fog); border:1px solid var(--stone); border-radius:var(--radius);}
  .pm-err{min-height:1.3em; margin-top:8px; color:var(--amber); font-size:0.85rem;}
  .pm-actions{display:flex; justify-content:flex-end; gap:8px; margin-top:8px;}
  .pm-box .pm-ok{background:var(--amber); color:var(--basalt);}`;
  document.head.appendChild(st);
}

// onChange(estEditeur) est appelé à chaque verrouillage / déverrouillage.
export function installerBarre(onChange){
  injecterStyle();
  const bar = document.createElement("div");
  bar.className = "pm-bar";
  bar.innerHTML = '<span class="pm-etat"></span><button type="button" class="pm-btn"></button>';
  const modal = document.createElement("div");
  modal.className = "pm-modal";
  modal.hidden = true;
  modal.innerHTML = '<form class="pm-box"><h3>Code familial</h3><p>Entre le code pour pouvoir modifier le site.</p>' +
    '<input type="text" class="pm-input" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Code familial">' +
    '<div class="pm-err" role="alert"></div>' +
    '<div class="pm-actions"><button type="button" class="pm-cancel">Annuler</button><button type="submit" class="pm-ok">Valider</button></div></form>';
  document.body.appendChild(bar);
  document.body.appendChild(modal);

  const etat = bar.querySelector(".pm-etat"), btn = bar.querySelector(".pm-btn");
  const input = modal.querySelector(".pm-input"), err = modal.querySelector(".pm-err");

  function maj(){
    const ed = estEditeur();
    bar.classList.toggle("actif", ed);
    etat.textContent = ed ? "✏️ Modification activée" : "Lecture seule";
    btn.textContent = ed ? "Verrouiller" : "Modifier";
  }
  function ouvrir(){ err.textContent = ""; input.value = ""; modal.hidden = false; input.focus(); }
  function fermer(){ modal.hidden = true; }

  btn.addEventListener("click", () => {
    if (estEditeur()){ verrouiller(); maj(); if (onChange) onChange(false); }
    else ouvrir();
  });
  modal.querySelector(".pm-cancel").addEventListener("click", fermer);
  modal.addEventListener("click", e => { if (e.target === modal) fermer(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") fermer(); });
  modal.querySelector("form").addEventListener("submit", async e => {
    e.preventDefault();
    try{
      if (await deverrouiller(input.value)){ fermer(); maj(); if (onChange) onChange(true); }
      else err.textContent = "Code incorrect, réessaie.";
    }catch(ex){
      err.textContent = "Impossible de vérifier le code sur cette connexion (ouvre le site en https).";
    }
  });
  maj();
}
