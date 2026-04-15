"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import logoSrc from "@/public/logo.png"

// ─── CSS to inject (add to index.css instead if preferred) ─────────────────
// See bottom of this file for the CSS variables + liquid-glass + marquee CSS
// ──────────────────────────────────────────────────────────────────────────

// const NAV_ITEMS = [
//   { label: "Features", hasChevron: true },
//   { label: "Solutions", hasChevron: false },
//   { label: "Plans", hasChevron: false },
//   { label: "Learning", hasChevron: true },
// ]

const LOGOS = ["Honey Harvest", "Avis", "Voxvally", "Aranya", "Aromaspa", "Webvidha"]

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const rafRef = useRef<number | null>(null)

  /* ── Custom fade-loop for video ────────────────────────────────────────── */
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const FADE_DURATION = 0.5 // seconds

    function tick() {
      if (!video) return
      const { currentTime, duration } = video

      if (currentTime < FADE_DURATION) {
        // Fade in
        video.style.opacity = String(currentTime / FADE_DURATION)
      } else if (duration - currentTime < FADE_DURATION) {
        // Fade out
        video.style.opacity = String((duration - currentTime) / FADE_DURATION)
      } else {
        video.style.opacity = "1"
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    function handleEnded() {
      if (!video) return
      video.style.opacity = "0"
      setTimeout(() => {
        video.currentTime = 0
        video.play()
      }, 100)
    }

    video.addEventListener("ended", handleEnded)
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      video.removeEventListener("ended", handleEnded)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      {/* ── Inject styles ──────────────────────────────────────────────────── */}
      <style>{`
        @import url('https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap');

        :root {

        }

        .hero-section {
          background: hsl(var(--background));
          color: hsl(var(--foreground));
          font-family: 'Geist Sans', sans-serif;
        }

        .headline-general-sans {
          font-family: 'General Sans', sans-serif;
        }

        /* Liquid glass */
        .liquid-glass {
          background: rgba(255,255,255,0.01);
          background-blend-mode: luminosity;
          backdrop-filter: blur(4px);
          border: none;
          box-shadow: inset 0 1px 1px rgba(255,255,255,0.1);
          position: relative;
          overflow: hidden;
        }
        .liquid-glass::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1.4px;
          background: linear-gradient(
            180deg,
            rgba(255,255,255,0.45) 0%,
            rgba(255,255,255,0.15) 20%,
            rgba(255,255,255,0)    40%,
            rgba(255,255,255,0)    60%,
            rgba(255,255,255,0.15) 80%,
            rgba(255,255,255,0.45) 100%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
                        linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        /* Marquee */
        @keyframes marquee-scroll {
          from { transform: translateX(0%); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-scroll 20s linear infinite;
        }

        /* Nav button */
        .nav-btn {
          color: hsl(var(--foreground) / 0.9);
          background: transparent;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.9rem;
          padding: 4px 8px;
          border-radius: 6px;
          transition: color 0.2s, background 0.2s;
        }
        .nav-btn:hover {
          color: hsl(var(--foreground));
          background: rgba(255,255,255,0.05);
        }
      `}</style>

      {/* ── Outer wrapper (video behind everything) ────────────────────────── */}
      <div className="relative overflow-hidden hero-section">
        {/* Background video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0, zIndex: 0 }}
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_065045_c44942da-53c6-4804-b734-f9e07fc22e08.mp4"
            type="video/mp4"
          />
        </video>

        {/* ── Hero section (overflow-visible so blur isn't clipped) ─────── */}
        <section
          className="relative min-h-screen flex flex-col"
          style={{ zIndex: 1, overflow: "visible" }}
        >
          {/* Blurred overlay shape (centered behind content) */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: 984,
              height: 527,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "rgb(3 7 18)", // gray-950
              opacity: 0.9,
              filter: "blur(82px)",
              zIndex: 0,
            }}
          />

          {/* ── Navbar ─────────────────────────────────────────────────────── */}
          {/* <nav
            className="relative flex items-center justify-between px-8 py-5"
            style={{ zIndex: 2 }}
          > */}
            {/* Left: logo */}
            {/* <img src={logoSrc} alt="Logo" style={{ height: 32, width: "auto" }} /> */}

            {/* Center: nav items */}
            {/* <div className="flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <button key={item.label} className="nav-btn">
                  {item.label}
                  {item.hasChevron && <ChevronDown size={14} />}
                </button>
              ))}
            </div>

            {/* Right: Sign Up */}
            {/* <button
              className="liquid-glass rounded-full px-4 py-2 text-sm font-medium"
              style={{ color: "hsl(var(--foreground))" }}
            >
              Sign Up
            </button> */}
          {/* </nav> */}

          {/* Navbar divider */}
          <div
            className="relative mx-8"
            style={{
              height: 1,
              marginTop: 3,
              background:
                "linear-gradient(to right, transparent, hsl(var(--foreground)/0.2), transparent)",
              zIndex: 2,
            }}
          />

          {/* ── Hero content (fills remaining space, centered) ──────────────── */}
          <div
            className="relative flex-1 flex items-center justify-center"
            style={{ zIndex: 2 }}
          >
            <div className="flex flex-col items-start px-8 max-w-7xl w-full mx-auto">
              {/* Headline */}
              <h1
                className="headline-general-sans font-normal leading-[1.02] select-none"
                style={{
                  fontSize: "clamp(80px, 14vw, 220px)",
                  letterSpacing: "-0.024em",
                  color: "hsl(var(--foreground))",
                  lineHeight: 1.02,
                }}
              >
                YUDH{" "}
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(to left, #2E3191, #1B75BB, #2EC3F1)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  AI
                </span>
              </h1>

              {/* Subtitle */}
              <p
                className="text-lg leading-8 max-w-md"
                style={{
                  color: "hsl(var(--hero-sub))",
                  marginTop: 9,
                  opacity: 0.8,
                }}
              >
                AI Studio That Transforms 
                <br />
                Reel Ideas into Realistic Videos
              </p>

              {/* CTA */}
              {/* <button
                className="liquid-glass rounded-full font-medium text-sm"
                style={{
                  marginTop: 25,
                  paddingLeft: 29,
                  paddingRight: 29,
                  paddingTop: 24,
                  paddingBottom: 24,
                  color: "hsl(var(--foreground))",
                  letterSpacing: "0.01em",
                }}
              >
                Schedule a Consult
              </button> */}
            </div>
          </div>

          {/* ── Logo marquee (pinned to bottom) ────────────────────────────── */}
          <div
            className="relative pb-10"
            style={{ zIndex: 2 }}
          >
            <div
              className="max-w-5xl mx-auto px-8 flex items-center"
              style={{ gap: 48 }}
            >
              {/* Static text */}
              <p
                className="text-sm shrink-0"
                style={{ color: "hsl(var(--foreground)/0.5)", lineHeight: "1.5" }}
              >
                Relied on by brands
                <br />
                across the globe
              </p>

              {/* Scrolling marquee */}
              <div className="overflow-hidden flex-1 min-w-0">
                <div className="marquee-track flex items-center" style={{ gap: 64, width: "max-content" }}>
                  {/* Render logos twice for seamless loop */}
                  {[...LOGOS, ...LOGOS].map((name, i) => (
                    <div
                      key={i}
                      className="flex items-center shrink-0"
                      style={{ gap: 10 }}
                    >
                      {/* Liquid glass icon */}
                      <div
                        className="liquid-glass rounded-lg flex items-center justify-center shrink-0"
                        style={{
                          width: 24,
                          height: 24,
                          fontSize: 11,
                          fontWeight: 600,
                          color: "hsl(var(--foreground))",
                        }}
                      >
                        {name[0]}
                      </div>
                      <span
                        className="text-base font-semibold whitespace-nowrap"
                        style={{ color: "hsl(var(--foreground))" }}
                      >
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}