import Markdown from 'react-markdown';

import PostHeader from './post-header';
import classes from './post-content.module.css';

const DUMMY_POST = {
  slug: 'first-post',
  title: 'First Post',
  image: 'first-post.jpg',
  excerpt: 'This is the first post',
  date: '2021-01-01',
  content: '# This is the first post',
};
function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <Markdown>{DUMMY_POST.content}</Markdown>
    </article>
  );
}

export default PostContent;
