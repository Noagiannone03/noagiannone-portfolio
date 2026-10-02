# Refonte du bureau et contenu

## Références visuelles consultées

Les interfaces sont implémentées dans le projet en HTML, CSS et JavaScript. Les captures de référence ne sont pas utilisées comme interfaces.

- Finder, Mail, Safari et Réglages : guides et captures Apple, https://support.apple.com/guide/mac-help/welcome/mac et https://support.apple.com/guide/mail/welcome/mac.
- Safari : https://support.apple.com/guide/safari/welcome/mac.
- Word pour Mac : ruban, barre de titre et document inspirés du guide Microsoft https://download.microsoft.com/download/6/3/4/634e576c-136a-4638-b750-2f9d1b90a573/Word%20for%20MAC%20Quick%20Start%20Guide.pdf.
- VS Code : https://code.visualstudio.com/docs/editing/getting-started/userinterface.
- Terminal interactif : https://github.com/firasel/Terminal-Portfolio et https://www.wesdieleman.com/terminal, pour les conventions de navigation dans un portfolio.

## Icônes

Les symboles Apple ont été exportés depuis AppKit sur macOS et les dossiers depuis les ressources système. Voir `icon/apple/README.md`. Les icônes VS Code sont les Codicons officiels, avec attribution et licence dans `icon/codicons/`.

## Contenu

`javascript/portfolio-data.js` centralise les compétences, expériences et projets utilisés par Finder, Word, VS Code, Safari, Notes et Terminal. Le CV original fourni par Noa est conservé dans `documents/CV-Noa-Giannone.pdf`. Son aperçu PNG est un rendu fidèle de ce PDF, utilisé dans Safari. Ne pas régénérer le CV depuis les données du portfolio.

Les réalisations personnelles sont décrites à partir des informations fournies par Noa. Contexte des structures consulté sur https://www.aircarto.fr/, https://wiki.aircarto.fr/moduleair-wifi/, https://www.noidlab.com/, https://lafetecestnous.com/ et https://www.conciergerielavoisine.fr/.

La présentation de Vago tient compte de sa documentation produit locale : projet en développement, récompenses destinées à aider à financer du carburant, sans promesse d’un plein complet garanti.

Dates précises chez AirCarto et NO/ID Lab, nom du lieu à La Seyne-sur-Mer et nom de la solution d’accès distant restent à préciser. Aucun de ces détails n’a été inventé.

## Périmètre des interactions

Le Terminal exécute des commandes dans un système de fichiers virtuel consacré au portfolio. Il n’accède pas au shell de la machine. Mail conserve les brouillons et messages envoyés pendant la visite ; l’envoi utilise le formulaire de contact existant. Les réglages modifient le bureau web. Word permet l’édition et l’export HTML des présentations.

## Passage en mode sombre

Références supplémentaires : [clone macOS Big Sur d’aarxa](https://github.com/aarxa/macos-clone), [apparence sombre Apple](https://support.apple.com/en-gb/guide/mac-help/mchl52e1c2d2/mac), [profils Terminal Apple](https://support.apple.com/guide/terminal/change-profiles-text-settings-trmltxt/mac). Captures consultées : [rédaction Mail](https://buildship.com/support), [Centre de contrôle](https://www.imobie.com/screen-mirror/how-to-airplay-on-mac.htm). Implémentation originale dans `Css/macos-dark.css` et `javascript/macos-polish.js`.

Ollama ajouté d’après les précisions de Noa ; [documentation Modelfile](https://docs.ollama.com/modelfile) consultée pour distinguer configuration et entraînement. Aucun nom de modèle ni framework d’entraînement non fourni n’est présenté comme une compétence acquise.

## Présentations éditoriales des projets

Les dossiers racontent l’intention, l’expérience proposée, la contribution de Noa et les ambitions. Les détails techniques internes ne sont pas reproduits. Les PDFs de présentation se trouvent dans `documents/projects/` et reflètent le contenu au moment de leur génération.

Sources consultées : documentation locale `Vago-app/docs/PRODUCT_VISION.md`, documentation de la plateforme FORNAP (`SYSTEM_OVERVIEW.md`, `WEB_STACK.md`), sites publics https://fornap.fr/, https://fortnapoleon.com/, https://aircarto.fr/cyan-sensor/, https://lafetecestnous.com/ et https://www.conciergerielavoisine.fr/.

Visuels : captures de développement Vago (catalogues de démonstration explicitement légendés), capture du projet FORNAP datée de juin 2026, visuels officiels Cyan Sensor publiés par AirCarto, captures des sites publics La Fête c’est Nous et Lavoisine. Les droits des illustrations et identités restent à leurs auteurs respectifs. Le site institutionnel du Fort n’est pas présenté comme une création de Noa.

Référence supplémentaire pour la hiérarchie des surfaces sombres de Réglages : https://512pixels.net/projects/aqua-screenshot-library/macos-13-ventura/. Word conserve une apparence claire indépendante du bureau sombre.


## Adaptation mobile et CV original

Le PDF fourni le 2 octobre 2026 remplace le PDF reconstruit. Safari affiche sur tous les écrans un aperçu issu directement du document, avec accès au PDF original pour le zoom, la lecture accessible et le téléchargement. Cela évite de dépendre des lecteurs PDF intégrés, dont le rendu dans un objet HTML varie selon le navigateur. L’ancien HTML imprimable reste une archive et n’est pas utilisé par l’interface.

Le dock masque les utilitaires dès 900 px, puis Word et Réglages sous 600 px ; les applications restent disponibles dans Launchpad. Les fenêtres occupent la zone entre la barre de menus et le dock sous 760 px, ainsi qu’en paysage tactile de faible hauteur. Les colonnes secondaires deviennent des navigations horizontales ; les projets s’ouvrent au simple toucher. Les champs conservent une taille de texte de 16 px sur mobile.

Références : [responsive basé sur le contenu, web.dev](https://web.dev/articles/responsive-web-design-basics), [zones sûres sur iPhone, WebKit](https://webkit.org/blog/7929/designing-websites-for-iphone-x/).

Pour actualiser l’aperçu après remplacement du PDF : `pdftoppm -singlefile -scale-to 2000 -png documents/CV-Noa-Giannone.pdf documents/CV-Noa-Giannone-preview` (CV actuel : une page).

Validation du 2 octobre 2026 : contrôles Playwright dans WebKit et Chromium aux formats 320×568, 360×640, 390×844, 430×932, 600×800, 768×1024, 900×700, 844×390 et 1440×900. Aucun débordement du dock, des fenêtres ni de leurs lecteurs principaux ; ouverture tactile d’un projet, outils Word, réduction/restauration via Launchpad, aperçu et téléchargement du CV, saisie Mail sans envoi et transition bureau plein écran → mobile → bureau vérifiés. Contrôle visuel des captures et syntaxe JavaScript validés. Le PDF copié et téléchargé est identique octet pour octet à l’original. Vérifications en émulation, sans test sur un iPhone physique.
