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
        {
          type: 'category',
          label: 'Types and control flow',
          collapsed: false,
          items: [
            {type: 'doc', id: 'kotlin/types-and-control-flow', label: 'Chapter overview'},
            'kotlin/types-and-variables',
            'kotlin/expressions-and-control-flow',
            'kotlin/equality',
            'kotlin/smart-casts',
            'kotlin/types-control-android',
          ],
        },
        'kotlin/null-safety',
        {
          type: 'category',
          label: 'Functions and functional Kotlin',
          collapsed: true,
          items: [
            {type: 'doc', id: 'kotlin/functions-overview', label: 'Chapter overview'},
            'kotlin/functions',
            'kotlin/lambdas',
            'kotlin/higher-order-functions',
            'kotlin/inline-functions',
            'kotlin/reified-types',
            'kotlin/functional-kotlin-android',
            'kotlin/functional-kotlin-interview',
          ],
        },
        {type: 'category', label: 'Classes and type modeling', items: ['kotlin/value-classes']},
      ],
    },
    {type: 'category', label: 'Parts II-X - Android to Architect', items: ['roadmap']},
  ],
};

export default sidebars;
