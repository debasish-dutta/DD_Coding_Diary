import React, { useState } from 'react'
import { NavBar, Footer, BottomFooter, Poly } from './';
import { getPostName, getPodcastName } from '../services';
import { useRouter } from 'next/router'
let img = false;

function nameSlice(path) {

}

function setTitle(path) {
  if(path.includes("blog/[slug]")) {
    img = false;
    return ("Blog Post");
  } 
  else if(path.includes("about")) {
    img = false;
    return ("About Me")
  } else if(path.includes("contact")) {
    img = false;
    return ("Contact Me")
  } else if(path.includes("podcast/[slug]")) {
    img = true;
    return ("Podcast Me")
  } else if(path.includes("podcast")) {
    img = false;
    return ("All Podcasts")
  } else if(path.includes("blog")) {
    img = false;
    return ("All Blogs")
  } else {
    img = false;
    return ("Home")
  }
}


const Layout = ({children}) => {
  const path = useRouter().pathname
  
  return (
    <>
      <NavBar />
      <Poly title={ setTitle(path)} cover={img ? children.props.Blogposts.featuredImage.url : ''} />
      {children}
      <Footer />
      <BottomFooter />
    </>
  )
}

export default Layout