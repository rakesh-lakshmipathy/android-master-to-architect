import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Android Master to Architect',
  tagline: 'A living Android engineering handbook by Rakesh Lakshmipathy',
  favicon: 'img/favicon.ico',
  future: {v4: true},
  url: 'https://rakesh-lakshmipathy.github.io',
  baseUrl: '/android-master-to-architect/',
  organizationName: 'rakesh-lakshmipathy',
  projectName: 'android-master-to-architect',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  i18n: {defaultLocale: 'en', locales: ['en']},
  presets: [[
    'classic',
    {
      docs: {sidebarPath: './sidebars.ts', editUrl: undefined},
      blog: false,
      theme: {customCss: './src/css/custom.css'},
    } satisfies Preset.Options,
  ]],
  themeConfig: {
    colorMode: {respectPrefersColorScheme: true},
    navbar: {
      title: 'Android Architect Guide',
      logo: {alt: 'Android Master to Architect architecture mark', src: 'img/architect-mark.svg'},
      items: [
        {type: 'docSidebar', sidebarId: 'androidBibleSidebar', position: 'left', label: 'Start learning'},
        {to: '/docs/roadmap', label: 'Master roadmap', position: 'left'},
        {to: '/docs/kotlin/value-classes', label: 'Kotlin deep dives', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {title: 'Learn', items: [{label: 'Start here', to: '/docs/intro'}, {label: 'Master roadmap', to: '/docs/roadmap'}]},
        {
          title: 'Explore the guide',
          items: [
            {label: 'Kotlin foundations', to: '/docs/kotlin/why-kotlin'},
            {label: 'Android internals', to: '/docs/android/system-architecture'},
            {label: 'Architecture', to: '/docs/architecture/clean-architecture'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Rakesh Lakshmipathy. Living learning edition.`,
    },
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula, additionalLanguages: ['kotlin', 'java']},
  } satisfies Preset.ThemeConfig,
};

export default config;
