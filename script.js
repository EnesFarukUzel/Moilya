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
// ===== Language Switcher =====
const translations = {
  tr: {
    'nav-home': 'Ana Sayfa', 'nav-corporate': 'Kurumsal', 'nav-services': 'Hizmetlerimiz',
    'nav-references': 'Referanslar', 'nav-contact': 'İletişim',
    // index hero
    'hero-tag': 'Proje Odaklı Mobilya', 'hero-title': 'Yaşam alanlarınıza<br><em>değer katan</em> tasarımlar',
    'hero-desc': 'Moilya olarak el işçiliği ve modern tasarımı bir araya getirerek, evinize özel mobilyalar üretiyoruz.',
    'hero-btn1': 'Hizmetlerimizi Keşfet', 'hero-btn2': "Instagram'da İncele", 'hero-scroll': 'Keşfet',
    // stats
    'stat-1': 'Tamamlanmış Proje', 'stat-2': 'Müşteri Portföyü', 'stat-3': 'Ürün Çeşitliliği', 'stat-4': 'Uzman Personel',
    // about
    'about-tag': 'Hakkımızda', 'about-title': 'Zanaatkarlık ve<br>modern tasarımın buluşması',
    'about-p1': 'Moilya, özel mobilya üretiminde kalite ve estetiği bir araya getiren bir markadır. Her parçayı titizlikle tasarlıyor, kaliteli malzemelerle üretiyor ve yaşam alanlarınıza özel çözümler sunuyoruz.',
    'about-p2': 'Salon takımlarından yatak odası mobilyalarına, mutfak dolaplarından ofis çözümlerine kadar geniş bir yelpazede hizmet veriyoruz. Müşterilerimizin hayallerini gerçeğe dönüştürmek bizim tutkumuz.',
    'about-f1': 'Özel ölçü ve tasarım', 'about-f2': 'Birinci sınıf malzeme', 'about-f3': 'Profesyonel montaj', 'about-f4': 'Kişiye özel üretim',
    // home services
    'home-svc-tag': 'Hizmetlerimiz', 'home-svc-title': 'Büyük ölçekli projeler için<br>güvenilir çözümler',
    'home-svc-desc': 'Her ölçekte ve her sektörde mobilya üretimi yapıyoruz.',
    'svc-click': 'Bilgi için tıklayınız →',
    'svc-toplu-t': 'Toplu Konut Projeleri', 'svc-toplu-d': 'Yüzlerce daire için standart veya özelleştirilmiş mobilya paketleri.',
    'svc-fabrika-t': 'Fabrika İdari Binaları', 'svc-fabrika-d': 'Ofisten yemekhanesine, resepsiyondan toplantı salonuna komple donatım.',
    'svc-otel-t': 'Otel Projeleri', 'svc-otel-d': 'Butik otellerden zincir otellere, oda ve ortak alan mobilyası.',
    'svc-kafe-t': 'Kafe & Restaurant Projeleri', 'svc-kafe-d': 'Markanızın kimliğini yansıtan, konsepte özel atmosferler.',
    'svc-mimar-t': 'Mimar / İç Mimar İş Birlikleri', 'svc-mimar-d': 'Tasarım dosyasından üretime, projenin vizyonunu aynen hayata geçiriyoruz.',
    'svc-b2b-t': 'B2B Mobilya Projeleri', 'svc-b2b-d': 'Bayiler ve kurumsal alıcılar için fason üretim ve lojistik destek.',
    // process
    'proc-tag': 'Süreç', 'proc-title': 'Fikirden teslimata',
    'proc-1-t': 'Danışmanlık', 'proc-1-d': 'İhtiyaçlarınızı dinliyor, alanınızı anlıyor ve size en uygun çözümleri birlikte belirliyoruz.',
    'proc-2-t': 'Tasarım', 'proc-2-d': 'Ölçü, malzeme ve renk seçeneklerini birlikte belirliyor, tasarımı onayınıza sunuyoruz.',
    'proc-3-t': 'Üretim', 'proc-3-d': 'Atölyemizde masif ahşap malzemeler usta ellerde özenle işleniyor.',
    'proc-4-t': 'Teslimat', 'proc-4-d': 'Gönderim öncesi ürün fotoğrafı paylaşıyor, ücretsiz teslimat ve kurulum yapıyoruz.',
    // gallery
    'gal-tag': 'Galeri', 'gal-title': 'Tamamlanan projelerimiz',
    'gal-desc': 'Moilya atölyesinde üretilen mobilyalardan örnekler.',
    // instagram
    'ig-tag': 'Instagram', 'ig-title': '@moilyacom',
    'ig-desc': 'Yeni üretimlerimizi ve tamamlanan projelerimizi Instagram hesabımızdan takip edin.',
    'ig-btn': '@moilyacom Takip Et',
    // features bar
    'feat-1-t': 'Özel Üretim', 'feat-1-d': 'Size özel tasarım',
    'feat-2-t': 'Kaliteli Malzeme', 'feat-2-d': 'Dayanıklı ve estetik',
    'feat-3-t': 'Profesyonel Montaj', 'feat-3-d': 'Teslimat dahil',
    'feat-4-t': '@moilyacom', 'feat-4-d': "Instagram'dan ulaşın",
    // contact
    'ct-tag': 'İletişim', 'ct-title': 'Projenizi birlikte planlayalım',
    'ct-desc': 'Teklif almak için formu doldurun veya Instagram hesabımızdan bize ulaşın.',
    'ct-hero-title': 'Projenizi Konuşalım', 'ct-hero-desc': 'Hayalinizdeki mobilyayı gerçeğe dönüştürmek için ilk adımı atın.',
    'ct-phone': 'Telefon', 'ct-email': 'E-posta', 'ct-address': 'Adres', 'ct-ig': 'Instagram',
    'ct-hours': 'Çalışma Saatleri', 'ct-hours-val': 'Pzt - Cmt: 09:00 - 19:00',
    'form-name': 'Ad Soyad', 'form-name-ph': 'Adınız ve soyadınız', 'form-email-ph': 'ornek@email.com',
    'form-phone': 'Telefon', 'form-cat': 'İlgilendiğiniz Kategori', 'form-cat-0': 'Seçiniz',
    'form-msg': 'Mesajınız', 'form-msg-ph': 'Projeniz hakkında kısa bilgi verin...',
    'form-submit': 'Gönder', 'form-success-msg': 'Mesajınız alındı! En kısa sürede size dönüş yapacağız.',
    // footer
    'footer-desc': 'Özel tasarım mobilya üretiminde güvenilir adresiniz.',
    'footer-links-title': 'Hızlı Bağlantılar', 'footer-svc-title': 'Hizmetler',
    'footer-ig-title': 'Instagram', 'footer-ig-p': 'Yeni üretimler ve projeler için bizi takip edin.',
    'footer-copy': '© 2026 Moilya. Tüm hakları saklıdır.',
    // kurumsal page
    'corp-hero-title': 'Moilya Hakkında', 'corp-hero-desc': 'Üretim ve proje odaklı mobilya çözümleri.',
    'corp-about-tag': 'Hakkımızda', 'corp-about-title': 'Üretim ve proje odaklı<br>bir mobilya markası',
    'corp-about-p1': 'Moilya, farklı ölçek ve nitelikteki projelerin sabit ve hareketli mobilya ihtiyaçlarını bir bütün olarak ele alan, üretim ve proje odaklı bir mobilya markasıdır.',
    'corp-about-p2': 'Toplu konut projeleri, fabrika ve idari binalar, oteller, cafe & restaurantlar ve özel tasarım projeleri başta olmak üzere; farklı kullanım alanlarının ihtiyaç duyduğu mobilyaları tek bir çözüm anlayışı içerisinde ele alıyoruz.',
    'corp-about-p3': 'Mobilyayı belirli ürün grupları veya segmentlerle sınırlandırmıyoruz. Bir projenin sabit mobilyalarından hareketli mobilyalarına kadar ihtiyaç duyduğu ürünleri; tasarım, malzeme, fonksiyon ve üretim açısından projenin bütünü içerisinde değerlendiriyoruz.',
    'corp-about-p4': 'Güçlü üretim kabiliyetimizi, farklı malzeme ve ürün gruplarında oluşturduğumuz geniş tedarik ağıyla birleştirerek, kapsamlı projelerin mobilya ihtiyaçlarına tek noktadan çözüm sunabiliyoruz.',
    'corp-block-1': 'Ahşap ve panel bazlı sabit mobilyalardan döşemeli ürünlere; masa, sandalye ve oturma gruplarından metal ve farklı malzemelerin kullanıldığı özel üretimlere kadar geniş bir üretim ve tedarik kabiliyetine sahibiz.',
    'corp-block-2': 'Projelendirme, numune geliştirme, üretim, kalite kontrol, paketleme, sevkiyat ve montaj süreçlerini projenin gereksinimlerine göre planlayarak; müşterilerimiz için yalnızca bir üretici değil, süreci yöneten güvenilir bir mobilya çözüm ortağı olmayı hedefliyoruz.',
    'corp-block-3': 'Esnek üretim yapımız sayesinde standart ürünlerin yanı sıra projeye, ölçüye ve tasarıma özel üretimler gerçekleştiriyor; farklı ölçeklerdeki projelere uyum sağlayabiliyoruz.',
    'corp-highlight': 'Moilya olarak hedefimiz; bir projenin mobilyaya dair ihtiyaçlarını <strong>doğru üretim, doğru tedarik ve doğru organizasyonla tek bir noktadan</strong> karşılayabilmektir.',
    'corp-mission-t': 'Misyonumuz', 'corp-vision-t': 'Vizyonumuz',
    'corp-m1': 'Projelerin sabit ve hareketli mobilya ihtiyaçlarını bütüncül bir yaklaşımla ele alarak; güçlü üretim altyapımızı, uzman iş gücümüzü ve geniş tedarik ağımızı bir araya getirmek.',
    'corp-m2': 'Farklı ürün ve malzeme gruplarını tek bir proje organizasyonu altında yöneterek müşterilerimizin mobilyaya dair ihtiyaçlarına kapsamlı çözümler sunmak.',
    'corp-m3': 'Tasarım ve projelendirmeden numune geliştirmeye, üretimden kalite kontrole, paketlemeden sevkiyat ve montaja kadar tüm süreçlerde kalite, zamanlama ve sürdürülebilir iş birliğini esas almak.',
    'corp-m4': 'Her ölçekteki projede üretim kabiliyetimizi sürekli geliştirerek, müşterilerimiz için güvenilir ve uzun vadeli bir mobilya çözüm ortağı olmak.',
    'corp-v1': 'Sabit ve hareketli mobilyayı bir bütün olarak ele alan üretim anlayışımızla; farklı ölçekteki projelerin mobilyaya dair tüm ihtiyaçlarına cevap verebilen, Türkiye\'den dünyaya üretim yapan güçlü ve güvenilir bir proje mobilya markası olmak.',
    'corp-v2': 'Üretim altyapımızı, insan kaynağımızı ve tedarik ağımızı sürekli geliştirerek; yüksek adetli üretimlerden projeye özel çözümlere kadar farklı ihtiyaçlara hızlı, esnek ve sürdürülebilir şekilde cevap verebilen bir yapı oluşturmak.',
    'corp-v3': 'Uluslararası pazarlarda mimarlık ofisleri, proje firmaları, yatırımcılar, yükleniciler ve mobilya sektöründeki iş ortakları için Türkiye\'deki güçlü üretim ve tedarik merkezi olmak.',
    'corp-v4': 'Moilya\'yı yalnızca ürün tedarik eden bir üretici değil; mobilyaya dair tüm süreçleri yönetebilen global bir çözüm ortağı haline getirmek.',
    // hizmetlerimiz page
    'svc-hero-title': 'Her Proje, Her İhtiyaç', 'svc-hero-desc': 'Toplu konuttan otellere, fabrikalardan restoranlar kadar her ölçekte mobilya üretiyoruz.',
    'svc-page-tag': 'Hizmetlerimiz', 'svc-page-title': 'Büyük ölçekli projeler için<br>güvenilir çözümler',
    'svc-page-desc': 'Toplu konuttan otellere, fabrikalardan restoranlar kadar her ölçekte mobilya üretiyoruz.',
    'svc-cta': 'Teklif Al →',
    'svc-1-title': 'Toplu Konut Projeleri',
    'svc-1-desc': 'Konut projelerinde tutarlı kalite ve hızlı teslimat bizim uzmanlığımız. Yüzlerce daire için standart ya da özelleştirilmiş mobilya paketleri üretiyoruz.',
    'svc-1-f1': 'Toplu üretimde maliyet avantajı', 'svc-1-f2': 'Daire tiplerine göre özel paketler',
    'svc-1-f3': 'Koordineli teslimat planlaması', 'svc-1-f4': 'Kurulum ekibi desteği',
    'svc-2-title': 'Fabrika İdari Binaları',
    'svc-2-desc': 'Üretim tesislerinin idari bölümleri için dayanıklı, fonksiyonel ve temsili mobilya çözümleri sunuyoruz.',
    'svc-2-f1': 'Yönetici ve çalışan ofis mobilyası', 'svc-2-f2': 'Toplantı & konferans salonları',
    'svc-2-f3': 'Resepsiyon & lobi alanları', 'svc-2-f4': 'Yemekhane & sosyal alanlar',
    'svc-3-title': 'Otel Projeleri',
    'svc-3-desc': 'Butik otellerden zincir otellere, her ölçekte otel odası ve ortak alan mobilyası üretiyoruz.',
    'svc-3-f1': 'Oda başlığı, konsol, dolap takımları', 'svc-3-f2': 'Lobi & resepsiyon mobilyası',
    'svc-3-f3': 'Restoran & bar alanları', 'svc-3-f4': 'Toplu üretim & tedarik yönetimi',
    'svc-4-title': 'Kafe & Restaurant Projeleri',
    'svc-4-desc': 'Markanızın kimliğini yansıtan, misafirlerin tekrar gelmek isteyeceği atmosferler yaratıyoruz.',
    'svc-4-f1': 'Masa & sandalye grupları', 'svc-4-f2': 'Banka & bar tezgahları',
    'svc-4-f3': 'Dekor raf & vitrin sistemleri', 'svc-4-f4': 'Konsepte özel tasarım',
    'svc-5-title': 'Mimar / İç Mimar İş Birlikleri',
    'svc-5-desc': 'Mimar ve iç mimarlarla ortak çalışmak bizim için öncelikli. Tasarım dosyalarını üretim sürecine doğrudan entegre ediyoruz.',
    'svc-5-f1': 'Teknik çizim & imalat uyumu', 'svc-5-f2': 'Prototip & numune üretimi',
    'svc-5-f3': 'Özel malzeme & kaplama seçenekleri', 'svc-5-f4': 'Proje bazlı fiyatlandırma',
    'svc-6-title': 'B2B Mobilya Projeleri',
    'svc-6-desc': 'Bayiler, toptancılar ve kurumsal alıcılar için düzenli üretim kapasitesi sunuyoruz.',
    'svc-6-f1': 'Fason & OEM üretim', 'svc-6-f2': 'Düzenli sipariş yönetimi',
    'svc-6-f3': 'Özel ambalaj & etiketleme', 'svc-6-f4': 'Lojistik & ihracat desteği',
    // fsc
    'fsc-tag': 'Sürdürülebilirlik', 'fsc-title': 'Doğadan gelir, doğaya döner',
    'fsc-desc': 'FSC sertifikalı ahşap kullanarak ürettiğimiz her mobilya bu döngünün bir parçasıdır.',
    'fsc-l1': 'Orman & Ağaç', 'fsc-l2': 'Üretim', 'fsc-l3': 'Yaşam Alanı', 'fsc-l4': 'Geri Dönüşüm',
    'fsc-cert-title': 'Sertifikalı Üretim',
    'fsc-cert-text': 'Kullandığımız tüm ahşap malzemeler, ormanların sürdürülebilir şekilde yönetildiğini belgeleyen <strong>FSC® sertifikası</strong> kapsamındadır. Bu sertifika; ağaç kesiminin kontrollü yapıldığını, biyoçeşitliliğin korunduğunu ve yerel toplulukların haklarına saygı gösterildiğini güvence altına alır.',
    // referanslar page
    'ref-hero-title': 'Tamamlanan Projeler', 'ref-hero-desc': 'Güven duyduğumuz markalar ve çözüm ortaklarımız.',
    'ref-stat-1': 'Tamamlanan Proje', 'ref-stat-2': 'Şehirde Teslimat', 'ref-stat-3': 'Yıllık Deneyim', 'ref-stat-4': '% Müşteri Memnuniyeti',
    'ref-page-tag': 'Referanslarımız', 'ref-page-title': 'Güven duyduğumuz markalar', 'ref-page-desc': 'Farklı sektörlerden çözüm ortaklarımız.',
    'ref-cat-1': 'Sanayi & Kurumsal', 'ref-cat-2': 'Eğitim Kurumları', 'ref-cat-3': 'Kafe & Restaurant',
    'ref-cta-tag': 'Sıradaki Proje', 'ref-cta-title': 'Sizin markanızı da ekleyelim',
    'ref-cta-desc': 'Projenizin mobilya ihtiyaçlarını birlikte değerlendirelim.', 'ref-cta-btn': 'Teklif Al',
  },
  en: {
    'nav-home': 'Home', 'nav-corporate': 'Corporate', 'nav-services': 'Services',
    'nav-references': 'References', 'nav-contact': 'Contact',
    'hero-tag': 'Project-Focused Furniture', 'hero-title': 'Designs that add <em>value</em><br>to your living spaces',
    'hero-desc': 'At Moilya, we combine craftsmanship and modern design to create furniture tailored for your project.',
    'hero-btn1': 'Explore Services', 'hero-btn2': 'View on Instagram', 'hero-scroll': 'Explore',
    'stat-1': 'Completed Projects', 'stat-2': 'Client Portfolio', 'stat-3': 'Product Variety', 'stat-4': 'Expert Staff',
    'about-tag': 'About Us', 'about-title': 'Where craftsmanship meets<br>modern design',
    'about-p1': 'Moilya is a brand that brings quality and aesthetics together in custom furniture production. We carefully design each piece, manufacture with premium materials, and provide tailored solutions for your spaces.',
    'about-p2': 'From living room sets to bedroom furniture, kitchen cabinets to office solutions — turning our clients\' visions into reality is our passion.',
    'about-f1': 'Custom size & design', 'about-f2': 'First-class materials', 'about-f3': 'Professional installation', 'about-f4': 'Made-to-order production',
    'home-svc-tag': 'Our Services', 'home-svc-title': 'Reliable solutions for<br>large-scale projects',
    'home-svc-desc': 'We produce furniture at every scale and in every sector.',
    'svc-click': 'Click for more info →',
    'svc-toplu-t': 'Mass Housing Projects', 'svc-toplu-d': 'Standard or customized furniture packages for hundreds of units.',
    'svc-fabrika-t': 'Factory Administrative Buildings', 'svc-fabrika-d': 'Complete furnishing from offices to cafeterias and meeting rooms.',
    'svc-otel-t': 'Hotel Projects', 'svc-otel-d': 'Room and common area furniture from boutique to chain hotels.',
    'svc-kafe-t': 'Café & Restaurant Projects', 'svc-kafe-d': 'Concept-specific atmospheres that reflect your brand identity.',
    'svc-mimar-t': 'Architect / Interior Designer Collaborations', 'svc-mimar-d': 'From design files to production, we bring your vision to life.',
    'svc-b2b-t': 'B2B Furniture Projects', 'svc-b2b-d': 'Contract manufacturing and logistics support for dealers and corporate buyers.',
    'proc-tag': 'Process', 'proc-title': 'From idea to delivery',
    'proc-1-t': 'Consultation', 'proc-1-d': 'We listen to your needs, understand your space, and define the best solutions together.',
    'proc-2-t': 'Design', 'proc-2-d': 'We determine measurements, materials, and colors together, then present the design for approval.',
    'proc-3-t': 'Production', 'proc-3-d': 'Solid wood materials are carefully crafted by skilled hands in our workshop.',
    'proc-4-t': 'Delivery', 'proc-4-d': 'We share product photos before shipping and provide free delivery and installation.',
    'gal-tag': 'Gallery', 'gal-title': 'Completed projects', 'gal-desc': 'Examples of furniture produced in the Moilya workshop.',
    'ig-tag': 'Instagram', 'ig-title': '@moilyacom',
    'ig-desc': 'Follow our Instagram for new productions and completed projects.', 'ig-btn': 'Follow @moilyacom',
    'feat-1-t': 'Custom Production', 'feat-1-d': 'Tailored design for you',
    'feat-2-t': 'Quality Materials', 'feat-2-d': 'Durable and aesthetic',
    'feat-3-t': 'Professional Installation', 'feat-3-d': 'Delivery included',
    'feat-4-t': '@moilyacom', 'feat-4-d': 'Reach us on Instagram',
    'ct-tag': 'Contact', 'ct-title': "Let's plan your project together",
    'ct-desc': 'Fill out the form to get a quote or reach us via Instagram.',
    'ct-hero-title': "Let's Talk About Your Project", 'ct-hero-desc': 'Take the first step to turn your dream furniture into reality.',
    'ct-phone': 'Phone', 'ct-email': 'Email', 'ct-address': 'Address', 'ct-ig': 'Instagram',
    'ct-hours': 'Working Hours', 'ct-hours-val': 'Mon - Sat: 09:00 - 19:00',
    'form-name': 'Full Name', 'form-name-ph': 'Your full name', 'form-email-ph': 'example@email.com',
    'form-phone': 'Phone', 'form-cat': 'Category of Interest', 'form-cat-0': 'Select',
    'form-msg': 'Your Message', 'form-msg-ph': 'Brief info about your project...',
    'form-submit': 'Send', 'form-success-msg': 'Message received! We will get back to you shortly.',
    'footer-desc': 'Your trusted partner for project-based furniture solutions.',
    'footer-links-title': 'Quick Links', 'footer-svc-title': 'Services',
    'footer-ig-title': 'Instagram', 'footer-ig-p': 'Follow us for new productions and projects.',
    'footer-copy': '© 2026 Moilya. All rights reserved.',
    'corp-hero-title': 'About Moilya', 'corp-hero-desc': 'A production and project-focused furniture brand.',
    'corp-about-tag': 'About Us', 'corp-about-title': 'A production and project-focused<br>furniture brand',
    'corp-about-p1': 'Moilya is a production and project-focused furniture brand that addresses both fixed and movable furniture needs of projects at different scales and qualities as a whole.',
    'corp-about-p2': 'From mass housing projects, factories and administrative buildings, hotels, cafés & restaurants to custom design projects — we handle the furniture needs of different usage areas under a single solution approach.',
    'corp-about-p3': 'We do not limit furniture to specific product groups or segments. From fixed to movable furniture, we evaluate all required products within the project as a whole in terms of design, material, function, and production.',
    'corp-about-p4': 'By combining our strong production capability with our extensive supply network across different material and product groups, we provide single-point solutions for the furniture needs of comprehensive projects.',
    'corp-block-1': 'From wood and panel-based fixed furniture to upholstered products; from tables, chairs and seating groups to custom productions using metal and other materials — we have a wide production and supply capability.',
    'corp-block-2': 'By planning the processes of project design, sample development, production, quality control, packaging, shipping and installation according to the requirements of the project, we aim to be not just a manufacturer but a reliable furniture solution partner.',
    'corp-block-3': 'Thanks to our flexible production structure, we carry out standard products as well as project-specific, custom-sized and custom-designed productions; adapting to projects of different scales.',
    'corp-highlight': 'Our goal at Moilya is to meet all furniture needs of a project from a <strong>single point with the right production, right supply and right organization</strong>.',
    'corp-mission-t': 'Our Mission', 'corp-vision-t': 'Our Vision',
    'corp-m1': 'To address the fixed and movable furniture needs of projects with a holistic approach; bringing together our strong production infrastructure, expert workforce, and extensive supply network.',
    'corp-m2': 'To manage different product and material groups under a single project organization and provide comprehensive solutions for our clients\' furniture needs.',
    'corp-m3': 'To prioritize quality, timing and sustainable cooperation in all processes from design to sample development, production to quality control, packaging to shipping and installation.',
    'corp-m4': 'To continuously develop our production capability in projects of every scale and become a reliable, long-term furniture solution partner for our clients.',
    'corp-v1': 'To become a strong and reliable project furniture brand that produces from Turkey to the world, capable of meeting all furniture needs of projects at different scales.',
    'corp-v2': 'To build a structure that can respond quickly, flexibly and sustainably to different needs — from high-volume productions to project-specific solutions.',
    'corp-v3': 'To be the strong production and supply hub in Turkey for architecture offices, project companies, investors, contractors and business partners in international markets.',
    'corp-v4': 'To transform Moilya from a mere product supplier into a global solution partner capable of managing all furniture-related processes.',
    'svc-hero-title': 'Every Project, Every Need', 'svc-hero-desc': 'We manufacture furniture at every scale — from mass housing to hotels, factories to restaurants.',
    'svc-page-tag': 'Our Services', 'svc-page-title': 'Reliable solutions for<br>large-scale projects',
    'svc-page-desc': 'We produce furniture at every scale and in every sector.',
    'svc-cta': 'Get a Quote →',
    'svc-1-title': 'Mass Housing Projects',
    'svc-1-desc': 'Consistent quality and fast delivery in residential projects is our expertise. We produce standard or customized furniture packages for hundreds of apartments.',
    'svc-1-f1': 'Cost advantage in bulk production', 'svc-1-f2': 'Custom packages per apartment type',
    'svc-1-f3': 'Coordinated delivery planning', 'svc-1-f4': 'Installation team support',
    'svc-2-title': 'Factory Administrative Buildings',
    'svc-2-desc': 'We offer durable, functional, and representative furniture solutions for administrative sections of production facilities.',
    'svc-2-f1': 'Executive and staff office furniture', 'svc-2-f2': 'Meeting & conference rooms',
    'svc-2-f3': 'Reception & lobby areas', 'svc-2-f4': 'Canteen & social areas',
    'svc-3-title': 'Hotel Projects',
    'svc-3-desc': 'We produce hotel room and common area furniture at every scale, from boutique to chain hotels.',
    'svc-3-f1': 'Headboards, consoles, wardrobe sets', 'svc-3-f2': 'Lobby & reception furniture',
    'svc-3-f3': 'Restaurant & bar areas', 'svc-3-f4': 'Bulk production & supply management',
    'svc-4-title': 'Café & Restaurant Projects',
    'svc-4-desc': 'We create atmospheres that reflect your brand identity and make guests want to return.',
    'svc-4-f1': 'Table & chair groups', 'svc-4-f2': 'Counter & bar tops',
    'svc-4-f3': 'Decor shelf & display systems', 'svc-4-f4': 'Concept-specific design',
    'svc-5-title': 'Architect / Interior Designer Collaborations',
    'svc-5-desc': 'Collaborating with architects and interior designers is a priority for us. We directly integrate design files into the production process.',
    'svc-5-f1': 'Technical drawing & manufacturing alignment', 'svc-5-f2': 'Prototype & sample production',
    'svc-5-f3': 'Special material & finish options', 'svc-5-f4': 'Project-based pricing',
    'svc-6-title': 'B2B Furniture Projects',
    'svc-6-desc': 'We offer regular production capacity for dealers, wholesalers, and corporate buyers.',
    'svc-6-f1': 'Contract & OEM production', 'svc-6-f2': 'Regular order management',
    'svc-6-f3': 'Custom packaging & labeling', 'svc-6-f4': 'Logistics & export support',
    'fsc-tag': 'Sustainability', 'fsc-title': 'From nature, back to nature',
    'fsc-desc': 'Every piece of furniture we produce using FSC certified wood is part of this cycle.',
    'fsc-l1': 'Forest & Tree', 'fsc-l2': 'Production', 'fsc-l3': 'Living Space', 'fsc-l4': 'Recycling',
    'fsc-cert-title': 'Certified Production',
    'fsc-cert-text': 'All wood materials we use are covered by the <strong>FSC® certificate</strong>, which documents that forests are managed sustainably. This certificate ensures that tree felling is controlled, biodiversity is protected, and the rights of local communities are respected.',
    'ref-hero-title': 'Completed Projects', 'ref-hero-desc': 'Brands we trust and our solution partners.',
    'ref-stat-1': 'Completed Projects', 'ref-stat-2': 'Cities Delivered', 'ref-stat-3': 'Years of Experience', 'ref-stat-4': '% Customer Satisfaction',
    'ref-page-tag': 'Our References', 'ref-page-title': 'Brands we trust', 'ref-page-desc': 'Our solution partners from different sectors.',
    'ref-cat-1': 'Industry & Corporate', 'ref-cat-2': 'Educational Institutions', 'ref-cat-3': 'Café & Restaurant',
    'ref-cta-tag': 'Next Project', 'ref-cta-title': "Let's add your brand too",
    'ref-cta-desc': "Let's evaluate your project's furniture needs together.", 'ref-cta-btn': 'Get a Quote',
  },
  ar: {
    'nav-home': 'الرئيسية', 'nav-corporate': 'المؤسسة', 'nav-services': 'خدماتنا',
    'nav-references': 'المراجع', 'nav-contact': 'اتصل بنا',
    'hero-tag': 'أثاث موجّه للمشاريع', 'hero-title': 'تصاميم تُضيف <em>قيمة</em><br>إلى مساحات حياتك',
    'hero-desc': 'في Moilya، نجمع بين الحرفية اليدوية والتصميم العصري لنصنع أثاثاً مخصصاً لمشروعك.',
    'hero-btn1': 'استكشف خدماتنا', 'hero-btn2': 'تابعنا على إنستغرام', 'hero-scroll': 'اكتشف',
    'stat-1': 'مشروع مكتمل', 'stat-2': 'محفظة عملاء', 'stat-3': 'تنوع منتجات', 'stat-4': 'موظف متخصص',
    'about-tag': 'من نحن', 'about-title': 'التقاء الحرفية<br>والتصميم الحديث',
    'about-p1': 'Moilya علامة تجمع بين الجودة والجماليات في تصنيع الأثاث المخصص. نصمم كل قطعة بعناية ونصنعها من مواد فاخرة.',
    'about-p2': 'من طقم الصالون إلى غرفة النوم، من خزائن المطبخ إلى حلول المكتب — تحويل أحلام عملائنا إلى واقع هو شغفنا.',
    'about-f1': 'مقاسات وتصاميم مخصصة', 'about-f2': 'مواد من الدرجة الأولى', 'about-f3': 'تركيب احترافي', 'about-f4': 'إنتاج حسب الطلب',
    'home-svc-tag': 'خدماتنا', 'home-svc-title': 'حلول موثوقة<br>للمشاريع الكبرى',
    'home-svc-desc': 'ننتج الأثاث في كل القطاعات وبكل الأحجام.',
    'svc-click': 'انقر للمزيد من المعلومات ←',
    'svc-toplu-t': 'مشاريع الإسكان الجماعي', 'svc-toplu-d': 'حزم أثاث قياسية أو مخصصة لمئات الوحدات.',
    'svc-fabrika-t': 'المباني الإدارية للمصانع', 'svc-fabrika-d': 'تجهيز كامل من المكاتب إلى قاعات الاجتماعات.',
    'svc-otel-t': 'مشاريع الفنادق', 'svc-otel-d': 'أثاث غرف ومناطق مشتركة من الفنادق البوتيك إلى السلاسل.',
    'svc-kafe-t': 'مشاريع المقاهي والمطاعم', 'svc-kafe-d': 'أجواء مخصصة تعكس هوية علامتك التجارية.',
    'svc-mimar-t': 'شراكات المعماريين والمصممين', 'svc-mimar-d': 'من ملفات التصميم إلى الإنتاج، ننفذ رؤيتك بدقة.',
    'svc-b2b-t': 'مشاريع الأثاث B2B', 'svc-b2b-d': 'إنتاج بالعقد ودعم لوجستي للموزعين والمشترين.',
    'proc-tag': 'العملية', 'proc-title': 'من الفكرة إلى التسليم',
    'proc-1-t': 'الاستشارة', 'proc-1-d': 'نستمع إلى احتياجاتك ونفهم مساحتك ونحدد معك أفضل الحلول.',
    'proc-2-t': 'التصميم', 'proc-2-d': 'نحدد المقاسات والمواد والألوان معاً ثم نعرض التصميم لموافقتك.',
    'proc-3-t': 'التصنيع', 'proc-3-d': 'يُعالج الخشب الصلب بعناية على أيدي حرفيين ماهرين في ورشتنا.',
    'proc-4-t': 'التسليم', 'proc-4-d': 'نشارك صور المنتج قبل الشحن ونوفر توصيلاً وتركيباً مجانياً.',
    'gal-tag': 'المعرض', 'gal-title': 'مشاريعنا المكتملة', 'gal-desc': 'نماذج من الأثاث المصنوع في ورشة Moilya.',
    'ig-tag': 'إنستغرام', 'ig-title': '@moilyacom',
    'ig-desc': 'تابع حسابنا على إنستغرام لمتابعة أحدث الإنتاجات والمشاريع.', 'ig-btn': 'تابع @moilyacom',
    'feat-1-t': 'إنتاج مخصص', 'feat-1-d': 'تصميم خاص بك',
    'feat-2-t': 'مواد عالية الجودة', 'feat-2-d': 'متين وجميل',
    'feat-3-t': 'تركيب احترافي', 'feat-3-d': 'شامل التوصيل',
    'feat-4-t': '@moilyacom', 'feat-4-d': 'تواصل عبر إنستغرام',
    'ct-tag': 'اتصل بنا', 'ct-title': 'لنخطط مشروعك معاً',
    'ct-desc': 'املأ النموذج للحصول على عرض أو تواصل معنا عبر إنستغرام.',
    'ct-hero-title': 'لنتحدث عن مشروعك', 'ct-hero-desc': 'اتخذ الخطوة الأولى لتحويل أثاثك المثالي إلى واقع.',
    'ct-phone': 'الهاتف', 'ct-email': 'البريد الإلكتروني', 'ct-address': 'العنوان', 'ct-ig': 'إنستغرام',
    'ct-hours': 'ساعات العمل', 'ct-hours-val': 'الإثنين - السبت: 09:00 - 19:00',
    'form-name': 'الاسم الكامل', 'form-name-ph': 'اسمك الكامل', 'form-email-ph': 'example@email.com',
    'form-phone': 'الهاتف', 'form-cat': 'الفئة التي تهمك', 'form-cat-0': 'اختر',
    'form-msg': 'رسالتك', 'form-msg-ph': 'معلومات مختصرة عن مشروعك...',
    'form-submit': 'إرسال', 'form-success-msg': 'تم استلام رسالتك! سنتواصل معك في أقرب وقت.',
    'footer-desc': 'شريكك الموثوق لحلول الأثاث المخصصة للمشاريع.',
    'footer-links-title': 'روابط سريعة', 'footer-svc-title': 'الخدمات',
    'footer-ig-title': 'إنستغرام', 'footer-ig-p': 'تابعنا للاطلاع على أحدث الإنتاجات.',
    'footer-copy': '© 2026 Moilya. جميع الحقوق محفوظة.',
    'corp-hero-title': 'حول Moilya', 'corp-hero-desc': 'علامة تجارية للأثاث تركّز على الإنتاج والمشاريع.',
    'corp-about-tag': 'من نحن', 'corp-about-title': 'علامة أثاث تركّز<br>على الإنتاج والمشاريع',
    'corp-about-p1': 'Moilya علامة تجارية للأثاث تركز على الإنتاج والمشاريع، تتناول احتياجات الأثاث الثابت والمتحرك للمشاريع بمختلف الأحجام والطبيعات كوحدة متكاملة.',
    'corp-about-p2': 'من مشاريع الإسكان الجماعي والمصانع والمباني الإدارية والفنادق والمقاهي والمطاعم إلى مشاريع التصميم الخاص — نتعامل مع احتياجات الأثاث لمختلف مجالات الاستخدام ضمن نهج حل واحد.',
    'corp-about-p3': 'لا نحصر الأثاث في مجموعات منتجات أو شرائح محددة. نقيّم جميع المنتجات المطلوبة لمشروع ما من الأثاث الثابت إلى المتحرك ضمن إطار المشروع الكلي من حيث التصميم والمواد والوظيفة والإنتاج.',
    'corp-about-p4': 'بدمج قدرتنا الإنتاجية القوية مع شبكة توريد واسعة عبر مجموعات مختلفة من المواد والمنتجات، نوفر حلولاً من نقطة واحدة لاحتياجات الأثاث في المشاريع الشاملة.',
    'corp-block-1': 'من الأثاث الثابت القائم على الخشب والألواح إلى المنتجات المنجدة؛ ومن الطاولات والكراسي ومجموعات الجلوس إلى الإنتاجات الخاصة باستخدام المعادن ومواد أخرى — لدينا قدرة إنتاج وتوريد واسعة.',
    'corp-block-2': 'من خلال تخطيط عمليات التصميم وتطوير العينات والإنتاج ومراقبة الجودة والتعبئة والشحن والتركيب وفق متطلبات المشروع، نهدف إلى أن نكون شريكاً موثوقاً يدير العملية بأكملها.',
    'corp-block-3': 'بفضل هيكلنا الإنتاجي المرن، ننجز إنتاجات خاصة بالمشروع والمقاس والتصميم إلى جانب المنتجات القياسية، ونتكيف مع المشاريع بمختلف الأحجام.',
    'corp-highlight': 'هدفنا في Moilya هو تلبية جميع احتياجات الأثاث لمشروع ما من <strong>نقطة واحدة بالإنتاج الصحيح والتوريد الصحيح والتنظيم الصحيح</strong>.',
    'corp-mission-t': 'مهمتنا', 'corp-vision-t': 'رؤيتنا',
    'corp-m1': 'معالجة احتياجات الأثاث الثابت والمتحرك للمشاريع بنهج شامل؛ من خلال الجمع بين بنيتنا التحتية الإنتاجية القوية وكادرنا المتخصص وشبكة التوريد الواسعة.',
    'corp-m2': 'إدارة مجموعات المنتجات والمواد المختلفة تحت تنظيم مشروع واحد وتقديم حلول شاملة لاحتياجات عملائنا من الأثاث.',
    'corp-m3': 'إعطاء الأولوية للجودة والتوقيت والتعاون المستدام في جميع العمليات من التصميم إلى تطوير العينات ومن الإنتاج إلى مراقبة الجودة والتعبئة والشحن والتركيب.',
    'corp-m4': 'التطوير المستمر لقدرتنا الإنتاجية في مشاريع بكل الأحجام لنكون شريكاً موثوقاً وطويل الأمد لعملائنا.',
    'corp-v1': 'أن نصبح علامة أثاث قوية وموثوقة تنتج من تركيا إلى العالم، قادرة على تلبية جميع احتياجات الأثاث للمشاريع بمختلف الأحجام.',
    'corp-v2': 'بناء هيكل يستجيب بسرعة ومرونة واستدامة للاحتياجات المختلفة — من الإنتاج بكميات كبيرة إلى الحلول الخاصة بالمشروع.',
    'corp-v3': 'أن نكون مركز الإنتاج والتوريد القوي في تركيا للمكاتب المعمارية وشركات المشاريع والمستثمرين والمقاولين وشركاء الأعمال في الأسواق الدولية.',
    'corp-v4': 'تحويل Moilya من مجرد مورد منتجات إلى شريك حلول عالمي قادر على إدارة جميع العمليات المتعلقة بالأثاث.',
    'svc-hero-title': 'كل مشروع، كل احتياج', 'svc-hero-desc': 'ننتج الأثاث بكل الأحجام — من الإسكان الجماعي إلى الفنادق والمصانع والمطاعم.',
    'svc-page-tag': 'خدماتنا', 'svc-page-title': 'حلول موثوقة<br>للمشاريع الكبرى',
    'svc-page-desc': 'ننتج الأثاث في كل القطاعات وبكل الأحجام.',
    'svc-cta': 'احصل على عرض ←',
    'svc-1-title': 'مشاريع الإسكان الجماعي',
    'svc-1-desc': 'الجودة المتسقة والتسليم السريع في المشاريع السكنية هو تخصصنا. ننتج حزم أثاث قياسية أو مخصصة لمئات الشقق.',
    'svc-1-f1': 'ميزة التكلفة في الإنتاج الجماعي', 'svc-1-f2': 'حزم مخصصة حسب نوع الشقة',
    'svc-1-f3': 'تخطيط تسليم منسق', 'svc-1-f4': 'دعم فريق التركيب',
    'svc-2-title': 'المباني الإدارية للمصانع',
    'svc-2-desc': 'نقدم حلول أثاث متينة وعملية وتمثيلية للأقسام الإدارية في منشآت الإنتاج.',
    'svc-2-f1': 'أثاث مكتبي للمدراء والموظفين', 'svc-2-f2': 'قاعات الاجتماعات والمؤتمرات',
    'svc-2-f3': 'مناطق الاستقبال والردهة', 'svc-2-f4': 'المطعم والمناطق الاجتماعية',
    'svc-3-title': 'مشاريع الفنادق',
    'svc-3-desc': 'ننتج أثاث غرف الفنادق والمناطق المشتركة بكل الأحجام، من الفنادق البوتيك إلى السلاسل.',
    'svc-3-f1': 'لوحات رأس السرير، الكونسول، طواقم الخزانة', 'svc-3-f2': 'أثاث الردهة والاستقبال',
    'svc-3-f3': 'مناطق المطعم والبار', 'svc-3-f4': 'الإنتاج الجماعي وإدارة التوريد',
    'svc-4-title': 'مشاريع المقاهي والمطاعم',
    'svc-4-desc': 'نخلق أجواء تعكس هوية علامتك التجارية وتجعل الضيوف يرغبون في العودة.',
    'svc-4-f1': 'مجموعات الطاولات والكراسي', 'svc-4-f2': 'منضدة وسطح البار',
    'svc-4-f3': 'أرفف الديكور وأنظمة العرض', 'svc-4-f4': 'تصميم خاص بالمفهوم',
    'svc-5-title': 'شراكات المعماريين ومصممي الداخل',
    'svc-5-desc': 'التعاون مع المعماريين ومصممي الداخل أولوية بالنسبة لنا. ندمج ملفات التصميم مباشرة في عملية الإنتاج.',
    'svc-5-f1': 'توافق الرسم التقني مع التصنيع', 'svc-5-f2': 'إنتاج النماذج الأولية والعينات',
    'svc-5-f3': 'خيارات مواد وتشطيبات خاصة', 'svc-5-f4': 'تسعير على أساس المشروع',
    'svc-6-title': 'مشاريع الأثاث B2B',
    'svc-6-desc': 'نوفر طاقة إنتاجية منتظمة للموزعين وتجار الجملة والمشترين من الشركات.',
    'svc-6-f1': 'إنتاج بالعقد وOEM', 'svc-6-f2': 'إدارة الطلبات المنتظمة',
    'svc-6-f3': 'تغليف وتسمية مخصصة', 'svc-6-f4': 'دعم اللوجستيات والتصدير',
    'fsc-tag': 'الاستدامة', 'fsc-title': 'من الطبيعة، إلى الطبيعة',
    'fsc-desc': 'كل قطعة أثاث ننتجها باستخدام خشب معتمد من FSC هي جزء من هذه الدورة.',
    'fsc-l1': 'الغابة والشجرة', 'fsc-l2': 'الإنتاج', 'fsc-l3': 'مساحة المعيشة', 'fsc-l4': 'إعادة التدوير',
    'fsc-cert-title': 'إنتاج معتمد',
    'fsc-cert-text': 'جميع مواد الخشب التي نستخدمها مغطاة بـ<strong>شهادة FSC®</strong> التي توثق الإدارة المستدامة للغابات. تضمن هذه الشهادة أن قطع الأشجار يتم بشكل محكوم وأن التنوع البيولوجي محمي وأن حقوق المجتمعات المحلية محترمة.',
    'ref-hero-title': 'المشاريع المكتملة', 'ref-hero-desc': 'العلامات التجارية التي نثق بها وشركاء الحلول لدينا.',
    'ref-stat-1': 'مشروع مكتمل', 'ref-stat-2': 'مدينة تسليم', 'ref-stat-3': 'سنوات خبرة', 'ref-stat-4': '% رضا العملاء',
    'ref-page-tag': 'مراجعنا', 'ref-page-title': 'العلامات التي نثق بها', 'ref-page-desc': 'شركاء الحلول من قطاعات مختلفة.',
    'ref-cat-1': 'الصناعة والشركات', 'ref-cat-2': 'المؤسسات التعليمية', 'ref-cat-3': 'المقاهي والمطاعم',
    'ref-cta-tag': 'المشروع القادم', 'ref-cta-title': 'دعنا نضيف علامتك أيضاً',
    'ref-cta-desc': 'دعنا نقيّم احتياجات الأثاث لمشروعك معاً.', 'ref-cta-btn': 'احصل على عرض',
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

  // data-i18n attributes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // data-i18n-ph (placeholders)
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // Hardcoded selectors — elements without data-i18n
  const sel = (s) => document.querySelector(s);
  const all = (s) => document.querySelectorAll(s);

  // ── index.html ──
  _t('.hero-tag', t['hero-tag']);
  _t('.hero-title', t['hero-title']);
  _t('.hero-desc', t['hero-desc']);
  _t('.hero-scroll span', t['hero-scroll']);
  _tAll('.stat-label', [t['stat-1'], t['stat-2'], t['stat-3'], t['stat-4']]);

  // About section
  _tSel('.about-content .section-tag', t['about-tag']);
  _tSel('.about-content .section-title', t['about-title']);
  const aboutTexts = document.querySelectorAll('.about-content .about-text');
  if (aboutTexts[0]) aboutTexts[0].innerHTML = t['about-p1'] || aboutTexts[0].innerHTML;
  if (aboutTexts[1]) aboutTexts[1].innerHTML = t['about-p2'] || aboutTexts[1].innerHTML;
  const aboutFeats = document.querySelectorAll('.about-features li');
  if (aboutFeats[0]) aboutFeats[0].innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>${t['about-f1']||''}`;
  if (aboutFeats[1]) aboutFeats[1].innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>${t['about-f2']||''}`;
  if (aboutFeats[2]) aboutFeats[2].innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>${t['about-f3']||''}`;
  if (aboutFeats[3]) aboutFeats[3].innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>${t['about-f4']||''}`;

  // Home services section
  _tSel('#hizmetler .section-tag', t['home-svc-tag']);
  _tSel('#hizmetler .section-title', t['home-svc-title']);
  _tSel('#hizmetler .section-desc', t['home-svc-desc']);
  const svcCards = document.querySelectorAll('.home-svc-card');
  const svcKeys = ['svc-toplu','svc-fabrika','svc-otel','svc-kafe','svc-mimar','svc-b2b'];
  svcCards.forEach((card, i) => {
    const k = svcKeys[i];
    if (!k) return;
    const h3 = card.querySelector('h3');
    const p  = card.querySelector('p');
    const sp = card.querySelector('.home-svc-link');
    if (h3 && t[k+'-t']) h3.innerHTML = t[k+'-t'];
    if (p  && t[k+'-d']) p.innerHTML  = t[k+'-d'];
    if (sp && t['svc-click']) sp.innerHTML = t['svc-click'];
  });

  // Process section
  _tSel('.process .section-tag', t['proc-tag']);
  _tSel('.process .section-title', t['proc-title']);
  const steps = document.querySelectorAll('.process-step');
  [['proc-1-t','proc-1-d'],['proc-2-t','proc-2-d'],['proc-3-t','proc-3-d'],['proc-4-t','proc-4-d']].forEach(([tk,dk],i)=>{
    if (!steps[i]) return;
    const h3 = steps[i].querySelector('h3');
    const p  = steps[i].querySelector('p');
    if (h3 && t[tk]) h3.innerHTML = t[tk];
    if (p  && t[dk]) p.innerHTML  = t[dk];
  });

  // Gallery
  _tSel('.gallery .section-tag', t['gal-tag']);
  _tSel('.gallery .section-title', t['gal-title']);
  _tSel('.gallery .section-desc', t['gal-desc']);

  // Instagram
  _tSel('.instagram .section-desc', t['ig-desc']);
  _tSel('.instagram-cta .btn', t['ig-btn'] ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>${t['ig-btn']}` : null);

  // Features bar
  const feats = document.querySelectorAll('.feature div');
  [['feat-1-t','feat-1-d'],['feat-2-t','feat-2-d'],['feat-3-t','feat-3-d'],['feat-4-t','feat-4-d']].forEach(([tk,dk],i)=>{
    if (!feats[i]) return;
    const strong = feats[i].querySelector('strong');
    const span   = feats[i].querySelector('span');
    if (strong && t[tk]) strong.innerHTML = t[tk];
    if (span   && t[dk]) span.innerHTML   = t[dk];
  });

  // Contact (index.html inline)
  _tSel('#iletisim .section-tag', t['ct-tag']);
  _tSel('#iletisim .section-title', t['ct-title']);
  _tSel('#iletisim .contact-desc', t['ct-desc']);
  const ctDets = document.querySelectorAll('#iletisim .contact-details strong');
  if (ctDets[0]) ctDets[0].innerHTML = t['ct-phone']||ctDets[0].innerHTML;
  if (ctDets[1]) ctDets[1].innerHTML = t['ct-email']||ctDets[1].innerHTML;
  if (ctDets[2]) ctDets[2].innerHTML = t['ct-address']||ctDets[2].innerHTML;
  if (ctDets[4]) ctDets[4].innerHTML = t['ct-hours']||ctDets[4].innerHTML;
  const ctHours = document.querySelectorAll('#iletisim .contact-details span');
  ctHours.forEach(s => { if (s.textContent.includes('Pzt') || s.textContent.includes('Mon') || s.textContent.includes('الإثنين')) s.innerHTML = t['ct-hours-val']||s.innerHTML; });

  // Form labels (index)
  _tSel('#iletisim label[for="name"]', t['form-name']);
  _tSel('#iletisim label[for="email"]', t['ct-email']);
  _tSel('#iletisim label[for="phone"]', t['form-phone']);
  _tSel('#iletisim label[for="category"]', t['form-cat']);
  _tSel('#iletisim label[for="message"]', t['form-msg']);
  _tSel('#iletisim button[type="submit"]', t['form-submit']);
  _tSel('#formSuccess', t['form-success-msg']);
  const catOpts = document.querySelectorAll('#iletisim #category option');
  if (catOpts[0] && t['form-cat-0']) catOpts[0].innerHTML = t['form-cat-0'];

  // Footer (index)
  _tSel('.footer-brand p', t['footer-desc']);
  _tSel('.footer-bottom p', t['footer-copy']);

  // ── kurumsal.html ──
  _tSel('.about-content .section-tag:not([data-i18n])', t['about-tag']);
  _tSel('.about-content h2.section-title', t['corp-about-title']);
  const corpTexts = document.querySelectorAll('.about-content .about-text');
  if (corpTexts[0]) corpTexts[0].innerHTML = t['corp-about-p1']||corpTexts[0].innerHTML;
  if (corpTexts[1]) corpTexts[1].innerHTML = t['corp-about-p2']||corpTexts[1].innerHTML;
  if (corpTexts[2]) corpTexts[2].innerHTML = t['corp-about-p3']||corpTexts[2].innerHTML;
  if (corpTexts[3]) corpTexts[3].innerHTML = t['corp-about-p4']||corpTexts[3].innerHTML;

  const corpBlocks = document.querySelectorAll('.corp-text-block p');
  if (corpBlocks[0]) corpBlocks[0].innerHTML = t['corp-block-1']||corpBlocks[0].innerHTML;
  if (corpBlocks[1]) corpBlocks[1].innerHTML = t['corp-block-2']||corpBlocks[1].innerHTML;
  if (corpBlocks[2]) corpBlocks[2].innerHTML = t['corp-block-3']||corpBlocks[2].innerHTML;
  _tSel('.corp-highlight p', t['corp-highlight'] ? t['corp-highlight'] : null);

  const mvvCards = document.querySelectorAll('.mvv-full-card');
  if (mvvCards[0]) {
    const h3 = mvvCards[0].querySelector('h3');
    if (h3) h3.innerHTML = t['corp-mission-t']||h3.innerHTML;
    const lis = mvvCards[0].querySelectorAll('.mvv-list li');
    ['corp-m1','corp-m2','corp-m3','corp-m4'].forEach((k,i)=>{ if(lis[i]&&t[k]) lis[i].innerHTML=t[k]; });
  }
  if (mvvCards[1]) {
    const h3 = mvvCards[1].querySelector('h3');
    if (h3) h3.innerHTML = t['corp-vision-t']||h3.innerHTML;
    const lis = mvvCards[1].querySelectorAll('.mvv-list li');
    ['corp-v1','corp-v2','corp-v3','corp-v4'].forEach((k,i)=>{ if(lis[i]&&t[k]) lis[i].innerHTML=t[k]; });
  }

  // ── hizmetlerimiz.html ──
  _tSel('.services-list + * .section-tag, .section .section-header .section-tag', t['svc-tag']);
  const svcItems = document.querySelectorAll('.service-body');
  const svcData = [
    ['svc-1-title','svc-1-desc','svc-1-f1','svc-1-f2','svc-1-f3','svc-1-f4'],
    ['svc-2-title','svc-2-desc','svc-2-f1','svc-2-f2','svc-2-f3','svc-2-f4'],
    ['svc-3-title','svc-3-desc','svc-3-f1','svc-3-f2','svc-3-f3','svc-3-f4'],
    ['svc-4-title','svc-4-desc','svc-4-f1','svc-4-f2','svc-4-f3','svc-4-f4'],
    ['svc-5-title','svc-5-desc','svc-5-f1','svc-5-f2','svc-5-f3','svc-5-f4'],
    ['svc-6-title','svc-6-desc','svc-6-f1','svc-6-f2','svc-6-f3','svc-6-f4'],
  ];
  svcItems.forEach((body, i) => {
    if (!svcData[i]) return;
    const [tk,dk,f1,f2,f3,f4] = svcData[i];
    const h3 = body.querySelector('h3');
    const p  = body.querySelector('p');
    const btn = body.querySelector('.btn');
    const lis = body.querySelectorAll('.service-features li');
    if (h3 && t[tk]) h3.innerHTML = t[tk];
    if (p  && t[dk]) p.innerHTML  = t[dk];
    if (btn && t['svc-cta']) btn.innerHTML = t['svc-cta'];
    if (lis[0] && t[f1]) lis[0].innerHTML = t[f1];
    if (lis[1] && t[f2]) lis[1].innerHTML = t[f2];
    if (lis[2] && t[f3]) lis[2].innerHTML = t[f3];
    if (lis[3] && t[f4]) lis[3].innerHTML = t[f4];
  });

  // FSC
  _tSel('.fsc-section .section-tag', t['fsc-tag']);
  _tSel('.fsc-section .section-title', t['fsc-title']);
  _tSel('.fsc-section .section-desc', t['fsc-desc']);
  _tSel('.fsc-cert-title', t['fsc-cert-title']);
  _tSel('.fsc-cert-text', t['fsc-cert-text']);
  const fscLabels = document.querySelectorAll('.fsc-label');
  ['fsc-l1','fsc-l2','fsc-l3','fsc-l4'].forEach((k,i)=>{ if(fscLabels[i]&&t[k]) fscLabels[i].innerHTML=t[k]; });

  // ── referanslar.html ──
  _tSel('.ref-category:nth-child(1) .ref-category-header h3', t['ref-cat-1']);
  _tSel('.ref-category:nth-child(2) .ref-category-header h3', t['ref-cat-2']);
  _tSel('.ref-category:nth-child(3) .ref-category-header h3', t['ref-cat-3']);
  _tSel('.ref-category + .section .section-tag, section[style*="cream"] .section-tag', t['ref-cta-tag']);
  _tSel('section[style*="cream"] .section-title', t['ref-cta-title']);
  _tSel('section[style*="cream"] p', t['ref-cta-desc']);
  _tSel('section[style*="cream"] .btn', t['ref-cta-btn']);

  // ── iletisim.html (standalone page) ──
  _tSel('.contact-info .section-tag', t['ct-tag']);
  _tSel('.contact-info .section-title', t['ct-title']);
  _tSel('.contact-info .contact-desc', t['ct-desc']);
  const pgDets = document.querySelectorAll('.contact-details strong');
  if (pgDets[0]) pgDets[0].innerHTML = t['ct-phone']||pgDets[0].innerHTML;
  if (pgDets[1]) pgDets[1].innerHTML = t['ct-email']||pgDets[1].innerHTML;
  if (pgDets[2]) pgDets[2].innerHTML = t['ct-address']||pgDets[2].innerHTML;
  if (pgDets[4]) pgDets[4].innerHTML = t['ct-hours']||pgDets[4].innerHTML;
}

// Helper functions
function _t(selector, value) {
  if (!value) return;
  const el = document.querySelector(selector);
  if (el) el.innerHTML = value;
}
function _tSel(selector, value) {
  if (!value) return;
  const el = document.querySelector(selector);
  if (el) el.innerHTML = value;
}
function _tAll(selector, values) {
  const els = document.querySelectorAll(selector);
  els.forEach((el, i) => { if (values[i] !== undefined) el.innerHTML = values[i]; });
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
