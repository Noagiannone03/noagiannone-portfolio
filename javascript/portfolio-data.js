window.Portfolio = {
  "projects": [
    {
      "id": "vago",
      "name": "Vago",
      "title": "Vago.docx",
      "category": "Application mobile",
      "summary": "Un jeu mobile multijoueur qui convertit le temps de jeu en litres de carburant, échangeables contre des cartes carburant. Le projet qui me tient le plus à cœur.",
      "folder": "DeveloperFolderIcon",
      "color": "#2d7683",
      "content": "<section class=\"editor-section\"><h4>Le point de départ</h4><p>De tous mes projets, Vago est sans doute celui qui me tient le plus à cœur, car il est directement né de mon expérience. Mon entrée récente dans la vie active m’a fait découvrir des préoccupations que je voyais chez mes parents sans jamais les avoir vécues : gérer un budget, anticiper les dépenses, faire attention à chaque fin de mois. Parmi ces charges, l’une pèse de plus en plus lourd : le carburant.</p><p>Dans la conjoncture actuelle, la hausse continue des prix à la pompe s’accompagne d’un recul marqué du pouvoir d’achat. Or, pour une grande partie de la population, la voiture n’a rien d’un luxe : elle reste le seul moyen de se rendre au travail, d’étudier ou de rendre visite à ses proches. Faire le plein devient alors une source d’inquiétude bien réelle.</p><p>Pour compléter mes revenus, j’avais moi-même recours à des applications de micro-tasking. Le principe est bon, mais elles rapportent très peu, et presque toujours en cartes cadeaux pour faire du shopping : agréable, mais secondaire. J’ai voulu concevoir une application dont les récompenses répondent à un besoin concret, et c’est ainsi qu’est née l’idée de les associer au carburant.</p></section><section class=\"editor-section\"><h4>Le principe</h4><p>Vago est un jeu mobile multijoueur. Au fil de parties courtes et de petites tâches, telles que des sondages ou des offres partenaires, les joueurs accumulent des litres qui viennent alimenter une cagnotte. Ces litres peuvent ensuite être échangés contre des cadeaux, et notamment contre des cartes carburant. Quelques minutes de jeu pendant une pause ou un trajet finissent ainsi par financer une partie du plein.</p><p>C’est ce qui me motive dans ce projet : transformer le temps qu’on passe de toute façon sur son téléphone en une vraie aide au quotidien.</p></section><section class=\"editor-section\"><h4>Le jeu</h4><p>Les joueurs se retrouvent par petits groupes sur une carte commune, parsemée de stations-service. Chaque station contient une quantité limitée de litres : on choisit sa cible, on lance une mission, et il faut remporter un mini-jeu pour repartir avec le carburant.</p><p>Comme tout le monde vise les mêmes stations, chaque partie devient une petite course contre les autres joueurs, et c’est ce qui rend le jeu vraiment prenant.</p></section><section class=\"editor-section\"><h4>Un projet mené seul</h4><p>Je porte Vago seul, de la première idée jusqu’à la mise en ligne. Je m’occupe de tout : l’application, les mini-jeux, ce qui fait vivre les parties en coulisses, et l’outil qui me permet de gérer les cadeaux et l’équilibre du jeu. C’est un travail de longue haleine, mais c’est aussi ce qui rend ce projet si personnel.</p></section><section class=\"editor-section\"><h4>Aujourd’hui</h4><p>La boucle de jeu, la carte partagée, la cagnotte et le back-office sont désormais opérationnels. Les prochaines étapes consistent à finaliser les partenariats publicitaires, à enrichir le jeu de nouveaux mini-jeux et à lancer une phase de tests sur de vrais appareils.</p></section>",
      "role": "Projet de mon studio · conception, développement mobile et serveur",
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
      "content": "<section class=\"editor-section\"><h4>Le contexte</h4><p>AirCarto, à Marseille, conçoit des micro-capteurs open source qui mesurent la qualité de l’air, notamment les ModuleAir et les NebuleAir. Pour être utiles, ces capteurs doivent pouvoir s’installer facilement et leurs mesures doivent être compréhensibles par tous. Cyan Sensor fait le lien entre le capteur et son utilisateur.</p></section><section class=\"editor-section\"><h4>Ce que fait l’application</h4><p>L’utilisateur retrouve ses capteurs sur un tableau de bord composé de widgets, qu’il peut réorganiser et afficher en petit ou en grand format. Chaque capteur dispose d’une page détaillée avec ses dernières mesures, son état et des graphiques d’historique.</p><p>L’installation se fait en Bluetooth : l’application guide la connexion du capteur au Wi-Fi, puis permet de régler ses sondes et son affichage. Un système de signalement permet aussi d’expliquer un pic observé dans les mesures.</p></section><section class=\"editor-section\"><h4>Mon rôle</h4><p>Sur ce projet, j’interviens sur toute la chaîne, du capteur à l’écran : l’application mobile, les firmwares C++ des capteurs sur ESP32, les outils de gestion de parc pour les mises à jour et la configuration à distance, la collecte et le stockage des mesures, ainsi qu’une partie de l’infrastructure réseau et des serveurs auto-hébergés (OPNsense, accès distant).</p><p>Je n’avais jamais écrit de firmware avant ce poste. Je me suis formé sur le terrain, en partant des besoins concrets de l’application.</p></section>",
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
      "summary": "Ma première application publiée : une messagerie de proximité imaginée pour rapprocher les étudiants d’un même campus.",
      "folder": "GroupFolder",
      "color": "#725495",
      "content": "<section class=\"editor-section\"><h4>Le point de départ</h4><p>À mon arrivée à la faculté, un constat m’a immédiatement frappé : les étudiants ne se parlaient presque pas. On partage pendant des semaines les mêmes amphithéâtres, on se croise chaque jour dans les couloirs, et pourtant chacun reste dans son coin, comme bloqué par une barrière sociale que peu de gens osent franchir. Faire le premier pas n’a rien d’évident, et cette gêne finit par installer une distance que plus personne ne remet en question.</p><p>Je ne pouvais pas faire disparaître cette barrière, mais je pouvais la rendre plus facile à franchir, en donnant à chacun un prétexte pour briser la glace. C’est comme ça qu’est née Whisp.</p></section><section class=\"editor-section\"><h4>L’application</h4><p>Whisp est une application de messagerie de proximité qui permet d’échanger avec les étudiants présents autour de soi sur le campus, que ce soit pour poser une question sur un cours, proposer un déjeuner ou organiser une séance de révisions. L’application propose également des mini-jeux à partager avec ses voisins, car il est souvent plus facile de lancer la conversation autour d’une partie qu’en se présentant.</p><p>Ce projet repose sur une conviction : sur un campus qui réunit des milliers d’étudiants, la cohésion ne va pas de soi. C’est pourtant elle qui permet à chacun de s’y sentir bien, et qui donne envie d’y revenir chaque matin.</p></section><section class=\"editor-section\"><h4>Publier pour la première fois</h4><p>Whisp est la première application que j’ai publiée, et cette étape a été bien plus difficile que je ne l’imaginais. J’ai dû composer avec les exigences des stores, les disparités de comportement entre les différentes versions d’Android et d’iOS, ou encore ces bugs qui ne se manifestent que sur certains appareils. J’ai connu beaucoup d’échecs sur ce projet, mais ce sont des échecs qui m’ont énormément appris.</p></section><section class=\"editor-section\"><h4>Ce que j’en retiens</h4><p>La plus grande leçon de Whisp, c’est qu’une application ne se résume pas à son code. J’étais convaincu qu’il suffisait de bien la développer pour qu’elle trouve son public ; j’ai découvert qu’il fallait aussi la faire connaître, communiquer autour d’elle et soigner l’expérience utilisateur jusque dans ses moindres détails.</p><p>J’ai surtout appris à prendre du recul. Lorsqu’on a la tête dans le guidon, on finit par ne plus voir ce qui ne fonctionne pas. Il m’a fallu apprendre à regarder mon application avec les yeux de ceux qui l’utilisent, à accueillir leurs retours et à les accepter, y compris lorsqu’ils remettaient en cause mes propres choix. C’est sans doute le projet qui m’a le plus fait grandir.</p></section>",
      "role": "Projet de mon studio · conception, développement et publication",
      "status": "Première application publiée",
      "quote": "",
      "images": [],
      "links": []
    },
    {
      "id": "lieux",
      "name": "FORNAP",
      "title": "FORNAP.docx",
      "category": "Plateforme métier",
      "summary": "La plateforme du FORNAP, tiers-lieu culturel du Fort Napoléon à La Seyne-sur-Mer : site public, billetterie, boutique et logiciel de gestion complet à destination de l’équipe.",
      "folder": "SitesFolderIcon",
      "color": "#886743",
      "content": "<section class=\"editor-section\"><h4>Le lieu</h4><p>À La Seyne-sur-Mer, le Fort Napoléon a trouvé une nouvelle vie sous la forme d’un tiers-lieu culturel : le FORNAP. Porté par NO/ID lab, une structure qui organise des événements culturels depuis une vingtaine d’années, le projet repose sur une ambition claire : ouvrir le lieu à toutes celles et ceux qui souhaitent s’y investir, afin que chacun puisse y créer, y organiser ses propres événements ou y transmettre son savoir-faire.</p><p>En semaine, le fort accueille des ateliers, des espaces de coworking, des résidences et des formations ; le week-end, il devient la scène de concerts, de spectacles, de marchés et d’expositions. C’est un lieu pluriel et très ouvert, où se croisent des publics et des cultures très différents.</p></section><section class=\"editor-section\"><h4>Le besoin</h4><p>Faire vivre un lieu comme celui-là demande énormément d’organisation : vendre des billets, gérer les adhésions, louer des espaces, accueillir des exposants, composer des programmations, tenir une boutique et coordonner des équipes qui travaillent toutes en même temps. L’association avait besoin d’un outil capable de réunir tout cela.</p><p>C’est cette plateforme que j’ai conçue et développée, depuis l’interface que découvre le visiteur jusqu’au logiciel qu’utilise l’équipe au quotidien.</p></section><section class=\"editor-section\"><h4>Le site public</h4><p>Côté public, la plateforme accompagne le visiteur tout au long de son parcours. Il y découvre la programmation à travers l’agenda, achète ses billets, délivrés sous forme de QR code, réserve un espace, passe commande dans la boutique ou profite des avantages du programme de fidélité.</p><p>Les artistes et les exposants disposent d’un espace professionnel dédié à la gestion de leur participation, tandis que chaque utilisateur retrouve, dans son espace personnel, le suivi de son adhésion, de ses commandes et de son historique.</p></section><section class=\"editor-section\"><h4>Le logiciel de gestion</h4><p>Côté équipe, j’ai développé un véritable logiciel de gestion, entre ERP et CRM, depuis lequel se pilote l’ensemble du lieu : utilisateurs et adhésions, exposants, line-up, événements et plannings, commandes et produits de la boutique.</p><p>Pour faciliter l’organisation interne, j’y ai intégré un tableau Kanban inspiré de Trello, qui permet de créer des tâches, de les attribuer et d’en suivre l’avancement. Le back-office comprend aussi un scanner pour contrôler les billets à l’entrée, un outil d’envoi de campagnes d’e-mails et un éditeur qui permet de modifier le contenu du site sans toucher au code.</p></section><section class=\"editor-section\"><h4>Ce que ça m’a appris</h4><p>Ce projet a été fait de premières fois : la première fois que je concevais une plateforme d’une telle envergure, composée de modules étroitement interdépendants, et la première fois que je travaillais au sein d’une équipe aussi importante. Il n’était plus question d’avancer seul. Il m’a fallu échanger en permanence, comprendre les attentes de chacun, découper le travail, fixer des priorités et tenir les délais, jusqu’à endosser, par moments, le rôle de chef de projet.</p><p>Le projet s’est très bien passé, en grande partie grâce à la qualité des personnes avec lesquelles j’ai collaboré. Il m’a fait progresser sur tous les plans : techniquement, bien sûr, mais aussi dans ma manière de m’organiser, de gérer mon temps et de travailler en équipe.</p></section>",
      "url": "https://fornap.fr/",
      "role": "Mission indépendante · plateforme publique et logiciel de gestion",
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
      "summary": "Le site de la Fête de la musique à Toulon, conçu pour la mairie afin de guider le public parmi les scènes et les animations de la soirée.",
      "folder": "SitesFolderIcon",
      "color": "#97664a",
      "content": "<section class=\"editor-section\"><h4>Le contexte</h4><p>Chaque 21 juin, Toulon change de visage. Des scènes se dressent sur les places, des groupes investissent les coins de rue, des animations s’installent dans chaque quartier, et le public passe d’un concert à l’autre jusque tard dans la nuit. Mais pour profiter de la soirée, encore faut-il savoir ce qui se joue, où et à quelle heure.</p><p>La mairie de Toulon, accompagnée d’une agence événementielle de la ville, voulait un site qui réunisse l’ensemble de ces informations : chaque point de son, chaque animation et la programmation complète de la soirée.</p></section><section class=\"editor-section\"><h4>Ce que j’ai réalisé</h4><p>J’ai développé le site public de l’événement, qui rassemble la liste des points de son et des animations, la programmation détaillée de chaque scène, une vue « Autour de moi » qui montre ce qui se passe à proximité, ainsi qu’un système de favoris permettant de conserver les concerts à ne pas manquer.</p><p>Le site a été pensé en priorité pour le mobile. Le soir de la Fête de la musique, personne ne le consulte assis à un bureau : on l’ouvre dans la rue, entre deux concerts, bien souvent en marchant. Chaque écran devait donc se charger vite et se lire en un coup d’œil, pour qu’on trouve l’information en quelques secondes et qu’on retourne profiter de la musique.</p></section><section class=\"editor-section\"><h4>Travailler avec la Ville</h4><p>Ce projet était ma première collaboration avec une institution, et ça change beaucoup de choses dans la façon de travailler. Le site est porté par la Ville, il s’adresse à l’ensemble des Toulonnais, et la date de l’événement ne peut pas être repoussée. Ce genre de mission demande de la rigueur et de l’anticipation, et implique une vraie responsabilité.</p><p>J’en suis fier, parce que ce site s’adressait à toute une ville, et parce qu’il m’a appris à travailler avec des interlocuteurs et des contraintes d’une tout autre envergure.</p></section>",
      "url": "https://lafetecestnous.com/",
      "role": "Mission indépendante · conception et développement du site",
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
      "summary": "Le site vitrine de la Conciergerie Lavoisine, entreprise familiale de La Ciotat, pensé pour inspirer confiance aux propriétaires.",
      "folder": "SitesFolderIcon",
      "color": "#58735d",
      "content": "<section class=\"editor-section\"><h4>Le besoin</h4><p>La Conciergerie Lavoisine est une entreprise familiale implantée à La Ciotat, qui accompagne les propriétaires dans la gestion de leur logement, de la mise en location à l’accueil des voyageurs, en passant par l’entretien. Confier son bien à un tiers n’a rien d’anodin : avant toute prise de contact, le propriétaire a besoin de comprendre précisément ce qui lui est proposé et de sentir qu’il peut faire confiance.</p><p>Le site devait donc présenter les services de la conciergerie avec clarté, tout en montrant ce qui la rend différente : une équipe à taille humaine, proche de ses clients et bien ancrée dans sa ville.</p></section><section class=\"editor-section\"><h4>Ce que j’ai réalisé</h4><p>J’ai conçu et développé le site entièrement. Les services y sont présentés du point de vue du propriétaire, dans un langage simple et avec des informations faciles à trouver. Le lien avec La Ciotat est mis en avant sur tout le site, et un moyen de contact est accessible depuis chaque page, pour que le visiteur puisse franchir le pas à tout moment. Le site s’adapte aussi à tous les écrans.</p></section><section class=\"editor-section\"><h4>Ce que j’en retiens</h4><p>Ce projet à taille humaine a été très agréable. Travailler directement avec la famille qui dirige la conciergerie m’a permis de bien comprendre leur métier et les attentes de leurs clients.</p><p>Il m’a aussi poussé à voir le design autrement. Sur une plateforme comme FORNAP, la valeur du projet réside dans ses fonctionnalités ; sur un site vitrine, tout repose sur l’impression laissée au visiteur, qu’il s’agisse de l’image, de l’atmosphère ou de la clarté. Chaque choix visuel compte, et j’ai pris beaucoup de plaisir à les travailler.</p></section>",
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
    "about": "Noa Giannone, 20 ans, développeur web & mobile.\nJe code depuis mes 16 ans. Je travaille aujourd’hui en alternance et je développe des applications au sein de mon propre studio.\nFront-end, back-end, mobile, firmware C/C++, DevOps : je travaille sur toute la chaîne, de l’interface au capteur.\nJe m’intéresse surtout aux projets qui répondent à un vrai besoin.",
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
        "company": "Mon studio de création d’applications",
        "location": "Toulon · La Seyne-sur-Mer · La Ciotat · International",
        "role": "Fondateur · Auto-entrepreneur",
        "date": "Depuis plus de deux ans",
        "points": [
          "Création d’un studio pour réaliser des projets clients et développer mes propres applications.",
          "Site de la Fête de la musique à Toulon, La Fête c’est Nous, pour la mairie de Toulon et une agence événementielle.",
          "Plateforme FORNAP à La Seyne-sur-Mer : billetterie, adhésions, boutique, espace pro et logiciel de gestion complet pour l’équipe.",
          "Site vitrine de la Conciergerie Lavoisine, conciergerie familiale à La Ciotat.",
          "Missions à l’étranger pour des sociétés qui développent des produits d’IA.",
          "Applications portées par le studio : Whisp, ma première app publiée, et Vago, en cours de développement."
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
