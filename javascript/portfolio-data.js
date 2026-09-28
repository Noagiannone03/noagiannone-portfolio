window.Portfolio = {
  "projects": [
    {
      "id": "vago",
      "name": "Vago",
      "title": "Vago.docx",
      "category": "Application mobile",
      "summary": "Application mobile de micro-tasking qui transforme le temps passé sur smartphone en cartes cadeaux carburant.",
      "folder": "DeveloperFolderIcon",
      "color": "#2d7683",
      "content": "<section class=\"editor-section\"><h4>Le problème</h4><p>Le carburant pèse de plus en plus lourd dans le budget des ménages, et beaucoup de gens ne peuvent pas se passer de leur voiture pour travailler, étudier ou voir leurs proches. Des applications récompensent déjà le temps passé sur mobile, mais elles paient en points ou en bons d’achat rarement utiles au quotidien. Avec Vago, je voulais que ce temps serve à financer une dépense bien réelle : le plein.</p></section><section class=\"editor-section\"><h4>La solution</h4><p>Vago est une application de micro-tasking. L’utilisateur joue à des parties courtes et réalise de petites tâches, comme des sondages ou des offres partenaires, qui lui rapportent des litres virtuels. Ces litres alimentent une cagnotte, échangeable contre des cadeaux, dont une carte cadeau carburant.</p><p>Les récompenses sont financées par les revenus que génère l’activité des joueurs : publicité, vidéos récompensées facultatives et partenaires. Une partie de ces revenus est reversée aux joueurs.</p></section><section class=\"editor-section\"><h4>Le gameplay</h4><p>Les joueurs sont regroupés par rooms d’une dizaine de personnes sur une carte partagée. Chaque station de la carte contient une réserve limitée de litres. Le joueur choisit une cible, lance une mission, puis doit réussir un mini-jeu pour collecter du carburant. Les réserves étant communes, chaque collecte réduit ce qui reste pour les autres : cela crée de la compétition et, surtout, cela plafonne le volume de récompenses distribuées.</p></section><section class=\"editor-section\"><h4>Ce que j’ai réalisé</h4><p>Je développe le projet seul, de la conception au déploiement : l’application mobile en React Native avec Expo, les mini-jeux dessinés avec Skia, le serveur temps réel qui gère les rooms et les missions, l’intégration des SDK de sondages partenaires, et un back-office pour piloter le catalogue de cadeaux, la difficulté des mini-jeux et l’économie du jeu.</p></section><section class=\"editor-section\"><h4>Les défis techniques</h4><p>Le principal enjeu est la fiabilité de l’économie. Comme les litres se convertissent en cadeaux réels, aucun crédit ne doit pouvoir être falsifié depuis l’application. J’ai donc placé toutes les opérations sensibles côté serveur : attribution des litres, mise à jour des réserves partagées et débits de la cagnotte. Les retours des partenaires de sondages passent par un adaptateur serveur qui vérifie leur signature avant tout crédit.</p><p>L’autre défi est le temps réel. Plusieurs joueurs visent les mêmes stations au même moment, et l’état de la carte doit rester cohérent pour tout le monde. J’utilise Colyseus pour synchroniser les rooms, avec Redis pour le matchmaking et la présence des joueurs.</p></section><section class=\"editor-section\"><h4>Stack</h4><p>React Native, Expo, TypeScript, Skia, Node.js, Colyseus, Redis, Firebase (Firestore, Auth), Docker sur un VPS.</p></section><section class=\"editor-section\"><h4>Aujourd’hui</h4><p>La boucle de jeu, la carte partagée, la cagnotte et le back-office sont en place. Les prochaines étapes : finaliser les partenariats publicitaires, intégrer de nouveaux mini-jeux et lancer des tests sur de vrais appareils.</p></section>",
      "role": "Projet personnel · conception, développement mobile et serveur",
      "status": "En développement",
      "quote": "",
      "images": [
        {
          "src": "images/projects/vago-cadeaux.png",
          "caption": "Écran Cadeaux — version de développement. Les seuils illustrés sont des exemples."
        },
        {
          "src": "images/projects/vago-bonus.png",
          "caption": "Écran Bonus — catalogue de démonstration, offres partenaires en cours de préparation."
        }
      ],
      "links": []
    },
    {
      "id": "cyan",
      "name": "Cyan Sensor",
      "title": "Cyan Sensor.docx",
      "category": "Application IoT",
      "summary": "Application mobile de configuration et de suivi de capteurs de qualité de l’air, conçue pour les micro-capteurs open source d’AirCarto.",
      "folder": "DeveloperFolderIcon",
      "color": "#287d89",
      "content": "<section class=\"editor-section\"><h4>Le contexte</h4><p>AirCarto, à Marseille, conçoit des micro-capteurs open source qui mesurent la qualité de l’air, notamment les ModuleAir et les NebuleAir. Pour être utiles, ces capteurs doivent pouvoir s’installer facilement et leurs mesures doivent être compréhensibles par tous. Cyan Sensor fait le lien entre le capteur et son utilisateur.</p></section><section class=\"editor-section\"><h4>Ce que fait l’application</h4><p>L’utilisateur retrouve ses capteurs sur un tableau de bord composé de widgets, qu’il peut réorganiser et afficher en petit ou en grand format. Chaque capteur dispose d’une page détaillée avec ses dernières mesures, son état et des graphiques d’historique.</p><p>L’installation se fait en Bluetooth : l’application guide la connexion du capteur au Wi-Fi, puis permet de régler ses sondes et son affichage. Un système de signalement permet aussi d’expliquer un pic observé dans les mesures.</p></section><section class=\"editor-section\"><h4>Mon rôle</h4><p>Sur ce projet, j’interviens sur toute la chaîne, du capteur à l’écran : l’application mobile, les firmwares C++ des capteurs sur ESP32, les outils de gestion de parc pour les mises à jour et la configuration à distance, la collecte et le stockage des mesures, ainsi qu’une partie de l’infrastructure réseau et des serveurs auto-hébergés (OPNsense, accès distant).</p><p>Je n’avais jamais écrit de firmware avant ce poste. Je me suis formé sur le terrain, en partant des besoins concrets de l’application.</p></section><section class=\"editor-section\"><h4>Stack</h4><p>React Native, Expo Router, TypeScript, Bluetooth Low Energy, API PHP, C++ sur ESP32.</p></section>",
      "url": "https://aircarto.fr/cyan-sensor/",
      "role": "Application mobile, firmware et outils de gestion",
      "status": "Application et écosystème de capteurs",
      "quote": "",
      "images": [
        {
          "src": "images/projects/cyan-dashboard.webp",
          "caption": "Tableau de bord Cyan Sensor — visuel officiel AirCarto."
        },
        {
          "src": "images/projects/cyan-bluetooth.webp",
          "caption": "Configuration Bluetooth — visuel officiel AirCarto."
        }
      ],
      "links": [
        {
          "label": "Découvrir Cyan Sensor",
          "url": "https://aircarto.fr/cyan-sensor/"
        },
        {
          "label": "Découvrir AirCarto",
          "url": "https://aircarto.fr/"
        }
      ]
    },
    {
      "id": "whisp",
      "name": "Whisp",
      "title": "Whisp.docx",
      "category": "Application mobile",
      "summary": "Application mobile de chat de proximité pour aider les étudiants d’un même campus à se rencontrer.",
      "folder": "GroupFolder",
      "color": "#725495",
      "content": "<section class=\"editor-section\"><h4>Le problème</h4><p>Sur un grand campus, on croise des centaines de personnes chaque jour sans forcément leur parler. Les amphis sont immenses, les emplois du temps changent d’un groupe à l’autre, et beaucoup d’étudiants ont du mal à créer des liens, surtout en début d’année.</p></section><section class=\"editor-section\"><h4>La solution</h4><p>Whisp permet de discuter avec les étudiants qui se trouvent à proximité sur le campus. La conversation peut partir d’une question sur un cours, d’un document à partager ou d’une proposition pour déjeuner ou réviser ensemble. Comme les échanges se font entre personnes qui fréquentent les mêmes lieux, une conversation en ligne peut facilement se prolonger en vrai.</p></section><section class=\"editor-section\"><h4>Mon rôle</h4><p>J’ai conçu et développé l’application de bout en bout : le concept, les parcours, les interfaces et le développement mobile. Le principal défi était de rendre le premier contact simple et rassurant, pour que l’application donne envie d’aller vers les autres plutôt que de rester derrière l’écran.</p></section>",
      "role": "Projet personnel · conception et développement mobile",
      "status": "Projet étudiant",
      "quote": "",
      "images": [],
      "links": []
    },
    {
      "id": "lieux",
      "name": "FORNAP",
      "title": "FORNAP.docx",
      "category": "Plateforme métier",
      "summary": "Site public, billetterie et back-office du FORNAP, tiers-lieu culturel installé au Fort Napoléon, à La Seyne-sur-Mer.",
      "folder": "SitesFolderIcon",
      "color": "#886743",
      "content": "<section class=\"editor-section\"><h4>Le projet</h4><p>Le FORNAP est un tiers-lieu culturel porté par l’association NO/ID dans le Fort Napoléon, à La Seyne-sur-Mer. On y organise des concerts, des ateliers, des marchés et des expositions, avec une communauté d’adhérents et de bénévoles. L’association avait besoin d’une plateforme unique pour deux publics : les visiteurs, qui découvrent la programmation et achètent leurs billets, et l’équipe, qui gère le lieu au quotidien.</p></section><section class=\"editor-section\"><h4>Le site public</h4><p>J’ai développé tout le front public : l’agenda des événements, la billetterie avec des billets à QR code, la création de compte, le parcours d’adhésion (compte touriste ou résident), la boutique, le programme de fidélité et l’espace membre avec l’historique des achats. J’ai aussi intégré les pages de présentation du lieu, de l’équipe et de l’appel aux dons.</p></section><section class=\"editor-section\"><h4>Le back-office</h4><p>Pour l’équipe, je développe un back-office qui centralise la gestion des événements et des plannings, des utilisateurs et des adhésions, des commandes, des exposants et des intervenants. Il comprend un scanner de billets pour le contrôle à l’entrée, un outil de support, l’envoi de campagnes d’e-mails, un tableau de tâches Kanban pour organiser l’équipe et un éditeur qui permet de modifier le contenu du site sans passer par le code.</p></section><section class=\"editor-section\"><h4>Choix techniques</h4><p>J’ai organisé le projet en monorepo avec deux applications distinctes, le site public et le back-office, qui partagent un même package de types, de services et de logique métier. Chaque application se déploie indépendamment, sur son propre domaine, sans dupliquer le code commun.</p><p>Les comptes administrateurs sont séparés des comptes utilisateurs. L’accès au back-office repose sur un système de rôles et de permissions, pour que chaque membre de l’équipe n’accède qu’à ce qui le concerne.</p></section><section class=\"editor-section\"><h4>Le défi principal</h4><p>Garder les deux faces de la plateforme parfaitement synchronisées. Un billet acheté sur le site doit être reconnu par le scanner le soir de l’événement, une adhésion doit modifier immédiatement les droits de l’espace membre, et un événement créé dans le back-office doit apparaître aussitôt dans l’agenda public.</p></section><section class=\"editor-section\"><h4>Stack</h4><p>React, TypeScript, Vite, Mantine, Firebase (Auth, Firestore, Storage), fonctions serverless Vercel.</p></section>",
      "url": "https://fornap.fr/",
      "role": "Mission indépendante · front-end public et back-office",
      "status": "Plateforme en évolution",
      "quote": "",
      "images": [
        {
          "src": "images/projects/fornap-agenda.png",
          "caption": "La programmation FORNAP — capture du projet, juin 2026."
        }
      ],
      "links": [
        {
          "label": "Découvrir FORNAP",
          "url": "https://fornap.fr/"
        },
        {
          "label": "Le projet au Fort Napoléon",
          "url": "https://fortnapoleon.com/"
        }
      ]
    },
    {
      "id": "fete",
      "name": "La Fête c’est Nous",
      "title": "La Fête c’est Nous.docx",
      "category": "Site événementiel",
      "summary": "Site de la Fête de la musique à Toulon, réalisé avec la Ville et une agence événementielle.",
      "folder": "SitesFolderIcon",
      "color": "#97664a",
      "content": "<section class=\"editor-section\"><h4>Le besoin</h4><p>Le soir de la Fête de la musique, des scènes s’installent dans toute la ville de Toulon. La mairie et une agence événementielle voulaient un site pour aider le public à s’y retrouver. Contrainte principale : le site est consulté sur téléphone, dans la rue, souvent en marchant. Il devait être rapide et lisible au premier coup d’œil.</p></section><section class=\"editor-section\"><h4>Ce que j’ai réalisé</h4><p>J’ai développé le site public : la programmation complète, une vue « Autour de moi » qui affiche les scènes les plus proches, des favoris pour garder sa sélection de concerts et une page consacrée aux partenaires. L’interface est pensée d’abord pour le mobile et répond à trois usages : chercher un artiste, découvrir ce qui joue à proximité ou préparer sa soirée à l’avance.</p></section>",
      "url": "https://lafetecestnous.com/",
      "role": "Mission indépendante · site événementiel",
      "status": "Site public",
      "quote": "",
      "images": [
        {
          "src": "images/projects/fete-mobile.png",
          "caption": "Accueil du site public La Fête c’est Nous — consultation sur smartphone."
        }
      ],
      "links": [
        {
          "label": "Ouvrir le site sur mobile",
          "url": "https://lafetecestnous.com/"
        },
        {
          "label": "Voir la programmation",
          "url": "https://lafetecestnous.com/pages/programmation/programmation.html"
        }
      ]
    },
    {
      "id": "lavoisine",
      "name": "Lavoisine",
      "title": "Lavoisine.docx",
      "category": "Site vitrine",
      "summary": "Site vitrine de la Conciergerie Lavoisine, conciergerie de proximité à La Ciotat.",
      "folder": "SitesFolderIcon",
      "color": "#58735d",
      "content": "<section class=\"editor-section\"><h4>Le besoin</h4><p>Lavoisine accompagne les propriétaires de La Ciotat dans la gestion de leur logement : location, entretien et accueil des voyageurs. Confier son bien à quelqu’un demande de la confiance. Le site devait donc présenter clairement les services et montrer la proximité de l’équipe.</p></section><section class=\"editor-section\"><h4>Ce que j’ai réalisé</h4><p>J’ai conçu et développé le site. Les services sont présentés du point de vue du propriétaire, l’ancrage local à La Ciotat est mis en avant, et un contact est accessible depuis chaque page pour faciliter la prise de contact. Le site est entièrement responsive.</p></section>",
      "url": "https://www.conciergerielavoisine.fr/",
      "role": "Mission indépendante · site vitrine",
      "status": "Site public",
      "quote": "",
      "images": [
        {
          "src": "images/projects/lavoisine-site.png",
          "caption": "Accueil du site public de la Conciergerie Lavoisine."
        }
      ],
      "links": [
        {
          "label": "Visiter Lavoisine",
          "url": "https://www.conciergerielavoisine.fr/"
        }
      ]
    },
    {
      "id": "ia",
      "name": "IA locale",
      "title": "IA locale.docx",
      "category": "Recherche personnelle",
      "summary": "Expérimentations avec des modèles d’IA exécutés en local, pour évaluer ce qu’ils peuvent apporter à mes applications.",
      "folder": "DeveloperFolderIcon",
      "color": "#715f96",
      "content": "<section class=\"editor-section\"><h4>L’objectif</h4><p>Avant d’intégrer de l’IA dans un projet, je veux savoir ce qu’elle apporte réellement à l’utilisateur et si ses résultats sont assez fiables. Plutôt que de dépendre d’un service en ligne, j’ai choisi de tester les modèles directement sur mes machines.</p></section><section class=\"editor-section\"><h4>Ma démarche</h4><p>J’utilise Ollama pour installer et exécuter des modèles en local. Je les compare selon les tâches, j’ajuste leurs paramètres et je mesure les ressources qu’ils demandent en mémoire et en puissance de calcul. Je m’intéresse aussi à l’entraînement de modèles sur de petits projets. Ces tests me servent à décider, projet par projet, si une fonctionnalité d’IA a sa place ou non.</p></section>",
      "role": "Recherche personnelle · Ollama et modèles locaux",
      "status": "Expérimentation continue",
      "quote": "",
      "images": [],
      "links": [
        {
          "label": "Ollama — l’outil que j’utilise",
          "url": "https://ollama.com/"
        }
      ]
    },
    {
      "id": "oral",
      "name": "ViteMonGrandOral",
      "title": "ViteMonGrandOral.docx",
      "category": "Éducation",
      "summary": "Outil qui aide les lycéens à formuler la problématique de leur Grand Oral du bac.",
      "folder": "DocumentsFolderIcon",
      "color": "#af7948",
      "content": "<section class=\"editor-section\"><h4>Le problème</h4><p>Pour le Grand Oral, beaucoup d’élèves savent quel thème les intéresse, mais bloquent au moment d’en faire une problématique, c’est-à-dire une question précise sur laquelle construire leur exposé.</p></section><section class=\"editor-section\"><h4>La solution</h4><p>ViteMonGrandOral part du thème choisi par l’élève, propose plusieurs pistes de problématique et l’aide à organiser ses premières idées autour de celle qu’il retient. L’outil donne un point de départ ; l’élève garde la main sur son sujet.</p></section>",
      "role": "Projet personnel · outil pédagogique",
      "status": "Projet de portfolio",
      "quote": "",
      "images": [],
      "links": []
    },
    {
      "id": "portfolio",
      "name": "Ce portfolio",
      "title": "Ce portfolio.docx",
      "category": "Expérience web",
      "summary": "Mon portfolio, conçu comme un bureau macOS à explorer dans le navigateur.",
      "folder": "SitesFolderIcon",
      "color": "#3279b0",
      "content": "<section class=\"editor-section\"><h4>Le concept</h4><p>Plutôt qu’une page à faire défiler, j’ai voulu un portfolio qu’on explore comme un vrai ordinateur. Chaque application a un rôle : le Finder rassemble mes projets, Word les présente, VS Code détaille mes compétences, Notes retrace mon parcours, Safari accueille une page plus personnelle et Mail permet de me contacter. Le Terminal fonctionne aussi, avec quelques commandes cachées.</p></section><section class=\"editor-section\"><h4>Réalisation</h4><p>Le site est développé en HTML, CSS et JavaScript, sans framework front-end. J’ai reproduit les comportements d’un vrai système : fenêtres déplaçables, menus, Dock, Launchpad, Spotlight, mode sombre et adaptation mobile. Toutes les applications lisent leur contenu dans une seule source de données, ce qui garantit que les projets, le CV et les notes restent cohérents entre eux.</p></section>",
      "role": "Projet personnel · conception et développement front-end",
      "status": "Vous y êtes",
      "quote": "",
      "images": [],
      "links": []
    }
  ],
  "profile": {
    "name": "Noa Giannone",
    "title": "Développeur front-end & applications mobiles",
    "location": "Marseille · Toulon",
    "email": "noa.giannone@noagiannone.fr",
    "about": "Noa Giannone — Développeur web & mobile.\nJe conçois des sites, des applications mobiles et des plateformes sur mesure avec React, Vue.js, TypeScript, React Native et Expo.\nJe travaille aussi côté serveur et embarqué : API, bases de données, firmware C++ pour ESP32 et infrastructures auto-hébergées.\nMon fil conducteur : créer des outils utiles, qui fonctionnent et qui aident vraiment.",
    "skills": [
      {
        "id": "frontend",
        "name": "Front-end — mon terrain de prédilection",
        "items": [
          "React",
          "Vue.js",
          "TypeScript",
          "JavaScript",
          "HTML / CSS",
          "Interfaces dynamiques et sites sur mesure",
          "Intégration responsive et parcours utilisateur",
          "Interfaces d’administration et plateformes métier"
        ]
      },
      {
        "id": "mobile",
        "name": "Applications iOS & Android — expérience solide",
        "items": [
          "React Native",
          "Expo",
          "Développement d’applications pour iOS et Android",
          "Swift",
          "Java",
          "Android Studio",
          "Xcode",
          "VS Code"
        ]
      },
      {
        "id": "backend",
        "name": "Back-end & données",
        "items": [
          "Python",
          "PostgreSQL",
          "NoSQL",
          "InfluxDB",
          "API et collecte de données",
          "Back-offices métier"
        ]
      },
      {
        "id": "iot",
        "name": "Firmware & objets connectés",
        "items": [
          "C++",
          "ESP / ESP32",
          "Firmware de micro-capteurs",
          "Mises à jour et configuration à distance"
        ]
      },
      {
        "id": "network",
        "name": "Infrastructure & réseau",
        "items": [
          "Auto-hébergement",
          "Configuration réseau",
          "OPNsense",
          "Interconnexion et accès distant aux machines"
        ]
      },
      {
        "id": "ai",
        "name": "IA locale & expérimentation",
        "items": [
          "Ollama : installation et exécution de modèles en local",
          "Configuration des modèles et de leurs paramètres",
          "Choix des modèles selon les tâches et les ressources de la machine",
          "Expérimentation et entraînement de modèles",
          "Intégration dans des outils personnels"
        ]
      }
    ],
    "experiences": [
      {
        "company": "AirCarto",
        "location": "Marseille",
        "role": "Développeur · IoT, firmware & plateformes",
        "date": "En poste",
        "points": [
          "Développement de firmwares C++ pour des micro-capteurs ESP dédiés à la qualité de l’air.",
          "Développement back-end pour collecter, stocker et exploiter les mesures sur des serveurs auto-hébergés.",
          "Mise en place d’une infrastructure réseau avec OPNsense et d’outils d’accès distant aux machines et aux capteurs.",
          "Création de Cyan Sensor, une application web de gestion de parc : mises à jour, configuration et données en temps réel.",
          "Gestion de projet technique, coordination de l’équipe et suivi des tâches."
        ]
      },
      {
        "company": "Activité indépendante",
        "location": "Toulon · La Seyne-sur-Mer · La Ciotat",
        "role": "Développeur web & mobile · Auto-entrepreneur",
        "date": "En parallèle",
        "points": [
          "Conception de sites et de plateformes sur mesure, du front-end aux outils d’administration.",
          "Site La Fête c’est Nous pour la Fête de la musique à Toulon, en lien avec la mairie et une agence événementielle.",
          "Plateforme FORNAP à La Seyne-sur-Mer : billetterie, comptes, agenda, fidélité, paiements et adhésions.",
          "Back-office modulaire pour plusieurs lieux : commandes, bars, utilisateurs, événements et gestion d’équipe avec un tableau de tâches.",
          "Site vitrine de la Conciergerie Lavoisine à La Ciotat et développement de projets mobiles personnels."
        ]
      },
      {
        "company": "NO/ID Lab",
        "location": "Toulon",
        "role": "Développeur web",
        "date": "Expérience précédente",
        "points": [
          "Développement d’une plateforme web et de fonctionnalités sur mesure.",
          "Création d’interfaces dynamiques pour plusieurs sites, dont ceux de la structure et de son atelier créatif.",
          "Développement de panneaux d’administration pour centraliser la gestion des contenus et des activités."
        ]
      },
      {
        "company": "PROFER",
        "location": "Marseille",
        "role": "Technicien d’exploitation · CDD",
        "date": "2024",
        "points": [
          "Supervision et maintenance des infrastructures informatiques.",
          "Support aux utilisateurs, participation à la restructuration du système d’information et documentation technique."
        ]
      }
    ],
    "education": [
      {
        "title": "Cycle Bachelor Numérique",
        "school": "Institut G4 · Marseille",
        "date": "Entrée en 2024",
        "text": "Développement web, design, gestion de projet et environnement numérique."
      },
      {
        "title": "Baccalauréat · Mention Très Bien",
        "school": "Lycée Sévigné · Marseille",
        "date": "2024",
        "text": ""
      }
    ]
  }
};
Portfolio.icon = (name, cls = '') => `<img class="sf-icon ${cls}" src="icon/apple/${name}.png" alt="" aria-hidden="true">`;
Portfolio.codicon = name => `<img class="codicon" src="icon/codicons/${name}.svg" alt="" aria-hidden="true">`;
Portfolio.open = name => document.querySelector({finder:'.open-finder',word:'.open-editor',mail:'.open-email',terminal:'.open-terminal',code:'.open-vscode',settings:'.open-parametres',notes:'.open-note',safari:'.open-safari',launchpad:'.open-lunchpad'}[name])?.click();
Portfolio.escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
