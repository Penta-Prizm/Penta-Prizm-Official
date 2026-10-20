import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Terminal, Zap, ShieldCheck } from 'lucide-react';

const LOADING_STEPS = [
  'INITIALIZING PRIZM MATRIX',
  'LOADING VISUAL ARTIFACTS & ASSETS',
  'CALIBRATING BRAND FREQUENCIES',
  'COMPOSING DIGITAL EXPERIENCES',
  'READY FOR LAUNCH'
];

// How long the fault state stays on screen before the site is released.
const ERROR_HOLD_MS = 4000;

/**
 * Full screen loader.
 *
 * The screen itself is fully driven by the real loading state of the app:
 *  - `progress` is the actual asset progress reported by the 3D scene (0-100)
 *  - `status` is 'loading' | 'ready' | 'error'
 *
 * The counter only ever reaches 100% when `status === 'ready'`, i.e. when the
 * heavy assets are loaded, parsed and already rendered at least one frame.
 */
export default function LoadingScreen({
  onLoadingComplete,
  progress = 0,
  status = 'loading',
  errorMessage = '3D ASSET STREAM INTERRUPTED'
}) {
  const [displayProgress, setDisplayProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isSkipped, setIsSkipped] = useState(false);

  const displayRef = useRef(0);
  const targetRef = useRef(0);
  const exitStartedRef = useRef(false);
  const timersRef = useRef([]);

  const isReady = status === 'ready';
  const hasFailed = status === 'error';
  // 100% is reserved for a fully ready scene, never reached while loading or after a failure.
  const targetProgress = isReady || isSkipped ? 100 : Math.min(99, Math.max(0, progress));

  useEffect(() => {
    targetRef.current = targetProgress;
  }, [targetProgress]);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((id) => clearTimeout(id));
    timersRef.current = [];
  }, []);

  // Ease the counter towards the real progress value (visual only, never decides completion).
  useEffect(() => {
    let rafId;
    let last = performance.now();
    const tick = (now) => {
      const delta = Math.min(0.1, (now - last) / 1000);
      last = now;
      const target = targetRef.current;
      const current = displayRef.current;
      const diff = target - current;
      if (Math.abs(diff) < 0.4) {
        if (current !== target) {
          displayRef.current = target;
          setDisplayProgress(target);
        }
      } else {
        const next = current + diff * (1 - Math.exp(-delta * 6));
        displayRef.current = next;
        setDisplayProgress(next);
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  // Keep the status line in sync with the real progress.
  useEffect(() => {
    const currentStep = Math.min(
      LOADING_STEPS.length - 1,
      Math.floor((displayProgress / 100) * LOADING_STEPS.length)
    );
    setStepIndex(currentStep);
  }, [displayProgress]);

  // Runs the existing exit animation and releases the site.
  const dismiss = useCallback(
    (withReadyDelay) => {
      if (exitStartedRef.current) return;
      exitStartedRef.current = true;
      const start = setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        setIsFinished(true);
        const complete = setTimeout(() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
          if (onLoadingComplete) onLoadingComplete();
        }, 600);
        timersRef.current.push(complete);
      }, withReadyDelay ? 300 : 0);
      timersRef.current.push(start);
    },
    [onLoadingComplete]
  );

  // Ready: the scene is live, run the exit animation.
  useEffect(() => {
    if (!isReady && !isSkipped) return;
    if (displayProgress < 100) return;
    dismiss(true);
  }, [isReady, isSkipped, displayProgress, dismiss]);

  // Failure: show the fault state and never leave the user stuck on the loader.
  useEffect(() => {
    if (!hasFailed) return undefined;
    const release = setTimeout(() => dismiss(false), ERROR_HOLD_MS);
    timersRef.current.push(release);
    return () => clearTimeout(release);
  }, [hasFailed, dismiss]);

  useEffect(() => clearTimers, [clearTimers]);

  const handleSkip = () => {
    if (hasFailed) {
      dismiss(false);
      return;
    }
    displayRef.current = 100;
    setDisplayProgress(100);
    setIsSkipped(true);
  };

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          id="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%', 
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[99999] bg-[#080808] text-white flex flex-col justify-between p-6 sm:p-12 overflow-hidden select-none touch-none overscroll-none"
        >
          {/* Background Ambient Grid & Glows */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff3b19]/15 rounded-full blur-[140px]" />
            <div className="absolute -bottom-20 right-10 w-[350px] h-[350px] bg-[#646cff]/15 rounded-full blur-[120px]" />
          </div>

          {/* Top Bar Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center">
                <img
                  src="/Logo1.png"
                  alt="Penta Prizm Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div>
                <span className="font-unbounded font-bold tracking-widest text-xs sm:text-sm text-white">
                  PENTA PRIZM
                </span>
                <span className="text-[10px] text-white/40 block tracking-wider font-mono">
                  STUDIO ENGINE V2.4
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[11px] font-mono text-white/60 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#ff3b19] animate-ping" />
              <span>BOOT SEQUENCE</span>
            </div>
          </div>

          {/* Center Brand Visuals & Huge Counter */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto py-8">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-6"
            >
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#ff3b19] uppercase mb-2 px-3 py-1 bg-[#ff3b19]/10 border border-[#ff3b19]/30 rounded-full">
                <Zap className="w-3.5 h-3.5" />
                Creative • Content • Digital • Tech
              </div>

              <h1 className="font-unbounded font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/40 mt-2">
                PENTA PRIZM
              </h1>
            </motion.div>

            {/* Giant Monospace Numeric Counter */}
            <div className="font-bebas text-7xl sm:text-9xl md:text-[140px] leading-none tracking-tight font-black text-white flex items-baseline gap-2">
              <span className="tabular-nums">
                {String(Math.floor(displayProgress)).padStart(2, '0')}
              </span>
              <span className="text-[#ff3b19] text-3xl sm:text-5xl font-mono">%</span>
            </div>

            {/* Dynamic Status Text */}
            <div className="h-6 flex items-center justify-center mt-2">
              {hasFailed ? (
                <motion.p
                  key="error"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="text-xs sm:text-sm font-mono tracking-wider text-[#ff3b19] flex items-center gap-2 uppercase"
                >
                  <Terminal className="w-3.5 h-3.5" />
                  {errorMessage}
                </motion.p>
              ) : (
                <motion.p
                  key={stepIndex}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="text-xs sm:text-sm font-mono tracking-wider text-white/70 flex items-center gap-2 uppercase"
                >
                  <Terminal className="w-3.5 h-3.5 text-[#646cff]" />
                  {LOADING_STEPS[stepIndex]}
                </motion.p>
              )}
            </div>
          </div>

          {/* Bottom Progress Bar & Telemetry Footer */}
          <div className="relative z-10 space-y-4">
            {/* Multi-segment styled progress bar */}
            <div className="relative w-full bg-white/10 h-2.5 rounded-full overflow-hidden border border-white/10 p-[1px]">
              <motion.div
                className="h-full bg-gradient-to-r from-[#ff3b19] via-[#ff6b00] to-[#646cff] rounded-full relative"
                style={{ width: `${displayProgress}%` }}
                transition={{ ease: 'linear' }}
              >
                <div className="absolute right-0 top-0 bottom-0 w-3 bg-white blur-[2px] opacity-80" />
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-white/40 gap-2">
              <div className="flex items-center gap-4">
                <span>MEM_ALLOC: 512MB / OK</span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">NODES: ACTIVE (8/8)</span>
              </div>
              <button
                type="button"
                onClick={handleSkip}
                className="text-white/60 hover:text-white underline underline-offset-2 transition-colors cursor-pointer"
              >
                {hasFailed ? 'CONTINUE [CLICK]' : 'SKIP INTRO [ESC / CLICK]'}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
