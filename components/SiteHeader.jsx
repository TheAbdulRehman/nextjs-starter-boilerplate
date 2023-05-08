// const { default: Link } = require("next/link");
import Link from "next/link";
const SiteHeader = () => {
  return (
    <header className="site-header">
      <div className="wrapper flex justify-between items-center px-8 py-4 bg-black">
        <Link href={"/"}>
          <figure title="Site header">
            <h1 className="text-4xl font-bold text-gray-100">Zafar Iqbal</h1>
          </figure>
        </Link>
        {/* <nav className="site-nav">
          <ul className="links">
            <li className="link">
              <Link
                href={"/articles"}
                className="text-xl text-gray-100 underline"
              >
                Portfolio
              </Link>
            </li>
          </ul>
        </nav> */}
      </div>
    </header>
  );
};

export default SiteHeader;
