"use client"

import React, { useContext } from "react";
import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"
import { transition1 } from "@lib/anim/transitions"
import { AnimatePresence, motion } from "framer-motion";
import { CursorContext } from "@lib/context/cursor-context";

const Hero = () => {
  const contextValue = useContext(CursorContext);

  if (!contextValue) {
    throw new Error("CursorContext value is null. Are you within a CursorProvider?");
  }

  const { mouseEnterHandler, mouseLeaveHandler } = contextValue;
  return (
    <AnimatePresence initial={true} mode="wait">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition1}
        className="section">

        <div className="container mx-auto relative h-full">
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: '-50' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '-50' }}
              transition={transition1}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="w-full relative pt-40 pl-4 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center lg:items-start">
              <h1 className="text-4xl lg:text-7xl mb-4 drop-shadow-md shadow-black">
                Exquisite Pearl Creations
              </h1>
              <div>
                <p className="text-xl max-w-[32rem] mb-6">
                  Embark on a journey of heritage and craftsmanship with each piece from Cordero de la Perla, where the finest pearls meet the legacy of 18k artisanal gold.
                </p>
                <UnderlineLink href="/store">Discover our collection</UnderlineLink>
              </div>

            </motion.div>
            <div className="flex justify-end h-full lg:max-h-max">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, }}
                exit={{ scale: 0 }}
                transition={transition1}
                className="relative lg:right-0 large:right-40 bottom-20 sm:bottom-40 lg:bottom-0 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={transition1}
                  onMouseEnter={mouseEnterHandler}
                  onMouseLeave={mouseLeaveHandler}
                >
                  <Image
                    src="/woman-pearl-hero.png"
                    loading="eager"
                    priority={true}
                    quality={90}
                    alt="Model Cordero de la Perla Hero photo"
                    objectFit="cover"
                    width={750}
                    height={750}
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>

  )
}

export default Hero

