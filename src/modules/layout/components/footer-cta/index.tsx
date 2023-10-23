"use client"

import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"
import { CursorContext } from "@lib/context/cursor-context";
import { motion } from "framer-motion";
import { useContext } from "react"
import { textContainer, textVariant2, transition1 } from "@lib/anim/transitions"

const FooterCTA = () => {

  const contextValue = useContext(CursorContext);

  if (!contextValue) {
    throw new Error("CursorContext value is null. Are you within a CursorProvider?");
  }

  const { mouseEnterHandler, mouseLeaveHandler } = contextValue;


  return (
    <div className="bg-indigo-200 w-full relative">
      <div className="absolute inset-x-0 bottom-100 h-[100%] w-[100%] overflow-hidden opacity-1 z-1">
        <Image
          src="/tropical-bg-wall.png"
          alt="Tropical Background"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
          className="mix-blend-overlay"
        />
      </div>

      <motion.div
        variants={textContainer} className="content-container flex flex-col-reverse gap-y-8 small:flex-row small:items-center justify-between py-16 relative">
        <motion.div
          variants={textVariant2}
          initial="hidden"
          whileInView="show">
          <h3
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="text-2xl-semi">Explore our Latest Creations</h3>
          <div className="mt-6">
            <UnderlineLink href="/store">Browse Our Collection</UnderlineLink>
          </div>
        </motion.div>
        <motion.div
          variants={textVariant2}
          initial="hidden"
          whileInView="show"
          transition={transition1}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="relative w-full  aspect-square small:w-[35%] small:aspect-[28/36]">

          <Image
            src="/pearl-cta-purple.png"
            alt=""
            className="absolute inset-0 rounded-md"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default FooterCTA
