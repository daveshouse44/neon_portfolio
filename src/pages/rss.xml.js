import rss from "@astrojs/rss";
import { formatRipples, slugify, urlPrefix } from "../ts/utils";

const rippleImportResult = import.meta.glob("../posts/*.{md,mdx}", {
  eager: true,
});
console.log(rippleImportResult);
const ripples = formatRipples(Object.values(rippleImportResult));
console.log(ripples);

export async function GET(context) {
  const items = ripples.map((ripple) => ({
    link: urlPrefix + slugify(ripple.frontmatter.title),
    title: ripple.frontmatter.title,
    pubDate: ripple.frontmatter.date,
    description: ripple.frontmatter.description,
  }));

  return rss({
    stylesheet: "/rss/styles.xsl",
    title: "Dave Tierney's Ripples",
    description: "Sending ripples into the ether",
    site: context.site,
    items,
  });
}
