import React from 'react'
import Navigation from './Navigation'
import { Outlet } from 'react-router-dom'
import Contact_us from './Contact_us'

export default function Layout() {
  return (
    <>
      <Navigation/>
      <Outlet/>
      <Contact_us/>
    </>
  )
}
