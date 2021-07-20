const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'FlowBuild',
  tagline: 'Let\'s build some workflows',
  url: 'https://flow-build.github.io/#/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'flow-build', // Usually your GitHub org/user name.
  projectName: 'flow-build.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Flowbuild',
      logo: {
        alt: 'Flowbuild',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'documentation/instalacao',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'doc',
          docId: 'resources/blueprints',
          position: 'left',
          label: 'Resources',
        },
        {
          type: 'doc',
          docId: 'engine/functions/abortProcess',
          position: 'left',
          label: 'Engine',
        },
        {
          type: 'doc',
          docId: 'tutorial/configuracao',
          position: 'left',
          label: 'Tutorial',
        },
        {
          href: 'https://github.com/flow-build',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} FDTE. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/flow-build/flow-build.github.io',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/flow-build/flow-build.github.io',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
