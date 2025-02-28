"use client";
import React, { useState, useEffect, createContext, useContext } from 'react';
import Imagesslider from './image';
// Define language context
interface LanguageContextProps {
    language: string;
    setLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextProps>({
    language: 'ar', // Default language
    setLanguage: () => {},
});

// Language Provider Component
interface LanguageProviderProps {
    children: React.ReactNode;
}

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState<string>('ar');

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Translation Hook
const useTranslations = () => {
    const { language } = useContext(LanguageContext);

    const translations: { [key: string]: { [key: string]: string } } = {
        en: {
            home: 'Home',
            experience: 'Experience',
            research: 'Research & Projects',
            volunteer: 'Volunteer',
            education: 'Education',
            skills: 'Skills',
            contact: 'Contact',
            taha_alhariri: 'Taha Alhariri',
            software_engineer: 'Full-Stack Software Engineer & AI Specialist',
            profile_description: 'Experienced software engineer with over 6 years in software and AI development. Published researcher with experience in applying AI in medical diagnostics. Holds a Master\'s degree in Biomedical Engineering and is pursuing a PhD. Specializes in developing web and mobile applications using cutting-edge technologies.',
            email: 'Email',
            phone: 'Phone',
            location: 'Location',
            view_more: 'View More',
            integrated_software_development: "Integrated Software Development",
            experience_in_teaching: "Teaching experience",
            ai_research: "Research in Artificial Intelligence",
            volunteer_activities: "Volunteer Activities",
            professional_experience: "Professional Experience",
            full_stack_developer: "Full-Stack Developer",
            company_al_mashhad: "Al Mashhad Al Aniqa Company",
            dubai_uae: "Dubai, United Arab Emirates",
            present: "Present",
            responsibilities: "Responsibilities",
            team_leader: "Team Leader",
            tech_entrepreneurs: "Tech Entrepreneurs Community",
            karabuk_turkey: "Karabuk, Turkey",
            instructor: "Instructor",
            deneyap_foundation: "Deneyap Foundation",
            university_courses_teacher: "University Courses Teacher",
            nerds_academy: "Nerds Academy",
            mobile_developer: "Mobile Developer",
            meslife_company: "MesLife Company",
            stockholm_sweden: "Stockholm, Sweden",
            tweetcode_platform: "TweetCode Platform for Youth Programming Education",
            co_founder: "Co-Founder and Academic Director",
            back_end_developer: "Back-End Developer and Data Analyst",
            algotrade_company: "AlgoTrade Company",
            ottawa_canada: "Ottawa, Canada",
            master_thesis: "Master's Thesis: Detection of Certain Diseases and Estimation of Blood Components via PPG Signal Using Artificial Intelligence",
            karabuk_university: "Karabuk University, Turkey",
            scientific_research: "Scientific Research: Estimating Ring Size Through Hand Images",
            efes_conference: "EFES International Conference on Scientific Research and Innovation, Izmir, Turkey",
            python_for_youth: "Python Programming for Youth",
            tweetcode_platform_ankara: "TweetCode Platform for Youth Programming Education, Ankara, Turkey",
            third_prize: "Third Prize: Project for Extracting PPG Signals from Mobile Phone Cameras",
            ytp_presidency: "YTP Presidency for Turks Abroad and Related Communities, Ankara, Turkey",
            phd_biomedical_engineering: "PhD in Biomedical Engineering",
            masters_biomedical_engineering: "Master's in Biomedical Engineering",
            bachelor_biomedical_engineering: "Bachelor's in Biomedical Engineering",
            bachelor_medical_engineering: "Bachelor's in Medical Engineering",
            web_development: "Web Development",
            mobile_development: "Mobile Development",
            programming_languages: "Programming Languages",
            databases: "Databases",
            ai_data_analysis: "AI and Data Analysis",
            tools_technologies: "Tools and Technologies",
            languages: "Languages",
            supporting_yks_exam: "Supporting the YKS Exam Application and Preparation for Syrian Students",
            ytp_presidency_karabuk: "YTP Presidency for Turks Abroad and Related Communities, Karabuk, Turkey",
            assisting_students: "Assisting new students in applying and preparing for the Higher Education Institutions Exam (YKS) for Syrian students.",
            contact_me: "Contact Me",
            contact_information: "Contact Information",
            email_address: "Email Address",
            phone_number: "Phone Number",
            send_a_message: "Send a Message",
            name: "Name",
            subject: "Subject",
            message: "Message",
            send: "Send",
            profile: "Profile",
            technical_skills: "Technical Skills",
            all_rights_reserved: "All Rights Reserved",
            developed_software: "Developed Software Solutions for the company's operations including customer and employee management, appointment scheduling and booking systems.",
            managing_teams: "Managing teams participating in Techno Fest competitions and providing scientific support.",
            teaching_programming: "Teaching programming and technology topics to middle and high school students in Turkey.",
            creating_ecommerce_sites: "Creating e-commerce sites for customers, including custom programming solutions for e-commerce systems.",
            developing_ai_tools: "Developing tools using generative AI to enhance hair transplant services and increase potential customers.",
            applying_ai: "Developing custom generative AI models according to company requirements using Python, Docker, Azure, Google Cloud, TensorFlow, and OpenCV.",
            measuring_ppg_signals: "Developing methods to measure PPG signals via red and infrared light sensors found in mobile phones and smartwatches.",
            estimating_ring_size: "Developing an innovative method using computer vision to measure ring size for e-commerce applications.",
            comprehensive_educational_book: "A comprehensive educational book consisting of 9 levels, each containing 4 units.",
            location_text: "Karabuk, Turkey",
            first_year_student: "First year student, completed coursework with a grade point average of 4.0/4.0.",
            graduated_with_honors: "Graduated with honors with a grade of 3.93.",
            first_in_major: "First in the major and first in the Faculty of Engineering.",
            native_language: "Native Language",
            fluent: "Fluent",
            intermediate: "Intermediate",
            send_message: "Send Message",
        },
        tr: {
            home: 'Anasayfa',
            experience: 'Deneyim',
            research: 'Araştırma & Projeler',
            volunteer: 'Gönüllülük',
            education: 'Eğitim',
            skills: 'Yetenekler',
            contact: 'İletişim',
            taha_alhariri: 'Taha Alhariri',
            software_engineer: 'Full-Stack Yazılım Mühendisi & AI Uzmanı',
            profile_description: 'Yazılım ve yapay zeka geliştirmede 6 yılı aşkın deneyime sahip deneyimli yazılım mühendisi. Tıbbi teşhis alanında yapay zeka uygulamaları konusunda deneyimli yayınlanmış araştırmacı. Biyomedikal Mühendisliği alanında Yüksek Lisans derecesine sahip ve Doktora programına devam etmektedir. En son teknolojileri kullanarak web ve mobil uygulama geliştirme konusunda uzmanlaşmıştır.',
            email: 'E-posta',
            phone: 'Telefon',
            location: 'Konum',
            view_more: 'Daha Fazla Görüntüle',
            integrated_software_development: "Entegre Yazılım Geliştirme",
            experience_in_teaching: "Öğretim deneyimi",
            ai_research: "Yapay Zeka Araştırması",
            volunteer_activities: "Gönüllü Aktiviteler",
            professional_experience: "Profesyonel Deneyim",
            full_stack_developer: "Full-Stack Geliştirici",
            company_al_mashhad: "Al Mashhad Al Aniqa Şirketi",
            dubai_uae: "Dubai, Birleşik Arap Emirlikleri",
            present: "Şu Anda",
            responsibilities: "Sorumluluklar",
            team_leader: "Takım Lideri",
            tech_entrepreneurs: "Teknoloji Girişimcileri Topluluğu",
            karabuk_turkey: "Karabük, Türkiye",
            instructor: "Eğitmen",
            deneyap_foundation: "Deneyap Vakfı",
            university_courses_teacher: "Üniversite Dersleri Öğretmeni",
            nerds_academy: "Nerds Akademisi",
            mobile_developer: "Mobil Geliştirici",
            meslife_company: "MesLife Şirketi",
            stockholm_sweden: "Stockholm, İsveç",
            tweetcode_platform: "Gençler için TweetCode Programlama Eğitim Platformu",
            co_founder: "Kurucu Ortak ve Akademik Direktör",
            back_end_developer: "Arka Uç Geliştirici ve Veri Analisti",
            algotrade_company: "AlgoTrade Şirketi",
            ottawa_canada: "Ottawa, Kanada",
            master_thesis: "Yüksek Lisans Tezi: Yapay Zeka Kullanarak PPG Sinyali Aracılığıyla Bazı Hastalıkların Tespiti ve Kan Bileşenlerinin Tahmini",
            karabuk_university: "Karabük Üniversitesi, Türkiye",
            scientific_research: "Bilimsel Araştırma: El Görüntüleri Aracılığıyla Yüzük Boyutunu Tahmin Etme",
            efes_conference: "EFES Uluslararası Bilimsel Araştırma ve İnovasyon Konferansı, İzmir, Türkiye",
            python_for_youth: "Gençler için Python Programlama",
            tweetcode_platform_ankara: "Gençler için TweetCode Programlama Eğitim Platformu, Ankara, Türkiye",
            third_prize: "Üçüncülük Ödülü: Cep Telefonu Kameralarından PPG Sinyallerini Çıkarma Projesi",
            ytp_presidency: "Yurt Dışı Türkler ve İlgili Topluluklar Başkanlığı, Ankara, Türkiye",
            phd_biomedical_engineering: "Biyomedikal Mühendisliği Doktorası",
            masters_biomedical_engineering: "Biyomedikal Mühendisliği Yüksek Lisansı",
            bachelor_biomedical_engineering: "Biyomedikal Mühendisliği Lisansı",
            bachelor_medical_engineering: "Tıp Mühendisliği Lisansı",
            web_development: "Web Geliştirme",
            mobile_development: "Mobil Geliştirme",
            programming_languages: "Programlama Dilleri",
            databases: "Veritabanları",
            ai_data_analysis: "YZ ve Veri Analizi",
            tools_technologies: "Araçlar ve Teknolojiler",
            languages: "Diller",
            supporting_yks_exam: "Suriyeli Öğrenciler için YKS Sınavı Başvurusu ve Hazırlığına Destek",
            ytp_presidency_karabuk: "Yurt Dışı Türkler ve İlgili Topluluklar Başkanlığı, Karabük, Türkiye",
            assisting_students: "Yeni öğrencilere Suriyeli öğrenciler için Yükseköğretim Kurumları Sınavı'na (YKS) başvurma ve hazırlanma konusunda yardımcı olma.",
            contact_me: "Bana Ulaşın",
            contact_information: "İletişim Bilgileri",
            email_address: "E-posta Adresi",
            phone_number: "Telefon Numarası",
            send_a_message: "Mesaj Gönder",
            name: "Ad",
            subject: "Konu",
            message: "Mesaj",
            send: "Gönder",
            profile: "Profil",
            technical_skills: "Teknik Beceriler",
            all_rights_reserved: "Tüm Hakları Saklıdır",
            developed_software: "Müşteri ve çalışan yönetimi, randevu planlama ve rezervasyon sistemleri dahil olmak üzere şirketin operasyonları için geliştirilen yazılım çözümleri.",
            managing_teams: "Techno Fest yarışmalarına katılan ve bilimsel destek sağlayan ekipleri yönetme.",
            teaching_programming: "Türkiye'deki ortaokul ve lise öğrencilerine programlama ve teknoloji konularını öğretme.",
            creating_ecommerce_sites: "E-ticaret sistemleri için özel programlama çözümleri de dahil olmak üzere müşteriler için e-ticaret siteleri oluşturma.",
            developing_ai_tools: "Saç ekimi hizmetlerini geliştirmek ve potansiyel müşterileri artırmak için üretken yapay zeka kullanan araçlar geliştirme.",
            applying_ai: "Python, Docker, Azure, Google Cloud, TensorFlow ve OpenCV kullanarak şirket gereksinimlerine göre özel üretken yapay zeka modelleri geliştirme.",
            measuring_ppg_signals: "Cep telefonlarında ve akıllı saatlerde bulunan kırmızı ve kızılötesi ışık sensörleri aracılığıyla PPG sinyallerini ölçme yöntemleri geliştirme.",
            estimating_ring_size: "E-ticaret uygulamaları için yüzük boyutunu ölçmek üzere bilgisayar görüşünü kullanan yenilikçi bir yöntem geliştirme.",
            comprehensive_educational_book: "Her biri 4 ünite içeren 9 seviyeden oluşan kapsamlı bir eğitim kitabı.",
            location_text: "Karabük, Türkiye",
            first_year_student: "Birinci sınıf öğrencisi, dersleri 4.0/4.0 not ortalamasıyla tamamladı.",
            graduated_with_honors: "3.93 not ortalamasıyla onur derecesiyle mezun oldu.",
            first_in_major: "Bölümde birinci ve Mühendislik Fakültesi'nde birinci.",
            native_language: "Anadil",
            fluent: "Akıcı",
            intermediate: "Orta seviye",
            send_message: "Mesaj Gönder",
        },
        ar: {
            home: 'الرئيسية',
            experience: 'الخبرات',
            research: 'الأبحاث والمشاريع',
            volunteer: 'التطوع',
            education: 'التعليم',
            skills: 'المهارات',
            contact: 'التواصل',
            taha_alhariri: 'طه الحريري',
            software_engineer: 'مطور برمجيات متكامل ومتخصص بالذكاء الاصطناعي',
            profile_description: 'خبير برمجيات ذو خبرة تزيد عن 6 سنوات في تطوير البرمجيات وتطبيقات الذكاء الاصطناعي. باحث منشور مع خبرة في تطبيق الذكاء الاصطناعي في مجال التشخيص الطبي. حاصل على درجة الماجستير في الهندسة الطبية الحيوية وملتحق حالياً ببرنامج الدكتوراه. متخصص في تطوير تطبيقات الويب والموبايل باستخدام أحدث التقنيات.',
            email: 'البريد الإلكتروني',
            phone: 'الهاتف',
            location: 'الموقع',
            view_more: 'عرض المزيد',
            integrated_software_development: "تطوير برمجيات متكامل",
            experience_in_teaching: "خبرة في التدريس",
            ai_research: "أبحاث في الذكاء الاصطناعي",
            volunteer_activities: "الأعمال التطوعية",
            professional_experience: "الخبرات المهنية",
            full_stack_developer: "مطور برمجيات متكامل",
            company_al_mashhad: "شركة المشهد الأنيق",
            dubai_uae: "دبي، الإمارات العربية المتحدة",
            present: "حتى الآن",
            responsibilities: "المسؤوليات",
            team_leader: "مدير فريق",
            tech_entrepreneurs: "مجتمع رواد الأعمال التقنيين",
            karabuk_turkey: "كارابوك، تركيا",
            instructor: "مدرس",
            deneyap_foundation: "مؤسسة Deneyap",
            university_courses_teacher: "مدرس دورات جامعية",
            nerds_academy: "أكاديمية Nerds",
            mobile_developer: "مطور تطبيقات موبايل",
            meslife_company: "شركة MesLife",
            stockholm_sweden: "ستوكهولم، السويد",
            tweetcode_platform: "منصة TweetCode لتعليم البرمجة للشباب",
            co_founder: "مؤسس مشارك ومدير أكاديمي",
            back_end_developer: "مطور خلفي ومحلل بيانات",
            algotrade_company: "شركة AlgoTrade",
            ottawa_canada: "أوتاوا، كندا",
            master_thesis: "رسالة الماجستير: الكشف عن بعض الأمراض وتقدير مكونات الدم عبر إشارة PPG باستخدام الذكاء الاصطناعي",
            karabuk_university: "جامعة كارابوك، تركيا",
            scientific_research: "بحث علمي: تقدير مقاس الخاتم من خلال صور اليد",
            efes_conference: "مؤتمر EFES الدولي للبحث العلمي والابتكار، إزمير، تركيا",
            python_for_youth: "برمجة Python للشباب",
            tweetcode_platform_ankara: "منصة TweetCode لتعليم البرمجة للشباب، أنقرة، تركيا",
            third_prize: "الجائزة الثالثة: مشروع استخراج إشارات PPG من كاميرات الهاتف المحمول",
            ytp_presidency: "رئاسة YTP للأتراك في الخارج والمجتمعات ذات الصلة، أنقرة، تركيا",
            phd_biomedical_engineering: "دكتوراه في الهندسة الطبية الحيوية",
            masters_biomedical_engineering: "ماجستير في الهندسة الطبية الحيوية",
            bachelor_biomedical_engineering: "بكالوريوس في الهندسة الطبية الحيوية",
            bachelor_medical_engineering: "بكالوريوس في الهندسة الطبية",
            web_development: "تطوير الويب",
            mobile_development: "تطوير الموبايل",
            programming_languages: "لغات البرمجة",
            databases: "قواعد البيانات",
            ai_data_analysis: "الذكاء الاصطناعي وتحليل البيانات",
            tools_technologies: "أدوات وتقنيات",
            languages: "اللغات",
            supporting_yks_exam: "دعم التقديم والتحضير لامتحان YKS للطلاب السوريين",
            ytp_presidency_karabuk: "رئاسة YTP للأتراك في الخارج والمجتمعات ذات الصلة، كارابوك، تركيا",
            assisting_students: "مساعدة الطلاب الجدد في التقديم والتحضير لامتحان مؤسسات التعليم العالي (YKS) للطلاب السوريين.",
            contact_me: "تواصل معي",
            contact_information: "معلومات التواصل",
            email_address: "البريد الإلكتروني",
            phone_number: "الهاتف",
            send_a_message: "أرسل رسالة",
            name: "الاسم",
            subject: "الموضوع",
            message: "الرسالة",
            send: "إرسال",
            profile: "نبذة شخصية",
            technical_skills: "مهارات تقنية",
            all_rights_reserved: "جميع الحقوق محفوظة",
             developed_software: "تطوير حلول برمجية لعمليات الشركة بما في ذلك إدارة العملاء والموظفين وجدولة المواعيد وأنظمة الحجز.",
            managing_teams: "إدارة الفرق المشاركة في مسابقات Techno Fest وتقديم الدعم العلمي.",
            teaching_programming: "تدريس مواضيع البرمجة والتكنولوجيا لطلاب المدارس الثانوية والمتوسطة في تركيا.",
            creating_ecommerce_sites: "إنشاء مواقع التجارة الإلكترونية للعملاء بما في ذلك حلول البرمجة المخصصة لأنظمة التجارة الإلكترونية.",
            developing_ai_tools: "تطوير أدوات باستخدام الذكاء الاصطناعي التوليدي لتعزيز خدمات زراعة الشعر وزيادة العملاء المحتملين.",
            applying_ai: "تطوير نماذج الذكاء الاصطناعي التوليدي المخصصة وفقًا لمتطلبات الشركة باستخدام Python وDocker وAzure وGoogle Cloud وTensorFlow وOpenCV.",
            measuring_ppg_signals: "تطوير طرق لقياس إشارات PPG عبر مستشعرات الضوء الأحمر والأشعة تحت الحمراء الموجودة في الهواتف المحمولة والساعات الذكية.",
            estimating_ring_size: "تطوير طريقة مبتكرة باستخدام رؤية الكمبيوتر لقياس مقاس الخاتم لتطبيقات التجارة الإلكترونية.",
            comprehensive_educational_book: "كتاب تعليمي شامل يتكون من 9 مستويات، كل منها يحتوي على 4 وحدات.",
            location_text: "كارابوك، تركيا",
            first_year_student: "طالب في السنة الأولى، أكمل المقررات الدراسية بمعدل 4.0/4.0.",
            graduated_with_honors: "تخرج بمرتبة الشرف بمعدل 3.93.",
            first_in_major: "المركز الأول في التخصص والأول في كلية الهندسة.",
            native_language: "اللغة الأم",
            fluent: "بطلاقة",
            intermediate: "متوسط",
            send_message: "ارسال رسالة",
        },
    };

    return translations[language] || translations['ar']; // Default to Arabic
};

// Component for the whole website
const TahaPortfolio = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [currentSlide, setCurrentSlide] = useState(0);
    const { language, setLanguage } = useContext(LanguageContext);
    const t = useTranslations(); // Translation hook
    
    // Handle language change
    const handleLanguageChange = (newLanguage: string) => {
        setLanguage(newLanguage);
    };

    // Handle tab/section navigation
    interface Slide {
        id: number;
        title: string;
        description: string;
        linkTo: string;
        buttonText: string;
    }

    interface Experience {
        id: number;
        title: string;
        company: string;
        location: string;
        period: string;
        responsibilities: string[];
    }

    interface Research {
        id: number;
        title: string;
        institution: string;
        date: string;
        details: string[];
    }

    interface Education {
        id: number;
        degree: string;
        university: string;
        period: string;
        description: string;
    }

    interface Skill {
        category: string;
        items: string[];
    }

    interface Volunteer {
        id: number;
        title: string;
        organization: string;
        period: string;
        description: string;
    }

    const handleSectionChange = (section: string): void => {

        setActiveSection(section);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Slideshow effect for the homepage
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const slides = [
        {
            id: 1,
            title: t.integrated_software_development,
            description: translations[language].slide1Description || translations['ar'].slide1Description,
            linkTo: "experience",
            buttonText: t.view_more
        },
        {
            id: 2,
            title: t.ai_research,
            description: translations[language].slide2Description || translations['ar'].slide2Description,
            linkTo: "research",
            buttonText: t.view_more
        },
        {
            id: 3,
            title: t.experience_in_teaching,
            description: translations[language].slide3Description || translations['ar'].slide3Description,
            linkTo: 'experience',
            buttonText: t.view_more
        },
        {
            id: 4,
            title: t.volunteer_activities,
            description: translations[language].slide4Description || translations['ar'].slide4Description,
            linkTo: "volunteer",
            buttonText: t.view_more
        }
    ];

    // Experience data
    const experiences = [
        {
            id: 1,
            title: t.full_stack_developer,
            company: t.company_al_mashhad,
            location: t.dubai_uae,
            period: "01/2025 - " + t.present,
            responsibilities: [
                translations[language].experience1Responsibility1 || translations['ar'].experience1Responsibility1,
                translations[language].experience1Responsibility2 || "تطوير واجهات المستخدم باستخدام React وNext.js.",
                translations[language].experience1Responsibility3 || "بناء تطبيقات موبايل باستخدام Flutter وJava.",
                translations[language].experience1Responsibility4 || "إنشاء قواعد بيانات باستخدام MySQL وPostgreSQL مع Supabase.",
                translations[language].experience1Responsibility5 || "إدارة خوادم Linux وGoogle Cloud."
            ]
        },
        {
            id: 2,
            title: t.team_leader,
            company: t.tech_entrepreneurs,
            location: t.karabuk_turkey,
            period: "12/2024 - " + t.present,
            responsibilities: [
               t.managing_teams,
                translations[language].experience2Responsibility2 || "اقتراح أفكار للتطوير والتنفيذ والمشاركة في المنافسات.",
                translations[language].experience2Responsibility3 || "إنشاء خرائط طريق لكل فريق ومراقبة سير العمل بشكل مناسب."
            ]
        },
        {
            id: 3,
            title: t.instructor,
            company: t.deneyap_foundation,
            location: t.karabuk_turkey,
            period: "05/2022 - " + t.present,
            responsibilities: [
                t.teaching_programming,
                translations[language].experience3Responsibility2 || "تدريس دورات متنوعة تشمل أساسيات البرمجة وتطوير الويب وتطوير تطبيقات الموبايل والذكاء الاصطناعي.",
                translations[language].experience3Responsibility3 || "الإشراف وتحكيم المسابقات لاختيار الطلاب المتميزين لمنحهم التعليم ضمن المؤسسة."
            ]
        },
        {
            id: 4,
            title: t.university_courses_teacher,
            company: t.nerds_academy,
            location: translations[language].location_text || t.karabuk_turkey,
            period: "09/2022 - " + t.present,
            responsibilities: [
                translations[language].experience4Responsibility1 || "تدريس دورات برمجية متنوعة بلغات MATLAB وPython وJava وC.",
                translations[language].experience4Responsibility2 || "تدريس معالجة الصور وتحليل الإشارات وأنظمة وإشارات.",
                translations[language].experience4Responsibility3 || "تدريس الذكاء الاصطناعي والتعلم الآلي والشبكات العصبية.",
                translations[language].experience4Responsibility4 || "تدريس مواضيع الكهرباء والإلكترونيات.",
                translations[language].experience4Responsibility5 || "تدريس دورات متخصصة في الهندسة الطبية الحيوية بما في ذلك أجهزة القياس الطبية الحيوية وأنظمة التصوير الطبي."
            ]
        },
        {
            id: 5,
            title: t.full_stack_developer,
            company: "  Next Graft",
            location: t.dubai_uae,
            period: "10/2024 - " + t.present,
            responsibilities: [
                t.developing_ai_tools,
                 t.applying_ai,
                translations[language].experience5Responsibility3 || "إنشاء واجهات برمجة تطبيقات (APIs) تربط النماذج بواجهات المستخدم باستخدام Flask وPython.",
                translations[language].experience5Responsibility4 || "تصميم واجهات المستخدم الأمامية باستخدام Next.js.",
                translations[language].experience5Responsibility5 || "إدارة خوادم Google Cloud وLinux وMicrosoft Azure."
            ]
        },
        {
            id: 6,
            title: t.mobile_developer,
            company: t.meslife_company,
            location: t.stockholm_sweden,
            period: "06/2024 - 10/2024",
            responsibilities: [
                translations[language].experience6Responsibility1 || "إنشاء تطبيق شبيه بتيك توك مع إمكانيات الدردشة الصوتية والفيديو مع ميزات احترافية.",
                translations[language].experience6Responsibility2 || "بناء التطبيق وواجهته باستخدام Java وAndroid Studio.",
                translations[language].experience6Responsibility3 || "إدارة الخوادم وواجهات برمجة التطبيقات باستخدام Next.js وLinux وPython Flask."
            ]
        },
        {
            id: 7,
            title: t.full_stack_developer,
            company: "  Armatix",
            location: t.dubai_uae,
            period: "10/2022 - 06/2024",
            responsibilities: [
                t.creating_ecommerce_sites,
                 translations[language].experience7Responsibility2 || "تطوير واجهات المستخدم باستخدام React وNext.js.",
                translations[language].experience7Responsibility3 || "بناء تطبيقات موبايل باستخدام Flutter وJava.",
                translations[language].experience7Responsibility4 || "إنشاء واجهات برمجة تطبيقات باستخدام Flask وNext.js.",
                translations[language].experience7Responsibility5 || "إنشاء قواعد بيانات باستخدام MySQL وPostgreSQL مع Supabase.",
                translations[language].experience7Responsibility6 || "إدارة خوادم Linux وGoogle Cloud."
            ]
        },
        {
            id: 8,
            title: t.co_founder,
            company: t.tweetcode_platform,
            location: t.karabuk_turkey,
            period: "10/2022 - 02/2024",
            responsibilities: [
                 translations[language].experience8Responsibility1 || "مسؤول عن تطوير المناهج والمواد التعليمية التفاعلية.",
                translations[language].experience8Responsibility2 || "اختيار وتقييم المدرسين."
            ]
        },
        {
            id: 9,
            title: t.back_end_developer,
            company: t.algotrade_company,
            location: t.ottawa_canada,
            period: "03/2021 - 10/2022",
            responsibilities: [
                t.applying_ai,
                 translations[language].experience9Responsibility2 || "إنشاء واجهات خلفية باستخدام Python وFlask.",
                translations[language].experience9Responsibility3 || "تطوير أنظمة تحليل البيانات باستخدام Python وTensorFlow."
            ]
        }
    ];
    // Research data
    const researches = [
        {
            id: 1,
            title: t.master_thesis,
            institution: t.karabuk_university,
            date: "05/2024",
            details: [
                t.measuring_ppg_signals,
                translations[language].research1Detail2 || "استخراج أكثر من 7,730 ميزة لكل نبضة في كل طول موجي.",
                translations[language].research1Detail3 || "تدريب نماذج الذكاء الاصطناعي للكشف المبكر عن الفشل الكلوي وتقدير مستويات السكر في الدم."
            ]
        },
        {
            id: 2,
            title: t.scientific_research,
            institution: t.efes_conference,
            date: "10/2024",
            details: [
                translations[language].research2Detail1 || "نُشر في مؤتمر EFES الدولي للبحث العلمي والابتكار.",
                t.estimating_ring_size,
            ]
        },
        {
            id: 3,
            title: t.python_for_youth,
            institution: t.tweetcode_platform_ankara,
            date: "02/2024",
            details: [
                t.comprehensive_educational_book,
                translations[language].research3Detail2 || "تحتوي كل وحدة على 5 أقسام تغطي مهارات تعليمية مختلفة (التعليمات، الاستكشاف، البحث، التعاون، والتجريب).",
                translations[language].research3Detail3 || "يحتوي كل مستوى على مشروع موزع على الوحدات لضمان التعلم المستمر وتحقيق نتائج ملموسة في نهاية كل مستوى."
            ]
        },
        {
            id: 4,
            title: t.third_prize,
            institution: t.ytp_presidency,
            date: "12/2021",
            details: [
                 translations[language].research4Detail1 || "الجائزة الثالثة في فئة العلوم-التكنولوجيا/المشاريع في جوائز الطلاب الدولية 2021."
            ]
        }
    ];

    // Education data
    const education = [
        {
            id: 1,
            degree: t.phd_biomedical_engineering,
            university: t.karabuk_university,
            period: "10/2024 - " + t.present,
            description: t.first_year_student
        },
        {
            id: 2,
            degree: t.masters_biomedical_engineering,
            university: t.karabuk_university,
            period: "10/2022 - 08/2024",
            description: t.graduated_with_honors
        },
        {
            id: 3,
            degree: t.bachelor_biomedical_engineering,
            university: t.karabuk_university,
            period: "07/2017 - 07/2022",
            description: translations[language].first_in_major
        },
        {
            id: 4,
            degree: t.bachelor_medical_engineering,
            university: t.karabuk_university,
            period: "09/2019 - 08/2022",
            description: translations[language].first_in_major
        }
    ];

    // Skills data
    const skills = [
        {
            category: t.web_development,
            items: ["React", "Next.js", "HTML5", "CSS3", "JavaScript", "Flask"]
        },
        {
            category: t.mobile_development,
            items: ["Flutter", "Java", "Android Studio"]
        },
        {
            category: t.programming_languages,
            items: ["Python", "Java", "JavaScript", "C", "MATLAB"]
        },
        {
            category: t.databases,
            items: ["MySQL", "PostgreSQL", "Supabase"]
        },
        {
            category: t.ai_data_analysis,
            items: ["TensorFlow", "OpenCV", translations[language].processing_images || "معالجة الصور", translations[language].signal_analysis || "تحليل الإشارات", translations[language].machine_learning || "التعلم الآلي", translations[language].neural_networks || "الشبكات العصبية"]
        },
        {
            category: t.tools_technologies,
            items: ["Docker", "Linux", "Google Cloud", "Microsoft Azure", "Git"]
        },
        {
            category: t.languages,
            items: [translations[language].native_language_arabic || "العربية (اللغة الأم)", translations[language].intermediate_english || "الإنجليزية (مستوى B2)", translations[language].fluent_turkish || "التركية (مستوى C1+ أكاديمي)"]
        }
    ];

    // Volunteer data
    const volunteer = [
        {
            id: 1,
            title: t.supporting_yks_exam,
            organization: t.ytp_presidency_karabuk,
            period: "01/2021 - " + t.present,
            description: t.assisting_students
        }
    ];

    const direction = language === 'ar' ? 'rtl' : 'ltr'; // Determine text direction

    return (
        <div dir={direction}>
            <div className="  font-sans text-gray-800 bg-gray-50 min-h-screen">
                {/* Header */}
                <header className="fixed w-full bg-blue-900 text-white shadow-md z-50">
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="text-2xl font-bold mb-4 md:mb-0">{t.taha_alhariri}</div>
                            <nav>
                                <ul className="flex flex-wrap justify-center space-x-1 space-x-reverse">
                                    <li>
                                        <button
                                            onClick={() => handleSectionChange('home')}
                                            className={`px-3 py-2 rounded transition-colors ${activeSection === 'home' ? 'bg-blue-800' : 'hover:bg-blue-800'}`}
                                        >
                                            {t.home}
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => handleSectionChange('experience')}
                                            className={`px-3 py-2 rounded transition-colors ${activeSection === 'experience' ? 'bg-blue-800' : 'hover:bg-blue-800'}`}
                                        >
                                            {t.experience}
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => handleSectionChange('research')}
                                            className={`px-3 py-2 rounded transition-colors ${activeSection === 'research' ? 'bg-blue-800' : 'hover:bg-blue-800'}`}
                                        >
                                            {t.research}
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => handleSectionChange('volunteer')}
                                            className={`px-3 py-2 rounded transition-colors ${activeSection === 'volunteer' ? 'bg-blue-800' : 'hover:bg-blue-800'}`}
                                        >
                                            {t.volunteer}
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => handleSectionChange('education')}
                                            className={`px-3 py-2 rounded transition-colors ${activeSection === 'education' ? 'bg-blue-800' : 'hover:bg-blue-800'}`}
                                        >
                                            {t.education}
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => handleSectionChange('skills')}
                                            className={`px-3 py-2 rounded transition-colors ${activeSection === 'skills' ? 'bg-blue-800' : 'hover:bg-blue-800'}`}
                                        >
                                            {t.skills}
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => handleSectionChange('contact')}
                                            className={`px-3 py-2 rounded transition-colors ${activeSection === 'contact' ? 'bg-blue-800' : 'hover:bg-blue-800'}`}
                                        >
                                            {t.contact}
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => handleLanguageChange('ar')}
                                            className={`px-3 py-2 rounded transition-colors ${language === 'ar' ? 'bg-blue-800' : 'hover:bg-blue-800'}`}
                                        >
                                            العربية
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => handleLanguageChange('en')}
                                            className={`px-3 py-2 rounded transition-colors ${language === 'en' ? 'bg-blue-800' : 'hover:bg-blue-800'}`}
                                        >
                                            English
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => handleLanguageChange('tr')}
                                            className={`px-3 py-2 rounded transition-colors ${language === 'tr' ? 'bg-blue-800' : 'hover:bg-blue-800'}`}
                                        >
                                            Türkçe
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="flex-grow container mx-auto px-4 pt-32 pb-12">
                    {/* Home Section */}
                    {activeSection === 'home' && (
                        <section className="mb-12">
                            {/* Profile */}
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
                                <div className="w-48 h-48 rounded-lg overflow-hidden shadow-lg bg-gray-200">
                                    <img src="./main.jpg" alt={t.taha_alhariri} className="w-full h-full object-cover" />
                                </div>

                                <div className="flex-1 text-center md:text-right">
                                    <h1 className="text-3xl font-bold text-blue-800 mb-2">{t.taha_alhariri}</h1>
                                    <div className="text-lg text-blue-600 mb-4">{t.software_engineer}</div>
                                    <p className="mb-6 text-gray-700">
                                        {t.profile_description}
                                    </p>

                                    <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                        <a href="mailto:tahaalhriri@gmail.com" className="flex items-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-all hover:-translate-y-1">
                                            <span className="ml-2">✉️</span>
                                            tahaalhriri@gmail.com
                                        </a>
                                        <a href="tel:+905349338282" className="flex items-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-all hover:-translate-y-1">
                                            <span className="ml-2">📱</span>
                                            +90 (534) 933 8282
                                        </a>
                                        <a href="https://www.linkedin.com/in/taha-elhariri-a5b484194/"
                                           target="_blank"
                                           rel="noopener noreferrer"
                                           className="flex items-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-all hover:-translate-y-1">

                                            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M20.45 2H3.55A1.5 1.5 0 0 0 2 3.55v16.9A1.5 1.5 0 0 0 3.55 22h16.9A1.5 1.5 0 0 0 22 20.45V3.55A1.5 1.5 0 0 0 20.45 2zM8.12 18.17H5.38V9h2.74v9.17zM6.75 7.78a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2zM18.17 18.17h-2.74v-4.47c0-1.07-.02-2.44-1.48-2.44-1.48 0-1.7 1.16-1.7 2.36v4.55h-2.74V9h2.63v1.25h.04c.37-.7 1.27-1.44 2.61-1.44 2.79 0 3.3 1.84 3.3 4.24v5.12z"/>
                                            </svg>

                                            <span className="ml-2"> LinkedIn </span>
                                        </a>

                                        <a href="https://github.com/tahaelhariri998" target="_blank" rel="noopener noreferrer" className="flex items-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-all hover:-translate-y-1">
                                            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.21.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.26-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.02a9.55 9.55 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.39.2 2.41.1 2.67.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.02 10.02 0 0 0 22 12c0-5.52-4.48-10-10-10z"/>
                                            </svg>
                                            <span className="ml-2">GitHub</span>
                                        </a>

                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center items-center ">
                                {/* Slider */}
                                <div className="relative w-[70%] h-150 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                                    {slides.map((slide, index) => (
                                        <div
                                            key={slide.id}
                                            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                                        >
                                            <img src={`./صورة${index + 1}.jpg`} alt={slide.title} className="w-full h-full object-cover" />

                                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-6 text-white">
                                                <h2 className="text-2xl font-bold mb-2">{slide.title}</h2>
                                                <p className="mb-4">{slide.description}</p>
                                                <button
                                                    onClick={() => handleSectionChange('experience')}
                                                    className="self-start bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors"
                                                >
                                                   {t.view_more}
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                            </div>
                            <div className="space-y-6 mt-12 flex flex-col justify-center items-center">
  <div className="relative w-[50%]  h-0 pb-[56.25%] overflow-hidden">
    <video 
      controls
      className="absolute top-0 left-0 w-full h-full"
    >
      <source src="./vi.mp4" type="video/mp4" />
      متصفحك لا يدعم تشغيل الفيديو.
    </video>
  </div>
  
  <div className="justify-center items-center w-[50%] h-400 pb-[56.25%] overflow-hidden">
    <Imagesslider/>
  </div>
</div>

  
 



                        </section>
                    )}

                    {/* Experience Section */}
                    {activeSection === 'experience' && (
                        <section>
                            <h2 className="text-2xl font-bold text-blue-800 mb-6 pb-2 border-b-2 border-green-500">{t.professional_experience}</h2>

                            <div className="space-y-6">
                                {experiences.map(exp => (
                                    <div key={exp.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                                        <div className="flex flex-col md:flex-row justify-between mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-blue-800">{exp.title}</h3>
                                                <div className="text-lg">{exp.company}</div>
                                            </div>
                                            <div className="text-blue-600 font-medium">{exp.period}</div>
                                        </div>

                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            {exp.responsibilities.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Research Section */}
                    {activeSection === 'research' && (
                        <section>
                            <h2 className="text-2xl font-bold text-blue-800 mb-6 pb-2 border-b-2 border-green-500">{t.research}</h2>

                            <div className="space-y-6">
                                {researches.map(research => (
                                    <div key={research.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                                        <div className="mb-4">
                                            <h3 className="text-xl font-bold text-blue-800 mb-2">{research.title}</h3>
                                            <div className="text-lg mb-1">{research.institution}</div>
                                            <div className="text-blue-600 font-medium">{research.date}</div>
                                        </div>

                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            {research.details.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Volunteer Section */}
                    {activeSection === 'volunteer' && (
                        <section>
                            <h2 className="text-2xl font-bold text-blue-800 mb-6 pb-2 border-b-2 border-green-500">{t.volunteer}</h2>

                            <div className="space-y-6">
                                {volunteer.map(vol => (
                                    <div key={vol.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6">


                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-blue-800 mb-2">{vol.title}</h3>
                                            <div className="text-lg mb-1">{vol.organization}</div>
                                            <div className="text-blue-600 font-medium mb-3">{vol.period}</div>
                                            <p className="text-gray-700">{vol.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Education Section */}
                    {activeSection === 'education' && (
                        <section>
                            <h2 className="text-2xl font-bold text-blue-800 mb-6 pb-2 border-b-2 border-green-500">{t.education}</h2>

                            <div className="space-y-6">
                                {education.map(edu => (
                                    <div key={edu.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                                        <div className="flex flex-col md:flex-row justify-between mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-blue-800">{edu.degree}</h3>
                                                <div className="text-lg">{edu.university}</div>
                                            </div>
                                            <div className="text-blue-600 font-medium">{edu.period}</div>
                                        </div>

                                        <p className="text-gray-700">{edu.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Skills Section */}
                    {activeSection === 'skills' && (
                        <section>
                            <h2 className="text-2xl font-bold text-blue-800 mb-6 pb-2 border-b-2 border-green-500">{t.skills}</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {skills.map((skill, index) => (
                                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                        <h3 className="text-lg font-bold text-blue-800 mb-4 pb-2 border-b border-green-500">{skill.category}</h3>

                                        <div className="flex flex-wrap gap-2">
                                            {skill.items.map((item, idx) => (
                                                <span key={idx} className="bg-gray-100 hover:bg-green-500 hover:text-white transition-colors px-3 py-1 rounded-md text-sm">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Contact Section */}
                    {activeSection === 'contact' && (
                        <section>
                            <h2 className="text-2xl font-bold text-blue-800 mb-6 pb-2 border-b-2 border-green-500">{t.contact_me}</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-bold text-blue-800 mb-6">{t.contact_information}</h3>

                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center text-xl">
                                                ✉️
                                            </div>
                                            <div>
                                                <h4 className="font-bold">{t.email_address}</h4>
                                                <p>tahaalhriri@gmail.com</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center text-xl">
                                                📱
                                            </div>
                                            <div>
                                                <h4 className="font-bold">{t.phone_number}</h4>
                                                <p>+90 (534) 933 8282</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center text-xl">
                                                📍
                                            </div>
                                            <div>
                                                <h4 className="font-bold">{t.location}</h4>
                                                <p>{translations[language].location_text || t.karabuk_turkey}</p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-4">
                                            {/* LinkedIn */}
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center">
                                                    <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path d="M20.45 2H3.55A1.5 1.5 0 0 0 2 3.55v16.9A1.5 1.5 0 0 0 3.55 22h16.9A1.5 1.5 0 0 0 22 20.45V3.55A1.5 1.5 0 0 0 20.45 2zM8.12 18.17H5.38V9h2.74v9.17zM6.75 7.78a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2zM18.17 18.17h-2.74v-4.47c0-1.07-.02-2.44-1.48-2.44-1.48 0-1.7 1.16-1.7 2.36v4.55h-2.74V9h2.63v1.25h.04c.37-.7 1.27-1.44 2.61-1.44 2.79 0 3.3 1.84 3.3 4.24v5.12z"/>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold">LinkedIn</h4>
                                                    <p>
                                                        <a href="https://www.linkedin.com/in/taha-elhariri-a5b484194/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                                            {t.profile}
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>

                                            {/* GitHub */}
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center">
                                                    <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.21.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.26-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.02a9.55 9.55 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.39.2 2.41.1 2.67.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.02 10.02 0 0 0 22 12c0-5.52-4.48-10-10-10z"/>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold">GitHub</h4>
                                                    <p>
                                                        <a href="https://github.com/tahaelhariri998" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                                            {t.profile}
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-bold text-blue-800 mb-6">{t.send_a_message}</h3>

                                    <form className="space-y-4">
                                        <div>
                                            <label htmlFor="name" className="block mb-2 font-medium">{t.name}</label>
                                            <input
                                                type="text"
                                                id="name"
                                                className="w-full p-3 border border-gray-300 rounded-md"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block mb-2 font-medium">{t.email_address}</label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="w-full p-3 border border-gray-300 rounded-md"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="subject" className="block mb-2 font-medium">{t.subject}</label>
                                            <input
                                                type="text"
                                                id="subject"
                                                className="w-full p-3 border border-gray-300 rounded-md"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block mb-2 font-medium">{t.message}</label>
                                            <textarea
                                                id="message"

                                                className="w-full p-3 border border-gray-300 rounded-md"
                                                required
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="bg-blue-800 hover:bg-blue-700 text-white py-3 px-6 rounded-md transition-colors"
                                        >
                                            {t.send_message}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </section>
                    )}
                </main>
                <div className='p-8'>
                </div>
            </div>
            {/* Footer */}
            <footer className="  fixed bottom-0 bg-blue-900 text-white py-6    w-full ">
                <div className="container mx-auto px-4 text-center">
                    <p>© {new Date().getFullYear()} {t.taha_alhariri}. {t.all_rights_reserved}</p>
                </div>
            </footer>
        </div>

    );
};

//slide descriptions
const translations: { [key: string]: { [key: string]: string } } = {
    en: {
        slide1Description: "Extensive experience in developing user interfaces using React and Next.js, and creating mobile applications using Flutter and Java.",
        slide2Description: "Experience in applying artificial intelligence for medical diagnosis and analysis of vital data using Python and TensorFlow.",
        slide3Description: "Teaching programming, artificial intelligence, web and mobile application development to students in middle and university education.",
        slide4Description: "Assisting Syrian students in applying and preparing for the Higher Education Institutions Exam (YKS).",
        experience1Responsibility1: "Developed Software Solutions for the company's operations including customer and employee management, appointment scheduling and booking systems.",
        experience1Responsibility2: "Developed user interfaces using React and Next.js.",
        experience1Responsibility3: "Built mobile applications using Flutter and Java.",
        experience1Responsibility4: "Created databases using MySQL and PostgreSQL with Supabase.",
        experience1Responsibility5: "Managed Linux and Google Cloud servers.",
        experience2Responsibility2: "Proposing ideas for development and implementation and participating in competitions.",
        experience2Responsibility3: "Creating roadmaps for each team and monitoring workflow appropriately.",
        experience3Responsibility2: "Teaching various courses including programming basics, web development, mobile application development, and artificial intelligence.",
        experience3Responsibility3: "Supervising and judging competitions to select outstanding students to grant them education within the institution.",
        experience4Responsibility1: "Teaching various programming courses in MATLAB, Python, Java, and C.",
        experience4Responsibility2: "Teaching image processing, signal analysis, and systems and signals.",
        experience4Responsibility3: "Teaching artificial intelligence, machine learning, and neural networks.",
        experience4Responsibility4: "Teaching electricity and electronics topics.",
        experience4Responsibility5: "Teaching specialized courses in biomedical engineering including biomedical measurement devices and medical imaging systems.",
        experience5Responsibility3: "Creating APIs that connect models to user interfaces using Flask and Python.",
        experience5Responsibility4: "Designing front-end user interfaces using Next.js.",
        experience5Responsibility5: "Managing Google Cloud, Linux, and Microsoft Azure servers.",
        experience6Responsibility1: "Creating an application similar to TikTok with voice and video chat capabilities with professional features.",
        experience6Responsibility2: "Building the application and its interface using Java and Android Studio.",
        experience6Responsibility3: "Managing servers and APIs using Next.js, Linux, and Python Flask.",
        experience7Responsibility2: "Developed user interfaces using React and Next.js.",
        experience7Responsibility3: "Built mobile applications using Flutter and Java.",
        experience7Responsibility4: "Created APIs using Flask and Next.js.",
        experience7Responsibility5: "Created databases using MySQL and PostgreSQL with Supabase.",
        experience7Responsibility6: "Managed Linux and Google Cloud servers.",
        experience8Responsibility1: "Responsible for developing interactive curricula and educational materials.",
        experience8Responsibility2: "Selecting and evaluating teachers.",
        experience9Responsibility2: "Creating backends using Python and Flask.",
        experience9Responsibility3: "Developing data analysis systems using Python and TensorFlow.",
        research1Detail2: "Extracted over 7,730 features per pulse at each wavelength.",
        research1Detail3: "Trained artificial intelligence models for early detection of kidney failure and estimation of blood sugar levels.",
        research2Detail1: "Published at the EFES International Conference on Scientific Research and Innovation.",
        research3Detail2: "Each unit contains 5 sections covering different educational skills (instructions, exploration, research, collaboration, and experimentation).",
        research3Detail3: "Each level contains a project distributed across the units to ensure continuous learning and achieve tangible results at the end of each level.",
        research4Detail1: "Third prize in the Science-Technology/Projects category at the 2021 International Student Awards.",
        processing_images: "Image processing",
        signal_analysis: "Signal analysis",
        machine_learning: "Machine learning",
        neural_networks: "Neural networks",
        native_language_arabic: "Arabic (Native Language)",
        intermediate_english: "English (B2 Level)",
        fluent_turkish: "Turkish (C1+ Academic Level)",
        },
        tr: {
        slide1Description: "React ve Next.js kullanarak kullanıcı arayüzleri geliştirme ve Flutter ve Java kullanarak mobil uygulamalar oluşturma konusunda kapsamlı deneyim.",
        slide2Description: "Python ve TensorFlow kullanarak tıbbi teşhis ve hayati verilerin analizi için yapay zeka uygulama deneyimi.",
        slide3Description: "Orta ve üniversite eğitimindeki öğrencilere programlama, yapay zeka, web ve mobil uygulama geliştirme konularında ders verme.",
        slide4Description: "Suriyeli öğrencilere Yükseköğretim Kurumları Sınavı'na (YKS) başvuru ve hazırlanma konusunda yardımcı olma.",
        experience1Responsibility1: "Müşteri ve çalışan yönetimi, randevu planlama ve rezervasyon sistemleri dahil olmak üzere şirketin operasyonları için geliştirilen yazılım çözümleri.",
        experience1Responsibility2: "React ve Next.js kullanarak kullanıcı arayüzleri geliştirildi.",
        experience1Responsibility3: "Flutter ve Java kullanılarak mobil uygulamalar oluşturuldu.",
        experience1Responsibility4: "Supabase ile MySQL ve PostgreSQL kullanılarak veritabanları oluşturuldu.",
        experience1Responsibility5: "Linux ve Google Cloud sunucuları yönetildi.",
        experience2Responsibility2: "Geliştirme ve uygulama için fikirler önerme ve yarışmalara katılma.",
        experience2Responsibility3: "Her ekip için yol haritaları oluşturma ve iş akışını uygun şekilde izleme.",
        experience3Responsibility2: "Programlama temelleri, web geliştirme, mobil uygulama geliştirme ve yapay zeka dahil olmak üzere çeşitli kurslar verme.",
        experience3Responsibility3: "Kurum içinde eğitim vermek üzere seçkin öğrencileri seçmek için yarışmaları denetleme ve değerlendirme.",
        experience4Responsibility1: "MATLAB, Python, Java ve C dillerinde çeşitli programlama dersleri verme.",
        experience4Responsibility2: "Görüntü işleme, sinyal analizi ve sistemler ve sinyaller öğretme.",
        experience4Responsibility3: "Yapay zeka, makine öğrenimi ve sinir ağları öğretme.",
        experience4Responsibility4: "Elektrik ve elektronik konularını öğretme.",
        experience4Responsibility5: "Biyomedikal ölçüm cihazları ve tıbbi görüntüleme sistemleri dahil olmak üzere biyomedikal mühendisliği alanında uzmanlaşmış kurslar verme.",
        experience5Responsibility3: "Flask ve Python kullanarak modelleri kullanıcı arayüzlerine bağlayan API'ler oluşturma.",
        experience5Responsibility4: "Next.js kullanarak ön uç kullanıcı arayüzleri tasarlama.",
        experience5Responsibility5: "Google Cloud, Linux ve Microsoft Azure sunucularını yönetme.",
        experience6Responsibility1: "Profesyonel özelliklere sahip sesli ve görüntülü sohbet özelliklerine sahip TikTok benzeri bir uygulama oluşturma.",
        experience6Responsibility2: "Java ve Android Studio kullanarak uygulamayı ve arayüzünü oluşturma.",
        experience6Responsibility3: "Next.js, Linux ve Python Flask kullanarak sunucuları ve API'leri yönetme.",
        experience7Responsibility2: "React ve Next.js kullanarak kullanıcı arayüzleri geliştirildi.",
        experience7Responsibility3: "Flutter ve Java kullanılarak mobil uygulamalar oluşturuldu.",
        experience7Responsibility4: "Flask ve Next.js kullanılarak API'ler oluşturuldu.",
        experience7Responsibility5: "Supabase ile MySQL ve PostgreSQL kullanılarak veritabanları oluşturuldu.",
        experience7Responsibility6: "Linux ve Google Cloud sunucuları yönetildi.",
        experience8Responsibility1: "Etkileşimli müfredat ve eğitim materyalleri geliştirmekten sorumludur.",
        experience8Responsibility2: "Öğretmenleri seçme ve değerlendirme.",
        experience9Responsibility2: "Python ve Flask kullanarak arka uçlar oluşturma.",
        experience9Responsibility3: "Python ve TensorFlow kullanarak veri analiz sistemleri geliştirme.",
        research1Detail2: "Her dalga boyunda darbe başına 7.730'dan fazla özellik çıkarıldı.",
        research1Detail3: "Böbrek yetmezliğinin erken teşhisi ve kan şekeri seviyelerinin tahmini için yapay zeka modelleri eğitildi.",
        research2Detail1: "EFES Uluslararası Bilimsel Araştırma ve İnovasyon Konferansı'nda yayınlandı.",
        research3Detail2: "Her ünite farklı eğitim becerilerini (talimatlar, keşif, araştırma, işbirliği ve deneme) kapsayan 5 bölüm içerir.",
        research3Detail3: "Her seviye, sürekli öğrenmeyi sağlamak ve her seviyenin sonunda somut sonuçlar elde etmek için ünitelere dağıtılmış bir proje içerir.",
        research4Detail1: "2021 Uluslararası Öğrenci Ödülleri'nde Bilim-Teknoloji/Projeler kategorisinde üçüncülük ödülü.",
        processing_images: "Görüntü işleme",
        signal_analysis: "Sinyal analizi",
        machine_learning: "Makine öğrenimi",
        neural_networks: "Sinir ağları",
        native_language_arabic: "Arapça (Anadil)",
        intermediate_english: "İngilizce (B2 Seviyesi)",
        fluent_turkish: "Türkçe (C1+ Akademik Seviye)",
        },
        ar: {
        slide1Description: "خبرة واسعة في تطوير واجهات المستخدم باستخدام React وNext.js، وإنشاء تطبيقات الموبايل باستخدام Flutter وJava.",
        slide2Description: "خبرة في تطبيق الذكاء الاصطناعي للتشخيص الطبي وتحليل البيانات الحيوية باستخدام Python وTensorFlow.",
        slide3Description: "تدريس مواد البرمجة والذكاء الاصطناعي وتطوير تطبيقات الويب والموبايل للطلاب في مرحلة التعليم المتوسط والجامعي.",
        slide4Description: "مساعدة الطلاب السوريين في التقديم والإعداد لامتحان مؤسسات التعليم العالي (YKS).",
        experience1Responsibility1: "تطوير حلول برمجية لعمليات الشركة بما في ذلك إدارة العملاء والموظفين وجدولة المواعيد وأنظمة الحجز.",
        experience1Responsibility2: "تطوير واجهات المستخدم باستخدام React وNext.js.",
        experience1Responsibility3: "بناء تطبيقات موبايل باستخدام Flutter وJava.",
        experience1Responsibility4: "إنشاء قواعد بيانات باستخدام MySQL وPostgreSQL مع Supabase.",
        experience1Responsibility5: "إدارة خوادم Linux وGoogle Cloud.",
        experience2Responsibility2: "اقتراح أفكار للتطوير والتنفيذ والمشاركة في المنافسات.",
        experience2Responsibility3: "إنشاء خرائط طريق لكل فريق ومراقبة سير العمل بشكل مناسب.",
        experience3Responsibility2: "تدريس دورات متنوعة تشمل أساسيات البرمجة وتطوير الويب وتطوير تطبيقات الموبايل والذكاء الاصطناعي.",
        experience3Responsibility3: "الإشراف وتحكيم المسابقات لاختيار الطلاب المتميزين لمنحهم التعليم ضمن المؤسسة.",
        experience4Responsibility1: "تدريس دورات برمجية متنوعة بلغات MATLAB وPython وJava وC.",
        experience4Responsibility2: "تدريس معالجة الصور وتحليل الإشارات وأنظمة وإشارات.",
        experience4Responsibility3: "تدريس الذكاء الاصطناعي والتعلم الآلي والشبكات العصبية.",
        experience4Responsibility4: "تدريس مواضيع الكهرباء والإلكترونيات.",
        experience4Responsibility5: "تدريس دورات متخصصة في الهندسة الطبية الحيوية بما في ذلك أجهزة القياس الطبية الحيوية وأنظمة التصوير الطبي.",
        experience5Responsibility3: "إنشاء واجهات برمجة تطبيقات (APIs) تربط النماذج بواجهات المستخدم باستخدام Flask وPython.",
        experience5Responsibility4: "تصميم واجهات المستخدم الأمامية باستخدام Next.js.",
        experience5Responsibility5: "إدارة خوادم Google Cloud وLinux وMicrosoft Azure.",
        experience6Responsibility1: "إنشاء تطبيق شبيه بتيك توك مع إمكانيات الدردشة الصوتية والفيديو مع ميزات احترافية.",
        experience6Responsibility2: "بناء التطبيق وواجهته باستخدام Java وAndroid Studio.",
        experience6Responsibility3: "إدارة الخوادم وواجهات برمجة التطبيقات باستخدام Next.js وLinux وPython Flask.",
        experience7Responsibility2: "تطوير واجهات المستخدم باستخدام React وNext.js.",
        experience7Responsibility3: "بناء تطبيقات موبايل باستخدام Flutter وJava.",
        experience7Responsibility4: "إنشاء واجهات برمجة تطبيقات باستخدام Flask وNext.js.",
        experience7Responsibility5: "إنشاء قواعد بيانات باستخدام MySQL وPostgreSQL مع Supabase.",
        experience7Responsibility6: "إدارة خوادم Linux وGoogle Cloud.",
        experience8Responsibility1: "مسؤول عن تطوير المناهج والمواد التعليمية التفاعلية.",
        experience8Responsibility2: "اختيار وتقييم المدرسين.",
        experience9Responsibility2: "إنشاء واجهات خلفية باستخدام Python وFlask.",
        experience9Responsibility3: "تطوير أنظمة تحليل البيانات باستخدام Python وTensorFlow.",
        research1Detail2: "استخراج أكثر من 7,730 ميزة لكل نبضة في كل طول موجي.",
        research1Detail3: "تدريب نماذج الذكاء الاصطناعي للكشف المبكر عن الفشل الكلوي وتقدير مستويات السكر في الدم.",
        research2Detail1: "نُشر في مؤتمر EFES الدولي للبحث العلمي والابتكار.",
        research3Detail2: "تحتوي كل وحدة على 5 أقسام تغطي مهارات تعليمية مختلفة (التعليمات، الاستكشاف، البحث، التعاون، والتجريب).",
        research3Detail3: "يحتوي كل مستوى على مشروع موزع على الوحدات لضمان التعلم المستمر وتحقيق نتائج ملموسة في نهاية كل مستوى.",
        research4Detail1: "الجائزة الثالثة في فئة العلوم-التكنولوجيا/المشاريع في جوائز الطلاب الدولية 2021.",
        processing_images: "معالجة الصور",
        signal_analysis: "تحليل الإشارات",
        machine_learning: "التعلم الآلي",
        neural_networks: "الشبكات العصبية",
        native_language_arabic: "العربية (اللغة الأم)",
        intermediate_english: "الإنجليزية (مستوى B2)",
        fluent_turkish: "التركية (مستوى C1+ أكاديمي)",
        },
        };
        
        const WrappedTahaPortfolio = () => (
        <LanguageProvider>
        <TahaPortfolio />
        </LanguageProvider>
        );
        
        export default WrappedTahaPortfolio;