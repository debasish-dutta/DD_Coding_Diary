import React, { useState } from 'react'
import { NavBar, Footer, BottomFooter, Poly } from './';
import imga from '../public/bg.jpg';
import { useRouter } from 'next/router'
let img = false;

function setTitle(path) {
  if(path.includes("blog/[slug]")) {
    img = true;
    return (  "Blog Post");
  } 
  else if(path.includes("about")) {
    return (  "About Me")
  } else if(path.includes("contact")) {
    return (  "Contact Me")
  } else if(path.includes("podcast/[slug]")) {
    img = true;
    return (  "Podcast Me")
  } else if(path.includes("podcast")) {
    return (  "All Podcasts")
  } else if(path.includes("blog")) {
    return (  "All Blog")
  } else {
    return (  "Home")
  }
}


const Layout = ({children}) => {
  const path = useRouter().pathname
  
  return (
    <>
      <NavBar />
      {/* <Poly title={ setTitle(path)} cover={img ? children.props.Blogposts.featuredImage.url || `https://images.unsplash.com/photo-1594904351111-a072f80b1a71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80` : ''} /> */}
      {children}
      <Footer />
      <BottomFooter />
    </>
  )
}

export default Layout