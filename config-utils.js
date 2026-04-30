import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function getDraftUrls() {
  const postsDir = path.join(__dirname, "src/posts");
  const draftUrls = [];

  try {
    const files = fs.readdirSync(postsDir);

    for (const file of files) {
      if (file.endsWith(".mdx")) {
        const filePath = path.join(postsDir, file);
        const content = fs.readFileSync(filePath, "utf-8");

        const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
        if (frontmatterMatch) {
          const frontmatter = frontmatterMatch[1];
          const draftMatch = frontmatter.match(/draft:\s*(true|false)/);

          if (draftMatch && draftMatch[1] === "true") {
            const titleMatch = frontmatter.match(/title:\s*(.+)/);
            if (titleMatch) {
              const title = titleMatch[1].replace(/['"]/g, "").trim();
              const slug = slugify(title);
              draftUrls.push(`/ripples/${slug}/`);
            }
          }
        }
      }
    }
  } catch (error) {
    console.warn("Could not read posts directory:", error.message);
  }

  return draftUrls;
}
