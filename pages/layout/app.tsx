import Head from "next/head";
import HeaderComponent from "../../components/Header";
import FooterComponent from "../../components/Footer";

const AppLayout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Trello Clone By Asam</title>
        <meta name="description" content="trello clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Cache-control" content="no-cache" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </>
  );
};

export default AppLayout;
