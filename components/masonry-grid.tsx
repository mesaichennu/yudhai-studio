"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Play, ArrowUpRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

type SpanSize = "small" | "wide" | "tall" | "large"

interface GridItem {
  id: number
  type: "image" | "video"
  src: string
  poster?: string
  title: string
  category: string
  span: SpanSize
}

const gridItems: GridItem[] = [
  {
    id: 1,
    type: "video",
    src: "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4",
    poster: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&h=800&fit=crop",
    title: "Neural Dreams",
    category: "Cinematic",
    span: "large",
  },
  {
    id: 2,
    type: "image",
    src: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600&h=900&fit=crop",
    title: "Digital Essence",
    category: "Brand Campaign",
    span: "tall",
  },
  {
    id: 3,
    type: "image",
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
    title: "Abstract Reality",
    category: "Ads",
    span: "small",
  },
  {
    id: 4,
    type: "image",
    src: "https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=900&h=500&fit=crop",
    title: "Chromatic Waves",
    category: "Social Media",
    span: "wide",
  },
  {
    id: 5,
    type: "image",
    src: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=600&h=600&fit=crop",
    title: "Neon Pulse",
    category: "Product Visuals",
    span: "small",
  },
  {
    id: 6,
    type: "video",
    src: "https://videos.pexels.com/video-files/5377684/5377684-uhd_2560_1440_25fps.mp4",
    poster: "https://images.unsplash.com/photo-1634017839464-5c339bbe3c2d?w=600&h=900&fit=crop",
    title: "Infinite Loop",
    category: "Cinematic",
    span: "tall",
  },
  {
    id: 7,
    type: "image",
    src: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=900&h=500&fit=crop",
    title: "Synthetic Dreams",
    category: "Product Visuals",
    span: "wide",
  },
  {
    id: 8,
    type: "image",
    src: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&h=600&fit=crop",
    title: "Gradient Dreams",
    category: "Ads",
    span: "small",
  },
  {
    id: 9,
    type: "video",
    src: "https://videos.pexels.com/video-files/4763824/4763824-uhd_2560_1440_24fps.mp4",
    poster: "https://images.unsplash.com/photo-images.unsplash.com/photo-1614851099511-773084f6911d?w=800&h=800&fit=crop",
    title: "Digital Horizon",
    category: "Brand Campaign",
    span: "large",
  },
  {
    id: 10,
    type: "image",
    src: "https://images.unsplash.com/photo-1604076913837-52ab5f8d5d1e?w=600&h=900&fit=crop",
    title: "Ethereal Glow",
    category: "Social Media",
    span: "tall",
  },
  {
    id: 11,
    type: "image",
    src: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=600&h=600&fit=crop",
    title: "Color Fusion",
    category: "Product Visuals",
    span: "small",
  },
  {
    id: 12,
    type: "image",
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=600&fit=crop",
    title: "Fluid Motion",
    category: "Ads",
    span: "small",
  },
  {
    id: 13,
    type: "image",
    src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=900&h=500&fit=crop",
    title: "Retro Future",
    category: "Social Media",
    span: "wide",
  },
  {
    id: 14,
    type: "image",
    src: "https://images.unsplash.com/photo-1561998338-13ad7883b20f?w=600&h=900&fit=crop",
    title: "Light Cascade",
    category: "Cinematic",
    span: "tall",
  },
  {
    id: 15,
    type: "image",
    src: "https://images.unsplash.com/photo-1563089145-599997674d42?w=600&h=600&fit=crop",
    title: "Pixel Storm",
    category: "Product Visuals",
    span: "small",
  },
  {
    id: 16,
    type: "image",
    src: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=600&h=600&fit=crop",
    title: "Void Echo",
    category: "Brand Campaign",
    span: "small",
  },
  {
    id: 17,
    type: "video",
    src: "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4",
    poster: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&h=800&fit=crop",
    title: "Neural Dreams",
    category: "Cinematic",
    span: "large",
  },
  {
    id: 18,
    type: "image",
    src: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600&h=900&fit=crop",
    title: "Digital Essence",
    category: "Brand Campaign",
    span: "tall",
  },
  {
    id: 19,
    type: "image",
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
    title: "Abstract Reality",
    category: "Ads",
    span: "small",
  },
  {
    id: 20,
    type: "image",
    src: "https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=900&h=500&fit=crop",
    title: "Chromatic Waves",
    category: "Social Media",
    span: "wide",
  },
  {
    id: 21,
    type: "image",
    src: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=600&h=600&fit=crop",
    title: "Neon Pulse",
    category: "Product Visuals",
    span: "small",
  },
  {
    id: 22,
    type: "video",
    src: "https://videos.pexels.com/video-files/5377684/5377684-uhd_2560_1440_25fps.mp4",
    poster: "https://images.unsplash.com/photo-1634017839464-5c339bbe3c2d?w=600&h=900&fit=crop",
    title: "Infinite Loop",
    category: "Cinematic",
    span: "tall",
  },
  {
    id: 23,
    type: "image",
    src: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=900&h=500&fit=crop",
    title: "Synthetic Dreams",
    category: "Product Visuals",
    span: "wide",
  },
  {
    id: 24,
    type: "image",
    src: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&h=600&fit=crop",
    title: "Gradient Dreams",
    category: "Ads",
    span: "small",
  },
  {
    id: 25,
    type: "video",
    src: "https://videos.pexels.com/video-files/4763824/4763824-uhd_2560_1440_24fps.mp4",
    poster: "https://images.unsplash.com/photo-images.unsplash.com/photo-1614851099511-773084f6911d?w=800&h=800&fit=crop",
    title: "Digital Horizon",
    category: "Brand Campaign",
    span: "large",
  },
  {
    id: 26,
    type: "image",
    src: "https://images.unsplash.com/photo-1604076913837-52ab5f8d5d1e?w=600&h=900&fit=crop",
    title: "Ethereal Glow",
    category: "Social Media",
    span: "tall",
  },
  {
    id: 27,
    type: "image",
    src: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=600&h=600&fit=crop",
    title: "Color Fusion",
    category: "Product Visuals",
    span: "small",
  },
  {
    id: 28,
    type: "image",
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=600&fit=crop",
    title: "Fluid Motion",
    category: "Ads",
    span: "small",
  },
  {
    id: 29,
    type: "image",
    src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=900&h=500&fit=crop",
    title: "Retro Future",
    category: "Social Media",
    span: "wide",
  },
  {
    id: 30,
    type: "image",
    src: "https://images.unsplash.com/photo-1561998338-13ad7883b20f?w=600&h=900&fit=crop",
    title: "Light Cascade",
    category: "Cinematic",
    span: "tall",
  },
  {
    id: 31,
    type: "image",
    src: "https://images.unsplash.com/photo-1563089145-599997674d42?w=600&h=600&fit=crop",
    title: "Pixel Storm",
    category: "Product Visuals",
    span: "small",
  },
  {
    id: 32,
    type: "image",
    src: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=600&h=600&fit=crop",
    title: "Void Echo",
    category: "Brand Campaign",
    span: "small",
  },
  {
    id: 33,
    type: "image",
    src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=900&h=500&fit=crop",
    title: "Retro Future",
    category: "Social Media",
    span: "wide",
  },
]

const spanConfig: Record<SpanSize, string> = {
  small: "col-span-1 row-span-1",
  wide: "col-span-1 sm:col-span-2 row-span-1",
  tall: "col-span-1 row-span-2",
  large: "col-span-1 sm:col-span-2 row-span-2",
}

function GridCard({ item, index }: { item: GridItem; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (item.type === "video" && videoRef.current) {
      videoRef.current.play()
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (item.type === "video" && videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={cn(
        "group relative overflow-hidden rounded-[20px] bg-card cursor-pointer",
        spanConfig[item.span]
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        boxShadow: isHovered
          ? "0 0 40px rgba(59, 130, 246, 0.15), 0 25px 50px -12px rgba(0, 0, 0, 0.5)"
          : "0 10px 30px -10px rgba(0, 0, 0, 0.3)",
      }}
    >
      {/* Media Container */}
      <div className="relative w-full h-full min-h-[200px]">
        {item.type === "video" ? (
          <>
            <video
              ref={videoRef}
              src={item.src}
              poster={item.poster}
              muted
              loop
              playsInline
              className={cn(
                "absolute inset-0 w-full h-full object-cover transition-all duration-700",
                isHovered ? "scale-105 brightness-110" : "scale-100 brightness-100"
              )}
            />
            {!isHovered && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-14 h-14 rounded-full bg-foreground/10 backdrop-blur-md border border-foreground/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Play className="w-6 h-6 text-foreground fill-foreground ml-1" />
                </div>
              </div>
            )}
          </>
        ) : (
          <Image
            src={item.src}
            alt={item.title}
            fill
            className={cn(
              "object-cover transition-all duration-700",
              isHovered ? "scale-105 brightness-110" : "scale-100 brightness-100"
            )}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}

        {/* Gradient Overlay */}
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-500",
            isHovered
              ? "opacity-100 "
              : "opacity-100"
          )}
        />

        {/* Always visible subtle gradient at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/60 to-transparent opacity-60" />

        {/* Content */}
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 p-5 transition-all duration-500 z-10",
            isHovered ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          )}
        >
          <p className="text-[10px] text-primary uppercase tracking-[0.2em] font-medium mb-1.5">
            {item.category}
          </p>
          <div className="flex items-end justify-between gap-3">
            <h3 className="text-base font-semibold text-foreground leading-tight">
              {item.title}
            </h3>
            {/* <div className="flex-shrink-0 w-8 h-8 rounded-full bg-foreground/10 backdrop-blur-sm flex items-center justify-center border border-foreground/20">
              <ArrowUpRight className="w-4 h-4 text-foreground" />
            </div> */}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function MasonryGrid() {
  return (
    <section id="works-preview" className="py-36 bg-background">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary text-sm uppercase tracking-[0.25em] font-medium mb-3"
          >
            Selected Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance"
          >
            AI-Powered Creativity
          </motion.h2>
        </div>

        {/* Masonry Grid */}
        <div
          className="grid gap-3 sm:gap-4"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gridAutoRows: "200px",
            gridAutoFlow: "dense",
          }}
        >
          {gridItems.map((item, index) => (
            <GridCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="/works"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-foreground/5 border border-foreground/10 text-foreground font-medium hover:bg-foreground/10 hover:border-foreground/20 transition-all duration-300 group"
          >
            View All Works
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
