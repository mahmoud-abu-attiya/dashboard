import React from 'react'
import Loading from './Loading'
import Navbar from './Navbar'
import { Sidebar } from './Sidebar'

export default function Layout({ children }) {
  // const loading = ()=>{
  //   window.addEventListener('load' , ()=>{
  //     load.style.display = "block"
  //   })
  // }
  
  return (
    <div className="layers">
      <Loading />
      <Navbar />
      <Sidebar />
      {children}
    </div>
  )
}
