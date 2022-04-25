import Head from "next/head";
import Content from "../components/dashboard/Content";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="overlay"></div>
        <main className="dashboard">
          <div className="sidebarOverlay"></div>
          <div className="containt">
            <Content />
          </div>
        </main>
      </Layout>
    </>
  );
}
