import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { slugify, urlPrefix } from "../ts/utils";

export async function GET(context) {
  const blog = await getCollection("posts");
  // Sort by pubDate in descending order (most recent first)
  blog.sort((a, b) => new Date(b.data.pubDate) - new Date(a.data.pubDate));
  // Filter out drafts
  const publishedBlog = blog.filter((post) => !post.data.draft);
  console.log("Blog collection:", publishedBlog);

  return rss({
    stylesheet: "/rss/styles.xsl",
    title: "davetierney.dev",
    description:
      "Hello, I'm Dave Tierney. I'm a Web Developer, Culinarian, and Tinkerer. I like to build or fix things instead of buying them. I want to know how all the things work. I occasionally share thoughts on my endeavors by sending ripples into the ether",
    site: context.site,
    items: publishedBlog.map((ripple) => ({
      link: urlPrefix + slugify(ripple.data.title),
      title: ripple.data.title,
      pubDate: new Date(ripple.data.pubDate).toISOString().split("T")[0],
      description: ripple.data.description,
      customData: ripple.data.updated
        ? `<updated>${new Date(ripple.data.updated).toISOString().split("T")[0]}</updated>`
        : undefined,
    })),
  });
}
