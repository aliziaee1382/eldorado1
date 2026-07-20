import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  PhoneCall, 
  ChevronRight, 
  X, 
  Check, 
  SlidersHorizontal, 
  Sparkles, 
  Maximize2, 
  HelpCircle,
  ShoppingBag,
  Send,
  Loader2,
  BookmarkCheck,
  Copy,
  Phone,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';
import { Language, Product } from '../types';
import { translations, productsData } from '../data';

interface ProductCatalogProps {
  currentLang: Language;
  searchTerm: string;
  products: Product[];
  isHome?: boolean;
  setActiveTab?: (tab: string) => void;
}

export default function ProductCatalog({ 
  currentLang, 
  searchTerm,
  products,
  isHome,
  setActiveTab
}: ProductCatalogProps) {
  const t = translations[currentLang];
  const isRtl = currentLang === 'fa';

  const [activeCategory, setActiveCategory] = useState<'all' | 'sofa-l' | 'sofa-seven' | 'sofa-one'>('all');
  const [sortBy, setSortBy] = useState<'cheapest' | 'most-expensive' | 'latest'>('latest');
  
  // Quote modal state
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search query filter
    if (searchTerm.trim() !== '') {
      const query = searchTerm.toLowerCase();
      result = result.filter(
        (p) =>
          p.nameFa.toLowerCase().includes(query) ||
          p.nameEn.toLowerCase().includes(query) ||
          p.descFa.toLowerCase().includes(query) ||
          p.descEn.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Sorting
    if (sortBy === 'cheapest') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'most-expensive') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'latest') {
      // simulate default ID sorting or arbitrary latest
      result.sort((a, b) => b.id - a.id);
    }

    return result;
  }, [products, activeCategory, sortBy, searchTerm]);

  const displayedProducts = useMemo(() => {
    if (isHome) {
      return filteredProducts.slice(0, isMobile ? 4 : 6);
    }
    return filteredProducts;
  }, [filteredProducts, isHome, isMobile]);

  const categories = [
    { id: 'all', label: t.all },
    { id: 'sofa-seven', label: t.sofaSeven },
    { id: 'sofa-l', label: t.sofaL },
    { id: 'sofa-one', label: t.sofaOne }
  ];

  return (
    <section className="py-12 bg-white dark:bg-gray-900 transition-colors duration-300" id="catalog-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red/5 text-brand-red rounded-full text-xs font-bold mb-3">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>{isRtl ? 'کالکشن جدید مبلمان خانگی الدورادو' : 'Eldorado New Luxury Catalog'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-950 dark:text-white mb-4">
            {isRtl ? 'محصولات لوکس گالری الدورادو' : 'Explore Eldorado Signature Collections'}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            {isRtl 
              ? 'تولید شده با اسکلت مستحکم ضد رطوبت، فوم مقاوم یورتان و بهترین کالیته کتان و بوکله وارداتی'
              : 'Handcrafted with selected moisture-resistant frames, orthopedic cushioning, and premium luxury fabrics.'}
          </p>
        </div>

        {/* Filter & Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-gray-100 dark:border-gray-800 mb-8">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-brand-red text-white shadow-md shadow-brand-red/20'
                    : 'bg-gray-50 dark:bg-gray-950 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort selection dropdown */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            <div className="flex items-center gap-2 text-gray-500 text-xs font-semibold">
              <SlidersHorizontal className="w-4 h-4 text-brand-red" />
              <span>{t.sortBy}:</span>
            </div>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-xl px-4 py-2 text-xs font-bold text-gray-700 dark:text-gray-300 focus:outline-none focus:border-brand-red transition-all"
            >
              <option value="latest">{t.sortLatest}</option>
              <option value="cheapest">{t.sortCheapest}</option>
              <option value="most-expensive">{t.sortMostExpensive}</option>
            </select>
          </div>
        </div>

        {/* Catalog Grid */}
        <AnimatePresence mode="popLayout">
          {displayedProducts.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-24 text-gray-400 dark:text-gray-500"
            >
              <HelpCircle className="w-16 h-16 mx-auto mb-4 stroke-1 opacity-40" />
              <p className="text-sm font-semibold">{t.noProductsFound}</p>
            </motion.div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8"
            >
              {displayedProducts.map((product) => {
                return (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="group relative bg-gray-50 dark:bg-gray-950 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800/40 hover:border-brand-red/30 transition-all shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between animate-fade-in"
                  >
                    
                    {/* Sofa Image and controls */}
                    <div className="relative aspect-[16/11] w-full overflow-hidden bg-gray-200 dark:bg-gray-900">
                      <img 
                        src={product.image} 
                        alt={isRtl ? product.nameFa : product.nameEn}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                      {/* Technical specifications overlay */}
                      <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center pointer-events-none">
                        <span className="bg-black/60 backdrop-blur-md text-white text-[8px] sm:text-[9px] font-bold px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full uppercase tracking-wider">
                          {product.category === 'sofa-seven' ? t.sofaSeven : product.category === 'sofa-l' ? t.sofaL : t.sofaOne}
                        </span>
                      </div>
                    </div>

                    {/* Card Description Area */}
                    <div className="p-3 sm:p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className={`flex items-center gap-1.5 mb-1 sm:mb-2 ${isRtl ? 'flex-row-reverse' : ''}`}>
                          <span className="text-[8px] sm:text-[10px] bg-brand-red/10 text-brand-red font-black px-1.5 py-0.5 rounded-md">
                            {isRtl ? `کد: ${product.code}` : `Code: ${product.code}`}
                          </span>
                        </div>

                        <div className="flex items-center justify-between mb-1 sm:mb-2">
                          <h3 className={`font-black text-[11px] sm:text-sm text-gray-950 dark:text-white group-hover:text-brand-red transition-colors line-clamp-1 ${isRtl ? 'text-right' : 'text-left'}`}>
                            {isRtl ? product.nameFa : product.nameEn}
                          </h3>
                        </div>

                        <p className={`text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-1 sm:line-clamp-2 mb-2 sm:mb-4 ${isRtl ? 'text-right' : 'text-left'}`}>
                          {isRtl ? product.descFa : product.descEn}
                        </p>

                        {/* Bullet key features */}
                        <div className="space-y-1 mb-3 sm:mb-5">
                          {(isRtl ? product.featuresFa : product.featuresEn).slice(0, 2).map((feat, idx) => (
                            <div key={idx} className={`flex items-center gap-1 sm:gap-2 text-[8.5px] sm:text-[10px] text-gray-600 dark:text-gray-400 ${isRtl ? 'flex-row-reverse' : ''}`}>
                              <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-brand-red shrink-0" />
                              <span className="font-medium truncate">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Pricing and Action row */}
                      <div className={`flex items-center justify-between border-t border-gray-100 dark:border-gray-800/60 pt-2 sm:pt-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
                        <div className={`flex flex-col ${isRtl ? 'text-right' : 'text-left'}`}>
                          <span className="text-[8px] sm:text-[10px] text-gray-400 font-semibold">{isRtl ? 'قیمت محصول' : 'Product Pricing'}</span>
                          <span className="font-extrabold text-[9px] sm:text-[12px] text-brand-red whitespace-nowrap">
                            {isRtl ? 'تماس بگیرید' : 'Call inquiry'}
                          </span>
                        </div>

                        <button
                          onClick={() => { setSelectedProduct(product); setCopiedCode(false); }}
                          className="px-2 py-1.5 sm:px-4 sm:py-2.5 bg-brand-red/5 hover:bg-brand-red text-brand-red hover:text-white rounded-lg sm:rounded-xl text-[9px] sm:text-xs font-bold transition-all flex items-center gap-1 border border-brand-red/10 hover:border-brand-red cursor-pointer active:scale-95"
                        >
                          <PhoneCall className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          <span className="hidden xs:inline">{t.callToOrder}</span>
                          <span className="inline xs:hidden">{isRtl ? 'تماس' : 'Call'}</span>
                        </button>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* View More Button on Home View */}
        {isHome && (
          <div className="text-center mt-12">
            <button
              onClick={() => setActiveTab && setActiveTab('products')}
              className="px-6 py-3.5 bg-brand-red text-white font-black text-xs rounded-2xl hover:bg-brand-red/90 transition-all shadow-lg hover:shadow-brand-red/15 inline-flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <span>{isRtl ? 'مشاهده همه محصولات الدورادو' : 'View All Products'}</span>
              {isRtl ? <ArrowLeft className="w-4 h-4 animate-pulse" /> : <ArrowRight className="w-4 h-4 animate-pulse" />}
            </button>
          </div>
        )}

        {/* Dynamic sliding drawer/dialog for stecial phone pricing quotes */}
        <AnimatePresence>
          {selectedProduct && (
            <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative bg-white dark:bg-gray-950 w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-900 p-6 sm:p-8"
              >
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-900"
                >
                  <X className="w-5 h-5" />
                </button>

                <div>
                  <div className="flex items-center gap-2.5 mb-3 justify-center text-brand-red">
                    <PhoneCall className="w-5 h-5 animate-pulse" />
                    <h3 className="text-base font-black text-gray-900 dark:text-white">
                      {isRtl ? 'راهنمای استعلام تلفنی قیمت مبل' : 'Price Inquiry & Booking Guide'}
                    </h3>
                  </div>

                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed text-center mb-5">
                    {isRtl 
                      ? 'به علت تنوع کالیته پارچه‌های لوکس وارداتی و ابعاد اختصاصی کلاف، لطفاً جهت استعلام قیمت نهایی روز و دریافت تصاویر کالیته با کارشناسان ما تماس بگیرید.'
                      : 'Due to variations in luxury fabric grades and customizable sizes, please call our managers with the product code for live price estimates.'}
                  </p>

                  {/* Prominent Product Code Card with Copy Action */}
                  <div className="bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-4 mb-5 text-center">
                    <span className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider block mb-1">
                      {isRtl ? 'کد اختصاصی این محصول' : 'Unique Product Code'}
                    </span>
                    <div className="flex items-center justify-center gap-3">
                      <span className="font-black text-3xl text-brand-red tracking-widest font-mono">
                        {selectedProduct.code}
                      </span>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(selectedProduct.code);
                          setCopiedCode(true);
                          setTimeout(() => setCopiedCode(false), 2000);
                        }}
                        className="p-1.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-500 dark:text-gray-400 hover:text-brand-red hover:border-brand-red transition-all flex items-center justify-center"
                        title={isRtl ? 'کپی کد محصول' : 'Copy Code'}
                      >
                        {copiedCode ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                    <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-2">
                      {isRtl 
                        ? 'هنگام تماس، این کد ۳ رقمی را به واحد فروش بگویید تا دقیقاً قیمت کارشناسی همین مدل را دریافت کنید.'
                        : 'Mention this 3-digit code when calling so our sales team can price this exact model.'}
                    </p>
                  </div>

                  {/* Brief Product Summary */}
                  <div className={`flex gap-4 p-3 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-850 mb-5 ${isRtl ? 'flex-row-reverse text-right' : 'text-left'}`}>
                    <img 
                      src={selectedProduct.image} 
                      alt="" 
                      className="w-16 h-16 object-cover rounded-xl shrink-0"
                    />
                    <div className="flex flex-col justify-center">
                      <span className="text-[9px] text-brand-red font-bold uppercase tracking-wider">
                        {selectedProduct.category === 'sofa-seven' ? t.sofaSeven : selectedProduct.category === 'sofa-l' ? t.sofaL : t.sofaOne}
                      </span>
                      <h4 className="font-extrabold text-xs text-gray-900 dark:text-white">
                        {isRtl ? selectedProduct.nameFa : selectedProduct.nameEn}
                      </h4>
                      <span className="text-[10.5px] font-semibold text-brand-red mt-0.5">
                        {isRtl ? 'وضعیت قیمت: جهت استعلام تماس بگیرید' : 'Price Status: Call for Price Inquiry'}
                      </span>
                    </div>
                  </div>

                  {/* DIRECT CLICKABLE DIAL CALL BUTTONS */}
                  <div className="space-y-3">
                    <a 
                      href="tel:09125720896"
                      className="w-full py-3 bg-brand-red hover:bg-brand-red-dark text-white rounded-xl text-xs font-bold shadow-lg shadow-brand-red/10 transition-all flex items-center justify-center gap-2.5 group"
                    >
                      <Phone className="w-4 h-4 animate-bounce shrink-0" />
                      <div className="flex items-center gap-2 flex-wrap justify-center">
                        <span>{isRtl ? 'تماس با مدیریت گالری (داوری)' : 'Call Sales Manager (Davari)'}</span>
                        <span className="font-mono text-xs tracking-wide bg-black/10 px-2 py-0.5 rounded" dir="ltr">0912 572 0896</span>
                      </div>
                    </a>

                    <a 
                      href="tel:02176264495"
                      className="w-full py-3 bg-white dark:bg-gray-900 border border-brand-red/20 hover:border-brand-red text-gray-800 dark:text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2.5"
                    >
                      <Phone className="w-4 h-4 text-brand-red shrink-0" />
                      <div className="flex items-center gap-2 flex-wrap justify-center">
                        <span>{isRtl ? 'تلفن ثابت نمایشگاه کارخانه کمرد' : 'Factory Showroom Phone'}</span>
                        <span className="font-mono text-xs tracking-wide bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded text-brand-red font-bold" dir="ltr">021 7626 4495</span>
                      </div>
                    </a>
                  </div>

                  {/* Messenger Quick Links */}
                  <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-850 flex gap-3">
                    <a 
                      href="https://wa.me/989125720896" 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex-1 py-2 rounded-lg border border-green-500/20 hover:border-green-500 bg-green-500/5 hover:bg-green-500/10 text-green-600 dark:text-green-400 text-[10px] font-bold transition-all flex items-center justify-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5 text-green-500 shrink-0" />
                      <span>{isRtl ? 'واتساپ کارخانه' : 'Inquire on WhatsApp'}</span>
                    </a>

                    <a 
                      href="https://t.me/davari" 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex-1 py-2 rounded-lg border border-sky-500/20 hover:border-sky-500 bg-sky-500/5 hover:bg-sky-500/10 text-sky-600 dark:text-sky-400 text-[10px] font-bold transition-all flex items-center justify-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                      <span>{isRtl ? 'تلگرام پشتیبانی' : 'Telegram Support'}</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
