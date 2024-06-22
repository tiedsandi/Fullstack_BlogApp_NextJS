import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/Coach-Justin.jpg'
          alt='An image showing Sandi'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Sandi</h1>
      <p>I'm web development - especially frontend frameworks like React.</p>
    </section>
  );
}

export default Hero;
