import React, { useState } from 'react';
import { 
  Sun, 
  Moon, 
  Languages, 
  Heart, 
  Menu, 
  X, 
  Compass, 
  Info, 
  Palette, 
  BookOpen, 
  PhoneCall, 
  Search,
  Check,
  Trash2
} from 'lucide-react';
import { Language, Product } from '../types';
import { translations } from '../data';
import BrandLogo from './BrandLogo';

interface NavbarProps {
  currentLang: Language;
  setLang: (lang: Language) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onSearch: (term: string) => void;
}

export default function Navbar({
  currentLang,
  setLang,
  darkMode,
  setDarkMode,
  activeTab,
  setActiveTab,
  onSearch
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchVal, setSearchVal] = useState('');
  
  const t = translations[currentLang];
  const isRtl = currentLang === 'fa';

  const menuItems = [
    { id: 'home', label: t.navHome, icon: Compass },
    { id: 'products', label: t.navProducts, icon: Search },
    { id: 'about', label: t.navAbout, icon: Info },
    { id: 'blog', label: t.navBlog, icon: BookOpen },
    { id: 'contact', label: t.navContact, icon: PhoneCall },
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div 
            onClick={() => { setActiveTab('home'); setIsMobileMenuOpen(false); }}
            className="flex items-center gap-3 cursor-pointer select-none group"
            id="nav-logo-btn"
          >
            {/* Elegant Custom Eldorado logo */}
            <BrandLogo className="w-12 h-12 shrink-0" />
            
            <div className={`flex flex-col ${isRtl ? 'text-right' : 'text-left'}`}>
              <span className="font-extrabold text-lg tracking-tight text-gray-950 dark:text-white group-hover:text-brand-red transition-colors">
                {isRtl ? 'مبل الدورادو' : 'ELDORADO'}
              </span>
              <span className="text-[10px] font-medium text-gray-500 tracking-wider">
                {isRtl ? 'اصالت مـلی، کیفیت جـهانی' : 'LUXURY SOFA DESIGN'}
              </span>
            </div>
          </div>

          {/* Desktop Search bar */}
          <div className="hidden md:flex items-center flex-1 max-w-sm mx-8">
            <div className="relative w-full">
              <Search className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 ${isRtl ? 'right-3' : 'left-3'}`} />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchVal}
                onChange={handleSearchChange}
                className={`w-full py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full text-xs text-gray-950 dark:text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/30 transition-all ${
                  isRtl ? 'pr-9 pl-4 text-right' : 'pl-9 pr-4 text-left'
                }`}
              />
            </div>
          </div>

          {/* Desktop Navigation links */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => { setActiveTab(item.id); setIsMobileMenuOpen(false); }}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                    isActive
                      ? 'bg-brand-red/10 text-brand-red dark:bg-brand-red/20'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-gray-950 dark:hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Controls Switches */}
          <div className="flex items-center gap-2">
            
            {/* Language switch */}
            <button
              onClick={() => setLang(currentLang === 'fa' ? 'en' : 'fa')}
              className="p-2.5 rounded-xl border border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors flex items-center gap-1"
              title="تغییر زبان / Language Switch"
              id="lang-toggle"
            >
              <Languages className="w-4 h-4" />
              <span className="text-[11px] font-bold tracking-tight">
                {currentLang === 'fa' ? 'EN' : 'فا'}
              </span>
            </button>

            {/* Theme toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl border border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
              title="حالت تیره/روشن"
              id="theme-toggle"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl border border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 dark:border-gray-900 bg-white dark:bg-gray-950 transition-colors">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {/* Mobile Search input */}
            <div className="relative w-full mb-4">
              <Search className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 ${isRtl ? 'right-3' : 'left-3'}`} />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchVal}
                onChange={handleSearchChange}
                className={`w-full py-2.5 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-xs text-gray-950 dark:text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/30 transition-all ${
                  isRtl ? 'pr-9 pl-4 text-right' : 'pl-9 pr-4 text-left'
                }`}
              />
            </div>
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => { setActiveTab(item.id); setIsMobileMenuOpen(false); }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-all ${
                    isRtl ? 'flex-row-reverse text-right' : 'flex-row text-left'
                  } ${
                    isActive
                      ? 'bg-brand-red/10 text-brand-red dark:bg-brand-red/20'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-gray-950 dark:hover:text-white'
                  }`}
                >
                  <Icon className="w-4.5 h-4.5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

    </header>
  );
}
