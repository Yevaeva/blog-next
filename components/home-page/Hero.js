import React from "react";
import classes from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/yeva.jpeg"
          alt="my image"
          width={300}
          height={300}
        />
      </div>
      <h1>HI, I am Yeva</h1>
      <p>
        I blog about web development - esoecially frontend frameworks like
        React.
      </p>
    </section>
  );
};

export default Hero;
