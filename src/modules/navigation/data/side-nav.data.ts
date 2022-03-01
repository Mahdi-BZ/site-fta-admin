import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSections: SideNavSection[] = [
    {
        text: 'CORE',
        items: ['dashboard'],
    },
    {
        text: 'INTERFACE',
        items: ['layouts', 'pages'],
    },
    {
        text: 'ADDONS',
        items: ['charts', 'tables'],
    },
];

export const sideNavItems: SideNavItems = {
    dashboard: {
        icon: 'tachometer-alt',
        text: 'Dashboard',
        link: '/dashboard',
    },
    layouts: {
        icon: 'columns',
        text: 'Layouts',
        submenu: [
            {
                text: 'Static Navigation',
                link: '/dashboard/static',
            },
            {
                text: 'Light Sidenav',
                link: '/dashboard/light',
            },
        ],
    },
    pages: {
        icon: 'book-open',
        text: 'Pages',
        submenu: [
            {
                text: 'Authentication',
                submenu: [
                    {
                        text: 'Login',
                        link: '/auth/login',
                    },
                    {
                        text: 'Register',
                        link: '/auth/register',
                    },
                    {
                        text: 'Forgot Password',
                        link: '/auth/forgot-password',
                    },
                ],
            },
            {
                text: 'Error',
                submenu: [
                    {
                        text: '401 Page',
                        link: '/error/401',
                    },
                    {
                        text: '404 Page',
                        link: '/error/404',
                    },
                    {
                        text: '500 Page',
                        link: '/error/500',
                    },
                ],
            },
            {
                text: 'MAJ_Pages',
                submenu: [
                    {
                        text: 'FTA',
                        submenu: [
                            {
                                text: 'Commission Fédérale',
                                link: '/frontpages/commissionfed',
                            },
                            {
                                text: 'Bureau Fédéral',
                                link: '/frontpages/bureaufed',
                            },
                            {
                                text: 'Ligue',
                                link: '/frontpages/ligue',
                            },
                            {
                                text: 'Centre de Formation',
                                link: '/frontpages/centreformation',
                            },
                            {
                                text: 'Club',
                                link: '/frontpages/club',
                            },
                            {
                                text: 'Documents Administratif',
                                link: '/frontpages/document',
                            },
                        ],
                    },
                    {
                        text: 'competition',
                        submenu: [
                            {
                                text: 'Session de compétition',
                                link: '/frontpages/liste_competition',
                            },
                            {
                                text: 'Ajouter Compétition',
                                link: '/frontpages/competition',
                            },
                            {
                                text: 'Calendrier',
                                link: '/frontpages/calendrier',
                            },
                            {
                                text: 'Catégorie',
                                link: '/frontpages/categorie',
                            },
                            {
                                text: 'Minimas',
                                link: '/frontpages/minimas',
                            },
                            {
                                text: 'Masters',
                                link: '/frontpages/masters',
                            },
                            {
                                text: 'Records',
                                link: '/frontpages/records',
                            },
                            {
                                text: 'Resultat',
                                link: '/frontpages/resultat',
                            },
                        ],
                    },
                    {
                        text: 'engagement-licence',
                        link: '/frontpages/engagement-licence',
                    },
                    {
                        text: 'formation',
                        link: '/frontpages/formation',
                    },
                    {
                        text: 'Actualite',
                        link: '/frontpages/actualite',
                    },
                    {
                        text: 'Athle-sante',
                        link: '/frontpages/athle-sante',
                    },
                    {
                        text: 'Ajout Athléte',
                        link: '/frontpages/athlete',
                    },
                    {
                        text: 'Modification Athlete',
                        link: '/frontpages/athlemodif',
                    },
                    {
                        text: 'Galerie',
                        link: '/frontpages/galerie',
                    },
                ],
            },
        ],
    },
    charts: {
        icon: 'chart-area',
        text: 'Charts',
        link: '/charts',
    },
    tables: {
        icon: 'table',
        text: 'Tables',
        link: '/tables',
    },
};
