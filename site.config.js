module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: 'a199bad26f2c43b4a4bb9a7eec9ca6eb',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'ATC Workapce',
  domain: 'https://wool-effect-528.notion.site/HI-ATC-a199bad26f2c43b4a4bb9a7eec9ca6eb',
  author: 'ATC',

  // open graph metadata (optional)
  description: 'Example site description',
  socialImageTitle: 'ATC',
  socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  twitter: 'zhaozirui3',
  github: 'ATC',
  instagram: 'atc12138',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null
}
