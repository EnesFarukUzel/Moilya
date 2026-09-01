document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileNav();
  initSmoothScroll();
  initStatsCounter();
  initTestimonials();
  initContactForm();
  initNewsletterForm();
  initScrollAnimations();
  initLang();
});

// ===== Language Switcher =====
const translations = {
  tr: {
    // nav
    'nav-home': 'Ana Sayfa',
    'nav-corporate': 'Kurumsal',
    'nav-services': 'Hizmetlerimiz',
    'nav-references': 'Referanslar',
    'nav-hr': 'İK',
    'nav-contact': 'İletişim',
    // hero
    'hero-tag': 'Özel Tasarım Mobilya',
    'hero-title': 'Yaşam alanlarınıza<br><em>değer katan</em> tasarımlar',
    'hero-desc': 'Moilya olarak el işçiliği ve modern tasarımı bir araya getirerek, evinize özel mobilyalar üretiyoruz.',
    'hero-btn1': 'Koleksiyonları Keşfet',
    'hero-btn2': "Instagram'da İncele",
    'hero-scroll': 'Keşfet',
    // stats
    'stat-1': '% El İşçiliği',
    'stat-2': 'Özel Tasarım',
    'stat-3': 'Kalite Odaklı',
    'stat-4': '% Müşteri Memnuniyeti',
    // about
    'about-tag': 'Hakkımızda',
    'about-title': 'Zanaatkarlık ve<br>modern tasarımın buluşması',
    'about-p1': 'Moilya, özel mobilya üretiminde kalite ve estetiği bir araya getiren bir markadır. Her parçayı titizlikle tasarlıyor, kaliteli malzemelerle üretiyor ve yaşam alanlarınıza özel çözümler sunuyoruz.',
    'about-p2': 'Salon takımlarından yatak odası mobilyalarına, mutfak dolaplarından ofis çözümlerine kadar geniş bir yelpazede hizmet veriyoruz. Müşterilerimizin hayallerini gerçeğe dönüştürmek bizim tutkumuz.',
    'about-f1': 'Özel ölçü ve tasarım',
    'about-f2': 'Birinci sınıf malzeme',
    'about-f3': 'Profesyonel montaj',
    'about-f4': 'Kişiye özel üretim',
    // collections
    'col-tag': 'Koleksiyonlar',
    'col-title': 'Her oda için özel çözümler',
    'col-desc': 'İhtiyacınıza ve tarzınıza uygun mobilya koleksiyonlarımızı keşfedin.',
    'col-cta': 'Teklif Al →',
    'col-salon-t': 'Salon Mobilyaları',
    'col-salon-d': 'Koltuk takımları, sehpalar, TV üniteleri',
    'col-yatak-t': 'Yatak Odası',
    'col-yatak-d': 'Gardrop, komodin, yatak başlığı',
    'col-yemek-t': 'Yemek Odası',
    'col-yemek-d': 'Masa, sandalye, vitrin dolapları',
    'col-mutfak-t': 'Mutfak Dolapları',
    'col-mutfak-d': 'Modern ve klasik mutfak tasarımları',
    'col-ofis-t': 'Ofis Mobilyaları',
    'col-ofis-d': 'Masa, raf sistemleri, toplantı odası',
    // process
    'proc-tag': 'Süreç',
    'proc-title': 'Fikirden teslimata',
    'proc-1-t': 'Danışmanlık',
    'proc-1-d': 'İhtiyaçlarınızı dinliyor, alanınızı anlıyor ve size en uygun çözümleri birlikte belirliyoruz.',
    'proc-2-t': 'Tasarım',
    'proc-2-d': 'Ölçü, malzeme ve renk seçeneklerini birlikte belirliyor, tasarımı onayınıza sunuyoruz.',
    'proc-3-t': 'Üretim',
    'proc-3-d': 'Atölyemizde masif ahşap malzemeler usta ellerde özenle işleniyor.',
    'proc-4-t': 'Teslimat',
    'proc-4-d': 'Gönderim öncesi ürün fotoğrafı paylaşıyor, ücretsiz teslimat ve kurulum yapıyoruz.',
    // gallery
    'gal-tag': 'Galeri',
    'gal-title': 'Tamamlanan projelerimiz',
    'gal-desc': 'Moilya atölyesinde üretilen mobilyalardan örnekler.',
    // instagram
    'ig-desc': 'Yeni üretimlerimizi ve tamamlanan projelerimizi Instagram hesabımızdan takip edin.',
    // contact
    'ct-tag': 'İletişim',
    'ct-title': 'Projenizi birlikte planlayalım',
    'ct-desc': 'Teklif almak için formu doldurun veya Instagram hesabımızdan bize ulaşın.',
    'ct-phone': 'Telefon',
    'ct-email': 'E-posta',
    'ct-address': 'Adres',
    'ct-hours': 'Çalışma Saatleri',
    'ct-hours-val': 'Pzt - Cmt: 09:00 - 19:00',
    'form-name': 'Ad Soyad',
    'form-name-ph': 'Adınız ve soyadınız',
    'form-email-ph': 'ornek@email.com',
    'form-phone': 'Telefon',
    'form-cat': 'İlgilendiğiniz Kategori',
    'form-cat-0': 'Seçiniz',
    'form-msg': 'Mesajınız',
    'form-msg-ph': 'Projeniz hakkında kısa bilgi verin...',
    'form-submit': 'Gönder',
    'form-success-msg': 'Mesajınız alındı! En kısa sürede size dönüş yapacağız.',
    // footer
    'footer-desc': 'Özel tasarım mobilya üretiminde güvenilir adresiniz. Yaşam alanlarınıza değer katıyoruz.',
    'footer-links-title': 'Hızlı Bağlantılar',
    'footer-col-title': 'Koleksiyonlar',
    'footer-ig-title': 'Instagram',
    'footer-ig-p': 'Yeni üretimler ve projeler için bizi takip edin.',
    'footer-copy': '© 2026 Moilya. Tüm hakları saklıdır.',
  },
  en: {
    'nav-home': 'Home',
    'nav-corporate': 'Corporate',
    'nav-services': 'Services',
    'nav-references': 'References',
    'nav-hr': 'HR',
    'nav-contact': 'Contact',
    'hero-tag': 'Custom Furniture Design',
    'hero-title': 'Designs that add <em>value</em><br>to your living spaces',
    'hero-desc': 'At Moilya, we combine craftsmanship and modern design to create furniture tailored specifically for your home.',
    'hero-btn1': 'Explore Collections',
    'hero-btn2': 'Follow on Instagram',
    'hero-scroll': 'Explore',
    'stat-1': '% Handcrafted',
    'stat-2': 'Custom Design',
    'stat-3': 'Quality Focused',
    'stat-4': '% Customer Satisfaction',
    'about-tag': 'About Us',
    'about-title': 'Where craftsmanship meets<br>modern design',
    'about-p1': 'Moilya is a brand that combines quality and aesthetics in custom furniture production. We carefully design each piece, produce it with premium materials, and provide tailored solutions for your living spaces.',
    'about-p2': 'From living room sets to bedroom furniture, kitchen cabinets to office solutions, we cover a wide range. Turning our customers\' dreams into reality is our passion.',
    'about-f1': 'Custom size & design',
    'about-f2': 'First-class materials',
    'about-f3': 'Professional installation',
    'about-f4': 'Made-to-order production',
    'col-tag': 'Collections',
    'col-title': 'Custom solutions for every room',
    'col-desc': 'Discover our furniture collections suited to your needs and style.',
    'col-cta': 'Get a Quote →',
    'col-salon-t': 'Living Room',
    'col-salon-d': 'Sofas, coffee tables, TV units',
    'col-yatak-t': 'Bedroom',
    'col-yatak-d': 'Wardrobe, nightstand, headboard',
    'col-yemek-t': 'Dining Room',
    'col-yemek-d': 'Tables, chairs, display cabinets',
    'col-mutfak-t': 'Kitchen Cabinets',
    'col-mutfak-d': 'Modern and classic kitchen designs',
    'col-ofis-t': 'Office Furniture',
    'col-ofis-d': 'Desks, shelving systems, meeting rooms',
    'proc-tag': 'Process',
    'proc-title': 'From idea to delivery',
    'proc-1-t': 'Consultation',
    'proc-1-d': 'We listen to your needs, understand your space, and together define the best solutions.',
    'proc-2-t': 'Design',
    'proc-2-d': 'We determine measurements, materials, and colors together, then present the design for your approval.',
    'proc-3-t': 'Production',
    'proc-3-d': 'Solid wood materials are carefully crafted by skilled hands in our workshop.',
    'proc-4-t': 'Delivery',
    'proc-4-d': 'We share product photos before shipping and provide free delivery and installation.',
    'gal-tag': 'Gallery',
    'gal-title': 'Completed projects',
    'gal-desc': 'Examples of furniture produced in the Moilya workshop.',
    'ig-desc': 'Follow our Instagram account for new productions and completed projects.',
    'ct-tag': 'Contact',
    'ct-title': "Let's plan your project together",
    'ct-desc': 'Fill out the form to get a quote or reach us via Instagram.',
    'ct-phone': 'Phone',
    'ct-email': 'Email',
    'ct-address': 'Address',
    'ct-hours': 'Working Hours',
    'ct-hours-val': 'Mon - Sat: 09:00 - 19:00',
    'form-name': 'Full Name',
    'form-name-ph': 'Your full name',
    'form-email-ph': 'example@email.com',
    'form-phone': 'Phone',
    'form-cat': 'Category of Interest',
    'form-cat-0': 'Select',
    'form-msg': 'Your Message',
    'form-msg-ph': 'Brief info about your project...',
    'form-submit': 'Send',
    'form-success-msg': 'Your message has been received! We will get back to you shortly.',
    'footer-desc': 'Your trusted address for custom furniture production. Adding value to your living spaces.',
    'footer-links-title': 'Quick Links',
    'footer-col-title': 'Collections',
    'footer-ig-title': 'Instagram',
    'footer-ig-p': 'Follow us for new productions and projects.',
    'footer-copy': '© 2026 Moilya. All rights reserved.',
  },
  ar: {
    'nav-home': 'الرئيسية',
    'nav-corporate': 'المؤسسة',
    'nav-services': 'خدماتنا',
    'nav-references': 'المراجع',
    'nav-contact': 'اتصل بنا',
    'hero-tag': 'أثاث مخصص',
    'hero-title': 'تصاميم تُضيف <em>قيمة</em><br>إلى مساحات حياتك',
    'hero-desc': 'في Moilya، نجمع بين الحرفية اليدوية والتصميم العصري لنصنع أثاثاً مخصصاً لمنزلك.',
    'hero-btn1': 'اكتشف خدماتنا',
    'hero-btn2': 'تابعنا على إنستغرام',
    'hero-scroll': 'اكتشف',
    'stat-1': 'مشروع مكتمل',
    'stat-2': 'محفظة عملاء',
    'stat-3': 'تنوع منتجات',
    'stat-4': 'موظف متخصص',
    'about-tag': 'من نحن',
    'about-title': 'التقاء الحرفية<br>والتصميم الحديث',
    'about-p1': 'Moilya علامة تجمع بين الجودة والجماليات في تصنيع الأثاث المخصص. نصمم كل قطعة بعناية ونصنعها من مواد فاخرة لنقدم حلولاً مخصصة لمساحاتك.',
    'about-p2': 'من طقم الصالون إلى غرفة النوم، من خزائن المطبخ إلى حلول المكتب — تحويل أحلام عملائنا إلى واقع هو شغفنا.',
    'about-f1': 'مقاسات وتصاميم مخصصة',
    'about-f2': 'مواد من الدرجة الأولى',
    'about-f3': 'تركيب احترافي',
    'about-f4': 'إنتاج حسب الطلب',
    'col-tag': 'الخدمات',
    'col-title': 'حلول مخصصة لكل غرفة',
    'col-desc': 'اكتشف مجموعات الأثاث المناسبة لاحتياجاتك وأسلوبك.',
    'col-cta': 'احصل على عرض ←',
    'col-salon-t': 'أثاث غرفة المعيشة',
    'col-salon-d': 'طقم كنب، طاولات، وحدات تلفزيون',
    'col-yatak-t': 'غرفة النوم',
    'col-yatak-d': 'خزانة ملابس، طاولة سرير، لوح رأس السرير',
    'col-yemek-t': 'غرفة الطعام',
    'col-yemek-d': 'طاولة، كراسي، خزانة عرض',
    'col-mutfak-t': 'خزائن المطبخ',
    'col-mutfak-d': 'تصاميم مطبخ حديثة وكلاسيكية',
    'col-ofis-t': 'أثاث المكتب',
    'col-ofis-d': 'مكاتب، أرفف، قاعات اجتماعات',
    'proc-tag': 'العملية',
    'proc-title': 'من الفكرة إلى التسليم',
    'proc-1-t': 'الاستشارة',
    'proc-1-d': 'نستمع إلى احتياجاتك ونفهم مساحتك ونحدد معك أفضل الحلول.',
    'proc-2-t': 'التصميم',
    'proc-2-d': 'نحدد المقاسات والمواد والألوان معاً ثم نعرض التصميم لموافقتك.',
    'proc-3-t': 'التصنيع',
    'proc-3-d': 'يُعالج الخشب الصلب بعناية على أيدي حرفيين ماهرين في ورشتنا.',
    'proc-4-t': 'التسليم',
    'proc-4-d': 'نشارك صور المنتج قبل الشحن ونوفر توصيلاً وتركيباً مجانياً.',
    'gal-tag': 'المعرض',
    'gal-title': 'مشاريعنا المكتملة',
    'gal-desc': 'نماذج من الأثاث المصنوع في ورشة Moilya.',
    'ig-desc': 'تابع حسابنا على إنستغرام لمتابعة أحدث الإنتاجات والمشاريع.',
    'ct-tag': 'اتصل بنا',
    'ct-title': 'لنخطط مشروعك معاً',
    'ct-desc': 'املأ النموذج للحصول على عرض أو تواصل معنا عبر إنستغرام.',
    'ct-phone': 'الهاتف',
    'ct-email': 'البريد الإلكتروني',
    'ct-address': 'العنوان',
    'ct-hours': 'ساعات العمل',
    'ct-hours-val': 'الإثنين - السبت: 09:00 - 19:00',
    'form-name': 'الاسم الكامل',
    'form-name-ph': 'اسمك الكامل',
    'form-email-ph': 'example@email.com',
    'form-phone': 'الهاتف',
    'form-cat': 'الفئة التي تهمك',
    'form-cat-0': 'اختر',
    'form-msg': 'رسالتك',
    'form-msg-ph': 'معلومات مختصرة عن مشروعك...',
    'form-submit': 'إرسال',
    'form-success-msg': 'تم استلام رسالتك! سنتواصل معك في أقرب وقت.',
    'footer-desc': 'عنوانك الموثوق لتصنيع الأثاث المخصص.',
    'footer-links-title': 'روابط سريعة',
    'footer-col-title': 'الخدمات',
    'footer-ig-title': 'إنستغرام',
    'footer-ig-p': 'تابعنا للاطلاع على أحدث الإنتاجات والمشاريع.',
    'footer-copy': '© 2026 Moilya. جميع الحقوق محفوظة.',
  }
};

function setLang(lang) {
  localStorage.setItem('moilya-lang', lang);
  const langMap = { tr: 'tr', en: 'en', ar: 'ar' };
  document.documentElement.lang = langMap[lang] || 'tr';
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.getElementById('langTR').classList.toggle('active', lang === 'tr');
  document.getElementById('langEN').classList.toggle('active', lang === 'en');
  document.getElementById('langAR').classList.toggle('active', lang === 'ar');
  applyTranslations(lang);
}

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  // Apply data-i18n attributes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Apply data-i18n-ph (placeholders)
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (t[key] !== undefined) el.placeholder = t[key];
  });
}

function initLang() {
  const saved = localStorage.getItem('moilya-lang') || 'tr';
  setLang(saved);
}

function initHeader() {
  const header = document.getElementById('header');
  const hero = document.querySelector('.hero');

  window.addEventListener('scroll', () => {
    const heroBottom = hero.offsetHeight - 100;
    header.classList.toggle('scrolled', window.scrollY > heroBottom);
  });
}

function initMobileNav() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
    });
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

function initStatsCounter() {
  const stats = document.querySelectorAll('.stat-number');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        stats.forEach(stat => animateCounter(stat));
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.querySelector('.stats');
  if (statsSection) observer.observe(statsSection);
}

function animateCounter(element) {
  const target = parseInt(element.dataset.target, 10);
  const duration = 2000;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = Math.floor(target * eased);
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

function initTestimonials() {
  const testimonials = document.querySelectorAll('.testimonial');
  const dotsContainer = document.getElementById('testimonialDots');
  let current = 0;
  let interval;

  testimonials.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.classList.add('testimonial-dot');
    if (i === 0) dot.classList.add('active');
    dot.setAttribute('aria-label', `Yorum ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('.testimonial-dot');

  function goTo(index) {
    testimonials[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = index;
    testimonials[current].classList.add('active');
    dots[current].classList.add('active');
    resetInterval();
  }

  function next() {
    goTo((current + 1) % testimonials.length);
  }

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(next, 5000);
  }

  resetInterval();
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    success.classList.add('show');
    form.reset();
    setTimeout(() => success.classList.remove('show'), 5000);
  });
}

function initNewsletterForm() {
  const form = document.getElementById('newsletterForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.reset();
    alert('Bültenimize abone oldunuz. Teşekkürler!');
  });
}

function initScrollAnimations() {
  const elements = document.querySelectorAll(
    '.section-header, .about-content, .about-images, .collection-card, .process-step, .gallery-item, .instagram-item, .contact-info, .contact-form, .feature, .home-svc-card'
  );

  elements.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });

  // Observe all fade-in elements (including those already having the class)
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}
