import { ROUTER_KEYS } from './app-keys.const';

export const HeaderConst = [
  { title: 'common.nav_home', position: 0, path: ROUTER_KEYS.HOME },
  {
    title: 'common.nav_services',
    position: 0,
    description: [
      { title: 'Sub-Menu 1' },
      {
        title: 'Sub-Menu 2',
        description: [
          { title: 'Turpis consectetur 3' },
          { title: 'Senectus cursus pretium malesuada.' },
          { title: 'Luctus neque frin 4' }
        ]
      },
      { title: 'Sub-Menu 3' },
      { title: 'Sub-Menu 4' }
    ]
  },

  {
    title: 'common.nav_about',
    position: 0,
    description: [
      { title: 'Sub-Menu 1' },
      {
        title: 'Sub-Menu 2',
        description: [
          { title: 'Turpis consectetur 3' },
          { title: 'Senectus cursus pretium malesuada.' },
          { title: 'Luctus neque frin 4' }
        ]
      },
      { title: 'Sub-Menu 3' },
      { title: 'Sub-Menu 4' }
    ]
  },
  { title: 'common.nav_book', position: 0 },
  {
    title: 'common.nav_shop',
    position: 0,
    description: [
      { title: 'Sub-Menu 1' },
      { title: 'Sub-Menu 2' },
      { title: 'Sub-Menu 3' },
      { title: 'Sub-Menu 4' }
    ]
  },
  { title: 'common.nav_blog', position: 0 },
  { title: 'common.nav_contact', position: 0 }
];
