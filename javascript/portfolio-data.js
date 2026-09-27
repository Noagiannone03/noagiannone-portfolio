window.Portfolio = {
  "projects": [
    {
      "id": "vago",
      "name": "Vago",
      "title": "Vago.docx",
      "category": "Application mobile",
      "summary": "Un jeu mobile avec une idée en tête : faire du temps passé à jouer une aide pour le budget carburant.",
      "folder": "DeveloperFolderIcon",
      "color": "#2d7683",
      "content": "<section class=\"editor-section\"><h4>Le point de départ</h4><p>Faire le plein est une dépense dont beaucoup de personnes peuvent difficilement se passer. En regardant les applications qui récompensent le temps passé sur son téléphone, je me suis demandé ce que je voudrais vraiment recevoir en échange. Une aide pour le carburant m’a semblé bien plus proche d’un besoin quotidien.</p><p>C’est de là qu’est né Vago. Je voulais construire une expérience à laquelle on revienne pour le plaisir de jouer, avec une récompense qui ait une utilité une fois le téléphone rangé. Cette idée me tient à cœur : réussir à associer quelque chose de léger, un jeu, à un petit coup de pouce concret.</p></section><section class=\"editor-section\"><h4>Une petite voiture, une carte, des occasions à saisir</h4><p>Dans Vago, chaque joueur a sa voiture et rejoint une carte partagée. Des réserves d’essence virtuelle y sont réparties. On regarde ce qu’il reste, on choisit sa destination et on lance une mission. La voiture se déplace dans le jeu ; tout se passe depuis le téléphone.</p><p>À l’arrivée, un mini-jeu décide de la collecte. Doser une pompe, manipuler des jerricans, récupérer les bons objets : les épreuves sont courtes et reprennent l’univers automobile. Une réussite ajoute des litres virtuels à la cagnotte. Pendant ce temps, les autres joueurs cherchent eux aussi les meilleures réserves. Leurs choix changent les possibilités sur la carte.</p><p>Cette réserve commune donne une raison de regarder autour de soi et de choisir son prochain mouvement. Je veux retrouver le plaisir d’une partie rapide, avec une petite tension : est-ce que ce point sera encore disponible quand j’arriverai ?</p></section><section class=\"editor-section\"><h4>Une progression qui mène quelque part</h4><p>La cagnotte permet d’avancer vers un catalogue de cadeaux. On peut choisir une récompense accessible ou continuer à économiser pour viser la carte cadeau carburant. L’écran de progression est important pour moi : le joueur doit voir ce qu’il a gagné et comprendre ce qu’il peut en faire.</p><p>Les litres sont la monnaie du jeu. La récompense finale, elle, doit aider à payer du carburant selon le catalogue proposé. Mon ambition est de contribuer au financement d’un plein ; les montants et les conditions devront rester clairs pour chacun.</p></section><section class=\"editor-section\"><h4>Un projet que je construis dans son ensemble</h4><p>Je travaille sur le concept, les écrans et le développement de l’application, mais aussi sur tout ce qui permet de la faire fonctionner : les missions, les stocks partagés, les cagnottes, les demandes de cadeaux et leur administration. Les publicités et les activités partenaires doivent contribuer au financement des récompenses.</p><p>C’est ce qui rend Vago aussi passionnant à construire. Une décision de jeu influence la progression ; une décision économique influence ce que l’on peut offrir. Je cherche un équilibre où l’expérience reste agréable et où les cadeaux peuvent réellement être financés.</p></section><section class=\"editor-section\"><h4>L’ambition pour la suite</h4><p>Le socle du jeu et son administration sont construits. Je continue à travailler sur l’expérience mobile, les mini-jeux et les partenaires nécessaires au modèle de récompenses. Les captures présentées ici montrent des écrans de développement, avec des exemples de catalogue.</p><p>J’aimerais que Vago devienne une application que l’on ouvre avec plaisir et dont on se souvient au moment de payer son carburant. C’est cette idée, très simple au départ, qui me donne envie d’en soigner chaque détail.</p></section>",
      "role": "Projet personnel · conception du produit et développement",
      "status": "En développement",
      "quote": "Quelques minutes de jeu. Une récompense qui trouve sa place dans le quotidien.",
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
      "category": "IoT · AirCarto",
      "summary": "Rendre les mesures de qualité de l’air accessibles, et les capteurs plus simples à utiliser au quotidien.",
      "folder": "DeveloperFolderIcon",
      "color": "#287d89",
      "content": "<section class=\"editor-section\"><h4>Un capteur prend son sens quand on peut s’en servir</h4><p>Chez AirCarto, à Marseille, je travaille sur des micro-capteurs open source pour la qualité de l’air. Une partie importante de mon travail consiste à relier ce qui se passe dans le matériel à ce que la personne voit à l’écran.</p><p>Cyan Sensor s’inscrit dans cette démarche. Je veux que l’on puisse retrouver ses capteurs, comprendre leurs mesures et intervenir sur leur configuration depuis une interface que l’on a envie d’utiliser.</p></section><section class=\"editor-section\"><h4>La qualité de l’air, à portée de téléphone</h4><p>L’application mobile regroupe les ModuleAir et NebuleAir dans un tableau de bord. On y retrouve les dernières mesures, l’état des capteurs et leur historique. Les courbes permettent de revenir sur une période et d’observer l’évolution des valeurs.</p><p>Le parcours de configuration passe par le Bluetooth pour connecter le capteur au Wi-Fi. Les réglages permettent ensuite d’agir sur les sondes et l’affichage. Un signalement peut aussi donner du contexte à un pic observé dans les mesures. Ces fonctions sont présentées en détail sur la page publique de Cyan Sensor.</p></section><section class=\"editor-section\"><h4>Mon travail continue derrière l’interface</h4><p>J’ai développé des outils de gestion de parc pour consulter les données, modifier des paramètres et accompagner les mises à jour. Ce travail m’a aussi amené à écrire des firmwares en C++ pour des ESP, puis à travailler sur la collecte et le stockage des mesures.</p><p>Au départ, le firmware était un domaine que je connaissais peu. J’ai appris en développant et en faisant le lien avec les besoins de l’application. J’ai également participé à l’infrastructure auto-hébergée, au réseau et aux accès distants nécessaires pour intervenir sur les machines et les capteurs.</p></section><section class=\"editor-section\"><h4>Ce que ce projet représente pour moi</h4><p>Cyan Sensor me fait travailler sur une chaîne complète : un objet mesure, des données arrivent, une interface les rend compréhensibles. Chaque partie a un effet sur les autres. Une configuration mieux expliquée peut faciliter une installation ; une information mieux présentée peut aider à comprendre ce que l’on observe.</p><p>C’est un travail dans lequel je m’investis beaucoup, parce que le résultat sort du cadre de l’écran. J’aime contribuer à des outils qui permettent aux personnes de s’intéresser à leur environnement et de suivre ce qu’elles mesurent.</p></section>",
      "url": "https://aircarto.fr/cyan-sensor/",
      "role": "Chez AirCarto · application, firmware et outils de gestion",
      "status": "Application et écosystème de capteurs",
      "quote": "Du matériel à l’application, rendre le suivi de l’air plus accessible.",
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
      "summary": "Faciliter le premier échange entre étudiants qui se croisent tous les jours sans forcément se connaître.",
      "folder": "GroupFolder",
      "color": "#725495",
      "content": "<section class=\"editor-section\"><h4>Être entouré, sans savoir à qui parler</h4><p>À la fac, il y a du monde partout. Pourtant, rencontrer de nouvelles personnes peut rester compliqué : on arrive en cours, on repart, et l’on n’a pas toujours de raison évidente d’engager la conversation. C’est cette barrière que j’ai voulu aborder avec Whisp.</p><p>J’ai imaginé un chat de proximité pour les étudiants. Le campus donne déjà quelque chose en commun ; l’application offre une occasion de commencer à parler.</p></section><section class=\"editor-section\"><h4>Un premier message peut suffire</h4><p>Whisp permet de discuter avec les étudiants proches, de faire connaissance et de partager des documents. Une question sur un cours, un fichier à transmettre ou une simple envie d’échanger peut devenir le point de départ d’une conversation.</p><p>Je voulais que l’application aide à faire ce premier pas. La proximité donne du contexte aux échanges et permet de retrouver derrière un profil quelqu’un que l’on peut réellement croiser dans sa vie étudiante.</p></section><section class=\"editor-section\"><h4>Pourquoi j’ai eu envie de le construire</h4><p>Ce projet part d’une situation que je trouve importante : on peut avoir envie de rencontrer du monde sans savoir comment s’y prendre. Développer Whisp m’a permis de traduire cette observation en une expérience mobile, avec un usage facile à expliquer.</p><p>L’ambition était d’aider les étudiants à se sentir un peu moins anonymes dans un grand campus. C’est le genre d’idée pour laquelle j’aime développer : une petite ouverture qui peut changer la façon de vivre un lieu.</p></section>",
      "role": "Projet personnel · application mobile",
      "status": "Projet étudiant",
      "quote": "Faire le premier pas, depuis un endroit que l’on partage déjà.",
      "images": [],
      "links": []
    },
    {
      "id": "lieux",
      "name": "FORNAP",
      "title": "FORNAP.docx",
      "category": "Plateforme métier",
      "summary": "Accompagner la vie d’un lieu culturel, de la première visite à l’organisation de ses équipes.",
      "folder": "SitesFolderIcon",
      "color": "#886743",
      "content": "<section class=\"editor-section\"><h4>Un lieu qui rassemble plusieurs vies</h4><p>Au Fort Napoléon, à La Seyne-sur-Mer, FORNAP porte un projet culturel où se croisent événements, création et vie collective. Cette diversité m’intéresse : le même lieu doit pouvoir accueillir un visiteur qui découvre la programmation, un adhérent qui revient et une équipe qui prépare le prochain rendez-vous.</p><p>Mon travail consiste à donner à ces usages une continuité numérique. Le site invite à découvrir le lieu ; la plateforme prend ensuite le relais pour les comptes, les adhésions, la billetterie et l’organisation quotidienne.</p></section><section class=\"editor-section\"><h4>Donner envie de venir, faciliter la suite</h4><p>J’ai développé le front et les parcours qui accompagnent le public : parcourir l’agenda, retrouver un événement, créer son compte, adhérer ou prendre un billet. La fidélité et les codes de paiement font également partie des besoins que j’ai pris en charge.</p><p>Le soin apporté à cette partie compte beaucoup. On vient pour un concert, une rencontre, un moment sur place. Le parcours en ligne doit être compréhensible et laisser toute sa place à ce qui donne envie de venir.</p></section><section class=\"editor-section\"><h4>Derrière les événements, le travail des équipes</h4><p>Une fois passé de l’autre côté, les besoins changent. Il faut gérer les utilisateurs, les commandes, les événements et les bars, retrouver une information et coordonner plusieurs lieux. J’ai développé une interface d’administration organisée en modules pour réunir ces tâches.</p><p>J’ai également travaillé sur la gestion d’équipe, avec un tableau de tâches de type Kanban. L’objectif est de permettre aux personnes qui font vivre le lieu de suivre ce qui avance, ce qui reste à faire et qui s’en occupe, depuis le même environnement.</p></section><section class=\"editor-section\"><h4>Penser la plateforme sur la durée</h4><p>L’ampleur de FORNAP se trouve dans les liens entre ces usages. Une adhésion touche au compte d’un membre ; un billet doit pouvoir être retrouvé et contrôlé ; un événement doit exister aussi bien dans l’agenda du public que dans les outils de l’équipe.</p><p>Je m’implique dans cette continuité, du parcours visible aux interfaces de gestion. C’est un projet qui me permet de travailler sur un ensemble vivant : les besoins évoluent avec le lieu, et la plateforme doit pouvoir les accompagner sans devenir difficile à utiliser.</p></section>",
      "url": "https://fornap.fr/",
      "role": "Mission indépendante · front-end et plateforme métier",
      "status": "Plateforme en évolution",
      "quote": "Faire une place au public. Donner aux équipes les moyens de faire vivre le lieu.",
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
      "summary": "Un compagnon de soirée pour découvrir la Fête de la musique à Toulon et choisir où aller.",
      "folder": "SitesFolderIcon",
      "color": "#97664a",
      "content": "<section class=\"editor-section\"><h4>Le rendez-vous commence avant le premier concert</h4><p>La Fête de la musique, c’est le plaisir de sortir, de retrouver du monde et de se laisser surprendre par ce qui se joue dans la ville. Pour ce projet mené avec la mairie de Toulon et une agence événementielle, j’ai développé un site qui accompagne la découverte de la programmation.</p><p>Le contexte donne une direction très concrète au travail : les visiteurs consultent leur téléphone en préparant leur soirée ou pendant leurs déplacements. Il faut pouvoir se repérer rapidement, avec une expérience qui garde l’énergie de l’événement.</p></section><section class=\"editor-section\"><h4>Retrouver ce qui donne envie de sortir</h4><p>Le site propose la programmation, une entrée « Autour de moi » et des favoris pour garder les propositions qui intéressent le visiteur. Les partenaires et la présentation de l’événement ont également leur place dans la navigation.</p><p>Ces accès répondent à plusieurs façons de vivre la soirée : avoir déjà une idée de ce que l’on cherche, vouloir voir ce qui se passe à proximité ou préparer une sélection à retrouver plus tard. L’interface est pensée pour accompagner ces choix depuis un smartphone.</p></section><section class=\"editor-section\"><h4>Un projet ancré dans ma ville</h4><p>Ce que j’aime dans cette réalisation, c’est son lien direct avec la vie locale. Le site sert à trouver un rendez-vous, à découvrir une proposition et à rejoindre des gens sur place. Cela donne un sens immédiat au travail de développement.</p><p>J’y retrouve ce qui me plaît dans le front-end : prendre une information assez dense, une programmation, et lui donner une forme que l’on peut parcourir facilement. Le soin apporté à la présentation participe aussi à donner envie de découvrir l’événement.</p></section>",
      "url": "https://lafetecestnous.com/",
      "role": "Mission indépendante · site événementiel",
      "status": "Site public",
      "quote": "Aider chacun à trouver sa prochaine scène.",
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
      "summary": "Une présence en ligne pour présenter une conciergerie de proximité et donner confiance dès le premier contact.",
      "folder": "SitesFolderIcon",
      "color": "#58735d",
      "content": "<section class=\"editor-section\"><h4>Mettre un visage sur un service de confiance</h4><p>Confier un logement à une conciergerie, c’est confier un bien et une partie de son quotidien. Pour Lavoisine, à La Ciotat, le site devait aider à comprendre les services tout en laissant apparaître la proximité de l’équipe.</p><p>J’ai travaillé sur cette présentation avec une attention particulière à la lecture. Une personne qui arrive sur le site doit pouvoir comprendre à qui elle s’adresse, ce qui peut être pris en charge et comment entrer en contact.</p></section><section class=\"editor-section\"><h4>Organiser l’offre autour des personnes</h4><p>Le site présente la gestion locative, l’intendance des résidences et l’accompagnement des voyageurs. Les services sont replacés dans leur contexte local, avec une place donnée à La Ciotat et aux alentours.</p><p>La navigation relie ces informations à des prises de contact directes. L’ensemble doit permettre à chacun d’aller à son rythme : découvrir l’équipe, comparer les accompagnements ou poser une question sur son bien.</p></section><section class=\"editor-section\"><h4>Ce que j’ai voulu soigner</h4><p>Cette réalisation mobilise ce que j’aime dans les sites vitrines : construire un rythme, choisir ce qui mérite d’être mis en avant et rendre une activité compréhensible. Le développement du front est au service de cette rencontre entre une entreprise et ses futurs clients.</p><p>Je souhaitais une présentation dans laquelle Lavoisine puisse se reconnaître, avec une lecture agréable sur téléphone comme sur ordinateur et un chemin simple vers le premier échange.</p></section>",
      "url": "https://www.conciergerielavoisine.fr/",
      "role": "Mission indépendante · site vitrine",
      "status": "Site public",
      "quote": "Présenter les services. Faire naître la confiance.",
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
      "summary": "Explorer ce que des modèles exécutés sur mes propres machines peuvent apporter à mes applications.",
      "folder": "DeveloperFolderIcon",
      "color": "#715f96",
      "content": "<section class=\"editor-section\"><h4>Comprendre en pratiquant</h4><p>Je consacre une partie de mes projets personnels à l’IA locale. Ce qui m’intéresse, c’est de pouvoir installer un modèle, le configurer et observer directement ce qu’il sait faire sur mes propres machines.</p><p>J’utilise notamment Ollama pour exécuter les modèles. Je compare les résultats selon les tâches, j’ajuste la configuration et je regarde les ressources nécessaires. Cela m’aide à me faire un avis à partir de l’usage, au-delà d’une démonstration convaincante.</p></section><section class=\"editor-section\"><h4>Chercher une place dans mes outils</h4><p>Ces expérimentations ont vocation à nourrir mes applications. Avant d’ajouter une fonction, je cherche à comprendre ce qu’elle apporte à la personne qui l’utilise : est-ce qu’elle facilite réellement une tâche ? Est-ce que le résultat est assez fiable pour cet usage ?</p><p>Je travaille aussi sur l’entraînement de modèles. C’est un domaine dans lequel je continue à apprendre, en construisant de petits projets et en prenant le temps d’observer leurs limites.</p></section><section class=\"editor-section\"><h4>Une démarche qui prolonge mon travail de développeur</h4><p>Faire tourner ces outils en local me fait toucher à plusieurs sujets à la fois : la configuration, les ressources de la machine et l’intégration dans une interface. J’aime ce passage de l’expérimentation à quelque chose que l’on peut utiliser.</p><p>Mon ambition est d’en tirer des fonctions qui trouvent naturellement leur place dans mes projets, avec une utilité que je peux expliquer simplement.</p></section>",
      "role": "Recherche personnelle · Ollama et modèles locaux",
      "status": "Expérimentation continue",
      "quote": "Essayer les modèles, comprendre leurs limites, puis trouver le bon usage.",
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
      "summary": "Aider un lycéen à passer d’un thème qui l’intéresse à une première direction pour son Grand Oral.",
      "folder": "DocumentsFolderIcon",
      "color": "#af7948",
      "content": "<section class=\"editor-section\"><h4>La difficulté de commencer</h4><p>Trouver un sujet ne suffit pas toujours pour préparer un oral. Il faut encore en faire une question, déterminer ce que l’on veut expliquer et savoir par où commencer. ViteMonGrandOral est né de cette difficulté à transformer un intérêt en une problématique.</p><p>J’ai voulu proposer un point d’appui aux lycéens au moment où la préparation paraît encore très large. Le projet accompagne l’exploration des sujets et la structuration des premières idées.</p></section><section class=\"editor-section\"><h4>Donner une direction, laisser la place à l’élève</h4><p>L’intention est de faciliter la mise en route : faire émerger des pistes et aider à organiser sa réflexion. Un sujet devient plus facile à travailler quand on comprend la question que l’on souhaite poser.</p><p>Ce projet illustre mon intérêt pour les outils qui répondent à un blocage concret. Ici, l’ambition tient dans ce premier déclic : avoir enfin une direction et l’envie de commencer à préparer son oral.</p></section>",
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
      "summary": "Un bureau à explorer pour découvrir mon parcours, mes projets et ma façon de développer.",
      "folder": "SitesFolderIcon",
      "color": "#3279b0",
      "content": "<section class=\"editor-section\"><h4>Choisir sa propre visite</h4><p>J’ai imaginé ce portfolio autour d’un bureau macOS parce que j’aime les interfaces que l’on découvre en les utilisant. Vous pouvez ouvrir un dossier, passer dans le Terminal ou prendre le temps de lire mon parcours. La visite suit votre curiosité.</p><p>Chaque application a un rôle : Finder présente mes projets, Word permet de les parcourir, VS Code rassemble mes compétences et Safari accueille une partie plus personnelle. Mail ouvre directement un message pour me contacter.</p></section><section class=\"editor-section\"><h4>Le détail fait partie du projet</h4><p>Les fenêtres, les menus et les interactions sont pour moi autant d’occasions de travailler le front-end. Une animation, un raccourci ou un état de focus influence la sensation que l’on a en utilisant une interface.</p><p>Le Terminal propose aussi une autre manière de me découvrir, avec des commandes et quelques clins d’œil cachés. J’avais envie de montrer mon travail dans un environnement où l’on peut prendre plaisir à explorer.</p></section><section class=\"editor-section\"><h4>Une présentation qui continue à évoluer</h4><p>Ce bureau évolue avec mon parcours. J’y rassemble aussi bien mes missions que mes projets personnels, parce qu’ils racontent des aspects différents de mon travail et des sujets qui m’intéressent.</p></section>",
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
    "about": "Noa Giannone — Développeur front-end & applications mobiles.\nJe crée des sites et des applications avec React, Vue.js, TypeScript, React Native et Expo.\nChez AirCarto, je développe aussi des firmwares C++ pour ESP, des outils de gestion de capteurs et des services de collecte de données.\nEn indépendant, je conçois des plateformes sur mesure. Mon fil conducteur : des outils utiles, qui ont un impact à mon échelle.",
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
