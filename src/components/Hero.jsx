import React, { Suspense, useRef } from 'react';
import { motion } from 'motion/react';
import { Instagram, Send, MessageCircle, Mail, Zap } from 'lucide-react';
import { MARQUEE_ITEMS } from '../data/studioData.js';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, ContactShadows } from '@react-three/drei';

function MeshyModel() {
  const { scene } = useGLTF('/3D_Element/meshy-model.glb');
  const modelRef = useRef();

  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={1.5}
      position={[0, 0, 0]}
    />
  );
}

function ModelLoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#ff3b19" wireframe />
    </mesh>
  );
}

export default function Hero({ onOpenContact, isLoaded = true }) {
  return (
    <section
      id="hero-section"
      className="relative w-full min-h-[92vh] md:min-h-screen md:h-screen md:max-h-[1080px] bg-[#0c0c0c] flex flex-col justify-between pt-16 sm:pt-18 md:pt-20 lg:pt-22 pb-0 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] md:w-[600px] lg:w-[700px] h-[350px] sm:h-[500px] md:h-[600px] lg:h-[700px] bg-[#ff3b19]/10 rounded-full blur-[100px] sm:blur-[130px] md:blur-[150px] pointer-events-none"
      />

      {/* Main hero card container */}
      <div className="relative w-full px-4 sm:px-8 lg:px-12 flex-1 min-h-0 flex flex-col justify-between">
        
        {/* Top bar inside hero image / canvas */}
        <div className="flex items-start justify-between z-20 pt-2 sm:pt-3 md:pt-4 gap-4 shrink-0">
          {/* Left Hero sub-menu with dots */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-1 sm:gap-1.5 text-white/90"
          >
            <span className="font-bebas text-base sm:text-lg md:text-xl tracking-wider text-white">PENTA PRIZM STUDIO</span>
            <div className="flex flex-col gap-0.5 sm:gap-1 pl-1">
              <a href="#about" className="text-[10px] sm:text-[11px] font-montserrat font-bold tracking-widest text-white/80 hover:text-[#ff3b19] transition-colors flex items-center gap-1.5 py-0.5 group">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b19] group-hover:scale-125 transition-transform"></span>
                ABOUT THE STUDIO
              </a>
              <a href="#works" className="text-[10px] sm:text-[11px] font-montserrat font-bold tracking-widest text-white/70 hover:text-[#ff3b19] transition-colors flex items-center gap-1.5 py-0.5 group">
                <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-[#ff3b19] transition-colors"></span>
                OUR SERVICES
              </a>
              <a href="#what-we-do" className="text-[10px] sm:text-[11px] font-montserrat font-bold tracking-widest text-white/70 hover:text-[#ff3b19] transition-colors flex items-center gap-1.5 py-0.5 group">
                <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-[#ff3b19] transition-colors"></span>
                WHAT WE DO
              </a>
              <a href="#contacts" className="text-[10px] sm:text-[11px] font-montserrat font-bold tracking-widest text-white/70 hover:text-[#ff3b19] transition-colors flex items-center gap-1.5 py-0.5 group">
                <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-[#ff3b19] transition-colors"></span>
                CONTACTS
              </a>
            </div>
          </motion.div>

          {/* Right hero CTA + quote */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-center gap-2 sm:gap-3"
          >
            <div className="hidden lg:flex flex-col items-end gap-1 max-w-[280px] xl:max-w-[320px]">
              <span className="font-bebas text-lg sm:text-xl text-[#ff3b19] tracking-wider leading-none">“</span>
              <p className="font-montserrat font-semibold text-[10px] sm:text-[11px] tracking-wide text-white/80 text-right leading-relaxed italic">
                We don’t just make things look good — we make them mean something.
              </p>
              <span className="mt-0.5 font-mono text-[9px] tracking-widest text-white/40 uppercase">
                — PENTA PRIZM
              </span>
            </div>
          </motion.div>
        </div>

        {/* Center Hero Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={isLoaded ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.96 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative my-auto py-2 sm:py-4 md:py-5 lg:py-6 flex-1 min-h-0 flex items-center justify-center"
        >
          <div className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto h-full max-h-[34vh] sm:max-h-[36vh] md:max-h-[38vh] lg:max-h-[42vh] xl:max-h-[46vh] aspect-[16/10] sm:aspect-[16/9] md:aspect-[16/8.5] lg:aspect-[16/8] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
            {/* 3D GLB Model Viewer */}
            <Canvas
              camera={{ position: [0, 0, 4], fov: 45 }}
              className="w-full h-full"
              gl={{ antialias: true, alpha: true }}
              style={{ background: 'transparent' }}
            >
              <ambientLight intensity={0.6} />
              <directionalLight position={[5, 5, 5]} intensity={1.2} />
              <directionalLight position={[-5, -5, -5]} intensity={0.3} color="#ff3b19" />
              <pointLight position={[0, 3, 2]} intensity={0.8} color="#ff3b19" />
              <Suspense fallback={<ModelLoadingFallback />}>
                <MeshyModel />
                <Environment preset="city" />
                <ContactShadows
                  position={[0, -1.5, 0]}
                  opacity={0.4}
                  scale={5}
                  blur={2}
                  color="#ff3b19"
                />
              </Suspense>
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate={false}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={(3 * Math.PI) / 4}
              />
            </Canvas>

            {/* Subtle dark vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

            {/* Asphalt grunge texture highlight */}
            <div className="absolute inset-0 opacity-15 mix-blend-overlay bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            {/* Interactive tag overlay */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isLoaded ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/60 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full border border-white/15 text-[9px] sm:text-[10px] font-mono tracking-widest text-[#ff3b19] flex items-center gap-1.5 shadow-lg"
            >
              <span className="w-2 h-2 rounded-full bg-[#ff3b19] animate-ping" />
              STUDIO 2026 // LIVE
            </motion.div>
          </div>
        </motion.div>

        {/* Hero Bottom text overlays */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-center sm:text-left z-20 pb-2 sm:pb-3 md:pb-4 shrink-0"
        >
          <div className="font-montserrat font-extrabold text-[11px] sm:text-xs md:text-sm tracking-wider uppercase text-white/90">
            WE BUILD BRANDS <br className="hidden sm:inline"/> AND SHAPE DIGITAL EXPERIENCES
          </div>
          <div className="font-montserrat font-extrabold text-[11px] sm:text-xs md:text-sm tracking-wider uppercase text-white/90 text-center sm:text-right">
            WE CREATE DIGITAL EXPERIENCES<br className="hidden sm:inline" /> AND TRANSFORM IDEAS INTO IMPACT
          </div>
        </motion.div>
      </div>

      {/* Massive Bold Typography with Marquee Ribbon split */}
      <div className="relative w-full select-none pt-1 sm:pt-2 md:pt-3 shrink-0">
        {/* Giant Top Headline Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full text-center overflow-hidden leading-none"
        >
          <h1 className="font-bebas text-[17vw] sm:text-[15.5vw] md:text-[14vw] lg:text-[13vw] xl:text-[12.5vw] leading-[0.8] tracking-tight text-white uppercase font-normal scale-y-110">
            PENTA PRIZM
          </h1>
        </motion.div>

        {/* Red Warning/Caution Ribbon Tape with Running Marquee (Left to Right) */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={isLoaded ? { opacity: 1, scaleY: 1 } : { opacity: 0, scaleY: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="relative z-30 w-full bg-[#ff3b19] text-white py-2 sm:py-2 md:py-2.5 lg:py-3 shadow-2xl overflow-hidden -mt-2 sm:-mt-3 md:-mt-4 lg:-mt-5 origin-bottom"
        >
          <div className="animate-marquee-ltr items-center select-none">
            {/* First Set */}
            <div className="flex items-center shrink-0">
              {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
                <span key={`group1-${idx}`} className="flex items-center gap-3 sm:gap-4 mx-2.5 sm:mx-6 font-montserrat font-black text-[11px] sm:text-xs md:text-sm tracking-widest uppercase text-white shrink-0">
                  <span>{item}</span>
                  <span className="text-black/50 font-bold">//</span>
                </span>
              ))}
            </div>
            {/* Second Duplicate Set for Continuous Seamless Loop */}
            <div className="flex items-center shrink-0" aria-hidden="true">
              {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
                <span key={`group2-${idx}`} className="flex items-center gap-3 sm:gap-4 mx-2.5 sm:mx-6 font-montserrat font-black text-[11px] sm:text-xs md:text-sm tracking-widest uppercase text-white shrink-0">
                  <span>{item}</span>
                  <span className="text-black/50 font-bold">//</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
