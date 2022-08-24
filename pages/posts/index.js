import Head from "next/head";
import React from "react";
import { DUMMY_POSTS } from "..";
import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../lib/posts-util";

const AllPostsPage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>All posts</title>
        <meta
          name="description"
          content="A list of all programming-related turtorials"
        />
      </Head>{" "}
      <AllPosts posts={posts} />
    </>
  );
};

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
