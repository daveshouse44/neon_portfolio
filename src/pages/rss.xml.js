import rss from "@astrojs/rss";
import { formatRipples, slugify, urlPrefix } from "../ts/utils";

const rippleImportResult = import.meta.glob("../posts/*.{md,mdx}", {
  eager: true,
});
const ripples = formatRipples(Object.values(rippleImportResult));

export async function GET(context) {
  const items = ripples.map((ripple) => ({
    link: urlPrefix + slugify(ripple.data.title),
    title: ripple.data.title,
    pubDate: new Date(ripple.data.pubDate).toISOString().split("T")[0],
    description: ripple.data.description,
  }));

  return rss({
    stylesheet: "/rss/styles.xsl",
    title: "davetierney.dev",
    description:
      "Hello, I'm Dave Tierney. I'm a Web Developer, Culinarian, and Tinkerer. I like to build or fix things instead of buying them. I want to know how all the things work. I occasionally share thoughts on my endeavors by sending ripples into the ether",
    site: context.site,
    items,
  });
}
