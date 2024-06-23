import {Fragment} from 'react';
import {getFeaturedPosts} from '../lib/posts-util';

import Hero from '../components/home-page/Hero';
import FeaturedPosts from '../components/home-page/featured-posts';

function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
