import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Calendar, 
  User, 
  ArrowLeft, 
  ArrowRight, 
  Search, 
  Clock, 
  Compass,
  MessageSquare,
  Share2,
  Check
} from 'lucide-react';
import { Language, BlogPost } from '../types';
import { translations, blogData } from '../data';

interface InteractiveBlogProps {
  currentLang: Language;
  blogs: BlogPost[];
  isHome?: boolean;
  setActiveTab?: (tab: string) => void;
}

export default function InteractiveBlog({ currentLang, blogs, isHome, setActiveTab }: InteractiveBlogProps) {
  const t = translations[currentLang];
  const isRtl = currentLang === 'fa';

  const [selectedPost, setSelectedProduct] = useState<BlogPost | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const displayedBlogs = useMemo(() => {
    if (isHome) {
      return blogs.slice(0, isMobile ? 4 : 6);
    }
    return blogs;
  }, [blogs, isHome, isMobile]);

  const handleShare = (post: BlogPost) => {
    // Simulate share URL copy
    navigator.clipboard.writeText(`${window.location.origin}/#blog-${post.id}`);
    setCopiedId(post.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="py-12 bg-white dark:bg-gray-900 transition-colors duration-300" id="blog-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatePresence mode="wait">
          {selectedPost ? (
            /* Detailed reading view */
            <motion.div
              key="reading-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-3xl p-6 sm:p-10 shadow-sm"
            >
              
              {/* Back to Blog Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className={`mb-6 text-xs font-bold text-gray-500 hover:text-brand-red transition-colors flex items-center gap-1.5 ${
                  isRtl ? 'flex-row-reverse' : ''
                }`}
              >
                {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
                <span>{isRtl ? 'بازگشت به مقالات' : 'Back to Articles'}</span>
              </button>

              <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-md mb-8">
                <img 
                  src={selectedPost.image} 
                  alt="" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Meta tags row */}
              <div className={`flex flex-wrap items-center gap-4 text-[10.5px] text-gray-400 font-semibold mb-4 border-b border-gray-100 dark:border-gray-800 pb-4 ${
                isRtl ? 'flex-row-reverse text-right' : 'text-left'
              }`}>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-brand-red" />
                  <span>{isRtl ? selectedPost.dateFa : selectedPost.dateEn}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-brand-red" />
                  <span>{isRtl ? selectedPost.authorFa : selectedPost.authorEn}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-brand-red" />
                  <span>{isRtl ? 'زمان مطالعه: ۵ دقیقه' : '5 Min Read'}</span>
                </div>
              </div>

              {/* Title & Content */}
              <div className={isRtl ? 'text-right' : 'text-left'}>
                <h1 className="text-xl sm:text-2xl font-black text-gray-950 dark:text-white leading-tight mb-6">
                  {isRtl ? selectedPost.titleFa : selectedPost.titleEn}
                </h1>

                <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed space-y-4 whitespace-pre-line font-medium">
                  {isRtl ? selectedPost.contentFa : selectedPost.contentEn}
                </div>
              </div>

              {/* Share & Like support indicators */}
              <div className={`flex items-center justify-between border-t border-gray-100 dark:border-gray-800 pt-6 mt-8 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                  {isRtl ? 'موضوع: مقالات دکوراسیون الدورادو' : 'Topic: Interior design lessons'}
                </span>
                
                <button
                  onClick={() => handleShare(selectedPost)}
                  className="px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:text-brand-red text-[11px] font-bold transition-all flex items-center gap-1.5"
                >
                  {copiedId === selectedPost.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-500" />
                      <span>{t.copied}</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span>{isRtl ? 'اشتراک‌گذاری' : 'Share Article'}</span>
                    </>
                  )}
                </button>
              </div>

            </motion.div>
          ) : (
            /* Standard Grid showcase */
            <motion.div key="grid-view">
              
              {/* Heading */}
              <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red/5 text-brand-red rounded-full text-xs font-bold mb-3">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{t.latestReads}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-950 dark:text-white mb-4">
                  {isRtl ? 'راهنمای چیدمان و دانستنی‌های خرید مبل' : 'Eldorado Living Room Guides'}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  {isRtl ? 'ترفندها، استانداردهای رنگ‌آمیزی و مراجع انتخاب مبل مناسب برای فضاهای مدرن و آپارتمانی' : 'Tips, matching color palettes, and ergonomics standards for luxury living rooms.'}
                </p>
              </div>

              {/* Grid lists */}
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                {displayedBlogs.map((post) => (
                  <article
                    key={post.id}
                    className="bg-gray-50 dark:bg-gray-950 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800/40 hover:border-brand-red/20 shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between animate-fade-in"
                  >
                    
                    <div>
                      <div className="relative aspect-[16/10] overflow-hidden bg-gray-200 dark:bg-gray-900">
                        <img 
                          src={post.image} 
                          alt="" 
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                        />
                        
                        {/* Overlay date */}
                        <div className={`absolute bottom-2 ${isRtl ? 'right-2' : 'left-2'} bg-black/60 backdrop-blur-md text-white text-[8.5px] sm:text-[9.5px] font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg flex items-center gap-1`}>
                          <Calendar className="w-2.5 h-2.5 text-brand-red" />
                          <span>{isRtl ? post.dateFa : post.dateEn}</span>
                        </div>
                      </div>

                      {/* Content details */}
                      <div className="p-4 sm:p-6">
                        <h3 className={`font-black text-[11px] sm:text-sm text-gray-950 dark:text-white group-hover:text-brand-red transition-colors line-clamp-2 mb-2 sm:mb-3 leading-snug ${
                          isRtl ? 'text-right' : 'text-left'
                        }`}>
                          {isRtl ? post.titleFa : post.titleEn}
                        </h3>

                        <p className={`text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 line-clamp-2 sm:line-clamp-3 leading-relaxed mb-2 sm:mb-4 ${
                          isRtl ? 'text-right' : 'text-left'
                        }`}>
                          {isRtl ? post.descFa : post.descEn}
                        </p>
                      </div>
                    </div>

                    <div className={`p-4 sm:p-6 pt-0 border-t border-gray-100 dark:border-gray-800/50 flex items-center justify-between mt-2 sm:mt-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
                      <div className="flex items-center gap-1 text-[8.5px] sm:text-[10px] text-gray-400 font-semibold">
                        <User className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-brand-red" />
                        <span className="truncate max-w-[50px] sm:max-w-none">{isRtl ? 'تحریریه' : 'Editor'}</span>
                      </div>

                      <button
                        onClick={() => setSelectedProduct(post)}
                        className="text-[10px] sm:text-xs font-bold text-brand-red hover:text-brand-red-dark transition-colors inline-flex items-center gap-0.5 sm:gap-1"
                        id={`read-article-${post.id}`}
                      >
                        <span>{t.readMore}</span>
                        {isRtl ? <ArrowLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> : <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
                      </button>
                    </div>

                  </article>
                ))}
              </div>

              {/* View More Button on Home View */}
              {isHome && (
                <div className="text-center mt-12">
                  <button
                    onClick={() => setActiveTab && setActiveTab('blog')}
                    className="px-6 py-3.5 bg-brand-red text-white font-black text-xs rounded-2xl hover:bg-brand-red/90 transition-all shadow-lg hover:shadow-brand-red/15 inline-flex items-center gap-2 cursor-pointer active:scale-95"
                  >
                    <span>{isRtl ? 'مشاهده همه مقالات و دانستنی‌ها' : 'View All Articles'}</span>
                    {isRtl ? <ArrowLeft className="w-4 h-4 animate-pulse" /> : <ArrowRight className="w-4 h-4 animate-pulse" />}
                  </button>
                </div>
              )}

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
