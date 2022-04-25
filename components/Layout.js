import React from 'react'
import Navbar from './Navbar'
import { Sidebar } from './Sidebar'

export default function Layout({ children }) {
  return (
    <div className="layers">
      <Navbar />
      <Sidebar />
      {children}
    </div>
  )
}
