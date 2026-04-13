"use client"

import { useState } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Play, X, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = ["All", "Ads", "Product Visuals", "Social Media", "Cinematic"]

interface Project {
  id: number
  title: string
  description: string
  category: string
  type: "image" | "video"
  src: string
  poster?: string
  tools: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: "Neural Dreams Campaign",
    description: "A surreal visual campaign exploring the boundaries between artificial and organic beauty. Created for a luxury beauty brand launch.",
    category: "Ads",
    type: "image",
    src: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1200&h=800&fit=crop",
    tools: ["Midjourney", "Runway", "After Effects"],
  },
  {
    id: 2,
    title: "Digital Essence",
    description: "Product visualization showcasing perfume bottles with AI-generated ethereal backgrounds and lighting effects.",
    category: "Product Visuals",
    type: "image",
    src: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=1200&h=800&fit=crop",
    tools: ["Stable Diffusion", "Photoshop", "Blender"],
  },
  {
    id: 3,
    title: "Fluid Motion",
    description: "Cinematic AI-generated video featuring abstract fluid simulations and morphing organic forms.",
    category: "Cinematic",
    type: "video",
    src: "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4",
    poster: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=800&fit=crop",
    tools: ["Runway Gen-2", "DaVinci Resolve"],
  },
  {
    id: 4,
    title: "Abstract Reality",
    description: "Social media content series featuring vibrant abstract compositions for a tech startup.",
    category: "Social Media",
    type: "image",
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop",
    tools: ["Midjourney", "Canva"],
  },
  {
    id: 5,
    title: "Chromatic Waves",
    description: "Advertisement visuals featuring dynamic color gradients and wave patterns for a music streaming platform.",
    category: "Ads",
    type: "image",
    src: "https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=1200&h=800&fit=crop",
    tools: ["DALL-E 3", "Photoshop"],
  },
  {
    id: 6,
    title: "Infinite Loop",
    description: "Mesmerizing looping video content for digital art installations and social media.",
    category: "Cinematic",
    type: "video",
    src: "https://videos.pexels.com/video-files/5377684/5377684-uhd_2560_1440_25fps.mp4",
    poster: "https://images.unsplash.com/photo-1634017839464-5c339bbe3c2d?w=1200&h=800&fit=crop",
    tools: ["Runway", "Pika Labs"],
  },
  {
    id: 7,
    title: "Synthetic Dreams",
    description: "Product photography reimagined with AI-generated environments and lighting scenarios.",
    category: "Product Visuals",
    type: "image",
    src: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=1200&h=800&fit=crop",
    tools: ["Stable Diffusion XL", "Lightroom"],
  },
  {
    id: 8,
    title: "Neon Pulse",
    description: "Vibrant social media content featuring neon aesthetics and cyberpunk themes.",
    category: "Social Media",
    type: "image",
    src: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=1200&h=800&fit=crop",
    tools: ["Midjourney", "Figma"],
  },
  {
    id: 9,
    title: "Digital Horizon",
    description: "Brand campaign video featuring AI-generated landscapes and futuristic cityscapes.",
    category: "Cinematic",
    type: "video",
    src: "https://videos.pexels.com/video-files/4763824/4763824-uhd_2560_1440_24fps.mp4",
    poster: "https://images.unsplash.com/photo-1614851099511-773084f6911d?w=1200&h=800&fit=crop",
    tools: ["Sora", "Premiere Pro"],
  },
  {
    id: 10,
    title: "Ethereal Glow",
    description: "Product visuals featuring ethereal lighting and dreamlike atmospheres for cosmetic brands.",
    category: "Product Visuals",
    type: "image",
    src: "https://images.unsplash.com/photo-1604076913837-52ab5f8d5d1e?w=1200&h=800&fit=crop",
    tools: ["Midjourney", "Photoshop"],
  },
  {
    id: 11,
    title: "Gradient Dreams",
    description: "Advertisement series featuring bold gradient backgrounds and minimalist product placement.",
    category: "Ads",
    type: "image",
    src: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&h=800&fit=crop",
    tools: ["DALL-E 3", "Illustrator"],
  },
  {
    id: 12,
    title: "Color Fusion",
    description: "Social media carousel content featuring vibrant color combinations and abstract forms.",
    category: "Social Media",
    type: "image",
    src: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1200&h=800&fit=crop",
    tools: ["Stable Diffusion", "Canva"],
  },
]

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-card cursor-pointer aspect-[4/3]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {project.type === "video" ? (
        <Image
          src={project.poster || project.src}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        <Image
          src={project.src}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}

      {project.type === "video" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-foreground/20 backdrop-blur-sm flex items-center justify-center">
            <Play className="w-5 h-5 text-foreground fill-foreground" />
          </div>
        </div>
      )}

      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )}
      />

      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 p-6 transition-all duration-300",
          isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        )}
      >
        <p className="text-xs text-primary uppercase tracking-wider mb-2">
          {project.category}
        </p>
        <div className="flex items-end justify-between">
          <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
          <ArrowUpRight className="w-5 h-5 text-foreground" />
        </div>
      </div>
    </div>
  )
}

export default function WorksPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) => project.category === activeCategory)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in opacity-0">
            Our Work
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl animate-fade-in opacity-0 animation-delay-100">
            Explore our portfolio of AI-generated visuals, from stunning product photography to cinematic video content.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 animate-fade-in opacity-0 animation-delay-200">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full px-6 transition-all duration-200",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "border-border hover:bg-secondary text-foreground"
                )}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <ProjectCard
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl bg-card border-border p-0 overflow-hidden">
          {selectedProject && (
            <>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>
              
              <div className="relative aspect-video">
                {selectedProject.type === "video" ? (
                  <video
                    src={selectedProject.src}
                    poster={selectedProject.poster}
                    controls
                    autoPlay
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={selectedProject.src}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              
              <div className="p-6">
                <DialogHeader>
                  <p className="text-sm text-primary uppercase tracking-wider mb-2">
                    {selectedProject.category}
                  </p>
                  <DialogTitle className="text-2xl font-bold text-foreground">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-muted-foreground mt-3">
                    {selectedProject.description}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="mt-6">
                  <p className="text-sm text-muted-foreground mb-3">Tools Used</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </main>
  )
}
