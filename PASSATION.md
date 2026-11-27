# PASSATION : site voyage Irlande du Nord (avril 2027)

> ⚠️ **Ce fichier ne doit JAMAIS être déposé sur GitHub** (dépôt public). Il reste uniquement dans les fichiers du projet Claude.
> **Ne jamais importer `texts.json` sur GitHub.**

## 0. Règles de travail (à respecter à chaque discussion)

- Utilisatrice non développeuse : explications simples et brèves, fichiers prêts à déposer sur GitHub.
- Début de discussion : lire cette passation et tous les fichiers du site, résumer en quelques lignes, poser les questions, **attendre le feu vert**. Pas de code dans cette première réponse.
- Avant un changement important : reformuler et faire valider. Avant de coder : expliquer en 2-3 phrases.
- Livrer un zip avec **uniquement les fichiers modifiés + PASSATION.md**, et la liste des fichiers inclus.
- Tester par script avant chaque livraison (syntaxe, cohérence entre fichiers, `?v=`).
- **Incrémenter le `?v=`** à chaque livraison (lien `css/style.css?v=N` dans chaque page).
- Respecter design, vocabulaire et ton (tutoiement, ton simple et chaleureux).
- **Ne jamais ajouter de texte, encart, conseil ou section sans l'avoir proposé et fait valider** (voir §6 bis).
- Terminer chaque livraison par : (1) la procédure GitHub « Add file > Upload files » avec les fichiers du zip SAUF PASSATION.md, « Commit changes », puis Ctrl+F5 ; (2) le rappel « Remplacez PASSATION.md dans les fichiers du projet. »
- Astuce technique : les `str_replace` multi-lignes échouent parfois (encodage) ; un script Python de remplacement avec vérification du nombre d'occurrences est fiable.
- L'espace de travail `/home/claude` se réinitialise : reprendre depuis les fichiers du projet (ils sont à plat ; le CSS doit être rangé dans `css/style.css`).

## 1. Projet

Site privé multi-pages pour organiser un voyage familial en Irlande du Nord. Claude y est développeur, designer, webmestre et travel planner (recherches par recherche web classique, **aucun connecteur** Expedia/lastminute/Booking).

**Protection** : pas de mot de passe. Lien privé non référencé : balise `noindex, nofollow` sur chaque page + dépôt GitHub au nom peu devinable (dépôt actuel : « irlande 21000vin7 », tel que saisi par l'utilisatrice). Le site s'affiche correctement avec son design sur GitHub Pages.

## 2. Décisions validées

- **Dates bloquées : dimanche 11 → vendredi 16 avril 2027** (vacances de printemps Zone C, 3 → 19 avril).
- **8 voyageurs** (la 2e nièce de 19 ans ne vient pas : sujet clos).
  - Famille N°1 : l'utilisatrice, son conjoint, 2 enfants (6 ans et 2 ans½).
  - Famille N°2 : frère 1, sa femme, leur fille (16 ans), frère 2.
- **Vols** (Aer Lingus, <https://www.aerlingus.com/fr-fr/>, attention aux faux sites surtaxés) : départ groupé Toulouse. Aller 11/04 13h50 → Dublin 15h10 ; retour 16/04 Dublin 09h55 → Toulouse 13h10. **Réservation ouverte, rien de réservé.** Fourchette observée : ~48 à 150 € l'A/R par personne (indicatif).
- **Logistique** : 2 voitures de location à Dublin (une par famille, conduite à gauche) ; parking Toulouse P6, 2 voitures, 65 €/voiture = 130 € (6 jours).
- **Logements** : Belfast 4 nuits (11 → 15), Dublin 1 nuit (15), de préférence près de l'aéroport. **Formule Belfast non décidée** : une grande maison pour tous OU deux logements côte à côte.
- **Feuille de route** : dim. 11 vol + route Belfast (~2h) ; lun. 12 Titanic Belfast « expérience totale » ; mar. 13 Causeway Coast ; mer. 14 journée libre ; jeu. 15 route vers Dublin + nuit ; ven. 16 vol retour.
- Pistes de visites (hors Titanic) : W5, Black Taxi Tour, Dunluce, Dark Hedges, Ballintoy, Carnfunnock, Derry, Carrick-a-Rede (âge minimum enfants à vérifier).
- Écartés : arrivée Belfast avec escale ; deux logements à Belfast écarté à un moment au profit d'un seul (la question est rouverte, voir ci-dessus) ; départ de Barcelone pour la famille 2 ; connecteurs.

## 2 bis. Événements sur place (vérifiés le 22/11/2026, 11 → 16 avril 2027)

- **Great Ireland Run : dimanche 11 avril 2027, Phoenix Park, Dublin** (confirmé sur le site officiel de la course). Départ le matin (9h, d'après l'utilisatrice ; 9h00 en 2026) : terminée à l'atterrissage (15h10). Aucun impact.
- **Dublin 15-16 avril** : aucun grand concert/match/salon repéré. (Concerts 3Arena autour : 7 avril Sabaton, 8 avril Teddy Swims, 19-20 avril Gracie Abrams : hors dates.)
- **Belfast et alentours 11-16 avril** : rien de gênant repéré. Autour : trail Endurancelife Giant's Causeway à Portrush le sam. 10 avril (la veille de l'arrivée) ; congrès de neurosciences (BNA2027) à l'ICC Belfast du 25 au 28 avril (après le départ) ; Belfast City Marathon début mai (après).
- Giant's Causeway : pré-réservation fortement conseillée (National Trust) ; Carrick-a-Rede : billets à créneaux horaires (réservation en ligne ; horaires d'avril 2027 non publiés).
- **Limite** : les programmes de printemps 2027 (festivals, concerts) ne sont pas tous publiés. **À revérifier en mars 2027.**

## 3. Administratif

- Passeport obligatoire pour tous, enfants compris (CNI refusée au Royaume-Uni depuis 2021).
- ETA obligatoire pour tous (~23 €/pers., ~184 € pour 8) — **liée au numéro de passeport : la demander une fois les nouveaux passeports en main.** <https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta>
- **Passeports famille N°1** : renouvellement **lancé, à récupérer** (1 adulte 86 € + 2 enfants 17 € × 2 = 120 €). **Famille N°2 : à vérifier / lancer.**
- Livre sterling ; pas de vaccin obligatoire ; CEAM non valable au Royaume-Uni → assurance voyage conseillée ; permis français valable, conduite à gauche.
- Autorisation de sortie du territoire inutile (nièce de 16 ans avec sa mère).

## 4. Budget connu

Parking 130 € ; Titanic ~£150 (tarifs 2026 à reconfirmer : adulte dès £24,95, enfant 5-15 ans dès £11, gratuit < 5 ans, billet famille dès £62) ; passeports famille 1 : 120 € ; ETA ~184 € ; vols, voitures, logements : à chiffrer (logement : Belfast 150-350 €/nuit grande maison, Dublin 150-210 €/nuit).

**Modèle du budget (`budget.html`, depuis `?v=3`)** : chaque ligne de `LIGNES` = `cat`, `poste`, `unite`, `prix` (null si inconnu), `devise` (EUR/GBP), `q1`/`q2` (quantité famille 1 / famille 2 ; 0.5 + 0.5 = coût partagé moitié-moitié), `statut` (`reserve`, `estime`, `a_chiffrer`, `hypothese` = affiché mais non compté). Taux `TAUX_LIVRE` = 1,15 (indicatif). Pour mettre à jour un tarif : modifier `prix` (et `statut`) de la ligne concernée. Total « à ce jour » = lignes chiffrées ; les lignes « À chiffrer » sont listées comme manquantes (total partiel). À ce jour : F1 ≈ 348 €, F2 ≈ 272 €, total ≈ 620 €, dont 120 € payés ; non compté : passeports F2 (hypothèse, ≈ 300 €).
Hypothèses posées par Claude (à corriger si besoin) : une voiture + un parking par famille ; logements et vols répartis par famille (logements 50/50) ; Titanic : famille 1 = billet famille £62, famille 2 = 4 × £24,95 (nièce de 16 ans = tarif adulte) ; passeports famille 1 considérés comme payés (demande lancée) ; passeport ado 16 ans à 42 € (à confirmer) ; lignes ajoutées « Assurance voyage » et « Repas, carburant, divers » (à chiffrer).

**Budget partagé (depuis `?v=5`)** : la **source de vérité est la base Firebase** (document `budget`) : `data` = `{ <id de ligne>: { prix, statut }, _taux }`. Les valeurs de `LIGNES` ne sont que les **valeurs d'origine** : si on modifie `prix` dans le fichier, une valeur déjà saisie en ligne pour cette ligne la masque. Pour changer un tarif : le faire sur le site (mode « Modifier »). Pour ajouter/supprimer une ligne : modifier `LIGNES` (ne jamais changer un `id` existant). Saisir un prix passe le statut de « À chiffrer » à « Estimé » ; vider le prix remet « À chiffrer ».

## 5. État technique

**Stack** : HTML/CSS/JS statique, sans backend, GitHub Pages. **Design « Chaussée des Géants »** : basalte `#14181C`, ardoise `#2A3339`, vert mer `#4C7A73`, brume `#EDEDE6`, ambre `#E0A458`, pierre `#8B9A96` ; Fraunces (titres), Work Sans (texte), JetBrains Mono (tarifs) ; motif colonnes hexagonales.

**Dernier `?v=` : 13** (prochaine livraison : `?v=14`). Le nettoyage (§6 bis) est terminé : chaque page livrée est passée au `?v=` courant du moment ; les pages ne sont donc pas toutes au même `?v=` (CSS et JS inchangés : sans risque). État : `index.html` en `?v=8`, `feuille-de-route.html` en `?v=9`, `logements.html` en `?v=10`, `visites.html` en `?v=11`, `budget.html` en `?v=12`, `suivi.html` en `?v=13` (CSS, `partage.js`, `cartes.js` selon les pages) ; `administratif.html` en `?v=7`.

**Structure du dépôt** : 7 pages HTML + `partage.js` + `cartes.js` à la racine (à plat, pas de dossier) + `css/style.css`.

| Fichier | État |
|---|---|
| `index.html` | **Nettoyé (`?v=8`)** : sous-titre, mentions « Confirmé » et bloc du bas supprimés ; cartes « Où en est-on » et libellé « Départ groupé de Toulouse » conservés |
| `feuille-de-route.html` | **Nettoyé (`?v=9`), étapes et cartes d'info modifiables** : sous-titre et les 2 cartes d'info d'origine (vacances, événements) supprimés ; 6 jours fixes (dim. 11 → ven. 16) ; chaque jour = plusieurs étapes ; champs jour, titre, horaire/lieu, détails, lien + texte du lien, note en petit, statut (rien à réserver / à réserver / réservé) ; le bouton « + Ajouter une carte d'info » reste disponible en mode « Modifier » ; ajout / modification / suppression en mode « Modifier » ; document `feuille` ; le contenu d'origine (6 étapes) est dans `ORIGINE` |
| `logements.html` | **Nettoyé (`?v=10`), cartes modifiables** : sous-titre et textes d'introduction sous Belfast / Dublin supprimés (restent les dates et le nombre de nuits) ; 2 étapes (Belfast, Dublin) ; champs nom, étape, lieu, lien, tarif total (€), statut (À l'étude / Retenu / Réservé), capacité et équipements, note ; ajout / modification / suppression en mode « Modifier » ; document `logements` ; aucune annonce encore ; message « Aucune proposition pour l'instant » et aides du formulaire gardés |
| `visites.html` | **Nettoyé (`?v=11`), cartes modifiables** : sous-titre et descriptif du bloc « Autres visites à venir » supprimés (le titre du bloc reste) ; carte d'origine Titanic (id `titanic`, modifiable ou supprimable) gardée en entier avec ses étiquettes ; champs nom, lieu, lien, durée, convient aux enfants, réservation, tarifs adulte / enfant (texte libre), description ; document `visites` |
| `administratif.html` | À jour (statut passeports, ordre passeport → ETA) ; nettoyage §6 bis : tout gardé, aucun changement (`?v=7`) |
| `budget.html` | **Nettoyé (`?v=12`), budget automatique et modifiable en ligne** : chaque ligne de `LIGNES` a un `id` ; en mode « Modifier » (code familial) : champ tarif + menu statut par ligne + taux £→€ ; enregistrement dans la base (document `budget`) ; les visiteurs voient les tarifs à jour en lecture seule ; base injoignable → valeurs d'origine de `LIGNES`. **Depuis `?v=6` : les lignes « Logement Belfast / Dublin » sont alimentées par la page Logements** (voir §5 ter) **Nettoyage : sous-titre, notes en petit, lignes de détail (champs `detail` et `note` retirés de `LIGNES`), messages sous les chiffres (sauf la conversion £→€) et bloc « Démarches officielles » supprimés ; le calcul « tarif × quantité » sous chaque poste, les 3 postes ajoutés (assurance, dépenses sur place, passeports F2 en hypothèse) et le lien Aer Lingus sont gardés.** |
| `suivi.html` | **Nettoyé (`?v=13`)** : 16 tâches, **titres seulement** (sous-titre et descriptions supprimés ; le champ `desc` n'existe plus dans `TASKS`). **Cases partagées via Firebase** (document `suivi`) : lecture pour tous, cocher réservé à qui a saisi le code familial (bouton « Modifier » en bas à droite) ; mise à jour en direct ; si la base est injoignable, retour au mode « cet appareil seulement » (localStorage) avec message |
| `partage.js` | Inchangé depuis `?v=4` (importé avec `?v=7`) : connexion Firebase (chargée à la demande depuis gstatic, SDK 10.12.2), `ecouter` / `fusionner`, code familial (empreinte SHA-256, insensible à la casse), barre « Modifier » réutilisable par les autres pages |
| `cartes.js` | Inchangé depuis `?v=6` (importé avec `?v=7`) : fenêtre de formulaire réutilisable (ajout / modification / suppression), `nouvelId`, `lireMontant` ; chargé à la demande par logements, visites et feuille de route |
| `css/style.css` | Inchangé, pas de `?v=` à lui-même (le `?v=` est dans le lien de chaque page) |

## 5 bis. Partage en ligne (Firebase) et code familial

- **Projet Firebase** : `voyage-irlande` (Firestore, Europe). La configuration web (`firebaseConfig`) est dans `partage.js` : elle n'est pas secrète, la protection vient des règles.
- **Modèle de données** : collection `voyage`, documents `suivi`, `budget`, `logements`, `visites`, `feuille` ; chaque document = `{ data: {...}, maj: "date ISO" }`. Écriture par fusion (`setDoc … {merge:true}`) pour que deux personnes puissent modifier en même temps.
- **Règles Firestore publiées** (à recoller si le projet est recréé) :
  `match /voyage/{doc} { allow read: if true; allow write: if doc in ['suivi','budget','logements','visites','feuille'] && request.resource.data.keys().hasOnly(['data','maj']); }`
- **Code familial** : choisi par l'utilisatrice, **non écrit ici ni dans le site** (seule l'empreinte SHA-256 est dans `partage.js`) ; insensible aux majuscules/espaces. Il décourage les curieux mais ne remplace pas un vrai mot de passe : dépôt public + règles ouvertes en écriture sur ces 5 documents. **Ne jamais y stocker d'information sensible** (numéros de passeport, identifiants). Pour changer le code : redemander à Claude de recalculer l'empreinte.
- Une page modifiable doit : afficher d'abord son contenu local, puis charger `partage.js` par `import()` dans un `try/catch` (la page reste utilisable sans la base).
- Pas de navigateur dans l'espace de travail : tests faits avec une base simulée (jsdom) ; la connexion réelle à Firebase ne peut être vérifiée qu'en ligne par l'utilisatrice.

## 5 ter. Cartes modifiables (Logements, Visites) et lien avec le Budget

- **Données** : documents `logements` et `visites` ; `data` = `{ <id de carte>: { champs…, cree }, … }`. **`null` = carte supprimée** (une fusion Firestore ne peut pas retirer un champ : on écrit `null`). `cree` = ordre d'affichage. Les cartes d'origine (`ORIGINE` dans la page, ex. `titanic`) sont les valeurs de départ : les modifications de la base les masquent, comme pour le budget.
- **Sécurité des textes** : tout texte saisi est échappé à l'affichage ; les liens ne sont acceptés que s'ils commencent par `http(s)://`.
- **Logements → Budget** : les lignes `logement_belfast` et `logement_dublin` = **somme des tarifs des cartes « Retenu » ou « Réservé »** de l'étape (statut « Payé / réservé » si toutes sont réservées, sinon « Estimé »). Les cartes « À l'étude » et celles sans tarif sont ignorées. Quand une ligne est alimentée, elle n'est plus modifiable à la main sur le Budget ; sinon le tarif saisi à la main s'applique.
- Les pages restent utilisables sans `cartes.js` (cartes affichées, modification désactivée avec un message).

## 5 quater. Feuille de route modifiable

- **Données** : document `feuille` ; `data` = `{ <id de carte>: { jour, titre, meta, details, lien, lien_texte, note, statut, cree }, … }` ; `jour` = `info` (cartes d'info en haut) ou `j11` … `j16` (les 6 jours, définis dans `JOURS` : fixes, non modifiables en ligne) ; `statut` = `aucun` / `a_reserver` / `reserve` ; **`null` = carte supprimée** ; `cree` = ordre d'affichage dans le jour.
- **Cartes d'origine** (`ORIGINE` dans la page) : `vol_aller`, `titanic`, `causeway`, `libre`, `route_dublin`, `vol_retour`. Les modifications de la base les masquent, comme pour le budget. Les anciennes cartes d'info `vacances` et `evenements` ont été retirées de la page (nettoyage §6 bis) ; la recherche d'événements est conservée au §2 bis.
- **Texte** : échappé à l'affichage ; une ligne vide = nouveau paragraphe, `**mot**` = gras ; liens acceptés seulement en `http(s)://`.
- Changer un jour de date ou ajouter un jour = modifier `JOURS` dans la page (pas modifiable en ligne).

## 6. Plan validé « étape par étape »

1. ✅ **Étape 1 : mise à jour du contenu** (livrée en `?v=1`, complétée en `?v=2` : carte « Jours fériés de mai » supprimée, événements vérifiés et ajoutés).
2. ✅ **Étape 2 : budget qui se calcule tout seul** (livrée en `?v=3`) — chiffres rangés dans `LIGNES` (`budget.html`), totaux global, par famille et par personne automatiques.
3. ⏳ **Étape 3 : modification directement sur le site + partage entre appareils et avec la famille 2** (Firebase Firestore gratuit, code familial). Livraison en 4 morceaux, tous les contenus devant être modifiables :
   - **3a ✅ (livré en `?v=4`)** : base Firebase + `partage.js` + code familial + **suivi partagé**. Validé en conditions réelles par l'utilisatrice (le suivi partagé fonctionne).
   - **3b ✅ (livré en `?v=5`)** : budget modifiable en ligne (tarifs, statuts et taux ; document `budget`). Validé en conditions réelles par l'utilisatrice.
   - **3c ✅ (livré en `?v=6`)** : cartes Logements et Visites modifiables (documents `logements`, `visites`) + lien automatique Logements → Budget. Reste à **valider en conditions réelles** (voir §7).
   - **3d ✅ (livré en `?v=7`)** : feuille de route modifiable (document `feuille`). Reste à **valider en conditions réelles** (voir §7). L'étape 3 est terminée une fois 3c et 3d validés.

## 6 bis. Nettoyage des textes parasites (en cours, demandé le 25/11/2026)

- **Pourquoi** : des textes ont été ajoutés sans consulter l'utilisatrice. On les retire **page par page**, dans l'ordre du menu : Accueil → Feuille de route → Logements → Visites → Administratif → Budget → Suivi. Une page par livraison. Pour chaque page : lister les textes ajoutés, l'utilisatrice dit « supprimer » ou « garder », puis code. Quand un bloc est supprimé, on retire aussi sa place (pas de trou).
- **Décisions** : le **pied de page** (« Site privé — lien non référencé… ») est **gardé sur toutes les pages**. Plus tard (second temps) : rendre modifiables les champs des cartes de l'Accueil (familles, etc.).
- **Accueil ✅ (`?v=8`)** : supprimés : sous-titre sous le titre, mentions « Confirmé », bloc « Feuille de route en place ». Gardés : carte « Où en est-on » (avec « Prochaine étape » et le lien vers le suivi), libellé « Départ groupé de Toulouse ». Petit espace (32 px) laissé sous le titre.
- **Feuille de route ✅ (`?v=9`)** : supprimés : sous-titre « Le planning complet… », cartes d'info « Vacances scolaires — Zone C » et « À savoir sur place… ». Gardés : toutes les notes en petit et tous les détails des étapes. La ligne d'état (« ● Feuille de route partagée… ») a été recalée sous le titre (le sous-titre supprimé la tirait vers le haut). À vérifier avec l'utilisatrice : le texte « Rien de prévu pour l'instant. » affiché pour un jour vide.
- **Logements ✅ (`?v=10`)** : supprimés : sous-titre « Les propositions de logement… », textes d'introduction sous Belfast (« Pour 8 personnes… ») et Dublin (« Proche de l'aéroport… ») ; restent les dates et le nombre de nuits. Gardés : message « Aucune proposition pour l'instant » (et ses phrases d'aide), textes d'aide du formulaire. Ligne d'état recalée sous le titre.
- **Visites ✅ (`?v=11`)** : supprimés : sous-titre « Sites, activités et excursions… », descriptif « D'autres propositions arriveront… » du bloc du bas. Gardés : toute la carte Titanic (description, calcul pour le groupe, tarifs, horaires), étiquettes « Convient aux enfants » / « Réservation conseillée », titre « Autres visites à venir ». Ligne d'état recalée sous le titre.
- **Administratif ✅ (sans changement, décision du 27/11/2026)** : l'utilisatrice garde tout (sous-titre, 6 cartes, paragraphes en gris, liens officiels). La page reste en `?v=7`.
- **Budget ✅ (`?v=12`)** : supprimés : sous-titre « Les totaux… se calculent tout seuls », les 8 notes en petit sous les postes, les lignes grises de détail (champ `detail`), les messages « Total partiel », « Non compté (hypothèse) » et « Dont déjà payé », le bloc « Démarches officielles » (déjà présent dans Administratif). Gardés : les 3 postes ajoutés par Claude (assurance, repas/carburant/divers, passeports F2 en hypothèse), la ligne de conversion des livres en euros, le lien Aer Lingus, le calcul « tarif × quantité » affiché sous chaque poste (à confirmer avec l'utilisatrice). Petit espace (32 px) laissé sous le titre.
- **Suivi ✅ (`?v=13`)** : supprimés : sous-titre « Les étapes à réaliser dans l'ordre… » et les descriptions grises des 16 tâches (les titres restent). Gardé : message d'état « ● Partagé avec la famille… ». Petit espace (32 px) laissé sous le titre. Les cases déjà cochées en base ne sont pas touchées (clés `id` inchangées).
- **Nettoyage terminé : les 7 pages ont été passées en revue.** Reste à voir : (1) le texte « Rien de prévu pour l'instant. » de la feuille de route (supprimer ou garder ?) ; (2) le petit calcul « tarif × quantité » sous chaque poste du budget (gardé, à confirmer) ; (3) second temps : rendre modifiables les champs des cartes de l'Accueil (familles, etc.).

## 7. Points à valider / à faire (voyage)

- **Test réel des cartes (3c)** : après dépôt (penser à `cartes.js`), ouvrir `logements.html` ; « Modifier » + code ; ajouter un logement (étape Belfast, tarif, statut « Retenu ») → il apparaît ; ouvrir `budget.html` : la ligne « Logement Belfast » reprend ce tarif (mention « Alimenté par la page Logements ») ; repasser le statut en « À l'étude » → la ligne redevient à chiffrer. Sur `visites.html` : modifier la carte Titanic, ajouter une visite. Vérifier sur un 2e appareil. Message d'erreur possible : `permission-denied` = règles Firestore à revoir.
- **Test réel de la feuille de route (3d)** : après dépôt, ouvrir `feuille-de-route.html` ; « Modifier » + code ; ajouter une étape un jour donné (ex. mercredi) avec un lien et le statut « À réserver » → elle apparaît avec son étiquette ; modifier la carte « Vol Toulouse → Dublin » (la déplacer vers un autre jour puis la remettre) ; modifier une carte d'info en haut ; vérifier sur un 2e appareil. Message d'erreur possible : `permission-denied` = règles Firestore à revoir.

- Revérifier les événements à Dublin / Belfast / Causeway Coast en mars 2027 (programmes de printemps).
- Vérifier l'âge minimum et les horaires d'avril 2027 de Carrick-a-Rede si la visite est envisagée.
- Rien de réservé : vols, parking P6, 2 voitures Dublin, logements Belfast + Dublin, billets Titanic (haute saison scolaire, reconfirmer les tarifs 2027), assurance voyage.
- Passeports famille 2 ; récupérer ceux de la famille 1 ; puis ETA pour 8.
- Préparer mer. 14 (journée libre) et la visite de Dublin le 15 si souhaité.
- Renseigner les tarifs manquants dans `LIGNES` (vols, voitures, logements, assurance, dépenses sur place) au fur et à mesure ; ajuster le taux £→€ ; valider les hypothèses ci-dessus.
