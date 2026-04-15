"use client"

import { motion } from "framer-motion"
import { Lightbulb, Cpu, Sparkles, Send } from "lucide-react"

const steps = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Idea",
    description: "Share your vision and creative brief with our team.",
  },
  {
    icon: Cpu,
    number: "02",
    title: "AI Creation",
    description: "Our AI systems generate initial concepts and visuals.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Refinement",
    description: "We polish and perfect every detail to match your vision.",
  },
  {
    icon: Send,
    number: "04",
    title: "Delivery",
    description: "Receive production-ready assets in your preferred formats.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-primary text-sm uppercase tracking-[0.25em] font-medium mb-4"
          >
            How We Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance"
          >
            From Concept to Creation
          </motion.h2>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="relative"
            >
              {/* Connector line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-40px)] h-px bg-gradient-to-r from-white/20 to-transparent" />
              )}

              <div className="flex flex-col items-center text-center">
                {/* Icon Container */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-20 h-20 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 group"
                  style={{
                    boxShadow: "0 0 30px rgba(59, 130, 246, 0.05)",
                  }}
                >
                  <step.icon className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                  
                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-primary">{step.number}</span>
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
