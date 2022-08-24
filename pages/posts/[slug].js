import Head from "next/head";
import React from "react";
import PostContent from "../../components/posts/post-detail/PostContent";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

const SinglePostPage = ({post}) => {
  return (
    <>
    <Head>
      <title>{post.title}</title>
      <meta name='description' content={post.excerpt}/>
    </Head>
      <PostContent post={post} />;
    </>
  );
};

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths(){

  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map(name=>name.replace(/\.md$/,''))
  return {
    paths:slugs.map(slug=>({params:{slug:slug}})),
    fallback: false
  }
}

export default SinglePostPage;
