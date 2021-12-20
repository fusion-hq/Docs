const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Fusion",
    tagline: "Open-source product analytics platfrom",
    url: "https://your-docusaurus-test-site.com",
    baseUrl: "/",
    onBrokenLinks: "ignore",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "facebook", // Usually your GitHub org/user name.
    projectName: "docusaurus", // Usually your repo name.

    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            // Please change this to your repo.
            editUrl:
              "https://github.com/facebook/docusaurus/edit/main/website/",
            routeBasePath: "/",
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
            editUrl:
              "https://github.com/facebook/docusaurus/edit/main/website/blog/",
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        announcementBar: {
          id: "support_us",
          content:
            '🌟  If you like Fusion, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/fusion-hq/fusion">GitHub</a> 🌟',
          backgroundColor: "#1890ff",
          textColor: "#091E42",
          isCloseable: false,
        },
        navbar: {
          title: "",
          logo: {
            alt: "My Site Logo",
            src: "img/fusion-logo-light.svg",
            srcDark: "img/fusion-logo.svg",
            href: "https://fusionhq.co/",
          },
          items: [
            // {
            //   type: 'doc',
            //   docId: 'intro',
            //   position: 'left',
            //   label: 'Tutorial',
            // },
            // {to: '/blog', label: 'Blog', position: 'left'},

            {
              to: "https://github.com/fusion-hq/fusion",
              label: "GitHub",
              position: "right",
            },
            {
              to: "https://discord.gg/VWeZanfhrA",
              label: "Discord",
              position: "right",
            },
            {
              to: "https://twitter.com/Fusion__HQ",
              label: "Twitter",
              position: "right",
            },
          ],
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "Docs",
              items: [
                {
                  label: "Getting started",
                  to: "/",
                },
                {
                  label: "User guides",
                  to: "/user-guides/overview",
                },
              ],
            },
            {
              title: "Community",
              items: [
                {
                  to: "https://discord.gg/VWeZanfhrA",
                  label: "Discord",
                },
                {
                  to: "https://twitter.com/Fusion__HQ",
                  label: "Twitter",
                },
              ],
            },
            {
              title: "Open-source",
              items: [
                {
                  to: "https://github.com/fusion-hq/fusion",
                  label: "GitHub",
                },
                {
                  to: "/contributing/requirement",
                  label: "Contribution Guide",
                },
              ],
            },
          ],
          copyright: `Copyright © 2021 Fusion`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
