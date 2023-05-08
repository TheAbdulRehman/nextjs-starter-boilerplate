const { default: SiteHeader } = require("../SiteHeader");
const SiteLayout = ({ children }) => {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
    </>
  );
};

export default SiteLayout;
