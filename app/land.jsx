'use client';

import * as React from "react";
import Link from 'next/link'

import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Land = ({ imageDetails, image }) => (
  <>
    <main>
      <div className='container'>
        <div className='row center'>

          <div className='image-container'>
            <div
              className='thumbnail'
              ref={image}
              style={{
                width: imageDetails.width,
                height: imageDetails.height,
              }}>
              <div className='frame'>
                <Link href="/states" >
                  <ProgressiveImage
                    /*{src={("./yasmeen.webp")}}*/
                    placeholder={("./compressed-image.jpg")}>
                    {(src) => (
                      <motion.img
                        src={src}
                        alt='Turkic State'
                        whileHover={{ scale: 1.1 }}
                        transition={transition}
                      />
                    )}
                  </ProgressiveImage>
                </Link>
              </div>
            </div>

            <motion.div
              exit={{ opacity: 0 }}
              transition={transition}
              className='information'>
              <div className='title'>Turkic State</div>
              <div className='location'>
                <span>28.538336</span>
                <span>-81.379234</span>
              </div>
            </motion.div>
            
          </div>
        </div>
      </div>
    </main>
  </>
);

export default Land;
