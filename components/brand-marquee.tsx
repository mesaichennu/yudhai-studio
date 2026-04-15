// "use client"

// import { motion } from "framer-motion"

// const brands = [
//   "Adobe",
//   "Nike",
//   "Apple",
//   "Google",
//   "Meta",
//   "Spotify",
//   "Netflix",
//   "Airbnb",
//   "Uber",
//   "Slack",
//   "Figma",
//   "Notion",
// ]

// export function BrandMarquee() {
//   return (
//     <section className="py-20 bg-background relative overflow-hidden">
//       {/* Fade edges */}
//       <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
//       <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
//       <div className="max-w-7xl mx-auto px-6 mb-12">
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center text-white/40 text-sm uppercase tracking-[0.25em] font-medium"
//         >
//           Trusted by Leading Brands
//         </motion.p>
//       </div>

//       {/* Marquee Container */}
//       <div className="relative flex overflow-hidden">
//         <motion.div
//           className="flex gap-16 items-center"
//           animate={{ x: [0, -1920] }}
//           transition={{
//             x: {
//               repeat: Infinity,
//               repeatType: "loop",
//               duration: 30,
//               ease: "linear",
//             },
//           }}
//         >
//           {[...brands, ...brands, ...brands].map((brand, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0 px-8 py-4 group cursor-pointer"
//             >
//               <span className="text-2xl font-semibold text-white/20 transition-all duration-500 group-hover:text-white tracking-wide">
//                 {brand}
//               </span>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }
