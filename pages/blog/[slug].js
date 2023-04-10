import Head from 'next/head';
import React from 'react'
import { getPosts, getBlogPost } from '../../services';
import { AdjacentBlogPosts, BlogPostCom, Categories, PostWidget, Comments, CommentsForm, Loader, Poly } from '../../components/index';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

const BlogPost = ({ Blogposts }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <Loader />;
    }
    var categories = [];
    Blogposts.categories.map((cat) => categories.push(cat.name))
    console.log()
    return (
        <>
      {/* <Poly title={ Blogposts.title } cover={ Blogposts.featuredImage.url } /> */}
    <div className='lg:px-10 lg:m-10 md:px-8 md:m-8 sm:px-4 sm:m-6 px-2 m-2'>
        <Head>
            <title>{Blogposts.title} || DD Coding Diary</title>
        </Head>
        <NextSeo
            title={Blogposts.title + " || DD Coding Diary"}
            description={Blogposts.excerpt}
            canonical=""
            openGraph={{
                type: 'article',
                article: {
                    publishedTime: Blogposts.createdAt,
                    modifiedTime: Blogposts.updatedAt,
                    tags: categories,
                },
                url: "https://www.ddcodingdiary.com/" + Blogposts.slug,
                images: {
                    url: Blogposts.featuredImage.url,
                    width: Blogposts.featuredImage.height,
                    height: Blogposts.featuredImage.width,
                    alt: Blogposts.title,
                }
            }}
        />
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            <div className='col-span-1 lg:col-span-8'>
                {/* <BlogPostDetails /> */}
                <BlogPostCom blogPost={Blogposts}/>
                <AdjacentBlogPosts slug={Blogposts.slug} createdAt={Blogposts.createdAt} />
                <CommentsForm slug={Blogposts.slug}/>
                <Comments slug={Blogposts.slug}/>
            </div>
            <div className='col-span-1 lg:col-span-4'>
                <div className='relative lg:sticky top-8'>
                    <PostWidget slug={Blogposts.slug} categories={Blogposts.categories.map((cat) => cat.slug)} />
                    <Categories />
                </div>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default BlogPost;

export async function getStaticProps({ params }) {
    const data = await getBlogPost(params.slug);
    return {
        props: { 
            Blogposts: data, 
        },
    revalidate: 25,
    };
  }

export async function getStaticPaths() {
    const Blogposts = await getPosts();
    return {
      paths: Blogposts.map(({ node: { slug } }) => ({ params: { slug } })),
      fallback: false,
    };
}