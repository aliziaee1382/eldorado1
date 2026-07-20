import React, { useState, useEffect } from 'react';
import { Language, Product, BlogPost, HomeConfig } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import AboutStory from './components/AboutStory';
import InteractiveBlog from './components/InteractiveBlog';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import { productsData, blogData, defaultHomeConfig } from './data';

export default function App() {
  const [currentLang, setLang] = useState<Language>('fa');
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('eldorado_theme');
    if (saved) {
      return saved === 'dark';
    }
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false; // Default to light mode
  });
  const [activeTab, setActiveTab] = useState<string>('home');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Dynamic products state with localStorage fallback
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('eldorado_products');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return productsData;
  });

  // Dynamic blogs state with localStorage fallback
  const [blogs, setBlogs] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem('eldorado_blogs');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return blogData;
  });

  // Dynamic home page config state with localStorage fallback
  const [homeConfig, setHomeConfig] = useState<HomeConfig>(() => {
    const saved = localStorage.getItem('eldorado_home_config');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return defaultHomeConfig;
  });

  // Sync dark mode class on document element & theme-color meta tag
  useEffect(() => {
    const root = window.document.documentElement;
    let themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (!themeColorMeta) {
      themeColorMeta = document.createElement('meta');
      themeColorMeta.setAttribute('name', 'theme-color');
      document.head.appendChild(themeColorMeta);
    }

    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('eldorado_theme', 'dark');
      themeColorMeta.setAttribute('content', '#030712');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      localStorage.setItem('eldorado_theme', 'light');
      themeColorMeta.setAttribute('content', '#DC2626');
    }
  }, [darkMode]);

  const handleNavSearch = (term: string) => {
    setSearchTerm(term);
    if (term.trim() !== '') {
      setActiveTab('products');
    }
  };

  // Capture lead submissions dynamically from ContactSection
  const handleNewLead = (lead: { name: string; phone: string; message: string }) => {
    const saved = localStorage.getItem('eldorado_inquiries');
    let currentInquiries = [];
    if (saved) {
      try {
        currentInquiries = JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    const newId = currentInquiries.length > 0 ? Math.max(...currentInquiries.map((i: any) => i.id)) + 1 : 1;
    const newLead = {
      id: newId,
      name: lead.name,
      phone: lead.phone,
      message: lead.message,
      date: new Date().toISOString().split('T')[0],
      status: 'Pending',
      notes: ''
    };
    const updated = [newLead, ...currentInquiries];
    localStorage.setItem('eldorado_inquiries', JSON.stringify(updated));
    
    // Dispatch custom event to let the AdminPanel state know if it is already open
    window.dispatchEvent(new CustomEvent('new_lead_added'));
  };

  // Determine active components based on tab state
  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <Hero currentLang={currentLang} setActiveTab={setActiveTab} homeConfig={homeConfig} />
            <ProductCatalog 
              currentLang={currentLang} 
              searchTerm={searchTerm}
              products={products}
              isHome={true}
              setActiveTab={setActiveTab}
            />
            <AboutStory currentLang={currentLang} homeConfig={homeConfig} />
            <InteractiveBlog 
              currentLang={currentLang} 
              blogs={blogs} 
              isHome={true}
              setActiveTab={setActiveTab}
            />
            <ContactSection currentLang={currentLang} onNewLead={handleNewLead} />
          </>
        );
      case 'products':
        return (
          <ProductCatalog 
            currentLang={currentLang} 
            searchTerm={searchTerm}
            products={products}
          />
        );
      case 'about':
        return <AboutStory currentLang={currentLang} homeConfig={homeConfig} />;
      case 'blog':
        return <InteractiveBlog currentLang={currentLang} blogs={blogs} />;
      case 'contact':
        return <ContactSection currentLang={currentLang} onNewLead={handleNewLead} />;
      case 'admin':
        return (
          <AdminPanel
            currentLang={currentLang}
            products={products}
            setProducts={setProducts}
            blogs={blogs}
            setBlogs={setBlogs}
            homeConfig={homeConfig}
            setHomeConfig={setHomeConfig}
            onClose={() => setActiveTab('home')}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div 
      className={`min-h-screen bg-white dark:bg-gray-950 text-gray-950 dark:text-gray-50 flex flex-col font-sans transition-colors duration-300`}
      dir={currentLang === 'fa' ? 'rtl' : 'ltr'}
    >
      <Navbar 
        currentLang={currentLang}
        setLang={setLang}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onSearch={handleNavSearch}
      />

      <main className="flex-1">
        {renderActiveView()}
      </main>

      <Footer currentLang={currentLang} setActiveTab={setActiveTab} />
    </div>
  );
}
