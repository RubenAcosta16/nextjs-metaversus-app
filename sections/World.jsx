'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';

import { exploreWorlds } from '../constants';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col`}
    >
      <TypingText title="| People  on the world" textStyles="text-center" />
      <TitleText
        title={(
          <>
            Track your friends around you and invite them to play together in
            the same world
          </>
        )}
        textStyles="text-center"
      />

      {/* people divs */}
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-02.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>

        {/* pictures divs */}

        <div className="absolute top-[40%] left-[18%] max-w-[250px] h-[170px] p-[10px] bg-[#5d6680] rounded-[24px]">
          <img
            src={exploreWorlds[0].imgUrl}
            alt="people"
            className="w-full h-full object-cover rounded-[24px]"
          />

          <p className="text-white absolute bottom-0 left-1/4 text-[22px]">
            {exploreWorlds[0].title}
          </p>
        </div>

        <div className="absolute top-[20%] left-[70%] max-w-[250px] h-[170px] p-[10px] bg-[#5d6680] rounded-[24px]">
          <img
            src={exploreWorlds[1].imgUrl}
            alt="people"
            className="w-full h-full object-cover rounded-[24px]"
          />

          <p className="text-white absolute bottom-0 left-1/4 text-[22px]">
            {exploreWorlds[1].title}
          </p>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
