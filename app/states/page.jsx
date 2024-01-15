"use client"

import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

//Hooks
import { useWindowSize } from "@uidotdev/usehooks";

//Ease
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

// Browser Resize Hook
function Browser({ size }) {
  return (
    <div
      data-testid="browser"
      className="browser"
      style={{ width: size.width / 4, height: size.height / 4 }}
    />
  );
}

const Model = ({ imageDetails }) => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);

  //resize hook 
  const size = useWindowSize();

  return (
    <motion.div
      onAnimationComplete={() => setCanScroll(true)}
      className='single'
      initial='initial'
      animate='animate'
      exit='exit'>
      <div className='container fluid'>
        <div className='row center top-row'>
          <div className='top'>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition ={{
                opacity: {delay: 1.5, duration: 0.5},
                y: {duration: 0.5},
                when: "beforeChildren",
              }}
              className='details'>
              <div className='location'>
                <span>28.538336</span>
                <span>-81.379234</span>
              </div>
              <div className='founder'>Founder: @mylifeascrystall</div>
            </motion.div>
            
            <motion.div className='state-name'>
              <motion.span className='first' variants={firstName}>
                <motion.span variants={letter}>T</motion.span>
                <motion.span variants={letter}>u</motion.span>
                <motion.span variants={letter}>r</motion.span>
                <motion.span variants={letter}>k</motion.span>
                <motion.span variants={letter}>i</motion.span>
                <motion.span variants={letter}>c</motion.span>
              </motion.span>
              <motion.span className='last' variants={lastName}>
                <motion.span variants={letter}>S</motion.span>
                <motion.span variants={letter}>t</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>t</motion.span>
                <motion.span variants={letter}>e</motion.span>
              </motion.span>
            </motion.div>
          </div>
        </div>
        
        <div className='row bottom-row'>
          <div className='bottom'>
            <motion.div className='image-container-single'>
              <motion.div
                initial={{
                  y: "-50%",
                 width: 524,
                 height: 550,
                }}
                animate={{
                  y: 0,
                  width: "100%",
                  height: size.height > 1440 ? 600 : 500,
                  transition: { delay: 0.2, ...transition },
                }}
                className='thumbnail-single'>
                <motion.div
                  className='frame-single'
                  whileHover='hover'
                  transition={transition}>
                  <motion.img
                    src={("compressed-image.jpg")}
                    alt='an image'
                    style={{ scale: scale }}
                    initial={{ scale: 1.0 }}
                    animate={{
                      transition: { delay: 0.2, ...transition },
                      y: size.height > 1440 ? -1200 : -700,
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          
        </div>
      </div>
      
      <div className='detailed-information'>
        <div className='container'>
          <div className='row'>
            <h2 className='title'>
              The insiration behind the artwork & <br /> what it means.
            </h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of e Finibus Bonorum et
              Malorm (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, orem
              ipsum dolor sit amet.., comes from a line in section 1.10.32.
            </p>
          </div>
        </div>
      </div>

      <Browser size={size} />
    </motion.div>
  );
};

export default Model;