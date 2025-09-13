// Translation dictionaries for English and Arabic
const translations = {
  en: {
    nav_coaches: 'Coaches',
    nav_athletes: 'Athletes',
    nav_achievements: 'Achievements',
    nav_membership: 'Membership',
    nav_about: 'About',
    nav_programs: 'Programs',
    nav_schedule: 'Schedule',
    nav_contact: 'Contact',
    hero_title: 'Empower Your Journey',
    hero_subtitle: 'Join the premier Brazilian Jiu‑Jitsu & Wrestling academy in Kuwait.',
    hero_join: 'Join Now',
    coaches_title: 'Our Coaches',
    coach1_name: 'Coach 1',
    coach1_rank: 'Black Belt',
    coach1_specialization: 'Brazilian Jiu‑Jitsu',
    coach1_bio: 'Experienced coach specialized in Gi and No‑Gi training.',
    coach2_name: 'Coach 2',
    coach2_rank: 'National Champion',
    coach2_specialization: 'Wrestling',
    coach2_bio: 'Former national competitor dedicated to teaching fundamentals.',
    coach3_name: 'Coach Ahmed',
    coach3_rank: 'Brown Belt',
    coach3_specialization: 'Brazilian Jiu‑Jitsu',
    coach3_bio: 'Technical wizard focused on sweeps and submissions.',
    coach4_name: 'Coach 4',
    coach4_rank: 'Purple Belt',
    coach4_specialization: 'Self‑Defense',
    coach4_bio: 'Passionate about empowering women and kids through self‑defense.',
    athletes_title: 'Our Athletes',
    athlete1_name: 'Athlete 1',
    athlete1_category: 'Adult – 77 kg',
    athlete1_achievements: 'Gold Medalist – Kuwait Open 2025',
    athlete2_name: 'Athlete 2',
    athlete2_category: 'Youth – 63 kg',
    athlete2_achievements: 'Silver Medalist – GCC Championship 2024',
    athlete3_name: 'Athlete Khalid',
    athlete3_category: 'Adult – 85 kg',
    athlete3_achievements: 'Bronze Medalist – Kuwaiti Nationals 2025',
    athlete4_name: 'Athlete 4',
    athlete4_category: 'Youth – 57 kg',
    athlete4_achievements: 'Champion – Women’s League 2024',
    achievements_title: 'Club Achievements',
    achievement1_date: 'April 2025',
    achievement1_desc: 'Won 5 gold medals at the Kuwait National BJJ Championship.',
    achievement2_date: 'December 2024',
    achievement2_desc: 'Team placed 1st at the GCC Wrestling Championship.',
    achievement3_date: 'June 2024',
    achievement3_desc: 'Captured 3 medals at the Abu Dhabi International Pro.',
    membership_title: 'Membership Plans',
    membership_bjj_title: 'BJJ Jiu‑Jitsu',
    membership_bjj_price: '65 KWD / month',
    membership_bjj_desc: 'Unlimited classes, Gi & No‑Gi training.',
    membership_wrestling_title: 'Wrestling',
    membership_wrestling_price: '65 KWD / month',
    membership_wrestling_desc: 'Professional wrestling training and conditioning.',
    membership_join_btn: 'Join Now'
    ,about_title: 'About Us'
    ,about_text: 'Triangle BJJ is more than just a gym – it’s a community. Our academy fosters discipline, respect and mental toughness through Brazilian Jiu‑Jitsu and wrestling. Whether you’re a complete beginner or a seasoned competitor, you’ll find world‑class coaching and a supportive team to help you grow.'
    ,programs_title: 'Our Programs'
    ,program_kids_title: 'Kids Jiu‑Jitsu'
    ,program_kids_desc: 'Fun and engaging classes designed to build confidence and coordination in young athletes.'
    ,program_adult_title: 'Adult Jiu‑Jitsu'
    ,program_adult_desc: 'Structured Gi and No‑Gi classes for all skill levels focusing on technique, fitness and strategy.'
    ,program_wrestling_title: 'Wrestling'
    ,program_wrestling_desc: 'Traditional and freestyle wrestling sessions to develop explosive takedowns and mat control.'
    ,program_selfdefense_title: 'Self‑Defense'
    ,program_selfdefense_desc: 'Practical self‑defense courses focused on real‑world applications and personal safety.'
    ,schedule_title: 'Training Schedule'
    ,schedule_day: 'Day'
    ,schedule_time: 'Time'
    ,schedule_class: 'Class'
    ,monday: 'Monday'
    ,monday_class: 'BJJ (Gi)'
    ,tuesday: 'Tuesday'
    ,tuesday_class: 'Wrestling'
    ,wednesday: 'Wednesday'
    ,wednesday_class: 'BJJ (No‑Gi)'
    ,thursday: 'Thursday'
    ,thursday_class: 'Open Mat'
    ,friday: 'Friday'
    ,friday_class: 'Kids Jiu‑Jitsu'
    ,sunday: 'Sunday'
    ,saturday: 'Saturday'
    ,kids_bjj: 'Kids BJJ'
    ,beginner_bjj: 'Beginner BJJ'
    ,advanced_bjj: 'Advanced BJJ'
    ,all_levels_bjj: 'All Levels (BJJ)'
    ,wrestling_class: 'Wrestling'
    ,off_class: 'Off'
    ,contact_title: 'Contact Us'
    ,contact_address: 'Al Farwaniya, Kuwait'
    ,contact_phone: 'Phone: +965 XXX XXXX'
    ,contact_email: 'Email: info@trianglebjj.com'
  },
  ar: {
    nav_coaches: 'المدربين',
    nav_athletes: 'الرياضيين',
    nav_achievements: 'الإنجازات',
    nav_membership: 'الاشتراك',
    nav_about: 'نبذة',
    nav_programs: 'البرامج',
    nav_schedule: 'الجدول',
    nav_contact: 'اتصال',
    hero_title: 'طور رحلتك',
    hero_subtitle: 'انضم إلى أفضل أكاديمية للجيو جيتسو البرازيلي والمصارعة في الكويت.',
    hero_join: 'انضم الآن',
    coaches_title: 'مدربونا',
    coach1_name: 'المدرب 1',
    coach1_rank: 'حزام أسود',
    coach1_specialization: 'الجيو جيتسو البرازيلي',
    coach1_bio: 'مدرب ذو خبرة متخصص في تدريبات البدلة ولا بدلة.',
    coach2_name: 'المدرب 2',
    coach2_rank: 'بطل وطني',
    coach2_specialization: 'المصارعة',
    coach2_bio: 'متسابق وطني سابق مكرس لتعليم الأساسيات.',
    coach3_name: 'المدرب أحمد',
    coach3_rank: 'حزام بني',
    coach3_specialization: 'الجيو جيتسو البرازيلي',
    coach3_bio: 'خبير تقني يركز على الإزاحات وحركات الإنهاء.',
    coach4_name: 'المدرب 4',
    coach4_rank: 'حزام بنفسجي',
    coach4_specialization: 'الدفاع عن النفس',
    coach4_bio: 'شغوفة بتمكين النساء والأطفال من خلال الدفاع عن النفس.',
    athletes_title: 'رياضيونا',
    athlete1_name: 'الرياضي 1',
    athlete1_category: 'كبار – ٧٧ كجم',
    athlete1_achievements: 'حاصل على الميدالية الذهبية – بطولة الكويت المفتوحة ٢٠٢٥',
    athlete2_name: 'الرياضي 2',
    athlete2_category: 'شباب – ٦٣ كجم',
    athlete2_achievements: 'حاصل على الميدالية الفضية – بطولة دول مجلس التعاون ٢٠٢٤',
    athlete3_name: 'الرياضي خالد',
    athlete3_category: 'كبار – ٨٥ كجم',
    athlete3_achievements: 'حاصل على الميدالية البرونزية – البطولة الوطنية الكويتية ٢٠٢٥',
    athlete4_name: 'الرياضي 4',
    athlete4_category: 'شباب – ٥٧ كجم',
    athlete4_achievements: 'بطلة – دوري السيدات ٢٠٢٤',
    achievements_title: 'إنجازات النادي',
    achievement1_date: 'أبريل ٢٠٢٥',
    achievement1_desc: 'فاز بخمس ميداليات ذهبية في البطولة الوطنية للجيو جيتسو بالكويت.',
    achievement2_date: 'ديسمبر ٢٠٢٤',
    achievement2_desc: 'احتل الفريق المركز الأول في بطولة دول مجلس التعاون للمصارعة.',
    achievement3_date: 'يونيو ٢٠٢٤',
    achievement3_desc: 'حصل الفريق على ثلاث ميداليات في بطولة أبوظبي الدولية للمحترفين.',
    membership_title: 'خطط الاشتراك',
    membership_bjj_title: 'الجيو جيتسو',
    membership_bjj_price: '٦٥ دينار كويتي / شهر',
    membership_bjj_desc: 'حصص غير محدودة، تدريب بالبدلة وبدون بدلة.',
    membership_wrestling_title: 'المصارعة',
    membership_wrestling_price: '٦٥ دينار كويتي / شهر',
    membership_wrestling_desc: 'تدريب احترافي للمصارعة وتحسين اللياقة.',
    membership_join_btn: 'اشترك الآن'
    ,about_title: 'نبذة عنا'
    ,about_text: 'تريانغل بي جي جي ليست مجرد صالة رياضية — إنها مجتمع. يعزز النادي الانضباط والاحترام والصلابة العقلية من خلال الجيو جيتسو البرازيلي والمصارعة. سواء كنت مبتدئًا بالكامل أو منافسًا متمرسًا، ستجد تدريبًا عالي المستوى وفريقًا داعمًا لمساعدتك على النمو.'
    ,programs_title: 'برامجنا'
    ,program_kids_title: 'جيو جيتسو للأطفال'
    ,program_kids_desc: 'حصص ممتعة ومشوقة مصممة لبناء الثقة والتنسيق لدى الأطفال.'
    ,program_adult_title: 'جيو جيتسو للكبار'
    ,program_adult_desc: 'حصص منظمة بالبدلة وبدون بدلة لجميع المستويات تركز على التقنية واللياقة والاستراتيجية.'
    ,program_wrestling_title: 'المصارعة'
    ,program_wrestling_desc: 'جلسات مصارعة تقليدية وحرة لتطوير عمليات الإطاحة والسيطرة على البساط.'
    ,program_selfdefense_title: 'الدفاع عن النفس'
    ,program_selfdefense_desc: 'دورات عملية للدفاع عن النفس تركز على تطبيقات العالم الحقيقي والسلامة الشخصية.'
    ,schedule_title: 'جدول التدريبات'
    ,schedule_day: 'اليوم'
    ,schedule_time: 'الوقت'
    ,schedule_class: 'الفئة'
    ,monday: 'الاثنين'
    ,monday_class: 'الجيو جيتسو (بدلة)'
    ,tuesday: 'الثلاثاء'
    ,tuesday_class: 'المصارعة'
    ,wednesday: 'الأربعاء'
    ,wednesday_class: 'الجيو جيتسو (بدون بدلة)'
    ,thursday: 'الخميس'
    ,thursday_class: 'حصص مفتوحة'
    ,friday: 'الجمعة'
    ,friday_class: 'جيو جيتسو للأطفال'
    ,sunday: 'الأحد'
    ,saturday: 'السبت'
    ,kids_bjj: 'جيو جيتسو للأطفال'
    ,beginner_bjj: 'جيو جيتسو للمبتدئين'
    ,advanced_bjj: 'جيو جيتسو المتقدم'
    ,all_levels_bjj: 'جميع المستويات (جيو جيتسو)'
    ,wrestling_class: 'المصارعة'
    ,off_class: 'عطلة'
    ,contact_title: 'اتصل بنا'
    ,contact_address: 'الفروانية، الكويت'
    ,contact_phone: 'هاتف: +965 XXX XXXX'
    ,contact_email: 'البريد الإلكتروني: info@trianglebjj.com'
  }
};

// Initial language
let currentLang = 'en';

/**
 * Update all elements that have a data-i18n attribute with the correct
 * translation for the current language.
 */
function updateLanguage() {
  const isArabic = currentLang === 'ar';
  // Set HTML attributes for language and direction
  document.documentElement.lang = currentLang;
  document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  // Apply class to body to switch fonts
  document.body.classList.toggle('arabic', isArabic);
  // Update toggle button text to show other language abbreviation
  const langToggle = document.getElementById('lang-toggle');
  langToggle.textContent = isArabic ? 'EN' : 'AR';
  // Iterate over all translatable elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = translations[currentLang][key];
    if (translation) {
      el.textContent = translation;
    }
  });
}

// Toggle language when user clicks the language button
document.getElementById('lang-toggle').addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  updateLanguage();
});

// Mobile navigation toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// Run initial language update on load
updateLanguage();

// Fade out preloader after window load
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  // Wait a short moment to allow the logo animation to play
  setTimeout(() => {
    preloader.classList.add('fade-out');
    // Remove the preloader from the DOM after the transition completes
    setTimeout(() => {
      if (preloader && preloader.parentNode) {
        preloader.parentNode.removeChild(preloader);
      }
    }, 1000);
  }, 1500);
});