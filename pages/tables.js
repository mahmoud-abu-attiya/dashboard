import Head from 'next/head'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import Table from '../components/Table/Table'

export default function Tables() {
  return (
    <>
      <Head>
        <title>Teble</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="overlay"></div>
        <main className="dashboard">
          <div className="sidebarOverlay"></div>
          <div className="containt">
            <Table />
            <Footer />
          </div>
        </main>
      </Layout>
    </>
  )
}
