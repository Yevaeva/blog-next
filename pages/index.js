import Head from "next/head";
import FeaturedPosts from "../components/home-page/FeaturedPosts";
import Hero from "../components/home-page/Hero";
import { getFeaturedPostes } from "../lib/posts-util";
export const DUMMY_POSTS = [
  {
    slug: "getting-started-nextjs",
    title: "Getting started",
    image: "getting-started-nextjs.png",
    date: "2022-02-02",
    excerpt: "Next is thejhbjad jagdj ahjdbjbadbjabhdjhd safad",
  },
  {
    slug: "getting-started-nextjs-2",
    title: "Getting started-2",
    image: "getting-started-nextjs-2.png",
    date: "2022-02-02",
    excerpt: "Next is thejhbjad jagdj ahjdbjbadbjabhdjhd safad",
  },
  {
    slug: "getting-started-nextjs-3",
    title: "Getting started-3",
    image: "getting-started-nextjs-3.png",
    date: "2022-02-02",
    excerpt: "Next is thejhbjad jagdj ahjdbjbadbjabhdjhd safad",
  },
  {
    slug: "getting-started-nextjs-4",
    title: "Getting started-4",
    image: "getting-started-nextjs-4.png",
    date: "2022-02-02",
    excerpt: "Next is thejhbjad jagdj ahjdbjbadbjabhdjhd safad",
  },
];
export default function HomePage({ posts }) {
  return (
    <div>
      <Head>
        <title>Yevas Blog</title>
        <meta name="description" content="I post about programming and development" />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </div>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPostes();
  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 60,
  };
}
