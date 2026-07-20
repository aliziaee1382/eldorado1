import React from 'react';
import { 
  Truck, 
  Headphones, 
  CreditCard, 
  ShieldCheck, 
  Award,
  Instagram,
  Send,
  MessageCircle,
  Phone,
  Compass,
  Search,
  Palette,
  Info,
  BookOpen,
  PhoneCall
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data';
import BrandLogo from './BrandLogo';

interface FooterProps {
  currentLang: Language;
  setActiveTab: (tab: string) => void;
}

export default function Footer({ currentLang, setActiveTab }: FooterProps) {
  const t = translations[currentLang];
  const isRtl = currentLang === 'fa';

  const badges = [
    { icon: Truck, title: t.warrantyExpress, sub: t.warrantyExpressSub },
    { icon: Headphones, title: t.warrantySupport, sub: t.warrantySupportSub },
    { icon: ShieldCheck, title: t.warrantyPay, sub: t.warrantyPaySub },
    { icon: Award, title: t.warrantyOriginal, sub: t.warrantyOriginalSub },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-900 transition-colors duration-300">
      
      {/* Guarantees Badges Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-gray-200 dark:border-gray-900">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div 
                key={idx} 
                className={`flex gap-3.5 items-center ${isRtl ? 'flex-row-reverse text-right' : 'text-left'}`}
              >
                <div className="w-10 h-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-xs text-gray-950 dark:text-white">
                    {b.title}
                  </h4>
                  <p className="text-[10px] text-gray-400 font-semibold mt-0.5">
                    {b.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Directory links and Social media details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Col 5: Brand identity & storytelling */}
          <div className={`md:col-span-5 ${isRtl ? 'text-right' : 'text-left'}`}>
            <div className={`flex items-center gap-3 mb-4 ${isRtl ? 'justify-start' : 'justify-end'}`}>
              <BrandLogo className="w-10 h-10 shrink-0" />
              <span className="font-black text-base text-gray-950 dark:text-white tracking-wide">
                {isRtl ? 'مبلمان لوکس الدورادو' : 'Eldorado Furniture'}
              </span>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-medium max-w-sm">
              {isRtl 
                ? 'با بیش از سال‌ها سابقه درخشان در خلق مبلمان استاندارد ملی ایران. ترکیب تخصص روز مهندسی، هنر صنعت کلاف‌سازی و احترام به سلیقه خانوار اصیل ایرانی.'
                : 'Pioneers of National Certified home sofas design and ergonomics engineering in the Middle East.'}
            </p>

            {/* Social List */}
            <div className={`flex items-center gap-3 mt-6 ${isRtl ? 'justify-start' : 'justify-end'}`}>
              <a 
                href="https://www.instagram.com/eldoradosofagroup/?hl=en" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-gray-200 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-pink-600 hover:text-white transition-colors flex items-center justify-center"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a 
                href="https://t.me/eldoradosofa" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-gray-200 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-sky-500 hover:text-white transition-colors flex items-center justify-center"
              >
                <Send className="w-4.5 h-4.5" />
              </a>
              <a 
                href="https://wa.me/989125720896" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-gray-200 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-emerald-500 hover:text-white transition-colors flex items-center justify-center"
              >
                <MessageCircle className="w-4.5 h-4.5" />
              </a>
              <a 
                href="tel:02176264495" 
                className="w-9 h-9 rounded-xl bg-gray-200 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors flex items-center justify-center"
              >
                <Phone className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Col 3: Navigation menu directories */}
          <div className={`md:col-span-3 ${isRtl ? 'text-right' : 'text-left'}`}>
            <h4 className="font-extrabold text-xs text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              {isRtl ? 'نقشه و صفحات سایت' : 'Site Directory'}
            </h4>
            
            <ul className="space-y-2.5">
              {[
                { id: 'home', label: t.navHome, icon: Compass },
                { id: 'products', label: t.navProducts, icon: Search },
                { id: 'about', label: t.navAbout, icon: Info },
                { id: 'blog', label: t.navBlog, icon: BookOpen },
                { id: 'contact', label: t.navContact, icon: PhoneCall },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className="text-xs font-semibold text-gray-500 hover:text-brand-red transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-red" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setActiveTab('admin')}
                  className="text-xs font-semibold text-gray-500 hover:text-brand-red transition-colors inline-flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-brand-red" />
                  <span className="underline decoration-dotted">{isRtl ? 'پنل مدیریت سایت' : 'Admin Portal'}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate values statement */}
          <div className={`md:col-span-4 ${isRtl ? 'text-right' : 'text-left'}`}>
            <h4 className="font-extrabold text-xs text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              {isRtl ? 'مجموعه کارخانجات مبلمان الدورادو' : 'Bespoke Corporate Standards'}
            </h4>
            <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed font-semibold mb-4">
              {isRtl 
                ? 'دارای گواهینامه‌های رسمی استاندارد ایران، محیط زیست و استانداردهای کیفی سری ISO از مراجع ذی‌صلاح بین‌المللی.'
                : 'Certified under the strict eco-friendly manufacturing blueprints, and ISO durability benchmarks.'}
            </p>
            <div className={`flex items-center gap-4 opacity-50 ${isRtl ? 'justify-start' : 'justify-end'}`}>
              <span className="text-[10px] font-bold text-gray-400">ISO 9001:2015</span>
              <span className="text-[10px] font-bold text-gray-400">ISO 14001:2015</span>
              <span className="text-[10px] font-bold text-gray-400">CE Certified</span>
            </div>
          </div>

        </div>
      </div>

      {/* Under copyright bar */}
      <div className="bg-gray-200/50 dark:bg-gray-950/80 py-4 border-t border-gray-200/60 dark:border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10.5px] text-gray-400 dark:text-gray-500 font-semibold text-center sm:text-left">
            {isRtl 
              ? 'تمام حقوق مادی و معنوی این وب‌سایت متعلق به شرکت مبلمان صنعتی الدورادو است.'
              : '© 2026 Eldorado Industrial Furniture Group. All rights reserved.'}
          </p>
          <div className="text-[10.5px] text-gray-400 dark:text-gray-500 font-semibold flex items-center gap-1">
            <span>{isRtl ? 'طراحی مدرن و اجرا توسط:' : 'Executed and customized by:'}</span>
            <a 
              href="https://ali0003.ir" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-brand-red font-bold hover:underline transition-colors"
            >
              0003
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}
