const navbarItems = [
    {
        id: 1,
        name: "Présentation",
        href: "#qui_sommes_nous",
        current: true,
    },
    {
        id: 2,
        name: "Offre",
        href: "#nos_valeurs",
        current: false,
    },
    {
        id: 3,
        name: "Références",
        href: "#companies",
        current: false,
        offset: -150,
    },
    {
        id: 4,
        name: "Équipe",
        href: "#equipe",
        current: false,
        offset: -150,
    },
    {
        id: 5,
        name: "FAQ",
        href: "#faq",
        current: false,
        offset: -150,
    },
];

const footerItems = [
    {
        id: 1,
        name: "Accueil",
        route: "#main_container",
    },
    {
        id: 2,
        name: "Présentation",
        route: "#qui_sommes_nous",
    },
    {
        id: 3,
        name: "Offre",
        route: "#nos_valeurs",
        offset: 0,
    },
    {
        id: 4,
        name: "Références",
        route: "#companies",
    },
    {
        id: 5,
        name: "Équipe",
        route: "#equipe",
    },
    {
        id: 6,
        name: "FAQ",
        route: "#faq",
    },
];

export { navbarItems, footerItems };
