import '../styles/globals.scss'
import Router from 'next/router'

export default function MyApp({ Component, pageProps }) {
  Router.events.on("routeChangeStart" , ()=>{
    const load = document.getElementById("loading")
    load.style.display = "grid"
  })
  Router.events.on("routeChangeComplete" , ()=>{
    const load = document.getElementById("loading")
    load.style.display = "none"
  })
  return <Component {...pageProps} />
}


