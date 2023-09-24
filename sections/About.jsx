'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10 `}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText
        title="|About Metaversus"
        textStyles="text-center"
      />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Lorem</span>
        ipsum dolor sit amet consectetur adipisicing
        <span className="font-extrabold text-white">elit.</span> Maxime,
        asperiores voluptas? Commodi, laboriosam!{' '}
        <span className="font-extrabold text-white">Maiores modi</span> aliquid,
        soluta esse nostrum corporis rem, fuga minus dolore sed eaque, ducimus
        reiciendis ratione facilis?5
      </motion.p>

      <motion.img
        src="/arrow-down.svg"
        alt="arrow down"
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="w-[148px] h-[28px] object-contain mt-[20px]"
      />
    </motion.div>
  </section>
);

export default About;
