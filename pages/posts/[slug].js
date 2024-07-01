import {Fragment} from 'react';
import Head from 'next/head';

import PostContent from '../../components/posts/post-detail/post-content';
import {getPostData, getPostsFiles} from '../../lib/posts-util';

function PostDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name='description' content={props.post.excerpt} />
        <meta property='og:title' content={props.post.title} />
        <meta property='og:description' content={props.post.excerpt} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={props.post.url} />
        <meta property='og:image' content={props.post.image} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={props.post.title} />
        <meta name='twitter:description' content={props.post.excerpt} />
        <meta name='twitter:image' content={props.post.image} />
      </Head>
      <PostContent post={props.post} />;
    </Fragment>
  );
}

export function getStaticProps(context) {
  const {params} = context;
  const {slug} = params;

  const postData = getPostData(slug);

  return {
    props: {post: postData},
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({params: {slug: slug}})),
    fallback: false,
  };
}

export default PostDetailPage;
