import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  MessageSquare, 
  Send, 
  Loader2, 
  Check, 
  Globe2,
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data';

interface ContactSectionProps {
  currentLang: Language;
  onNewLead?: (lead: { name: string; phone: string; message: string }) => void;
}

export default function ContactSection({ currentLang, onNewLead }: ContactSectionProps) {
  const t = translations[currentLang];
  const isRtl = currentLang === 'fa';

  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formMsg, setFormMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formPhone || !formMsg) return;

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSendSuccess(true);
      
      if (onNewLead) {
        onNewLead({
          name: formName || (isRtl ? 'ناشناس' : 'Anonymous'),
          phone: formPhone,
          message: formMsg
        });
      }

      setTimeout(() => {
        setSendSuccess(false);
        setFormName('');
        setFormPhone('');
        setFormMessage('');
      }, 5000);
    }, 1500);
  };

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-950 transition-colors duration-300" id="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red/5 text-brand-red rounded-full text-xs font-bold mb-3">
            <Phone className="w-3.5 h-3.5" />
            <span>{isRtl ? 'راه‌های ارتباط با مبل الدورادو' : 'Direct Channels'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-950 dark:text-white mb-4">
            {t.contactUs}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            {isRtl ? 'پاسخگویی سریع کارشناسان بخش مشاوره چیدمان دکوراسیون و مدیریت فروش کارخانه' : 'Connect directly with our central design dispatch office and gallery counselors.'}
          </p>
        </div>

        {/* Channels Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          
          {/* Card 1: Phone */}
          <div className={`p-5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl flex flex-col justify-between items-center text-center group hover:border-brand-red/20 transition-all shadow-xs`}>
            <div className="w-10 h-10 bg-red-500/10 text-brand-red rounded-xl flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-xs text-gray-900 dark:text-white mb-1">{t.phoneTitle}</h4>
              <p className="text-[10px] text-gray-400 font-semibold mb-2">{isRtl ? 'تماس با گالری' : 'Direct Hotline'}</p>
              <a href="tel:02176264495" className="text-xs font-black text-brand-red hover:underline block">
                <span className="inline-block" style={{ direction: 'ltr' }}>021 7626 4495</span>
              </a>
            </div>
          </div>

          {/* Card 2: Mobile / WhatsApp */}
          <div className="p-5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl flex flex-col justify-between items-center text-center group hover:border-green-500/20 transition-all shadow-xs">
            <div className="w-10 h-10 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-xs text-gray-900 dark:text-white mb-1">{t.whatsappTitle}</h4>
              <p className="text-[10px] text-gray-400 font-semibold mb-2">{isRtl ? 'پیام رسان همراه' : 'WhatsApp Business'}</p>
              <a href="https://wa.me/989125720896" target="_blank" rel="noopener noreferrer" className="text-xs font-black text-green-500 hover:underline block">
                <span className="inline-block" style={{ direction: 'ltr' }}>+98 912 572 0896</span>
              </a>
            </div>
          </div>

          {/* Card 3: Email */}
          <div className="p-5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl flex flex-col justify-between items-center text-center group hover:border-brand-red/20 transition-all shadow-xs">
            <div className="w-10 h-10 bg-red-500/10 text-brand-red rounded-xl flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-xs text-gray-900 dark:text-white mb-1">{t.emailTitle}</h4>
              <p className="text-[10px] text-gray-400 font-semibold mb-2">{isRtl ? 'پست الکترونیکی رسمی' : 'Official Inbox'}</p>
              <a href="mailto:info@sofaeldorado.com" className="text-xs font-black text-brand-red hover:underline block break-all">
                info@sofaeldorado.com
              </a>
            </div>
          </div>

          {/* Card 4: Telegram */}
          <div className="p-5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl flex flex-col justify-between items-center text-center group hover:border-sky-500/20 transition-all shadow-xs">
            <div className="w-10 h-10 bg-sky-500/10 text-sky-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Globe2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-xs text-gray-900 dark:text-white mb-1">{t.telegramTitle}</h4>
              <p className="text-[10px] text-gray-400 font-semibold mb-2">{isRtl ? 'پشتیبانی برخط تلگرام' : 'Telegram ID'}</p>
              <a href="https://t.me/eldoradosofa" target="_blank" rel="noopener noreferrer" className="text-xs font-black text-sky-500 hover:underline block">
                @eldoradosofa
              </a>
            </div>
          </div>

        </div>

        {/* Dual Form + Map Details block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Map & Addresses - Col 7 */}
          <div className="lg:col-span-7 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            
            {/* Address Texts */}
            <div className={`space-y-4 mb-6 ${isRtl ? 'text-right' : 'text-left'}`}>
              <div className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-xs text-gray-900 dark:text-white mb-1">
                    {t.addressTitle}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                    {t.addressVal}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Clock className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-xs text-gray-900 dark:text-white mb-1">
                    {t.workingHoursTitle}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                    {t.workingHoursVal}
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Iframe Map coordinates from the old raw HTML */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.0!2d51.7401771!3d35.7511819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z35.7511819sDAwJzAwLjAiTiA51.7401771sMDAnMDAuMCJF!5e0!3m2!1sen!2s!4v1234567890" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                title="مبل‌الدورادو"
                className="absolute inset-0"
              />
            </div>

          </div>

          {/* Form Message Sender - Col 5 */}
          <div className="lg:col-span-5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            
            <div className={`mb-6 ${isRtl ? 'text-right' : 'text-left'}`}>
              <h3 className="font-black text-base text-gray-950 dark:text-white mb-2">
                {isRtl ? 'ارسال پیام مستقیم به کارخانه' : 'Inquire Bespoke Project'}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {isRtl 
                  ? 'مشخصات خود را وارد کرده و موضوع مشاوره چیدمان یا برآورد قیمت را اعلام کنید.' 
                  : 'Enter your message details and contact information to request assistance.'}
              </p>
            </div>

            {sendSuccess ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
                <div className="w-14 h-14 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-4">
                  <Check className="w-7 h-7 stroke-[3]" />
                </div>
                <h4 className="font-black text-sm text-gray-900 dark:text-white mb-2">
                  {isRtl ? 'پیام شما با موفقیت ثبت گردید' : 'Inquiry Filed Successfully'}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 max-w-xs leading-relaxed">
                  {t.formSuccess}
                </p>
              </div>
            ) : (
              <form onSubmit={handleMessageSubmit} className="space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className={isRtl ? 'text-right' : 'text-left'}>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">
                      {t.formName}
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder={isRtl ? 'مثال: رضا محمدی' : 'e.g. John Doe'}
                      className={`w-full py-2.5 px-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-transparent text-xs text-gray-900 dark:text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/30 transition-all ${isRtl ? 'text-right' : 'text-left'}`}
                    />
                  </div>

                  <div className={isRtl ? 'text-right' : 'text-left'}>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">
                      {t.formPhone} *
                    </label>
                    <input 
                      type="tel" 
                      required
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      placeholder={isRtl ? '09123456789' : 'Contact number'}
                      dir="ltr"
                      className={`w-full py-2.5 px-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-transparent text-xs text-gray-900 dark:text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/30 transition-all font-mono ${isRtl ? 'text-right' : 'text-left'}`}
                    />
                  </div>

                  <div className={isRtl ? 'text-right' : 'text-left'}>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">
                      {t.formMessage} *
                    </label>
                    <textarea 
                      required
                      rows={4}
                      value={formMsg}
                      onChange={(e) => setFormMessage(e.target.value)}
                      placeholder={isRtl ? 'پیام خود را بنویسید...' : 'Your message here...'}
                      className={`w-full py-2.5 px-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-transparent text-xs text-gray-900 dark:text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/30 transition-all ${isRtl ? 'text-right' : 'text-left'}`}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-3.5 bg-brand-red hover:bg-brand-red-dark text-white rounded-xl text-xs font-bold shadow-lg shadow-brand-red/20 transition-all flex items-center justify-center gap-2 mt-6"
                >
                  {isSending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{t.formSending}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t.formSubmit}</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
