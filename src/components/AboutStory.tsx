import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, HeartHandshake, History, Globe2, Sparkles } from 'lucide-react';
import { Language, HomeConfig } from '../types';
import { translations } from '../data';

interface AboutStoryProps {
  currentLang: Language;
  homeConfig: HomeConfig;
}

export default function AboutStory({ currentLang, homeConfig }: AboutStoryProps) {
  const t = translations[currentLang];
  const isRtl = currentLang === 'fa';
  const [showFull, setShowFull] = useState(false);

  const activeTitle = isRtl ? homeConfig.aboutTitleFa : homeConfig.aboutTitleEn;
  const activeSub = isRtl ? homeConfig.aboutSubFa : homeConfig.aboutSubEn;
  const activeContent = isRtl ? homeConfig.aboutContentFa : homeConfig.aboutContentEn;
  const imageMain = homeConfig.aboutImageMain;
  const imageSec = homeConfig.aboutImageSec;

  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300" id="about-story-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 6: Brand Story Narrative */}
          <div className={`lg:col-span-6 ${isRtl ? 'lg:text-right text-center order-2 lg:order-1' : 'lg:text-left text-center order-2'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red/5 text-brand-red rounded-full text-xs font-bold mb-4">
              <History className="w-3.5 h-3.5" />
              <span>{isRtl ? 'پیشینه و ارزش‌های مبل الدورادو' : 'Our Legacy & Values'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-gray-950 dark:text-white leading-tight mb-6">
              {activeTitle}
            </h2>

            <p className="text-sm font-extrabold text-brand-red mb-6 tracking-wide">
              ✦ {activeSub}
            </p>

            <div className="space-y-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
              {activeContent.split('\n\n').slice(0, showFull ? undefined : 2).map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Toggle full story */}
            <button
              onClick={() => setShowFull(!showFull)}
              className="mt-6 text-xs font-bold text-brand-red hover:text-brand-red-dark transition-colors inline-flex items-center gap-1.5"
            >
              <span>{showFull ? t.readLess : t.readMore}</span>
              <span className={`transition-transform duration-300 ${showFull ? 'rotate-180' : ''}`}>↓</span>
            </button>

            {/* Interactive milestones indicators */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-gray-100 dark:border-gray-800">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-brand-red/5 text-brand-red">
                  <Award className="w-5 h-5" />
                </div>
                <div className={isRtl ? 'text-right' : 'text-left'}>
                  <h4 className="font-extrabold text-xs text-gray-900 dark:text-white">
                    {isRtl ? 'اولین نشان استاندارد' : '1st National Standard'}
                  </h4>
                  <p className="text-[10px] text-gray-500 font-medium">
                    {isRtl ? 'در مبل خانگی ایران' : 'Badge for Home Sofas'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-brand-red/5 text-brand-red">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div className={isRtl ? 'text-right' : 'text-left'}>
                  <h4 className="font-extrabold text-xs text-gray-900 dark:text-white">
                    {isRtl ? 'متدولوژی روز اروپا' : 'European Machinery'}
                  </h4>
                  <p className="text-[10px] text-gray-500 font-medium">
                    {isRtl ? 'ترکیب تکنولوژی و هنر' : 'Modern Industrial Craft'}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Column 6: Brand Imagery & Accents */}
          <div className="lg:col-span-6 relative order-1 lg:order-2">
            
            {/* Elegant multi-frame bento visual collage */}
            <div className="grid grid-cols-12 gap-4">
              
              {/* Main large frame */}
              <div className="col-span-8 rounded-3xl overflow-hidden shadow-xl aspect-[4/5] relative group bg-gray-100 dark:bg-gray-800">
                <img 
                  src={imageMain} 
                  alt="Eldorado Factory Craft" 
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className={`absolute bottom-4 left-4 right-4 text-white ${isRtl ? 'text-right' : 'text-left'}`}>
                  <span className="text-[9px] uppercase tracking-wider text-brand-red font-extrabold">
                    {isRtl ? 'سادگی و استحکام مبل الدورادو' : 'Pure Siberian Pine Framing'}
                  </span>
                  <p className="font-black text-xs sm:text-sm">
                    {isRtl ? 'اسکلت ضد پوسیدگی و موریانه روس' : 'Moisture Resistant Core'}
                  </p>
                </div>
              </div>

              <div className="col-span-4 flex flex-col gap-4">
                
                {/* Frame 2 */}
                <div className="rounded-3xl overflow-hidden shadow-lg aspect-square bg-gray-100 dark:bg-gray-800">
                  <img 
                    src={imageSec} 
                    alt="Eldorado Materials" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>

                {/* Frame 3 with dark luxury brand identity card */}
                <div className="rounded-3xl flex-1 bg-gradient-to-br from-brand-red to-brand-red-dark text-white p-4 flex flex-col justify-between shadow-xl">
                  <Sparkles className="w-5 h-5 text-white/80" />
                  <div>
                    <span className="font-black text-xs block mb-1">
                      {isRtl ? 'تضمین اصالت برند' : 'Genuine Craft'}
                    </span>
                    <span className="text-[9px] opacity-75 font-medium leading-tight block">
                      {isRtl ? 'دارای ثبت تجاری رسمی و کد ملی کالا' : 'Registered trademark catalog'}
                    </span>
                  </div>
                </div>

              </div>

            </div>

            {/* Float Badge */}
            <div className={`absolute -bottom-6 ${isRtl ? '-right-6' : '-left-6'} bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-4 rounded-2xl shadow-xl flex items-center gap-3`}>
              <div className="w-10 h-10 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className={isRtl ? 'text-right' : 'text-left'}>
                <span className="font-black text-xs text-gray-900 dark:text-white block">
                  {isRtl ? 'ضمانت‌نامه ۳ ساله رسمی' : '3 Years Warranty'}
                </span>
                <span className="text-[10px] text-gray-400 font-semibold block">
                  {isRtl ? 'تعهد کتبی و بی قید و شرط' : 'Written certificate'}
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
