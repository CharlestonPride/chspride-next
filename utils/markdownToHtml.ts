import fs from "fs";
import { join } from "path";
import remark from "remark";
import html from "remark-html";

export default async function markdownToHtml(markdownFile: string) {
  const markdownDirectory = join(process.cwd(), "markdown");
  const fullPath = join(markdownDirectory, `${markdownFile}.md`);
  const markdown = fs.readFileSync(fullPath, "utf8");
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
