export interface Product {
  id: number;
  code: string;
  nameFa: string;
  nameEn: string;
  category: 'sofa-seven' | 'sofa-l' | 'sofa-one';
  image: string;
  price: number;
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

export interface Inquiry {
  id: string;
  name: string;
  phone: string;
  productCode?: string;
  message?: string;
  date: string;
  status: 'pending' | 'called' | 'completed';
}

export const productsData: Product[] = [
  {
    id: 1,
    code: '101',
    nameFa: 'مبل هفت نفره چستر الیزه',
    nameEn: 'Elysee Chesterfield 7-Seater',
    category: 'sofa-seven',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800',
    price: 48000000,
    featuresFa: ['کلاف داخلی چوب روسی خشک‌کن رفته', 'پایه‌های تمام چوب راش گرجستان', 'اسفنج ۳۵ کیلویی ویژه یورتان'],
    featuresEn: ['Kiln-dried Siberian pine frame', 'Solid Georgian Beech wood legs', '35kg high-density premium urethane foam'],
    descFa: 'مبل چستر الیزه با لمسه‌دوزی‌های دست‌دوز و متقارن استادکاران، اصالت و شکوه بی‌نظیری را به خانه شما هدیه می‌دهد.',
    descEn: 'Elysee suite delivers timeless classical elegance with perfectly balanced, handcrafted tufting detailing.'
  },
  {
    id: 2,
    code: '102',
    nameFa: 'مبل هفت نفره راحتی میامی',
    nameEn: 'Miami Relax 7-Seater',
    category: 'sofa-seven',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800',
    price: 42000000,
    featuresFa: ['مکانیزم تاشو تکیه‌گاه و دستی صندلی‌ها', 'روکش پارچه تدی ترک ضد لک', 'فوم سرد قالبی با دوام بالا'],
    featuresEn: ['German multi-angle headrest and arm mechanism', 'Anti-stain Turkish teddy textured upholstery fabric', 'High-resilience premium sag-resistant cold-cured foam'],
    descFa: 'مبل میامی با داشتن مکانیزم تاشو در پشتی‌ها، گزینه‌ای بی‌نظیر برای تماشای تلویزیون و استراحت روزانه است.',
    descEn: 'Miami features advanced headrest adjusting mechanisms. Perfect for comfortable home theater rooms and relaxing.'
  },
  {
    id: 3,
    code: '103',
    nameFa: 'مبل هفت نفره هایکو',
    nameEn: 'Haiko Minimalist Suite',
    category: 'sofa-seven',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800',
    price: 43000000,
    featuresFa: ['طراحی مینیمال مینیاتوری سوئیسی', 'پارچه کتان نانو ضد لک وارداتی', 'کلاف داخلی مستحکم تقویت شده با دوبل چوبی'],
    featuresEn: ['Swiss minimalist profile', 'Waterproof nano-woven imported linen', 'Double-doweled heavy duty internal structural frame'],
    descFa: 'مبل هایکو انتخابی عالی برای فضاهای پرنور آپارتمانی است. سادگی در خطوط و رنگ‌بندی ملایم و گرم.',
    descEn: 'Haiko minimal profile matches standard Scandinavian aesthetics. Sleek geometries paired with soft pastel hues.'
  },
  {
    id: 4,
    code: '104',
    nameFa: 'مبل هفت نفره ساوانا',
    nameEn: 'Savanna Comfort 7-Seater',
    category: 'sofa-seven',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800',
    price: 46000000,
    featuresFa: ['دو عدد تک‌نفره گردون خلبانی دوقلو', 'اسکلت ارگونومیک ضد گودی کمر', 'پارچه لوکس ترک با تراکم بافت بالا'],
    featuresEn: ['Dual swiveling high-back pilot armchairs', 'Orthopedic structural posture alignment', 'Premium density Turkish woven upholstery fabric'],
    descFa: 'مدل ساوانا به علت برخورداری از مبل‌های تک‌نفره گردان ۳۶۰ درجه و نشیمن ارتوپدیک، از پرفروش‌ترین محصولات ماست.',
    descEn: 'The Savanna set is famous for its 360-degree swiveling accent chairs and high-back neck support modules.'
  },
  {
    id: 5,
    code: '105',
    nameFa: 'مبل هفت نفره کارائیب',
    nameEn: 'Caribbean Island Deluxe Suite',
    category: 'sofa-seven',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800',
    price: 55000000,
    featuresFa: ['پایه‌های مخفی بستر شناور هوایی', 'بافت پارچه شنی بوکله وارداتی', 'کلاف چوب راش گرجستان'],
    featuresEn: ['Hidden support platform (Floating effect)', 'Bespoke imported Boucle sand-textured fabric', 'Solid European Beech wood subframe'],
    descFa: 'مبل کارائیب با استایلی مدرن و الهام گرفته از جزایر استوایی، حس وسعت و آرامش خارق‌العاده‌ای در سالن ایجاد می‌کند.',
    descEn: 'Caribbean Island set features a floating visual layout, draped in luxurious sand-textured boucle cloth.'
  },
  {
    id: 6,
    code: '106',
    nameFa: 'مبل هفت نفره کریس',
    nameEn: 'Chris Contemporary Suite',
    category: 'sofa-seven',
    image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&q=80&w=800',
    price: 39000000,
    featuresFa: ['دوخت راسته موازی تماماً ایتالیایی', 'پایه‌های تمام چوب راش طبیعی', 'فوم پلی‌یورتان ارتجاعی فوق‌العاده'],
    featuresEn: ['Italian parallel double-stitch technique', 'Solid natural Beech wood exposed legs', 'High-resilience polyurethane smart foam'],
    descFa: 'کریس ترکیبی جذاب از سادگی کلاسیک و ظرافت‌های مبلمان قرن بیست و یکم میلادی است.',
    descEn: 'Chris suite represents a delightful synthesis of retro warmth and 21st-century modern tailoring.'
  },
  {
    id: 7,
    code: '201',
    nameFa: 'مبل ال سیلورادو',
    nameEn: 'Silverado Premium L-Sofa',
    category: 'sofa-l',
    image: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&q=80&w=800',
    price: 38000000,
    featuresFa: ['امکان جابجایی پاف و تغییر جهت چپ/راست', 'یراق‌آلات فلزی آبکاری‌شده بادوام', 'دکوراتیو دسته چوب طبیعی'],
    featuresEn: ['Modular ottoman (reversible left/right config)', 'Heavy-duty chrome plated hardware details', 'Aesthetic solid wood side table armrests'],
    descFa: 'ال سیلورادو دارای یک پاف متحرک چندکاره است که هم به عنوان زیرپایی عریض و هم به عنوان جلو‌مبلی کاربرد دارد.',
    descEn: 'The Silverado modular L-sofa offers total setup freedom with its reversible chaise and integrated tray armrests.'
  },
  {
    id: 8,
    code: '202',
    nameFa: 'مبل ال ماجستیک',
    nameEn: 'Majestic Grande L-Shape',
    category: 'sofa-l',
    image: 'https://images.unsplash.com/photo-1512211546317-a4848d56c0b3?auto=format&fit=crop&q=80&w=800',
    price: 44000000,
    featuresFa: ['سیستم تعلیق دوبل فنری زیگزاگ', 'رویه چرمی-پارچه‌ای ترکیبی مدرن', 'پایه‌های با پوشش رنگ کوره سوپرمات'],
    featuresEn: ['Double zig-zag spring suspension setup', 'Premium leather-fabric hybrid finish', 'Industrial super-matte powder coated legs'],
    descFa: 'ال ماجستیک با خطوط برجسته تیره و ظاهر اسپرت، مناسب خانه‌های جوان‌پسند و آتلیه‌هاست.',
    descEn: 'The Majestic Grande L-Shape sofa brings sleek industrial design and deep seat cloud cushion comfort.'
  },
  {
    id: 9,
    code: '203',
    nameFa: 'مبل ال نیروانا',
    nameEn: 'Nirvana Royal L-Sofa',
    category: 'sofa-l',
    image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&q=80&w=800',
    price: 41000000,
    featuresFa: ['دوخت چستر تماماً دست‌دوز اصیل', 'بدنه عایق ضد رطوبت چوب نراد روس', 'فوم سرد ماندگار بدون دفرمه شدن'],
    featuresEn: ['Pure hand-tufted chesterfield stitching', 'Moisture-proof Siberian pine carcass', 'Form-retentive high-density long-life foam'],
    descFa: 'مبل ال نیروانا تلفیقی بی‌همتا از شکوه لمسه‌دوزی کلاسیک چستر در قالبی مدرن و بهینه برای فضاهای کوچک است.',
    descEn: 'The Nirvana L-Sofa redefines classical tufting details for modern apartment corners, utilizing solid wood legs.'
  },
  {
    id: 10,
    code: '204',
    nameFa: 'مبل ال کازانو',
    nameEn: 'Casano Lounge Corner L',
    category: 'sofa-l',
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=800',
    price: 36000000,
    featuresFa: ['تکیه‌گاه شیب‌دار ارگونومیک ریلکس', 'پک کامل کوسن‌های دکوراتیو الیاف پر غاز', 'پایه مخفی فولادی ضد زنگ'],
    featuresEn: ['Pre-reclined absolute ergonomic lounge slope', 'Full goose down feather decorative pillows set', 'Invisible structural stainless steel frame'],
    descFa: 'مبل ال کازانو مظهر نشیمن گرم، خودمانی و ریلکسیشن مطلق بعد از یک روز شلوغ کاری است.',
    descEn: 'The Casano Corner L-sofa represents the ultimate cozy, welcoming retreat with its sink-in soft feather pillows.'
  },
  {
    id: 11,
    code: '301',
    nameFa: 'مبل تک‌نفره گردان ساوانا',
    nameEn: 'Savanna Swivel Accent Chair',
    category: 'sofa-one',
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=800',
    price: 14500000,
    featuresFa: ['بلبرینگ گردان فولادی بی‌صدا ۳۶۰ درجه', 'ارگونومی محافظ ستون فقرات خلبانی', 'رویه مخمل طرح‌دار درجه یک'],
    featuresEn: ['Silent 360-degree steel ball bearing swivel base', 'Pilot ergonomics with lumbar support cushioning', 'Prestige textured designer velvet'],
    descFa: 'مبل تک ساوانا، شاهکاری از تعادل و راحتی کاربری. مناسب اتاق کار لوکس یا به عنوان مبل میزبان در سالن.',
    descEn: 'The Savanna Swivel armchair is an engineering masterpiece. Fits perfectly in luxury home offices or living rooms.'
  },
  {
    id: 12,
    code: '302',
    nameFa: 'مبل تک‌نفره نیروانا (چستر)',
    nameEn: 'Nirvana Chesterfield Accent Chair',
    category: 'sofa-one',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800',
    price: 16000000,
    featuresFa: ['دکمه‌دوزی عمیق کار دست استادکاران', 'پایه‌های خراطی شده از چوب گردو', 'نشیمن ارگونومیک با فنرهای پاکتی ریز'],
    featuresEn: ['Genuine deep hand-tufting by master craftsmen', 'Hand-turned solid Walnut wooden legs', 'Ergonomic seat core built with pocket springs'],
    descFa: 'مبل تک نیروانا با لمسه‌دوزی‌های عمیق و اصیلش، جلوه‌ای سلطنتی و باابهت در خانه شما به وجود می‌آورد.',
    descEn: 'The Nirvana accent chair features meticulous diamond tufts, solid wood framing, and rich antique visual details.'
  }
];

export const blogData: BlogPost[] = [
  {
    id: 1,
    titleFa: 'چطور مبل مناسب خانه‌مان را انتخاب کنیم؟ راهنمای کاربردی خرید',
    titleEn: 'How to Choose the Perfect Sofa for Your Home: Complete Guide',
    descFa: 'انتخاب مبل یکی از مهم‌ترین تصمیم‌ها در چیدمان دکوراسیون خانه است. مبل فقط یک وسیله برای نشستن نیست، بلکه قلب تپنده خانه است.',
    descEn: 'Choosing a sofa is one of the most critical decisions in home staging. A sofa is not just a seat, it is the beating heart of your living room.',
    contentFa: `انتخاب مبل یکی از مهم‌ترین تصمیم‌ها در چیدمان و دکوراسیون خانه است. مبل فقط یک وسیله برای نشستن نیست، بلکه محلی برای دورهمی خانواده، استراحت روزانه و پذیرایی از مهمانان است. بنابراین، توجه به ابعاد، راحتی و کیفیت حرف اول را می‌زند.

۱. اندازه‌گیری دقیق فضا: قبل از هر اقدامی، طول و عرض نشیمن خود را اندازه بگیرید. مبل‌های بزرگ در فضاهای کوچک مسیر رفت و آمد را مسدود می‌کنند.
۲. توجه به ارگونومی: مبلمان نباید خیلی عمیق یا خیلی سفت باشد. گودی کمر و زاویه تکیه‌گاه باید استانداردهای ارتوپدیک را رعایت کنند.
۳. انتخاب کلاف و متریال داخلی: چوب‌های نامرغوب پس از چند سال استفاده شروع به جیرجیر کردن می‌کنند. مبل الدورادو با کلاف تمام چوب روس فرآوری شده مقاومت طولانی‌مدت را تضمین می‌کند.`,
    contentEn: `Selecting a sofa is one of the most pivotal decisions in interior styling. A sofa is not merely a piece of furniture; it is where families bond, relax, and entertain guests. 

1. Master Your Space: Always measure the room thoroughly before purchasing. Oversized sofas block key walking pathways and make small rooms feel claustrophobic.
2. Prioritize Ergonomics: The seat depth should support your spine comfortably. Ensure the seat base and backrest angle adhere to correct posture parameters.
3. Inspect the Structural Core: Low-grade wood starts squeaking within a short period. Eldorado utilizes certified kiln-dried Russian pine wood to guarantee absolute structural integrity.`,
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800',
    dateFa: '۲۳ مهر ۱۴۰۴',
    dateEn: 'Oct 15, 2025',
    authorFa: 'تحریریه مبل الدورادو',
    authorEn: 'Eldorado Editorial Team'
  },
  {
    id: 2,
    titleFa: 'راهنمای انتخاب رنگ مبل برای دکوراسیون مدرن و کلاسیک',
    titleEn: 'Sofa Color Choice Guide for Modern and Classical Decors',
    descFa: 'در سبک مدرن، سادگی و هماهنگی حرف اول را می‌زند. رنگ‌های خنثی بیشترین کاربرد را دارند. یاد بگیرید چطور تضاد ایجاد کنید.',
    descEn: 'In modern styles, simplicity and coordination are key. Neutral tones rule supreme. Learn how to create tasteful color contrasts.',
    contentFa: `رنگ مبلمان نقش پررنگی در بزرگ‌تر یا دنج‌تر نشان دادن اتاق نشیمن دارد.

در سبک مدرن، رنگ‌های خنثی مثل طوسی، بژ، شیری و کرم بیشترین طرفدار را دارند. برای جلوگیری از بی‌روحی محیط، می‌توانید کوسن‌ها را با رنگ‌های پرانرژی مانند قرمز تیره (رنگ نمادین برند الدورادو)، خردلی یا سبز یشمی چیدمان کنید.
در سبک کلاسیک، کالیته‌های اصیل مانند سورمه‌ای تیره، سبز زمردی، یاقوتی و قهوه‌ای سوخته فضایی بااصالت و اشرافی پدید می‌آورند. در انتخاب رنگ حتما به میزان نورگیری سالن نشیمن دقت نمایید تا محیط تاریک و دلگیر نشود.`,
    contentEn: `Sofa color selections dramatically influence whether your living area looks expansive, bright, or cozy.

In modern rooms, neutral tones such as ash grey, warm beige, and cream are highly recommended. To introduce vibrant energy, match them with deep red accents (Eldorado’s signature color), mustard yellow, or deep emerald cushions.
For classic environments, choose majestic, time-tested tones like sapphire blue, rich burgundy, or dark walnut brown to convey an aristocratic, dignified aura. Make sure to consider natural daylight levels to keep the space from feeling dark.`,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800',
    dateFa: '۰۵ آبان ۱۴۰۴',
    dateEn: 'Oct 27, 2025',
    authorFa: 'تحریریه مبل الدورادو',
    authorEn: 'Eldorado Editorial Team'
  },
  {
    id: 3,
    titleFa: 'چطور در فضاهای کوچک بهترین چیدمان مبل راحتی را داشته باشیم؟',
    titleEn: 'How to Arrange Comfort Sofas in Small Apartments',
    descFa: 'برای خرید و چیدمان مبل راحتی مناسب خانه‌های کوچک باید به ابعاد، رنگ، سبک و کاربرد چند منظوره توجه ویژه داشته باشید.',
    descEn: 'For small spaces, you must choose light colors, elevated leg structures, and intelligent modular elements to optimize layout.',
    contentFa: `خانه‌های آپارتمانی امروزی نیازمند هوشمندی بیشتری در دکوراسیون هستند.

۱. انتخاب مبل پایه بلند: مبل‌هایی که پایه‌های خراطی‌شده یا بلند دارند و فاصله بین مبل و کف زمین مشخص است، نور را عبور داده و خانه را دلبازتر نشان می‌دهند.
۲. مبل‌های ال (L-Shape): مبل ال بهترین استفاده را از گوشه‌های مرده خانه کرده و جای نشستن بیشتری نسبت به مبل‌های ست معمولی در اختیار شما می‌گذارد.
۳. رنگ‌های روشن: شیری، طوسی فیلی و کرم صدفی گزینه‌های طلایی برای دکور مبل در پذیرایی‌های زیر ۶۰ متر مربع هستند.`,
    contentEn: `Modern cozy apartments require smart, space-saving arrangement methods to achieve luxury without sacrificing circulation.

1. Choose Elevated Wooden Legs: Sofas with exposed tall legs let light pass underneath them, visually expanding the room.
2. Harness L-Shape Modules: L-shaped sectional sofas utilize inactive wall corners perfectly, creating more seating area with less floor footprint.
3. Light-Reflecting Colors: Warm ivory, pale mist grey, and pearl white are the golden choices for living rooms under 60 square meters.`,
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=800',
    dateFa: '۱۲ آذر ۱۴۰۴',
    dateEn: 'Dec 03, 2025',
    authorFa: 'تحریریه مبل الدورادو',
    authorEn: 'Eldorado Editorial Team'
  }
];

export const customizerColors = [
  { fa: 'قرمز سلطنتی الدورادو', en: 'Eldorado Royal Red', hex: '#b91c1c' },
  { fa: 'کرم صدفی گرم', en: 'Warm Pearl Cream', hex: '#fafaf9' },
  { fa: 'طوسی ذغالی مدرن', en: 'Modern Charcoal Grey', hex: '#374151' },
  { fa: 'سبز زمردی اشرافی', en: 'Noble Emerald Green', hex: '#064e3b' },
  { fa: 'آبی تیره بااصالت', en: 'Prestige Dark Blue', hex: '#1e3a8a' },
  { fa: 'صورتی خاکی ملایم', en: 'Soft Dusty Pink', hex: '#db2777' },
  { fa: 'خردلی پاییزی گرم', en: 'Warm Autumn Mustard', hex: '#d97706' },
  { fa: 'سفید یخی پاک', en: 'Pure Ice White', hex: '#f8fafc' }
];

export const translations = {
  fa: {
    navHome: 'صفحه اصلی',
    navProducts: 'محصولات الدورادو',
    navAbout: 'داستان برند',
    navBlog: 'مجله تخصصی',
    navContact: 'ارتباط با ما',
    searchPlaceholder: 'جستجو در مبل‌ها، دسته‌ها و کدها...',
    heroBadge: 'تولید ملی، استانداردهای جهانی ✦',
    heroTitle: 'آرامش بی‌پایان با مبلمان ارگونومیک الدورادو',
    heroSub: 'طراحی شده بر اساس آناتومی بدن انسان، ساخته شده با مرغوب‌ترین کلاف چوب روسی فرآوری شده و پارچه‌های نفیس وارداتی.',
    heroExploreBtn: 'مشاهده گالری محصولات',
    heroPromo: 'ضمانت‌نامه کتبی طلایی ۳۶ ماهه',
    heroPromoSub: 'شامل اسکلت، فوم و دوخت مبلمان به صورت رسمی',
    all: 'همه مبلمان',
    sofaSeven: 'مبل ۷ نفره',
    sofaL: 'مبل ال (L)',
    sofaOne: 'مبل تک‌نفره / میزبان',
    sortBy: 'مرتب‌سازی بر اساس',
    sortLatest: 'جدیدترین محصولات',
    sortCheapest: 'ارزان‌ترین',
    sortMostExpensive: 'گران‌ترین',
    noProductsFound: 'هیچ محصولی با مشخصات مورد نظر شما پیدا نشد.',
    callToOrder: 'تماس جهت مشاوره و سفارش',
    aboutTitle: 'داستان برند مبل الدورادو',
    aboutSub: 'تجلی خلاقیت، مهندسی ارگونومی و کیفیت پایدار در صنعت مبل ایران',
    aboutContent: `مجموعه تولیدی مبل الدورادو با بیش از دو دهه تجربه درخشان، فعالیت خود را با هدف دگرگونی در طراحی داخلی و ارتقای استانداردهای راحتی خانه‌های ایرانی آغاز نمود. ما با بهره‌گیری از تکنولوژی‌های روز دنیا و ادغام آن با هنر دست استادکاران نجار ایرانی، گام بزرگی در بومی‌سازی مبلمان ارگونومیک برداشته‌ایم.

تمامی محصولات الدورادو در کارخانه‌های پیشرفته این شرکت و زیر نظر مهندسان کنترل کیفیت تولید می‌شوند. انتخاب چوب‌های روسی فرآوری شده و ضد موریانه در کلاف داخلی، اسفنج‌های ۳۵ کیلویی ویژه یورتان و پارچه‌های نانو ضد لک، همگی تضمین‌کننده دوام طولانی‌مدت آثار ما هستند.

با مبل الدورادو، شما فقط یک مبلمان خریداری نمی‌کنید؛ بلکه تجربه‌ای از مهندسی ارگونومی برتر و آرامشی عمیق را به کانون گرم خانواده خود دعوت می‌کنید. افتخار ما، رضایت و همراهی سالیان طولانی مشتریانی است که کیفیت را شالوده زندگی خود می‌دانند.`,
    readLess: 'بستن مطلب',
    readMore: 'ادامه مطلب',
    copied: 'کپی شد!',
    latestReads: 'آخرین مقالات مجله الدورادو',
    contactUs: 'تماس با مبل الدورادو',
    phoneTitle: 'تلفن تماس پشتیبانی و فروش',
    whatsappTitle: 'مشاوره و سفارش مستقیم واتساپ',
    emailTitle: 'پست الکترونیکی مرکزی',
    telegramTitle: 'کانال تلگرام مبل الدورادو',
    addressTitle: 'آدرس نمایشگاه مرکزی و دفتر فروش',
    addressVal: 'تهران، جاده ساوه، بازار مبل چهاردانگه، خیابان ۲۲ بهمن، پلاک ۴۵، نمایشگاه مبل الدورادو',
    workingHoursTitle: 'ساعات کاری نمایشگاه',
    workingHoursVal: 'همه‌روزه از ساعت ۹:۰۰ صبح الی ۲۱:۰۰ شب (حتی روزهای تعطیل)',
    formSuccess: 'پیام شما با موفقیت ثبت شد. کارشناسان ما به زودی با شما تماس خواهند گرفت.',
    formName: 'نام و نام خانوادگی',
    formPhone: 'شماره تماس مستقیم',
    formMessage: 'متن پیام یا سوال شما',
    formSending: 'در حال ارسال پیام...',
    formSubmit: 'ارسال پیام و هماهنگی',
    warrantyExpress: 'تحویل سریع و بیمه‌شده',
    warrantyExpressSub: 'ارسال ایمن به سراسر کشور',
    warrantySupport: 'پشتیبانی ۲۴ ساعته',
    warrantySupportSub: 'راهنمایی پیش و پس از خرید',
    warrantyPay: 'پرداخت امن و مطمئن',
    warrantyPaySub: 'درگاه‌های معتبر و فاکتور رسمی',
    warrantyOriginal: 'ضمانت اصالت ۳۶ ماهه',
    warrantyOriginalSub: 'کارت گارانتی فیزیکی مبل الدورادو'
  },
  en: {
    navHome: 'Home',
    navProducts: 'Eldorado Products',
    navAbout: 'Brand Story',
    navBlog: 'Design Magazine',
    navContact: 'Contact Us',
    searchPlaceholder: 'Search sofas, codes, or categories...',
    heroBadge: 'National Production, Global Quality ✦',
    heroTitle: 'Eternal Serenity with Eldorado Ergonomics',
    heroSub: 'Precisely engineered around human skeletal geometry, constructed using kiln-dried premium Russian pine wood frames and rich imported nano fabric.',
    heroExploreBtn: 'Browse Sofa Collections',
    heroPromo: '36-Month Golden Written Warranty',
    heroPromoSub: 'Covers internal subframe, polyurethane foams, and stitching seams.',
    all: 'All Furniture',
    sofaSeven: '7-Seater Suite',
    sofaL: 'Sectional L-Sofa',
    sofaOne: 'Accent Host Chair',
    sortBy: 'Sort By',
    sortLatest: 'Latest Models',
    sortCheapest: 'Lowest Price',
    sortMostExpensive: 'Highest Price',
    noProductsFound: 'No products found matching your active criteria.',
    callToOrder: 'Call for Custom Orders',
    aboutTitle: 'The Eldorado Heritage',
    aboutSub: 'Melding design artistry, physical ergonomics, and absolute structural durability.',
    aboutContent: `For more than two decades, Eldorado has been pioneering comfortable luxury seating in home staging. We blend modern European production technologies with traditional Iranian carpentry to construct highly supportive, orthopedic sofas.

Every piece is built within our advanced local facilities under strict engineering oversight. We select certified anti-termite kiln-dried Russian Pine wood for the inner skeleton, high-density 35kg polyurethane smart foam for sag resistance, and imported nano-textile materials.

Choosing Eldorado is inviting an authentic engineering piece and endless comfort into your living space. We are proud of our decades-long relationships with clients who consider quality the ultimate baseline of their premium lifestyle.`,
    readLess: 'Read Less',
    readMore: 'Read More',
    copied: 'Copied!',
    latestReads: 'Latest from Eldorado Design Magazine',
    contactUs: 'Get in Touch with Eldorado',
    phoneTitle: 'Direct Support & Sales Hotline',
    whatsappTitle: 'Direct WhatsApp Sales Inquiry',
    emailTitle: 'Corporate Email Inbox',
    telegramTitle: 'Official Telegram Channel',
    addressTitle: 'Central Showroom & Sales Office Address',
    addressVal: 'No. 45, 22-Bahman St., Chardangeh Furniture Market, Saveh Road, Tehran, Iran',
    workingHoursTitle: 'Showroom Operational Hours',
    workingHoursVal: 'Everyday from 9:00 AM to 9:00 PM (Including National Holidays)',
    formSuccess: 'Thank you! Your inquiry was saved successfully. Our staging team will reach out shortly.',
    formName: 'Your Full Name',
    formPhone: 'Contact Number',
    formMessage: 'Inquiry details / Your message',
    formSending: 'Sending inquiry...',
    formSubmit: 'Submit Inquiry',
    warrantyExpress: 'Insured National Shipping',
    warrantyExpressSub: 'Safe deliveries across the country',
    warrantySupport: '24/7 Consultation Support',
    warrantySupportSub: 'Professional assistance at every phase',
    warrantyPay: 'Secure Guaranteed Payment',
    warrantyPaySub: 'Trusted checkout channels and official invoices',
    warrantyOriginal: '3-Year Official Guarantee',
    warrantyOriginalSub: 'Certified physical warranty card by Eldorado'
  }
};

export const defaultHomeConfig = {
  heroBadgeFa: 'تولید ملی، استانداردهای جهانی ✦',
  heroBadgeEn: 'National Production, Global Quality ✦',
  heroTitleFa: 'آرامش بی‌پایان با مبلمان ارگونومیک الدورادو',
  heroTitleEn: 'Eternal Serenity with Eldorado Ergonomics',
  heroSubFa: 'طراحی شده بر اساس آناتومی بدن انسان، ساخته شده با مرغوب‌ترین کلاف چوب روسی فرآوری شده و پارچه‌های نفیس وارداتی.',
  heroSubEn: 'Precisely engineered around human skeletal geometry, constructed using kiln-dried premium Russian pine wood frames and rich imported nano fabric.',
  heroPromoFa: 'ضمانت‌نامه کتبی طلایی ۳۶ ماهه',
  heroPromoEn: '36-Month Golden Written Warranty',
  heroPromoSubFa: 'شامل اسکلت، فوم و دوخت مبلمان به صورت رسمی',
  heroPromoSubEn: 'Covers internal subframe, polyurethane foams, and stitching seams.',
  slideImages: [
    {
      url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200',
      titleFa: 'مدل برتر نیروانا چستر',
      titleEn: 'Premium Nirvana Chesterfield',
      subtitleFa: 'ظرافت سنتی، لوکس و مدرن',
      subtitleEn: 'Classical Tufting, Modern Feel'
    },
    {
      url: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1200',
      titleFa: 'سری تخت‌شو تمام ارتوپدیک میامی',
      titleEn: 'Miami Convertible Comfort Suite',
      subtitleFa: 'مکانیزم آلمانی با راحتی خارق‌العاده',
      subtitleEn: 'German Engineering, Absolute Comfort'
    },
    {
      url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1200',
      titleFa: 'مبل ال مدرن تکیه‌گاه ماجستیک',
      titleEn: 'Majestic Grande L-Shape Corner',
      subtitleFa: 'طراحی کم‌جا، لوکس و بهینه برای آپارتمان',
      subtitleEn: 'Space-Saving Minimalist Comfort'
    }
  ],
  aboutTitleFa: 'داستان برند مبل الدورادو',
  aboutTitleEn: 'The Eldorado Heritage',
  aboutSubFa: 'تجلی خلاقیت، مهندسی ارگونومی و کیفیت پایدار در صنعت مبل ایران',
  aboutSubEn: 'Melding design artistry, physical ergonomics, and absolute structural durability.',
  aboutContentFa: `مجموعه تولیدی مبل الدورادو با بیش از دو دهه تجربه درخشان، فعالیت خود را با هدف دگرگونی در طراحی داخلی و ارتقای استانداردهای راحتی خانه‌های ایرانی آغاز نمود. ما با بهره‌گیری از تکنولوژی‌های روز دنیا و ادغام آن با هنر دست استادکاران نجار ایرانی، گام بزرگی در بومی‌سازی مبلمان ارگونومیک برداشته‌ایم.

تمامی محصولات الدورادو در کارخانه‌های پیشرفته این شرکت و زیر نظر مهندسان کنترل کیفیت تولید می‌شوند. انتخاب چوب‌های روسی فرآوری شده و ضد موریانه در کلاف داخلی، اسفنج‌های ۳۵ کیلویی ویژه یورتان و پارچه‌های نانو ضد لک، همگی تضمین‌کننده دوام طولانی‌مدت آثار ما هستند.

با مبل الدورادو، شما فقط یک مبلمان خریداری نمی‌کنید؛ بلکه تجربه‌ای از مهندسی ارگونومی برتر و آرامشی عمیق را به کانون گرم خانواده خود دعوت می‌کنید. افتخار ما، رضایت و همراهی سالیان طولانی مشتریانی است که کیفیت را شالوده زندگی خود می‌دانند.`,
  aboutContentEn: `For more than two decades, Eldorado has been pioneering comfortable luxury seating in home staging. We blend modern European production technologies with traditional Iranian carpentry to construct highly supportive, orthopedic sofas.

Every piece is built within our advanced local facilities under strict engineering oversight. We select certified anti-termite kiln-dried Russian Pine wood for the inner skeleton, high-density 35kg polyurethane smart foam for sag resistance, and imported nano-textile materials.

Choosing Eldorado is inviting an authentic engineering piece and endless comfort into your living space. We are proud of our decades-long relationships with clients who consider quality the ultimate baseline of their premium lifestyle.`,
  aboutImageMain: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800',
  aboutImageSec: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=400'
};

