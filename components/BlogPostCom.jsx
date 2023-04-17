import React from 'react'
import Link from 'next/link';
import moment from 'moment';
import SyntaxHighlighter from "react-syntax-highlighter";
import { anOldHope } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const BlogPostCom = ({ blogPost }) => {

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
      if (obj.type == 'link') {
        if (obj.openInNewTab) {
          modifiedText = (<a target="_blank" className='underline' key={index} href={obj.href}>{obj.children[0].text}</a>);
        } else {
          modifiedText = (<Link key={index} className='underline' href={obj.href}>{obj.children[0].text}</Link>);
        }
      }
      if (obj.code) {
        modifiedText = (<code className='p-1 mx-1 rounded bg-blue-300' key={index}>{text}</code>);
      }
    }

    switch (type) {
      case 'heading-one':
        return <h2 key={index} className="text-2xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h2>;
      case 'heading-two':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'paragraph':
        return <p key={index} className="mb-8 leading-relaxed">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'class':
        if (obj.children[0].type == 'code-block') {
            console.log(obj.children[0].children[0].text);
          return <SyntaxHighlighter language={obj.className} style={anOldHope}>
            {obj.children[0].children[0].text};
          </SyntaxHighlighter>
        }
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className='bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md mb-6'>
        <img
          src={blogPost.featuredImage.url}
          alt={blogPost.title}
          className='object-cover h-48 md:h-72 w-full rounded-t-lg'
        />
      </div>
      <div className='px-4 lg:px-0'>
        <div className='flex items-center  mb-8 w-full'>
          <div className='flex items-center font-medium text-gray-700'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 stroke-1.5 hover:fill-amber-500 hover:stroke-cyan-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
            <span className='cursor-default px-1 text-blue-700 hover:text-pink-600'>
              {moment(blogPost.createdAt).format('MMM DD, YYYY')}
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 stroke-1.5 hover:fill-amber-500 hover:stroke-cyan-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
            </svg>
            <div className='flex items-center'>
              {blogPost.categories.map((cat) => (
                <Link key={cat.slug} href={`/category/${cat.slug}`}>
                  <span className='cursor-pointer pl-0.5 pr-1.5 text-blue-700 hover:text-pink-600'>
                    {cat.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <h1 className='mb-8 text-3xl font-semibold'>{blogPost.title}</h1>

        {blogPost.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))
          return getContentFragment(index, children, typeObj, typeObj.type)
        })}
        {/* <article className='prose prose-slate mx-auto lg:prose-lg' 
          dangerouslySetInnerHTML={{ __html: blogPost.content.html }} /> */}
        {/* <article className="prose lg:prose-xl">
        { blogPost.cont }
        </article> */}
      </div>
    </div>
  )
}

export default BlogPostCom;