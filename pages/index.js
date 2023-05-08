import fs from "fs";
import glob from "glob-promise";
import matter from "gray-matter";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import SiteLayout from "../components/Layouts/SiteLayout";

export const getStaticProps = async () => {
  // Find all Markdown files in the /articles directory
  const ARTICLES_DIR = path.join(process.cwd(), "pages/articles");
  const articlesPaths = await glob("**/*.md", { cwd: ARTICLES_DIR });

  const articles = articlesPaths.map((articlePath) => {
    // get the slug from the markdown file name
    const slug = path.basename(articlePath, path.extname(articlePath));
    // read the markdown files
    const source = fs.readFileSync(
      path.join(process.cwd(), "pages/articles", articlePath),
      "utf8"
    );
    // use gray-matter to parse the article frontmatter section
    const { data } = matter(source);
    const { title, description, cover } = data;

    return {
      title,
      description,
      cover,
      slug,
    };
  });
  return {
    props: {
      articles,
    },
  };
};

const Articles = ({ articles }) => {
  return (
    <>
      <Head>
        <title>Zafar Iqbal Full Stack Laravel Developer</title>
        <meta name="description" content="View all my articles" />
      </Head>
      <section>
        <header className="articles-header container mx-auto">
          <div className="wrapper">
            <h4 className="font-bold text-xl mt-12">Hey there !</h4>
            <h2 className="font-extrabold text-4xl leading-snug">
              My name is Zafar Iqbal I am full stack <br />
              laravel Developer.
            </h2>
          </div>
        </header>
        <ul className="articles container mx-auto mb-12">
          {articles.map((article) => (
            <li key={article.slug} className="article">
              <header className="article-item-header mt-8">
                <Image
                  src={article.cover}
                  width={300}
                  height={200}
                  alt="cover"
                  className="h-auto w-2/4 object-cover rounded"
                />
                <div className="details mt-6 mb-6">
                  <h2 className="font-bold text-3xl mb-2">{article.title}</h2>
                  <p className="w-2/4 mt-1 mb-6"> {article.description} </p>
                  <Link
                    href={`/articles/${article.slug}`}
                    className="bg-black text-gray-100 px-6 py-3 rounded"
                  >
                    Read Case Study
                  </Link>
                </div>
              </header>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
export default Articles;

// define layout for articles page
Articles.getLayout = (page) => {
  return <SiteLayout> {page} </SiteLayout>;
};
