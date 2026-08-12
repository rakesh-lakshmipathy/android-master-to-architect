import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  androidBibleSidebar: [
    'intro',
    'roadmap',
    {
      type: 'category',
      label: 'Part I - Kotlin Foundations',
      collapsed: false,
      items: [
        'kotlin/why-kotlin',
        'kotlin/types-and-control-flow',
        'kotlin/null-safety',
        {type: 'category', label: 'Classes and type modeling', items: ['kotlin/value-classes']},
      ],
    },
    {type: 'category', label: 'Parts II-X - Android to Architect', items: ['roadmap']},
  ],
};

export default sidebars;
