import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Palette, Award, Shield, CheckCircle, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { Language, HomeConfig } from '../types';
import { translations } from '../data';

interface HeroProps {
  currentLang: Language;
  setActiveTab: (tab: string) => void;
  homeConfig: HomeConfig;
}

export default function Hero({ currentLang, setActiveTab, homeConfig }: HeroProps) {
  const t = translations[currentLang];
  const isRtl = currentLang === 'fa';
  const [currentSlide, setCurrentSlide] = useState(0);

  const activeBadge = isRtl ? homeConfig.heroBadgeFa : homeConfig.heroBadgeEn;
  const activeTitle = isRtl ? homeConfig.heroTitleFa : homeConfig.heroTitleEn;
  const activeSub = isRtl ? homeConfig.heroSubFa : homeConfig.heroSubEn;
  const activePromo = isRtl ? homeConfig.heroPromoFa : homeConfig.heroPromoEn;
  const activePromoSub = isRtl ? homeConfig.heroPromoSubFa : homeConfig.heroPromoSubEn;
  const slides = homeConfig.slideImages || [];

  useEffect(() => {
    if (slides.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleNext = () => {
    if (slides.length === 0) return;
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    if (slides.length === 0) return;
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative overflow-hidden bg-gray-50 dark:bg-gray-950 pt-8 pb-16 transition-colors duration-300">
      
      {/* Decorative vector grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.04] text-gray-950 dark:text-white pointer-events-none" />
      
      {/* Absolute colored glowing orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-red/10 dark:bg-brand-red/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gray-200/30 dark:bg-gray-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main textual hook - Col 5 */}
          <div className={`lg:col-span-5 flex flex-col justify-center ${isRtl ? 'lg:text-right text-center order-2 lg:order-1' : 'lg:text-left text-center order-2'}`}>
            
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`inline-flex items-center gap-2 self-center ${isRtl ? 'lg:self-start' : 'lg:self-end'} px-3 py-1.5 rounded-full bg-brand-red/5 dark:bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-bold mb-6`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{activeBadge}</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 dark:text-white leading-tight lg:leading-[1.15] tracking-tight mb-6"
            >
              {activeTitle}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              {activeSub}
            </motion.p>

            {/* CTA Buttons Group */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center justify-center lg:justify-start"
            >
              <button 
                onClick={() => setActiveTab('products')}
                className="w-full sm:w-auto px-10 py-4 bg-brand-red hover:bg-brand-red-dark text-white rounded-2xl text-sm font-bold shadow-xl shadow-brand-red/20 hover:shadow-brand-red/30 transition-all flex items-center justify-center gap-2 group"
                id="hero-explore-cta"
              >
                <Compass className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span>{t.heroExploreBtn}</span>
              </button>
            </motion.div>

            {/* Quick trust metrics */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 border-t border-gray-200 dark:border-gray-900 pt-8 mt-8 text-center"
            >
              <div className="flex flex-col items-center">
                <Award className="w-5 h-5 text-brand-red mb-1" />
                <span className="font-extrabold text-sm text-gray-900 dark:text-white">۱۰۰٪</span>
                <span className="text-[10px] text-gray-500 font-medium">{isRtl ? 'استاندارد ملی' : 'National Standard'}</span>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="w-5 h-5 text-brand-red mb-1" />
                <span className="font-extrabold text-sm text-gray-900 dark:text-white">{isRtl ? '۳۶ ماه' : '36 Months'}</span>
                <span className="text-[10px] text-gray-500 font-medium">{isRtl ? 'ضمانت کتبی' : 'Guarantee'}</span>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle className="w-5 h-5 text-brand-red mb-1" />
                <span className="font-extrabold text-sm text-gray-900 dark:text-white">۲۴/۷</span>
                <span className="text-[10px] text-gray-500 font-medium">{isRtl ? 'پشتیبانی فنی' : 'Active Support'}</span>
              </div>
            </motion.div>
          </div>

          {/* Dynamic Interactive Carousel - Col 7 */}
          <div className="lg:col-span-7 relative order-1 lg:order-2">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-900 bg-gray-200 dark:bg-gray-850">
              
              <AnimatePresence mode="wait">
                {slides.length > 0 && slides[currentSlide] && (
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                  >
                    <img 
                      src={slides[currentSlide].url} 
                      alt="Eldorado Premium Furniture" 
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Subtle vignette/gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Floating slide info */}
                    <div className={`absolute bottom-6 left-6 right-6 ${isRtl ? 'text-right' : 'text-left'}`}>
                      <span className="inline-block px-2.5 py-1 rounded bg-brand-red text-white text-[9px] font-bold tracking-wider mb-2 uppercase">
                        {isRtl ? 'محصولات گالری تهران' : 'EXCLUSIVE SHOWROOM'}
                      </span>
                      <h3 className="text-lg sm:text-xl font-black text-white drop-shadow-sm">
                        {isRtl ? slides[currentSlide].titleFa : slides[currentSlide].titleEn}
                      </h3>
                      <p className="text-xs text-gray-300 font-medium mt-1">
                        {isRtl ? slides[currentSlide].subtitleFa : slides[currentSlide].subtitleEn}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Slider Controls */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-black/40 hover:bg-brand-red text-white flex items-center justify-center transition-colors backdrop-blur-xs pointer-events-auto"
                  id="slide-prev-btn"
                >
                  {isRtl ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-black/40 hover:bg-brand-red text-white flex items-center justify-center transition-colors backdrop-blur-xs pointer-events-auto"
                  id="slide-next-btn"
                >
                  {isRtl ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                </button>
              </div>

              {/* Slide indicators */}
              <div className="absolute top-4 right-4 flex gap-1.5 bg-black/30 backdrop-blur-md px-2.5 py-1.5 rounded-full">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentSlide ? 'bg-brand-red w-5' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Interactive Promo Banner Tag inside bento container */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, type: 'spring' }}
              className={`absolute -bottom-6 ${isRtl ? '-left-4' : '-right-4'} bg-gradient-to-r from-brand-red to-brand-red-dark text-white rounded-2xl p-4 shadow-xl max-w-xs border border-white/20`}
            >
              <p className="text-[10px] uppercase tracking-wider text-white/80 font-bold mb-1">
                {activePromo}
              </p>
              <h4 className="font-extrabold text-sm">
                {activePromoSub}
              </h4>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
