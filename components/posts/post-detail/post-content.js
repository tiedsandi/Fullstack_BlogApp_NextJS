import Markdown from 'react-markdown';
import Image from 'next/image';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {dark} from 'react-syntax-highlighter/dist/cjs/styles/prism';

import PostHeader from './post-header';
import classes from './post-content.module.css';

function PostContent(props) {
  const {post} = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customComponents = {
    p: (props) => {
      const {children} = props;

      if (children.type === 'img') {
        const {src, alt} = children.props;

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${src}`}
              alt={alt}
              width={600}
              height={300}
              priority
            />
          </div>
        );
      }
      return <p>{children}</p>;
    },
    code: (props) => {
      const {children} = props;
      return <SyntaxHighlighter style={dark} language='javascript' children={children} />;
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
