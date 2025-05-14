'use client';
import React, { useState } from 'react'
import Nav from './Nav'
import Mobilenavbar from './Mobilenavbar'

const Responsivenavbar = () => {
  const[showNav,setShowNav]=useState(false);
  const handNavShow =()=>setShowNav(true)
  const handleCloseNav = ()=> setShowNav(false);
  return (
    <>
    
    <Nav openNav={handNavShow}/>
    <Mobilenavbar showNav={showNav} closeNav={handleCloseNav}/>
    
    
    
    </>
  )
}

export default Responsivenavbar