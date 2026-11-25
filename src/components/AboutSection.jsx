import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Scissors, Layers, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-[#f4f4f2] text-[#111111] pt-6 pb-24 overflow-hidden">
      {/* Top split text continuation in black */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 0.95, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="w-full text-center overflow-hidden leading-none select-none -mt-4 mb-8"
      >
        <div className="font-bebas text-[18vw] sm:text-[17vw] lg:text-[15vw] leading-[0.78] tracking-tight text-[#111111] uppercase font-normal scale-y-110">
          WE BUILD BRANDS
        </div>
      </motion.div>

      {/* Grunge Ink Splatters Graphic (Top Right) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
        whileInView={{ opacity: 0.85, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="absolute top-12 right-2 sm:right-8 w-40 sm:w-64 h-40 sm:h-64 pointer-events-none z-10"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full text-black fill-current">
          <path d="M140,20 C145,25 150,15 155,22 C160,30 170,25 168,35 C175,38 180,45 174,52 C182,58 178,68 170,72 C175,80 165,88 158,85 C155,95 142,92 138,98 C130,95 125,102 120,95 C112,98 108,90 102,94 C98,85 88,88 85,80 C90,75 82,68 88,62 C80,58 85,48 90,45 C88,38 98,35 102,30 C108,34 118,25 124,30 C130,22 135,28 140,20 Z" />
          <circle cx="180" cy="95" r="4" />
          <circle cx="165" cy="115" r="3" />
          <circle cx="150" cy="125" r="5" />
          <circle cx="185" cy="40" r="2.5" />
          <circle cx="190" cy="65" r="3.5" />
          <circle cx="75" cy="45" r="3" />
          <circle cx="65" cy="70" r="4" />
          <circle cx="130" cy="10" r="3" />
          <circle cx="145" cy="5" r="2" />
          {/* Splatter dots */}
          <path d="M160,110 Q165,130 155,140 Q150,135 158,115 Z" />
          <path d="M175,70 Q195,85 190,95 Q180,90 172,75 Z" />
        </svg>
      </motion.div>

      <div className="w-full px-4 sm:px-8 lg:px-12 relative z-20">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="font-bebas text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#111111] uppercase">
            ABOUT PENTA PRIZM
          </h2>
        </motion.div>

        {/* Main Grid: Left Graphic Collage + Right Editorial Typography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Visual Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              
              {/* Group photo */}
              <motion.div
                initial={{ opacity: 0, y: 30, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-lg overflow-hidden border-2 border-black shadow-xl bg-neutral-900 group"
              >
                <picture className="block w-full">
                  <source media="(min-width: 640px)" srcSet="/web2.webp" />
                  <img
                    src="/web2-m.webp"
                    alt="Street ID Studio Creators and Models"
                    className="w-full h-[320px] sm:h-[400px] object-cover object-center grayscale contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </picture>
                <div className="absolute inset-0 halftone opacity-30 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                
                {/* Badge on photo */}
                <div className="absolute top-3 left-3 bg-black text-white text-[10px] font-mono uppercase px-2 py-0.5 tracking-wider">
                  ARCHIVE // 2026
                </div>
              </motion.div>

              {/* Red Spray Graffiti Tag Text "STREET.ID YOUR NEW STYLE" */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7, rotate: -12 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-6 -left-2 sm:-left-4 z-30 pointer-events-none select-none"
              >
                <div className="font-marker text-[#ff3b19] text-3xl sm:text-5xl leading-tight spray-text tracking-wide drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
                  PENTA PRIZM<br />
                  <span className="text-2xl sm:text-4xl pl-3">CREATIVE &</span><br />
                  <span className="text-3xl sm:text-5xl pl-8 text-[#e02f0e]">DIGITAL STUDIO</span>
                </div>
              </motion.div>

              {/* Pinned Card with Paper Clip */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 14 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 6 }}
                whileHover={{ rotate: 1, scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="absolute -top-6 -right-2 sm:-right-6 w-36 sm:w-48 bg-white p-2 rounded shadow-2xl border border-black/20 z-20 cursor-pointer"
              >
                {/* Paper Clip SVG Graphic */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-8 h-10 pointer-events-none z-30">
                  <svg viewBox="0 0 24 36" fill="none" className="w-full h-full drop-shadow-md">
                    <path
                      d="M8 8V24C8 27.3137 10.6863 30 14 30C17.3137 30 20 27.3137 20 24V6C20 3.79086 18.2091 2 16 2C13.7909 2 12 3.79086 12 6V22C12 23.1046 12.8954 24 14 24C15.1046 24 16 23.1046 16 22V8"
                      stroke="#888888"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div className="relative aspect-square overflow-hidden bg-neutral-800 rounded">
                  <img
                    src="/web3.webp"
                    alt="Street ID Camera Shot"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="mt-1.5 flex justify-between items-center px-1">
                  <span className="font-mono text-[9px] text-neutral-600 font-bold uppercase tracking-wider">
                    PENTA PRIZM
                  </span>
                  <span className="font-mono text-[8px] text-red-600 font-bold">
                    RAW
                  </span>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Right Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col justify-center pt-8 lg:pt-0"
          >
            {/* Bold Subheading */}
            <h3 className="font-montserrat font-black text-xl sm:text-2xl lg:text-3xl uppercase tracking-tight text-[#111111] leading-tight mb-6">
              PENTA PRIZM —<br />
              <span className="text-[#ff3b19]">IS A CREATIVE AND TECHNOLOGY-DRIVEN STUDIO.</span>
            </h3>

            {/* Paragraphs */}
            <div className="space-y-5 text-neutral-800 font-montserrat font-medium text-sm sm:text-base leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="border-l-3 border-[#ff3b19] pl-4 py-1"
              >
                We don't just create visuals.<br />
                We build brands, digital experiences, and ideas—<br />
                <strong className="font-extrabold text-[#111111]">from concept to execution.</strong>
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-neutral-700"
              >
                Every project is an opportunity to turn an idea into something meaningful. We bring together branding, creative design, video, web development, app development, marketing, and digital strategy to help businesses stand out and grow in the digital world.
              </motion.p>
            </div>

            {/* Feature Pills / Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-neutral-300">
              {[
                { title: 'BRANDING', sub: 'Identity / Corporate identity', highlight: true },
                { title: 'CONTENT', sub: 'Creativity and content', highlight: false },
                { title: 'DIGITAL', sub: 'Digital solutions', highlight: true },
                { title: 'TECH', sub: 'Technologies and innovations', highlight: false }
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * idx }}
                  className="bg-black/5 p-4 rounded-lg border border-black/10 hover:bg-black hover:border-black group transition-colors duration-300 cursor-pointer"
                >
                  <span className={`font-bebas text-3xl sm:text-4xl ${item.highlight ? 'text-[#ff3b19]' : 'text-[#111111]'} block leading-none group-hover:text-white transition-colors`}>
                    {item.title}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-700 mt-1 block group-hover:text-white/80 transition-colors">
                    {item.sub}
                  </span>
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>

        {/* Principles / Values Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 pt-8 border-t-2 border-[#111111]"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#111111]">
              WHAT WE BELIEVE IN
            </span>
            <span className="font-marker text-[#ff3b19] text-sm sm:text-base tracking-wide -rotate-2 spray-text">
              MINDSET // WORKFLOW
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-300 border border-neutral-300 rounded-2xl overflow-hidden bg-black/5">
            {[
              { num: '● 01', title: 'Creative Thinking' },
              { num: '● 02', title: 'Smart Technology' },
              { num: '● 03', title: 'Meaningful Growth' }
            ].map((belief, idx) => (
              <motion.div
                key={belief.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 * idx }}
                className="p-6 sm:p-8 text-center bg-black group hover:bg-[#ff3b19] transition-all duration-300 cursor-pointer"
              >
                <span className="font-mono text-xs font-bold tracking-widest text-white block mb-2 group-hover:text-white">
                  {belief.num}
                </span>
                <span className="font-bebas text-3xl sm:text-4xl text-white uppercase tracking-wide block leading-tight group-hover:text-white">
                  {belief.title}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
