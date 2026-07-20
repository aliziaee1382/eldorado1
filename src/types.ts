export interface TranslationSchema {
  navHome: string;
  navProducts: string;
  navCustomizer: string;
  navAbout: string;
  navBlog: string;
  navContact: string;
  heroBadge: string;
  heroTitle: string;
  heroSub: string;
  heroPromo: string;
  heroPromoSub: string;
  heroExploreBtn: string;
  heroCustomizerBtn: string;
  categories: string;
  all: string;
  sofaL: string;
  sofaSeven: string;
  sofaOne: string;
  sortBy: string;
  sortCheapest: string;
  sortMostExpensive: string;
  sortLatest: string;
  searchPlaceholder: string;
  noProductsFound: string;
  contactUs: string;
  addressTitle: string;
  addressVal: string;
  workingHoursTitle: string;
  workingHoursVal: string;
  phoneTitle: string;
  emailTitle: string;
  whatsappTitle: string;
  telegramTitle: string;
  formName: string;
  formPhone: string;
  formMessage: string;
  formSubmit: string;
  formSending: string;
  formSuccess: string;
  aboutTitle: string;
  aboutSub: string;
  aboutContent: string;
  readMore: string;
  readLess: string;
  warrantyExpress: string;
  warrantyExpressSub: string;
  warrantySupport: string;
  warrantySupportSub: string;
  warrantyPay: string;
  warrantyPaySub: string;
  warrantyReturn: string;
  warrantyReturnSub: string;
  warrantyOriginal: string;
  warrantyOriginalSub: string;
  quoteTitle: string;
  quoteDesc: string;
  quoteSubmit: string;
  quoteNamePlaceholder: string;
  quotePhonePlaceholder: string;
  customizerTitle: string;
  customizerDesc: string;
  customizerFabric: string;
  customizerWood: string;
  customizerColor: string;
  customizerOrder: string;
  customizerPrice: string;
  bookmarkEmpty: string;
  bookmarkHeader: string;
  bookmarkBtnTitle: string;
  callToOrder: string;
  featuresTitle: string;
  materialVelvet: string;
  materialLeather: string;
  materialLinen: string;
  woodOak: string;
  woodWalnut: string;
  woodBeech: string;
  copied: string;
  latestReads: string;
}

export type Language = 'fa' | 'en';

export interface Product {
  id: number;
  code: string; // 3-digit product code
  nameFa: string;
  nameEn: string;
  category: 'sofa-l' | 'sofa-seven' | 'sofa-one';
  image: string;
  price: number; // approximate base price in Tooman for styling or relative pricing
  featuresFa: string[];
  featuresEn: string[];
  descFa: string;
  descEn: string;
}

export interface BlogPost {
  id: number;
  titleFa: string;
  titleEn: string;
  descFa: string;
  descEn: string;
  contentFa: string;
  contentEn: string;
  image: string;
  dateFa: string;
  dateEn: string;
  authorFa: string;
  authorEn: string;
}

export interface CustomizerState {
  sofaId: number;
  fabric: 'velvet' | 'leather' | 'linen';
  wood: 'oak' | 'walnut' | 'beech';
  color: string; // hex code
  colorName: { fa: string; en: string };
}

export interface SlideImage {
  url: string;
  titleFa: string;
  titleEn: string;
  subtitleFa: string;
  subtitleEn: string;
}

export interface HomeConfig {
  heroBadgeFa: string;
  heroBadgeEn: string;
  heroTitleFa: string;
  heroTitleEn: string;
  heroSubFa: string;
  heroSubEn: string;
  heroPromoFa: string;
  heroPromoEn: string;
  heroPromoSubFa: string;
  heroPromoSubEn: string;
  slideImages: SlideImage[];
  aboutTitleFa: string;
  aboutTitleEn: string;
  aboutSubFa: string;
  aboutSubEn: string;
  aboutContentFa: string;
  aboutContentEn: string;
  aboutImageMain: string;
  aboutImageSec: string;
}

