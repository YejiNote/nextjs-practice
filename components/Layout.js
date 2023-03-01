import Head from "next/head";
import Nav from "./Nav";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta name="My Blog powered by Next js" />
        <meta content="My Blog powered by Next js" />
      </Head>
      <Nav />
      <div>{children}</div>
    </>
  );
};

export default Layout;
