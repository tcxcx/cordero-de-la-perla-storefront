"use client"

import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import UnderlineLink from "@modules/common/components/underline-link"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import { CursorContext } from "@lib/context/cursor-context";
import { motion } from "framer-motion";
import { useContext } from "react"
import { textContainer, textVariant2 } from "@lib/anim/transitions"

const FeaturedProducts = () => {
  const { data } = useFeaturedProductsQuery()

  const contextValue = useContext(CursorContext);

  if (!contextValue) {
    throw new Error("CursorContext value is null. Are you within a CursorProvider?");
  }

  const { mouseEnterHandler, mouseLeaveHandler } = contextValue;

  return (
    <motion.div
      variants={textContainer}
      className="py-12">
      <div className="content-container py-12">
        <motion.div
          variants={textVariant2}
          initial="hidden"
          whileInView="show"
          className="flex flex-col items-center text-center mb-16">
          <span className="text-base-regular text-gray-600 mb-6">
            Latest designs
          </span>
          <motion.p
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="text-2xl-regular text-gray-900 max-w-lg mb-4">
            Where elegance meets the serenity of craftsmanship.
          </motion.p>
          <UnderlineLink href="/store">Explore New Arrivals</UnderlineLink>
        </motion.div>
        <ul className="grid grid-cols-2 small:grid-cols-4 gap-x-4 gap-y-8">
          {data
            ? data.map((product) => (
              <li key={product.id}>
                <ProductPreview {...product} />
              </li>
            ))
            : Array.from(Array(4).keys()).map((i) => (
              <li key={i}>
                <SkeletonProductPreview />
              </li>
            ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default FeaturedProducts
