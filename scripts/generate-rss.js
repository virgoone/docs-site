const { promises: fs, statSync } = require("fs");
const path = require("path");
const RSS = require("rss");
const matter = require("gray-matter");

function dateSortDesc(a, b) {
  const date1 = new Date(a.data.date);
  const date2 = new Date(b.data.date);
  if (date1 > date2) return -1;
  if (date1 < date2) return 1;
  return 0;
}

async function generate() {
  const feed = new RSS({
    title: "Lark CLI Blog",
    description: "Lark CLI news, updates, and announcements.",
    site_url: "https://dev.douni.one",
    feed_url: "https://dev.douni.one/feed.xml",
    image_url: "https://dev.douni.one/api/og",
  });

  const posts = await fs.readdir(path.join(__dirname, "..", "pages", "blog"));

  const sortedData = [];
  for (const post of posts) {
    if (post.startsWith("index.") || post.endsWith(".json")) continue;
    const file = await fs.readFile(
      path.join(__dirname, "..", "pages", "blog", post)
    );
    sortedData.push({ ...matter(file), slug: post.replace(".mdx", "") });
  }

  // sort by date
  sortedData.sort(dateSortDesc);
  const defaultLanguage = "en-US";

  for (const frontmatter of sortedData) {
    // get the og image size
    const stat = statSync(
      path.join(
        __dirname,
        "..",
        "public",
        frontmatter.data.ogImage || "og-image.png"
      )
    );
    const [slug, lan = ""] = frontmatter.slug.split(".");
    feed.item({
      title: frontmatter.data.title,
      url: `https://dev.douni.one${
        lan && lan !== defaultLanguage ? "/" + lan : ""
      }/blog/${slug}`, // intentionally including slash here
      date: frontmatter.data.date,
      description: frontmatter.data.description,
      language: lan,
      enclosure: {
        url:
          "https://dev.douni.one" + frontmatter.data.ogImage || "og-image.png", // intentionally omitting slash here
        type: "image/png",
        size: stat.size,
      },
    });
  }

  await fs.writeFile("./public/feed.xml", feed.xml({ indent: true }));
}

generate();
