import fs from "fs";
import glob from "glob-promise";
import matter from "gray-matter";
import Head from "next/head";
// import Image from "next/image";
// import Link from "next/link";
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

const portfolioData = [
  {
    title: "Portfolio Item 1",
    description:
      "This is a longer description for the first portfolio item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At labore inventore nostrum maxime impedit, reiciendis veniam delectus corporis vitae porro natus ratione tempore pariatur cum expedita minus ipsum doloribus officia! Lorem ipsum dolor sit amet, consectetur adipisicing elit. At labore inventore nostrum maxime impedit, reiciendis veniam delectus corporis vitae porro natus ratione tempore pariatur cum expedita minus ipsum doloribus officia!",
    imgUrl: "https://source.unsplash.com/collection/your_collection_id_here/1",
  },
  {
    title: "Portfolio Item 2",
    description:
      "This is a longer description for the second portfolio item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At labore inventore nostrum maxime impedit, reiciendis veniam delectus corporis vitae porro natus ratione tempore pariatur cum expedita minus ipsum doloribus officia! Lorem ipsum dolor sit amet, consectetur adipisicing elit. At labore inventore nostrum maxime impedit, reiciendis veniam delectus corporis vitae porro natus ratione tempore pariatur cum expedita minus ipsum doloribus officia!",
    imgUrl: "https://source.unsplash.com/collection/your_collection_id_here/2",
  },
  {
    title: "Portfolio Item 3",
    description:
      "This is a longer description for the second portfolio item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At labore inventore nostrum maxime impedit, reiciendis veniam delectus corporis vitae porro natus ratione tempore pariatur cum expedita minus ipsum doloribus officia! Lorem ipsum dolor sit amet, consectetur adipisicing elit. At labore inventore nostrum maxime impedit, reiciendis veniam delectus corporis vitae porro natus ratione tempore pariatur cum expedita minus ipsum doloribus officia!",
    imgUrl: "https://source.unsplash.com/collection/your_collection_id_here/3",
  },
];

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
        {/* <ul className="articles container mx-auto mb-12">
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
        </ul> */}
        <div className="container mx-auto mt-20 px-4">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-x-12 gap-y-20">
            {portfolioData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center"
              >
                <div className="md:w-1/2">
                  <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                  <p className="mb-4 w-3/4">{item.description}</p>
                  <button className="bg-black text-white rounded px-4 py-2">
                    View Details
                  </button>
                </div>
                <div className="md:w-1/2">
                  <img
                    className="w-full h-96 md:h-[320px] object-cover rounded-md"
                    src={item.imgUrl}
                    alt={item.title}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Articles;

// define layout for articles page
Articles.getLayout = (page) => {
  return <SiteLayout> {page} </SiteLayout>;
};
