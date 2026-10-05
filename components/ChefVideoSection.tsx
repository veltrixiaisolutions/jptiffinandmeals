"use client";

import React, { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, ChefHat, Flame, ShieldCheck } from "lucide-react";

export default function ChefVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section id="chef-kitchen" className="py-20 lg:py-28 relative bg-slate-50/80 border-t border-slate-200/80 overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-amber-200/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Video Showcase */}
          <div className="lg:col-span-7 relative group">
            <div className="relative rounded-3xl overflow-hidden bg-white p-3 border border-slate-200 shadow-xl">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 shadow-inner">
                <video
                  ref={videoRef}
                  src="/jptiffinImages/Video.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                />

                {/* Video Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                {/* Floating pill badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200 text-[11px] font-bold text-slate-900 flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  <span>Inside the JP Culinary Kitchen</span>
                </div>

                {/* Custom Video Controls */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-auto">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={togglePlay}
                      className="p-2.5 rounded-xl bg-white/90 hover:bg-amber-500 text-slate-900 hover:text-black transition-all shadow-md backdrop-blur-md"
                      aria-label={isPlaying ? "Pause Video" : "Play Video"}
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                    </button>

                    <button
                      onClick={toggleMute}
                      className="p-2.5 rounded-xl bg-white/90 hover:bg-amber-500 text-slate-900 hover:text-black transition-all shadow-md backdrop-blur-md flex items-center gap-1.5 text-xs font-bold"
                      aria-label={isMuted ? "Unmute Video" : "Mute Video"}
                    >
                      {isMuted ? (
                        <>
                          <VolumeX className="w-4 h-4" />
                          <span className="hidden sm:inline">Unmute Audio</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-4 h-4" />
                          <span className="hidden sm:inline">Mute Audio</span>
                        </>
                      )}
                    </button>
                  </div>

                  <button
                    onClick={handleFullscreen}
                    className="p-2.5 rounded-xl bg-white/90 hover:bg-amber-500 text-slate-900 hover:text-black transition-all shadow-md backdrop-blur-md"
                    aria-label="Fullscreen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom floating micro card */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white p-3.5 rounded-2xl border border-emerald-200 shadow-xl hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-extrabold text-slate-900">Commercial Grade Cleanliness</p>
                <p className="text-[10px] text-slate-500">HACCP & Health Canada Inspected Kitchen</p>
              </div>
            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4 w-fit shadow-sm">
              <ChefHat className="w-3.5 h-3.5 text-amber-600" />
              <span>World-Class Culinary Excellence</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Watch The Magic Behind <br />
              <span className="gold-gradient-text">Our Kitchen Craftsmanship</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
              We reject the shortcuts of conventional tiffin providers. Executive Chef Japleen Singh is the sole master chef in our commercial kitchen, personally preparing, searing, and packaging every single meal with uncompromising precision.
            </p>

            <div className="mt-8 space-y-4">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Lava-Stone Grills & Searing</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Meats are charred at ultra-high heat to seal in natural juices and natural amino acids without dry chewiness.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Zero Industrial Seed Oils</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    No cheap canola, soybean, or palm oils. We exclusively cook with single-estate Spanish Extra Virgin Olive Oil and pure butter ghee.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <ChefHat className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Blast Chilled at Peak Flavor</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Immediately brought down from cooking temperature to 2°C in minutes, preserving vitamins and locking in restaurant aromatics.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#menu-pricing"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-black text-xs uppercase tracking-wider text-slate-900 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 hover:brightness-105 shadow-md shadow-amber-500/20 transition-all"
              >
                <span>Taste The Difference &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
