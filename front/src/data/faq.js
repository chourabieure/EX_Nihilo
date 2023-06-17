const accordionContent = [
    {
        id: 1,
        title: "Comment l'agence peut-elle nous aider à optimiser notre budget ?",
        content:
            "La notion de budget est capitale pour assurer une solution pérenne.<br/>Nous offrons notre expertise afin de vous conseiller et évaluer les avantages et les inconvénients des différentes solutions disponibles sur le marché des vêtements professionnels et EPI.",
        show: true,
    },
    {
        id: 2,
        title: "Comment l'agence peut-elle s'adapter à nos contraintes et délais spécifiques ?",
        content:
            "Nous travaillons uniquement en mode projet, vos contraintes sont donc les nôtres.<br/>Nous définissons ensemble un calendrier et analysons les étapes clés afin de prioriser les actions.<br/>L’objectif est de définir les conditions et la sécurisation de votre projet afin d’en assurer la réussite.",
        show: false,
    },
    {
        id: 3,
        title: "Comment l'agence peut-elle nous aider à créer une image de marque cohérente ?",
        content:
            "Nous considérons le vêtement professionnel comme une extension de votre marque.<br/>Notre rôle est de rechercher les combinaisons de couleurs et les designs qui exprimeront efficacement les valeurs de votre entreprise. Les vêtements professionnels doivent pouvoir convoquer une valeur émotionnelle auprès de votre clientèle comme auprès de vos collaborateurs.",
        show: false,
    },
    {
        id: 4,
        title: "Est-ce que l'agence peut fournir des échantillons afin d'évaluer le design des vêtements ?",
        content:
            "Nous vous proposons des échantillons de tissus et des références de couleurs pour chacun de nos projets. De plus, nous avons inclus la visualisation 3D de nos créations afin de vous offrir un aperçu réaliste.<br/>Cela vous rend plus accessible nos propositions avant de passer à la phase de fabrication du prototype final.",
        show: false,
    },
    {
        id: 5,
        title: "Comment l'agence peut-elle nous aider à sélectionner des vêtements professionnels adaptés à nos métiers ?",
        content:
            "Notre approche place les hommes et les femmes au centre de notre démarche. Nous prenons le temps d’aller à la rencontre à votre rencontre, sur le terrain afin de mieux comprendre vos métiers et vos environnements de travail avant de concevoir des tenues appropriées ou vous guider dans vos achats.",
        show: false,
    },
    {
        id: 6,
        title: "Comment l'agence peut-elle nous aider à impliquer nos employés dans le choix des vêtements ?",
        content:
            "Nous adoptons une approche axée sur le design-thinking et encourageons la formation d'un groupe de travail pour impliquer dès le début les divers acteurs de l'entreprise, chaque fois que cela est possible.<br/>La participation, la consultation et l’information sont autant de leviers d’implication que nous pouvons actionner au sein de vos équipes.",
        show: false,
    },
    {
        id: 7,
        title: "Comment l'agence assure-t-elle la conformité des vêtements professionnels aux normes de sécurité en vigueur ?",
        content:
            "En tant que spécialistes de l'habillement professionnel, nous nous tenons constamment informés des réglementations et des normes en matière d'équipement de protection individuelle (EPI).<br/>Nous entretenons un dialogue avec les différents acteurs de l'industrie textile pour fournir les meilleurs conseils pour des vêtements performants, confortables et certifiables.",
        show: false,
    },
    {
        id: 8,
        title: "Est-ce que l’agence intègre des considérations de durabilité et d'écoconception dans la conception des vêtements professionnels ?",
        content:
            "Lorsque nous concevons ou développons un produit, nous prenons en compte son utilisation et sa durée de vie.<br/>Ainsi, nous intégrons naturellement l'écoconception dans notre approche, afin de prolonger la durée de vie des vêtements et de réduire les impacts environnementaux de leur fabrication.<br/>Notre engagement nous a amenés à privilégier les solutions de proximité et à sélectionner des matières et des méthodes de production qui respectent au mieux les équilibres naturels et humains.",
        show: false,
    },
    {
        id: 9,
        title: "Qu’apporte Ex Nihilo à mon entreprise ?",
        content:
            "Forts d'une expérience de plus de 20 ans dans le domaine du vêtement professionnel, nous avons acquis une expertise solide auprès d'une clientèle variée.<br/>Notre capacité d'écoute et notre engagement constant à vous placer au cœur de nos décisions et actions n’ont pour but que de défendre vos intérêts.<br/>Nous mettons notre créativité dans nos designs comme dans l’animation de vos équipes à la fin de les fédérer autour d’une fierté partagée.",
        show: false,
    },
    {
        id: 10,
        title: "Quel retour sur investissement puis-je attendre ?",
        content:
            "Une tenue professionnelle doit concilier sécurité, confort et valorisation pour rassembler les équipes et les motiver dans l'accomplissement de leurs missions.<br/>Son esthétique doit convaincre vos clients de la valeur ajoutée que vous apportez.<br/>Collaborer avec Ex Nihilo vous assure de donner une signification à vos vêtements professionnels, de renforcer le dialogue social au sein de votre entreprise et de transmettre un message percutant à vos clients.",
        show: false,
    },
    {
        id: 11,
        title: "Quels sont les avantages concurrentiels d’Ex Nihilo par rapport à d'autres options sur le marché ?",
        content:
            "Nous mettons toute notre expertise à votre service pour promouvoir votre image et valoriser vos équipes. Nous vous accompagnons à chaque étape de votre projet, vous permettant ainsi d'accéder aux dernières avancées du marché et de déterminer conjointement les leviers pertinents pour une solution durable.<br/>Dans cette perspective, vous bénéficiez des droits de reproduction de nos créations et de tous les éléments techniques nécessaires afin d’être indépendants de vos fournisseurs.",
        show: false,
    },
    {
        id: 12,
        title: "Comment l'agence peut-elle accompagner le déploiement de nos nouveaux vêtements professionnels ?",
        content:
            "Nous pouvons accompagner la communication interne en collaborant avec vous dès le début du projet pour déterminer les actions de communication que vous souhaitez mettre en œuvre.<br/>La présentation du projet retenu revêt une importance capitale pour assurer son acceptation.<br/>Nous intervenons souvent pour accompagner ce processus de changement en adoptant un discours distinct de celui de la direction de l'entreprise, favorisant ainsi une meilleure écoute.<br/>Des actions événementielles et/ou digitales peuvent également être envisagées tant en interne qu'à l'externe.",
        show: false,
    }
    // {
    //     id: 13,
    //     title: "Comment l'agence peut-elle nous accompagner dans la communication interne et externe liée au déploiement de nos nouveaux vêtements professionnels ?",
    //     content:
    //         "En ce qui concerne la communication interne, nous collaborons avec vous dès le début du projet pour déterminer les actions de communication que vous souhaitez mettre en œuvre. La présentation du projet retenu revêt une importance capitale pour assurer son acceptation. Nous intervenons souvent pour accompagner ce processus de changement en adoptant un discours distinct de celui de la direction de l'entreprise, favorisant ainsi une meilleure écoute. Des actions événementielles et/ou digitales peuvent être envisagées tant en interne qu'à l'externe.",
    //     show: false,
    // },
];

export { accordionContent };