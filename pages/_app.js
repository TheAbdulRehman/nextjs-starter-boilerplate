// import "../styles/globals.css"
// import { Work_Sans } from "@next/font/google"

// // importing the Work Sans font with
// // the Next.js 13 Font Optimization Feature
// const workSans = Work_Sans({
//   weight: ["400", "700"],
//   style: ["normal", "italic"],
//   subsets: ["latin"],
// })

// function MyApp({ Component, pageProps }) {
//   return <main className={workSans.className}>
//     <Component {...pageProps} />
//   </main>
// }

// export default MyApp

import ArticleLayout from "../components/Layouts/ArticleLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  // configure default article layout
  const articleLayout = (page) => {
    // pass `markdoc` props to ArticleLayout
    return (
      page.props.markdoc && (
        <ArticleLayout markdoc={page.props.markdoc}> {page}</ArticleLayout>
      )
    );
  };

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || articleLayout;

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
