import Head from 'next/head'
import SignIn from "../components/Signin/SignIn"

const signIn = () => {
  return (
    <>
      <Head>
        <title>Nees</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignIn />
    </>
  )
}

export default signIn