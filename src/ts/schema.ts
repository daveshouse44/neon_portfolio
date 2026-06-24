const SITE_URL = "https://davetierney.dev";
const WEBSITE_ID = `${SITE_URL}/#website`;
const PERSON_ID = `${SITE_URL}/me/#person`;

export type SchemaNode = {
  "@context"?: "https://schema.org";
  "@type": string;
  [key: string]: unknown;
};

interface WebPageOptions {
  path: string;
  title: string;
  description: string;
}

interface ProfilePageOptions extends WebPageOptions {
  sameAs?: string[];
}

interface BlogOptions extends WebPageOptions {
  path?: string;
}

interface CollectionPageOptions extends WebPageOptions {
  about: string;
}

interface BlogPostingOptions {
  title: string;
  description: string;
  pubDate: string | Date;
  updated?: string | Date;
  author: string;
  category: string;
  slug: string;
  coverSrc?: string;
  coverAlt?: string;
}

interface ItemListEntry {
  name: string;
  description?: string;
  url?: string;
  [key: string]: unknown;
}

interface ItemListOptions {
  id: string;
  name: string;
  description: string;
  path: string;
  items: ItemListEntry[];
}

interface WebApplicationEntry {
  name: string;
  description: string;
  url: string;
  image?: string;
}

function toAbsoluteUrl(pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }

  return new URL(pathOrUrl, SITE_URL).toString();
}

function toIsoDate(value: string | Date): string {
  return new Date(value).toISOString();
}

function getPerson(): SchemaNode {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Dave Tierney",
    url: `${SITE_URL}/me/`,
    email: "mailto:me@davetierney.dev",
    jobTitle: "Webmaster & Web Developer",
  };
}

export function createWebSiteSchema(): SchemaNode {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: "Dave Tierney",
    url: `${SITE_URL}/`,
    inLanguage: "en-US",
    publisher: {
      "@id": PERSON_ID,
    },
  };
}

export function createWebPageSchema({
  path,
  title,
  description,
}: WebPageOptions): SchemaNode {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${toAbsoluteUrl(path)}#webpage`,
    url: toAbsoluteUrl(path),
    name: title,
    description,
    inLanguage: "en-US",
    isPartOf: {
      "@id": WEBSITE_ID,
    },
  };
}

export function createProfilePageSchema({
  path,
  title,
  description,
  sameAs = [],
}: ProfilePageOptions): SchemaNode {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${toAbsoluteUrl(path)}#profilepage`,
    url: toAbsoluteUrl(path),
    name: title,
    description,
    isPartOf: {
      "@id": WEBSITE_ID,
    },
    mainEntity: {
      ...getPerson(),
      sameAs,
    },
  };
}

export function createBlogSchema({
  path = "/ripples/",
  title,
  description,
}: BlogOptions): SchemaNode {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${toAbsoluteUrl(path)}#blog`,
    url: toAbsoluteUrl(path),
    name: title,
    description,
    inLanguage: "en-US",
    publisher: {
      "@id": PERSON_ID,
    },
    isPartOf: {
      "@id": WEBSITE_ID,
    },
  };
}

export function createCollectionPageSchema({
  path,
  title,
  description,
  about,
}: CollectionPageOptions): SchemaNode {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${toAbsoluteUrl(path)}#collectionpage`,
    url: toAbsoluteUrl(path),
    name: title,
    description,
    inLanguage: "en-US",
    isPartOf: {
      "@id": `${toAbsoluteUrl("/ripples/")}#blog`,
    },
    about: {
      "@type": "Thing",
      name: about,
    },
  };
}

export function createBlogPostingSchema({
  title,
  description,
  pubDate,
  updated,
  author,
  category,
  slug,
  coverSrc,
  coverAlt,
}: BlogPostingOptions): SchemaNode {
  const postUrl = toAbsoluteUrl(`/ripples/${slug}/`);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${postUrl}#blogposting`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${postUrl}#webpage`,
    },
    headline: title,
    description,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@id": PERSON_ID,
    },
    datePublished: toIsoDate(pubDate),
    dateModified: toIsoDate(updated ?? pubDate),
    articleSection: category,
    url: postUrl,
    image: coverSrc
      ? {
          "@type": "ImageObject",
          url: toAbsoluteUrl(coverSrc),
          description: coverAlt ?? title,
        }
      : undefined,
  };
}

export function createItemListSchema({
  id,
  name,
  description,
  path,
  items,
}: ItemListOptions): SchemaNode {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${toAbsoluteUrl(path)}#${id}`,
    url: toAbsoluteUrl(path),
    name,
    description,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Thing",
        ...item,
        url: item.url ? toAbsoluteUrl(item.url) : undefined,
      },
    })),
  };
}

export function createWebApplicationSchemas(
  path: string,
  apps: WebApplicationEntry[],
): SchemaNode[] {
  return apps.map((app) => ({
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${toAbsoluteUrl(path)}#webapp-${encodeURIComponent(app.name.toLowerCase())}`,
    name: app.name,
    description: app.description,
    url: toAbsoluteUrl(app.url),
    applicationCategory: "WebApplication",
    creator: {
      "@id": PERSON_ID,
    },
    image: app.image ? toAbsoluteUrl(app.image) : undefined,
    isPartOf: {
      "@id": WEBSITE_ID,
    },
  }));
}
