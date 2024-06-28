import Markdown from 'react-markdown';
import Image from 'next/image';

import PostHeader from './post-header';
import classes from './post-content.module.css';

function PostContent(props) {
  const {post} = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customComponents = {
    // img: (props) => {
    //   const {src, alt} = props;
    //   return <Image src={`/images/posts/${post.slug}/${src}`} alt={alt} width={600} height={300} />;
    // },
    p: (props) => {
      const {children} = props;

      if (children.type === 'img') {
        const {src, alt} = children.props;

        return (
          <div className={classes.image}>
            <Image src={`/images/posts/${post.slug}/${src}`} alt={alt} width={600} height={300} />;
          </div>
        );
      }
      return <p>{children}</p>;
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <Markdown
        // customComponents={customComponents}
        components={customComponents}>
        {post.content}
      </Markdown>
    </article>
  );
}

export default PostContent;
