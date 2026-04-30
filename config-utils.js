import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Get URLs of draft posts to exclude from sitemap
 * Reads MDX files from src/posts and checks frontmatter for draft: true
 * @returns {string[]} Array of URLs for draft posts
 */
export function getDraftUrls() {
  const postsDir = path.join(__dirname, "src/posts");
  const draftUrls = [];

  try {
    const files = fs.readdirSync(postsDir);

    for (const file of files) {
      if (file.endsWith(".mdx")) {
        const filePath = path.join(postsDir, file);
        const content = fs.readFileSync(filePath, "utf-8");

        // Extract frontmatter using regex
        const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
        if (frontmatterMatch) {
          const frontmatter = frontmatterMatch[1];
          const draftMatch = frontmatter.match(/draft:\s*(true|false)/);

          if (draftMatch && draftMatch[1] === "true") {
            // Generate the URL slug from filename
            const slug = file.replace(".mdx", "");
            draftUrls.push(`https://davetierney.dev/ripples/${slug}`);
          }
        }
      }
    }
  } catch (error) {
    console.warn("Could not read posts directory:", error.message);
  }

  return draftUrls;
}
