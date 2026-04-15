"use client"

import { motion } from "framer-motion"
import { Sparkles, Box, Share2, Compass, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Sparkles,
    title: "AI Ads",
    description: "Hyper-realistic AI-generated advertisements that captivate audiences and drive conversions.",
  },
  {
    icon: Box,
    title: "Product Visuals",
    description: "Stunning 3D renders and lifestyle imagery that showcase your products in their best light.",
  },
  {
    icon: Share2,
    title: "Social Media Content",
    description: "Scroll-stopping visuals optimized for every platform, from Instagram to TikTok.",
  },
  {
    icon: Compass,
    title: "Creative Direction",
    description: "Strategic visual storytelling that aligns with your brand identity and business goals.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export function ServicesSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary text-sm uppercase tracking-[0.25em] font-medium mb-4"
          >
            What We Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance"
          >
            Services Built for Impact
          </motion.h2>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative p-8 rounded-[20px] bg-white/[0.02] border border-white/[0.06] transition-all duration-500 hover:bg-white/[0.04] hover:border-white/[0.12] cursor-pointer"
              style={{
                boxShadow: "0 0 0 rgba(59, 130, 246, 0)",
              }}
              whileHover={{
                y: -8,
                boxShadow: "0 0 40px rgba(59, 130, 246, 0.1), 0 20px 40px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-primary/20 group-hover:border-primary/30">
                <service.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-3">
                {service.title}
                <ArrowUpRight className="w-5 h-5 text-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </h3>
              <p className="text-white/50 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
          >
            View All Services
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
