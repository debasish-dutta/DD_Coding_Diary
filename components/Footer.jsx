import React, { useState } from 'react'
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodepen, faGithub, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState('');
  
  const submitForm = async (e) => {
    e.preventDefault();
    console.log({email});
    if(!email) {
      console.log('Error');
      return toast.error('Please add email!!');
    }
    try {
      setLoading(true);
      const { data } = await axios.post(`http://localhost:3001/api/registration`, {email});
      setLoading(false);
      toast.success("Email sent! Please confirm your newsletter subscription.");
    } catch (err) {
      setLoading(false);
      toast.error(
        err.response
      );
    }
  };

  return (
    <footer className="relative bg-lightBlue-400 rounded-t pt-8 pb-6">
  <div className="container mx-auto md:px-4">
    <ToastContainer position='bottom-center' limit={1} />
    <div className="flex flex-wrap text-left lg:text-left">
      <div className="w-full lg:w-4/12 px-4">
      <div className="flex w-full flex-col gap-2 md:gap-4 px-4">
  <div className=''>
    <h4 className="font-semibold text-blueGray-700 text-3xl">Let's keep in touch!</h4>
    <p className="text-gray-800">
      <strong>Sign up for my newsletter </strong> to stay updated date with my content, news and special offers!
    </p>
  </div>
  <div className="shrink">
          <form className="w-full text-blueGray-600" 
                onSubmit={submitForm}>
            <label htmlFor="email" className="sr-only"> Email </label>

            <div className="p-2 sm:flex sm:items-center">
              <input
                className="h-6 w-full border-x-0 border-t-0 border-b-2 border-b-black/10 hover:border-b-black/50 focus:border-b-black  bg-transparent text-sm font-medium tracking-widest focus:text-blueGray-800 focus:font-bold"
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />

              <button
                className="mt-2 h-6 w-full px-2 py-0.5 text-blueGray-800 font-bold text-xs transition duration-500 ease-in-out rounded-full bg-blue-200 md:bg-transparent hover:bg-blue-600 hover:text-xs hover:text-white hover:shadow-md tracking-wide sm:ml-4 sm:mt-0 sm:w-auto sm:flex-shrink-0"
                type="submit"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Subscribe'}
              </button>
            </div>
          </form>
        </div>

 
</div>
      </div>
      <div className=" w-full lg:w-3/12 px-4 my-4 lg:m-0">
      <div className="w-full px-4 lg:mx-4">
      <span className="block uppercase text-blueGray-700 text-sm font-semibold">Socials</span>
      <div className="shrink m-4">
    <a href="https://www.twitter.com/ddmasterdon" target="_blank">
      <button className="align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal shadow-lg outline-none focus:outline-none hover:animate-[bounce_1.5s_ease-out_3]" type="button">
      {/* <a target="_blank" href="https://twitter.com" className="mx-2 h-12 w-12 align-center items-center justify-center rounded-full bg-white shadow-lg outline-none">
                              <svg className="w-10 h-10 fill-current  dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                  <path fill="#03A9F4" d="M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z"/>
                              </svg>
                          </a> */}
        <FontAwesomeIcon icon={faTwitter} className='fa-brands fa-twitter text-[1.75rem] text-blue-500'/>
      </button>
    </a>
    <a href="https://github.com/debasish-dutta" target="_blank">
      <button className="align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal shadow-lg outline-none focus:outline-none hover:animate-[bounce_1.5s_ease-out_3]" type="button">
        <FontAwesomeIcon icon={faGithub} className='fa-brands fa-github text-[1.75rem] text-gray-900'/>
      </button>
    </a>
    <a href="https://codepen.io/ddmasterdon" target="_blank">
      <button className="align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white font-normal shadow-lg outline-none focus:outline-none hover:animate-[bounce_1.5s_ease-out_3]" type="button">
        <FontAwesomeIcon icon={faCodepen} className='fa-brands fa-codepen text-[1.75rem] text-purple-700'/>
      </button>
    </a>
    <a href="https://linkedin.com/in/debasish-" target="_blank" >
      <button className="align-center h-10 w-10 items-center justify-center rounded-full bg-white font-normal shadow-lg outline-none focus:outline-none hover:animate-[bounce_1.5s_ease-out_3]" type="button">
        <FontAwesomeIcon icon={faLinkedinIn} className='fa-brands fa-youtube text-[1.75rem] text-blue-500'/>
      </button>
    </a>
    </div>
    <a className='mt-4 pt-4' href="https://www.buymeacoffee.com/ddmasterdon" target="_blank">
      <img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy Me A Coffee" style={{ height: '60px ', width: '217px'  }} />
    </a>
  </div>
      </div>
      <div className="w-full lg:w-5/12 px-4">
        <div className="flex flex-nowrap items-top mb-6">
          <div className="w-1/2 lg:w-5/12 mr-auto px-4  ">
            <span className="block uppercase text-blueGray-700 text-sm font-semibold my-2">Useful Links</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-black hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/">Home</a>
              </li>
              <li>
                <a className="text-black hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/about">About Me</a>
              </li>
              <li>
                <a className="text-black hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/blog">Blog</a>
              </li>
              <li>
                <a className="text-black hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/podcast">Podcast</a>
              </li>
            </ul>
          </div>
          <div className="w-1/2 lg:w-5/12 ml-auto px-4 ">
            <span className="block uppercase text-blueGray-700 text-sm font-semibold my-2">Others</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-black hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a className="text-black hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/terms"> Terms &amp; Conditions</a>
              </li>
              <li>
                <a className="text-black hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/sitemap.xml">Sitemap</a>
              </li>
              <li>
                <a className="text-black hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/contact">Contact Me</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer