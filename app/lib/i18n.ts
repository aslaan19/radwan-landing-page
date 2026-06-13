export type Lang = "ar" | "en";

export const LANGS: Lang[] = ["ar", "en"];

export function getLangFromPath(pathname: string): Lang {
  return pathname.startsWith("/en") ? "en" : "ar";
}

export function getDirFromLang(lang: Lang): "rtl" | "ltr" {
  return lang === "ar" ? "rtl" : "ltr";
}

export function getOppositeLang(lang: Lang): Lang {
  return lang === "ar" ? "en" : "ar";
}

export function getLangPath(lang: Lang): string {
  return lang === "ar" ? "/" : "/en";
}

export const t = {
  ar: {
    htmlLang: "ar-SA",
    brand: {
      name: "خياط نسيج النهضة",
      tagline: "UNIFORMS",
      shortName: "نسيج النهضة",
    },
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      products: "منتجاتنا",
      contact: "تواصل معنا",
      menuLabel: "القائمة",
      closeLabel: "إغلاق",
      bookNow: "احجز الآن",
      bookAppointment: "احجز موعدك الآن",
    },
    hero: {
      badge: "شركة خياط نسيج النهضة للخياطة",
      h1Sr:
        "خياط نسيج النهضة - تفصيل وخياطة يونيفورم مدارس وشركات ومطاعم ومحلات تجارية بالرياض",
      headlineLine1: "نصنع زيّك الموحّد",
      cyclingWords: ["بإتقان", "باحتراف", "بإبداع", "بتميز"],
      headlineTail: "لا مثيل له!!",
      description:
        "من المدارس إلى الشركات الصناعية والتجارية والمنشآت الطبية — نقدّم يونيفورم راقي يعكس هويتك ويُبهر من يراه بجودة استثنائية وتصاميم عصرية.",
      ctaContact: "تواصل معنا الآن",
      ctaProducts: "استعرض المنتجات",
      stats: [
        { num: "+50", label: "شركة خدمناها", icon: "🏢" },
        { num: "+10", label: "سنوات خبرة", icon: "⏳" },
        { num: "4", label: "فروع نشطة", icon: "📍" },
      ],
      qualityBadge: "جودة مضمونة 100%",
      ratingLabel: "تقييم عملائنا",
      craftLabel: "صناعة يدوية متقنة",
      scrollHint: "اكتشف أكثر",
    },
    about: {
      badge: "من نحن",
      titlePart1: "خياط نسيج النهضة - نصنع",
      titleGold: "الأناقة",
      titlePart2: "بأيدٍ ماهرة",
      description:
        "شركة خياط نسيج النهضة هي وجهتك الأولى في الرياض لتفصيل اليونيفورم والزي الموحّد. نقدم خدمات خياطة احترافية للمدارس والشركات والمصانع والمطاعم والمحلات التجارية، مع الاهتمام بأدق التفاصيل وضمان رضا عملائنا في كل مرحلة.",
      highlights: [
        {
          icon: "01",
          label: "جودة استثنائية",
          desc: "نستخدم أفضل الخامات المستوردة والمحلية المعتمدة عالمياً",
        },
        {
          icon: "02",
          label: "خبرة عميقة",
          desc: "أكثر من 10 سنوات من الإبداع والتميز في صناعة الأزياء",
        },
        {
          icon: "03",
          label: "التزام مطلق",
          desc: "نضمن تسليم طلباتك في الموعد المحدد دون أي تأخير",
        },
      ],
      cta: "اكتشف المزيد عنّا",
      yearsBadge: "+10",
      yearsLabel: "سنوات من التميز",
      machineAlt:
        "ورشة خياطة نسيج النهضة بالرياض - تفصيل وخياطة اليونيفورم باحتراف",
    },
    products: {
      badge: "تشكيلة حصرية",
      titlePart1: "تشكيلة اليونيفورم",
      titleGold: "المميزة",
      description:
        "نفخر بتقديم أرقى يونيفورم وزي موحد بالرياض - تشكيلة شاملة لمدارس، شركات، مصانع، مطاعم، مقاهي ومحلات تجارية بخامات فاخرة وتصاميم احترافية.",
      categories: [
        { id: "all", name: "الكل" },
        { id: "schools", name: "مدارس" },
        { id: "coffee", name: "مطاعم ومقاهي" },
        { id: "factory", name: "شركات ومصانع" },
        { id: "shops", name: "محلات تجارية" },
      ],
      categoryNames: {
        schools: "مدارس",
        coffee: "مطاعم ومقاهي",
        factory: "شركات ومصانع",
        shops: "محلات تجارية",
      },
      orderButton: "اطلب الآن",
      finalCta: "اطلب الآن !",
      altSuffix: "يونيفورم بالرياض من خياط نسيج النهضة",
      seeMore: "عرض المزيد من المنتجات",
      seeMoreCount: (n: number) => `+${n} منتج إضافي`,
      showLess: "عرض أقل",
    },
    contact: {
      badge: "تواصل معنا",
      titlePart1: "تواصل مع خياط نسيج النهضة - نحن هنا",
      titleGold: "لخدمتك",
      description:
        "شركة خياط نسيج النهضة لتفصيل وخياطة اليونيفورم والزي الموحد بالرياض - خبرة +10 سنوات في خدمة المدارس والشركات والمصانع والمطاعم والمحلات التجارية.",
      methodsHeading: "طرق التواصل مع خياط نسيج النهضة",
      methods: {
        mobileLabel: "الجوال",
        mobileDesc: "متاح على مدار الساعة",
        landlineLabel: "الهاتف الأرضي",
        landlineDesc: "أوقات العمل الرسمية",
        emailLabel: "البريد الإلكتروني",
        emailDesc: "نرد خلال 24 ساعة",
        locationLabel: "العنوان",
        locationValue: "حي النسيم الغربي - الرياض",
        locationDesc: "مبنى 8986 - شارع عبدالله بن مسعود",
      },
      whatsapp: "تواصل معنا عبر واتساب لطلب يونيفورم",
      formTitle: "أرسل لنا رسالة لطلب يونيفورم",
      formSubtitle: "سنرد عليك في أقرب وقت ممكن لمناقشة تفاصيل الزي الموحد",
      formAriaLabel: "نموذج طلب يونيفورم من خياط نسيج النهضة",
      nameLabel: "الاسم الكريم",
      namePlaceholder: "أدخل اسمك",
      phoneLabel: "رقم الجوال",
      messageLabel: "رسالتك",
      messagePlaceholder:
        "أخبرنا عن احتياجك من يونيفورم مدارس، شركات، مطاعم...",
      submit: "إرسال الرسالة",
      mapButton: "افتح في خرائط جوجل",
      mapTitle:
        "موقع شركة خياط نسيج النهضة على خرائط جوجل - حي النسيم الغربي بالرياض",
    },
    footer: {
      description:
        "شركة خياط نسيج النهضة - متخصصون في تفصيل وخياطة اليونيفورم والزي الموحد بالرياض للمدارس، الشركات، المصانع، المطاعم، المقاهي والمحلات التجارية. جودة استثنائية وتصاميم تعكس هوية مؤسستك.",
      quickLinks: "روابط سريعة",
      contactHeader: "تواصل معنا",
      whatsapp: "واتساب",
      contacts: {
        phone: "الهاتف",
        email: "البريد",
        location: "الموقع",
        locationVal: "الرياض، المملكة العربية السعودية",
      },
      copyright: "© 2026 خياط نسيج النهضة — جميع الحقوق محفوظة",
      madeIn: "صُنع بـ ❤️ في المملكة العربية السعودية 🇸🇦",
    },
    toggle: {
      label: "تغيير اللغة",
      ar: "عربي",
      en: "English",
    },
  },
  en: {
    htmlLang: "en",
    brand: {
      name: "Naseej Al Nahda",
      tagline: "UNIFORMS",
      shortName: "Naseej",
    },
    nav: {
      home: "Home",
      about: "About",
      products: "Products",
      contact: "Contact",
      menuLabel: "Menu",
      closeLabel: "Close",
      bookNow: "Book Now",
      bookAppointment: "Book Your Appointment",
    },
    hero: {
      badge: "Naseej Al Nahda Uniforms Co.",
      h1Sr:
        "Naseej Al Nahda - Custom uniform tailoring for schools, companies, restaurants and retail in Riyadh",
      headlineLine1: "We craft your uniform",
      cyclingWords: ["with Mastery", "with Precision", "with Style", "with Excellence"],
      headlineTail: "second to none!",
      description:
        "From schools to industrial and commercial companies and medical facilities — we deliver premium uniforms that reflect your identity, with exceptional quality and modern designs.",
      ctaContact: "Contact Us Now",
      ctaProducts: "View Products",
      stats: [
        { num: "+50", label: "Companies Served", icon: "🏢" },
        { num: "+10", label: "Years Experience", icon: "⏳" },
        { num: "4", label: "Active Branches", icon: "📍" },
      ],
      qualityBadge: "100% Quality Guaranteed",
      ratingLabel: "Customer Rating",
      craftLabel: "Masterful Craftsmanship",
      scrollHint: "DISCOVER MORE",
    },
    about: {
      badge: "About Us",
      titlePart1: "Naseej Al Nahda - Crafting",
      titleGold: "Elegance",
      titlePart2: "by Master Hands",
      description:
        "Naseej Al Nahda is your premier destination in Riyadh for premium uniform tailoring. We offer professional sewing services for schools, companies, factories, restaurants, and retail stores, with attention to the finest details and guaranteed customer satisfaction at every stage.",
      highlights: [
        {
          icon: "01",
          label: "Exceptional Quality",
          desc: "We use the finest imported and locally certified fabrics, globally approved",
        },
        {
          icon: "02",
          label: "Deep Expertise",
          desc: "Over 10 years of creativity and excellence in uniform manufacturing",
        },
        {
          icon: "03",
          label: "Absolute Commitment",
          desc: "We guarantee delivery of your order on the agreed date without any delay",
        },
      ],
      cta: "Discover More About Us",
      yearsBadge: "+10",
      yearsLabel: "Years of Excellence",
      machineAlt:
        "Naseej Al Nahda tailoring workshop in Riyadh - professional uniform manufacturing",
    },
    products: {
      badge: "Exclusive Collection",
      titlePart1: "Our",
      titleGold: "Premium Uniforms",
      description:
        "We're proud to offer the finest uniforms and corporate wear in Riyadh — a complete collection for schools, companies, factories, restaurants, cafés and retail stores with luxury fabrics and professional designs.",
      categories: [
        { id: "all", name: "All" },
        { id: "schools", name: "Schools" },
        { id: "coffee", name: "Cafés & Restaurants" },
        { id: "factory", name: "Companies & Factories" },
        { id: "shops", name: "Retail Stores" },
      ],
      categoryNames: {
        schools: "Schools",
        coffee: "Cafés & Restaurants",
        factory: "Companies & Factories",
        shops: "Retail Stores",
      },
      orderButton: "Order Now",
      finalCta: "Order Now !",
      altSuffix: "premium uniforms in Riyadh by Naseej Al Nahda",
      seeMore: "See more products",
      seeMoreCount: (n: number) => `+${n} more`,
      showLess: "Show less",
    },
    contact: {
      badge: "Get In Touch",
      titlePart1: "Contact Naseej Al Nahda - We are here",
      titleGold: "to serve you",
      description:
        "Naseej Al Nahda for premium uniform tailoring in Riyadh — over 10 years of experience serving schools, companies, factories, restaurants, and retail stores.",
      methodsHeading: "Ways to Reach Naseej Al Nahda",
      methods: {
        mobileLabel: "Mobile",
        mobileDesc: "Available 24/7",
        landlineLabel: "Landline",
        landlineDesc: "Office hours only",
        emailLabel: "Email",
        emailDesc: "We reply within 24 hours",
        locationLabel: "Address",
        locationValue: "Al Naseem Al Gharbi - Riyadh",
        locationDesc: "Building 8986 - Abdullah ibn Masoud Street",
      },
      whatsapp: "Order Uniforms via WhatsApp",
      formTitle: "Send Us a Message to Order Uniforms",
      formSubtitle:
        "We'll reply as soon as possible to discuss your uniform requirements",
      formAriaLabel: "Naseej Al Nahda uniform order request form",
      nameLabel: "Full Name",
      namePlaceholder: "Enter your name",
      phoneLabel: "Phone Number",
      messageLabel: "Your Message",
      messagePlaceholder:
        "Tell us about your uniform needs for schools, companies, restaurants...",
      submit: "Send Message",
      mapButton: "Open in Google Maps",
      mapTitle:
        "Naseej Al Nahda location on Google Maps - Al Naseem Al Gharbi, Riyadh",
    },
    footer: {
      description:
        "Naseej Al Nahda - specialists in premium uniform tailoring in Riyadh for schools, companies, factories, restaurants, cafés and retail stores. Exceptional quality and designs that reflect your organization's identity.",
      quickLinks: "QUICK LINKS",
      contactHeader: "CONTACT US",
      whatsapp: "WhatsApp",
      contacts: {
        phone: "Phone",
        email: "Email",
        location: "Location",
        locationVal: "Riyadh, Saudi Arabia",
      },
      copyright: "© 2026 Naseej Al Nahda — All rights reserved",
      madeIn: "Made with ❤️ in Saudi Arabia 🇸🇦",
    },
    toggle: {
      label: "Change language",
      ar: "عربي",
      en: "English",
    },
  },
} as const;

export type Translations = typeof t.ar;
