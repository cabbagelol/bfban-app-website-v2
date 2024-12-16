import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'BFBAN APP',
    favicon: 'images/logo.png',
    url: 'https://bfban-app.cabbagelol.net',
    baseUrl: '/',

    organizationName: 'cabbagelol',
    projectName: 'bfban-app-website-v2',
    deploymentBranch: 'cabbagelol.github.io',
    trailingSlash: false,

    onBrokenLinks: 'ignore',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
        defaultLocale: 'en',
        locales: ['zh', 'en'],
        localeConfigs: {
            en: {
                label: 'English',
                path: 'en'
            },
            zh: {
                label: '简体中文',
                path: 'zh-Hans'
            },
        }
    },

    stylesheets: [
        {
            href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css',
            rel: "stylesheet",
            crossOrigin: "anonymous"
        }, {
            href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css'
        }
    ],

    scripts: [
        {
            src: '/script/baidu.js'
        },
        {
            src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js',
            crossOrigin: "anonymous"
        }
    ],

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                },
                blog: {
                    blogDescription: "可爱",
                    blogSidebarCount: 'ALL',
                    blogSidebarTitle: "📰 Blog",
                    showReadingTime: true,
                    readingTime: ({content, frontMatter, defaultReadingTime}) => defaultReadingTime({
                        content,
                        options: {wordsPerMinute: 300}
                    }),
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'ignore',
                },
                theme: {
                    customCss: ['./src/css/custom.css', './src/css/style.css'],
                },
            } satisfies Preset.Options,
        ],
    ],


    themeConfig: {
        docs: {
            sidebar: {
                hideable: false,
                autoCollapseCategories: false,
            },
        },
        navbar: {
            title: 'BFBAN APP',
            logo: {
                alt: 'logo',
                src: 'images/logo.png',
                className: 'rounded-4'
            },
            items: [
                {
                    to: '/version',
                    position: 'left',
                    label: 'Version',
                },
                {
                    to: '/blog',
                    label: 'Blog',
                    position: 'left',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'docsSidebar',
                    position: 'left',
                    label: 'DevDocs',
                },
                {
                    label: 'More',
                    position: 'left',
                    items: [
                        {
                            label: 'BFBAN',
                            href: 'https://bfban.com',
                        },
                        {
                            label: 'App 网站',
                            href: 'https://bfban-app.cabbagelol.net',
                        },
                        {
                            label: 'App 仓库',
                            href: 'https://github.com/bfban/bfban-app-mobile',
                        },
                        {
                            label: 'APP 文档仓库',
                            href: 'https://github.com/cabbagelol/bfban-app-mobile-docs',
                        },
                        {
                            label: 'bfban-exterior-design',
                            href: 'https://github.com/BFBAN/exterior-design',
                        },
                        {
                            label: 'Contact',
                            href: '/contact',
                        },
                    ],
                },
                {
                    type: 'localeDropdown',
                    position: 'right',
                },
            ],
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
        algolia: {
            appId: 'JCBV6EWND9',
            apiKey: 'ff9ff5081f8c5dbc5f184c076430ee47',
            indexName: 'crawler_bfban-app-website',
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
