import {Fragment} from 'react';
import Head from 'next/head';

import AllPosts from '../../components/posts/all-posts';
import {getAllPosts} from '../../lib/posts-util';

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name='description' content='A list of all proggaming things' />
        <meta name='og:title' content='All Posts' />
        <meta name='og:description' content='All posts' />
        <meta name='twitter:title' content='All Posts' />
        <meta name='twitter:description' content='All posts' />
      </Head>
      <AllPosts posts={props.posts} />;
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
