import Head from 'next/head';
import FeaturedPosts from '../components/home-page/FeaturedPosts';
import Hero from '../components/home-page/Hero';
import { getFeaturedPostes } from '../lib/posts-util';
export const DUMMY_POSTS = [
  {
    slug: 'getting-started-nextjs',
    title: 'Getting started',
    image: 'getting-started-nextjs.png',
    date: '2022-02-02',
    excerpt: 'Next is thejhbjad jagdj ahjdbjbadbjabhdjhd safad',
  },
  {
    slug: 'getting-started-nextjs-2',
    title: 'Getting started-2',
    image: 'getting-started-nextjs-2.png',
    date: '2022-02-02',
    excerpt: 'Next is thejhbjad jagdj ahjdbjbadbjabhdjhd safad',
  },
  {
    slug: 'getting-started-nextjs-3',
    title: 'Getting started-3',
    image: 'getting-started-nextjs-3.png',
    date: '2022-02-02',
    excerpt: 'Next is thejhbjad jagdj ahjdbjbadbjabhdjhd safad',
  },
  {
    slug: 'getting-started-nextjs-4',
    title: 'Getting started-4',
    image: 'getting-started-nextjs-4.png',
    date: '2022-02-02',
    excerpt: 'Next is thejhbjad jagdj ahjdbjbadbjabhdjhd safad',
  },
];
export default function HomePage({ posts }) {
  return (
    <div>
      <Head>
        <title>
          Trymata | Digital Experience Insights, User Testing & Product
          Analytics
        </title>
        <meta
          name='description'
          content='Unleash your best digital experience with Trymata user testing and product analytics tools. See how users behave and think on your websites and apps.'
        />

        <meta property='og:url' content='https://trymata.com/' />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Trymata | Digital Experience Insights, User Testing & Product Analytics'
        />
        <meta
          property='og:description'
          content='Unleash your best digital experience with Trymata user testing and product analytics tools. See how users behave and think on your websites and apps.'
        />
        <meta property='og:image' content='https://ibb.co/09SBW04' />

        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='trymata.com' />
        <meta property='twitter:url' content='https://trymata.com/' />
        <meta
          name='twitter:title'
          content='Trymata | Digital Experience Insights, User Testing & Product Analytics'
        />
        <meta
          name='twitter:description'
          content='Unleash your best digital experience with Trymata user testing and product analytics tools. See how users behave and think on your websites and apps.'
        />
        <meta name='twitter:image' content='https://ibb.co/09SBW04' />

        <body>
          <div id='notifications'></div>
        </body>
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
