'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import clsx from 'clsx';

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className }: HeroSectionProps) {
  return (
    <section 
      dir="rtl" 
      className={clsx(
        'relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center',
        className
      )}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="בית קפה דלתא - אווירה חמה ומזמינה"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/40 backdrop-blur-[2px]" />
      </div>

      {/* Glassmorphism Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 p-8 md:p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]">
          <div className="max-w-3xl mx-auto text-center">
            {/* Animated Heading */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              בית קפה <span className="text-secondary">דלתא</span>
            </motion.h1>
            
            {/* Animated Subheading */}
            <motion.h2 
              className="text-3xl md:text-4xl font-semibold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              בית קפה מוביל בישראל
            </motion.h2>
            
            {/* Animated Description */}
            <motion.p 
              className="text-xl text-white/90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              חווית לקוח מושלמת בכל ביקור
            </motion.p>
            
            {/* Animated CTA Button with Neumorphic Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="inline-block"
            >
              <button 
                className="
                  px-8 py-4 text-lg font-medium rounded-xl
                  bg-secondary text-white
                  transition-all duration-300
                  shadow-[5px_5px_10px_rgba(0,0,0,0.2),-5px_-5px_10px_rgba(255,255,255,0.05)]
                  hover:shadow-[3px_3px_6px_rgba(0,0,0,0.3),-3px_-3px_6px_rgba(255,255,255,0.1)]
                  active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.2),inset_-2px_-2px_5px_rgba(255,255,255,0.05)]
                  active:translate-y-0.5
                "
              >
                קבע תור עכשיו
              </button>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <motion.div 
          className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-gradient-to-br from-secondary/30 to-primary/20 blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
        <motion.div 
          className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-gradient-to-tr from-secondary/40 to-primary/10 blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.5, delay: 1 }}
        />
      </div>
    </section>
  );
}