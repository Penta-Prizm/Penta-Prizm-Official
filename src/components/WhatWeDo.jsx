import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Flame, Sparkles, Check, ChevronRight } from 'lucide-react';
import { SERVICES } from '../data/studioData.js';

export default function WhatWeDo({ onSelectService }) {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section id="what-we-do" className="relative w-full bg-[#0a0a0a] text-white pt-16 sm:pt-20 pb-20 sm:pb-28 overflow-hidden">
      {/* Torn paper edge on top */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-[#f4f4f2] torn-edge-bottom z-10" />

      {/* Ambient background glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute top-1/3 left-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-[#ff3b19]/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none"
      />

      <div className="w-full px-4 sm:px-8 lg:px-12 relative z-20 pt-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8 sm:mb-12 lg:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono tracking-widest text-[#ff3b19] uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-[#ff3b19] animate-pulse"></span>
            EXPERTISE
          </div>
          <h2 className="font-bebas text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-none">
            WHAT WE DO
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-[#ff3b19] mt-3"
          />
        </motion.div>

        {/* 4-Quadrant Custom Grid Matching the Exact Poster Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          
          {/* 1. TOP-LEFT: BRANDING */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col justify-between p-5 sm:p-7 lg:p-8 rounded-xl sm:rounded-2xl border border-white/20 bg-neutral-950/80 backdrop-blur-sm min-h-[240px] sm:min-h-[260px] group hover:border-[#ff3b19]/60 transition-all duration-300"
          >
            <div>
              <div className="flex justify-between items-start mb-3 sm:mb-4">
                <span className="font-mono text-xs text-[#ff3b19] uppercase tracking-widest font-bold">
                  // 01. BRANDING
                </span>
                <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-[#ff3b19] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              <h3 className="font-bebas text-2xl sm:text-3xl lg:text-4xl text-white tracking-wide uppercase mb-2">
                BUILD<br />YOUR IDENTITY
              </h3>
              <p className="font-montserrat text-xs sm:text-sm text-neutral-400 font-medium">
                Brand strategy, visual identity, logo & creative direction
              </p>
            </div>

            {/* Red Graffiti Spray Tag */}
            <div className="mt-6 flex items-center justify-between flex-wrap gap-2">
              <div className="font-marker text-[#ff3b19] text-xl sm:text-2xl lg:text-3xl spray-text tracking-wide -rotate-3 select-none">
                Explore Branding →
                <svg className="w-20 sm:w-24 h-4 text-[#ff3b19] mt-1" viewBox="0 0 100 20" fill="none">
                  <path d="M0,10 L30,5 L50,15 L70,3 L100,12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <button
                onClick={() => onSelectService('projects')}
                className="text-xs font-montserrat font-bold text-white/80 hover:text-[#ff3b19] uppercase tracking-wider underline cursor-pointer py-1"
              >
                Learn More
              </button>
            </div>
          </motion.div>

          {/* 2. TOP-RIGHT: DIGITAL EXPERIENCES */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            
            {/* Box */}
            <div className="flex flex-col justify-between p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-white/20 bg-neutral-950/80 backdrop-blur-sm group hover:border-[#ff3b19]/60 hover:-translate-y-1 transition-all duration-300">
              <div>
                <span className="font-mono text-xs text-[#ff3b19] uppercase tracking-widest font-bold block mb-2 sm:mb-3">
                  // 02. DIGITAL EXPERIENCES
                </span>
                <h3 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide uppercase mb-2">
                  WE BUILD FOR THE DIGITAL WORLD
                </h3>
                <p className="font-montserrat text-xs sm:text-sm text-neutral-400 font-medium">
                  Websites, applications & custom digital solutions
                </p>
              </div>
              <button
                onClick={() => onSelectService('design')}
                className="text-xs font-montserrat font-bold text-white/80 hover:text-[#ff3b19] uppercase tracking-wider underline text-left mt-4 cursor-pointer py-1"
              >
                Explore Digital →
              </button>
            </div>

            {/* Photo Card with Neon Red Spray Loop Overlay */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/20 min-h-[200px] sm:min-h-[220px] bg-neutral-900 group">
              <img
                src="/web4.webp"
                alt="Digital Design Presentation"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              <div className="absolute bottom-2 right-2 font-mono text-[9px] text-white/60 uppercase">
                DROP // 01
              </div>
            </div>

          </motion.div>

          {/* 3. BOTTOM-LEFT: PHOTO CARD WITH 'PP' + CREATIVE CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            
            {/* Photo Card with 'PP' Spray Tag */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/20 min-h-[200px] sm:min-h-[220px] bg-neutral-900 group">
              <img
                src="/web3.webp"
                alt="Creative Media Visual"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />

              {/* Large Orange-Red Spray Letters "PP" */}
              <div className="absolute bottom-2 left-3 pointer-events-none select-none">
                <div className="font-bebas text-5xl sm:text-6xl text-[#ff3b19] spray-text tracking-tighter leading-none opacity-90 drop-shadow-[0_0_15px_rgba(255,59,25,0.9)]">
                  PP
                </div>
              </div>
            </div>

            {/* Box: CREATIVE CONTENT */}
            <div className="flex flex-col justify-between p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-white/20 bg-neutral-950/80 backdrop-blur-sm group hover:border-[#ff3b19]/60 hover:-translate-y-1 transition-all duration-300">
              <div>
                <span className="font-mono text-xs text-[#ff3b19] uppercase tracking-widest font-bold block mb-2 sm:mb-3">
                  // 03. CREATIVE CONTENT
                </span>
                <h3 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide uppercase mb-2">
                  IDEAS<br />INTO VISUALS
                </h3>
                <p className="font-montserrat text-xs sm:text-sm text-neutral-400 font-medium">
                  Video presentations, promotional content & creative design
                </p>
              </div>

              {/* Red Spray Tag */}
              <div className="mt-4 font-marker text-[#ff3b19] text-xs sm:text-sm spray-text tracking-wider uppercase">
                DONT COPY — Explore Content
              </div>
            </div>

          </motion.div>

          {/* 4. BOTTOM-RIGHT: DIGITAL GROWTH */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            
            {/* Box: DIGITAL GROWTH */}
            <div className="flex flex-col justify-between p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-white/20 bg-neutral-950/80 backdrop-blur-sm group hover:border-[#ff3b19]/60 hover:-translate-y-1 transition-all duration-300">
              <div>
                <span className="font-mono text-xs text-[#ff3b19] uppercase tracking-widest font-bold block mb-2 sm:mb-3">
                  // 04. DIGITAL GROWTH
                </span>
                <h3 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide uppercase mb-2">
                  MAKE YOUR BRAND SEEN
                </h3>
                <p className="font-montserrat text-xs sm:text-sm text-neutral-400 font-medium">
                  Digital marketing, social media, campaigns & performance strategies
                </p>
              </div>
              <button
                onClick={() => onSelectService('upcycling')}
                className="text-xs font-montserrat font-bold text-white/80 hover:text-[#ff3b19] uppercase tracking-wider underline text-left mt-4 cursor-pointer py-1"
              >
                Explore Marketing →
              </button>
            </div>

            {/* Photo Card */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/20 min-h-[200px] sm:min-h-[220px] bg-neutral-900 group">
              <img
                src="/web5.webp"
                alt="Brand Growth Campaign"
                className="w-full h-full object-cover contrast-110 group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-3 left-3 bg-[#ff3b19] text-white text-[9px] font-mono uppercase px-2 py-0.5 font-bold rounded">
                GROWTH
              </div>
            </div>

          </motion.div>

        </div>

        {/* Closing Line */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 sm:mt-16 text-center select-none px-4"
        >
          <span className="font-marker text-xl sm:text-3xl lg:text-4xl text-[#ff3b19] spray-text tracking-wide -rotate-1 inline-block">
            DON'T JUST EXIST — CREATE IMPACT.
          </span>
        </motion.div>

      </div>
    </section>
  );
}
