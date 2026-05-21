(function () {
    'use strict';

    var STORAGE_KEY = 'ihs_lang';
    var currentLang = localStorage.getItem(STORAGE_KEY) || 'mn';

    var T = {
        mn: {
            nav: { home: 'Нүүр', services: 'Үйлчилгээ', news: 'Мэдээлэл', intro: 'Танилцуулга', about: 'Бидний тухай', gallery: 'Зургийн сан', contact: 'Холбоо барих' },
            mob: { openMenu: 'Цэс нээх' },
            clients: { title: 'Манай хамтрагчид' },
            stats: { clients: 'Харилцагч', specialists: 'Мэргэжилтэн', experience: 'Ажлын туршлага (жил)', departments: 'Алба, хэлтэс' },
            footer: {
                licenses: 'Зөвшөөрлүүд',
                stateReg: 'Улсын бүртгэл: 9011173142',
                ministry: 'Барилга хот байгуулалтын яам: БУ-18-40/17',
                telecom: 'Харилцаа холбооны зохицуулах хороо: 20520023 · 205110005',
                police: 'Цагдаагийн ерөнхий газар: 201807000088',
                copyright: '© 2026. Бүх эрх хуулиар хамгаалагдсан – "Их Хар Сүлд ХХК"'
            },
            home: {
                heroTagline: 'Таны аюулгүй байдлын баталгаа',
                heroDesc: '24/7 цагийн тасралтгүй харуул хамгаалалт, орчин үеийн инженер техник, дохиолол хамгаалалтын иж бүрэн үйлчилгээ.',
                aboutTitle: 'Аюулгүй байдлаа бидэнд даатга',
                aboutDesc: '<strong>Их хар сүлд ХХК</strong> нь 20 гаруй жилийн туршлагатай, 1000+ гаруй харилцагчидтай хамгаалалт, дохиолол, техникийн үйлчилгээний тэргүүлэх компани юм. Харилцагчдынхаа талархал хүндэтгэлийг хүлээж ирсэн нь манай хамтын ажиллагааны бахдам амжилт.',
                servicesTitle: 'ИЖ БҮРЭН ХАМГААЛАЛТЫН ШИЙДЛҮҮД',
                s1Title: 'Харуул хамгаалалт',
                s1Desc: 'Объект, байгууллагын аюулгүй байдлыг 24/7 цагийн турш мэргэшсэн харуул хамгаалагчдаар хангана. Аж ахуйн нэгж, орон сууц, худалдааны төв болон нийтийн газруудад иж бүрэн хамгаалалтын үйлчилгээ үзүүлдэг.',
                s2Title: 'Аюулгүй байдлын үйлчилгээ',
                s2Desc: 'Маркетинг, сургалт, судалгааны алба — чанар, стандартын хэрэгжилтэд тасралтгүй хяналт тавина. Эрсдэлийн үнэлгээ, аюулгүй байдлын аудит болон зөвлөгөө өгдөг.',
                s3Title: 'Удирдлага, Хяналтын Нэгдсэн Төв',
                s3Desc: 'Дэвшилтэт технологиор бүрэн тоноглогдсон, 24 цагийн тасралтгүй хяналтын мэргэшсэн төв. Бодит цагийн дата дамжуулалт, автомат хариу арга хэмжээний систем.',
                s4Title: 'Шадар, Хувийн Хамгаалалт ба Групп',
                s4Desc: 'Шадар болон бүлгийн хувийн хамгаалалтын үйлчилгээ. VIP хамгаалалтад мэргэшсэн, олон улсын стандартыг баримтлах баг. Бэлтгэгдсэн мэргэжилтнүүд.',
                s5Title: 'Мэдээлэл, Технологийн Аюулгүй Байдлын Алба',
                s5Desc: 'Орчин үеийн технологид суурилсан дохиолол хамгаалалт, хяналтын системийн суурилуулалт. Бодит цагийн мэдээллээр өөрийн өмчийг зайнаас хянах "Сүлд" систем.',
                s6Title: 'Тусгай Хэрэгсэл ба Тоног Төхөөрөмж',
                s6Desc: 'Хяналтын камер, тактикал хувцас, галын хор болон аюулгүй байдлын тусгай хэрэгслийн худалдаа. Суурилуулалт болон техникийн засвар үйлчилгээ.'
            },
            services: {
                aboutTitle: 'Бидний үйлчилгээний төрлүүд',
                types: '1. Дохиолол хамгаалалт <br> 2. Биечилсэн хамгаалалт <br> 3. Зайны хяналт (Хяналтын камерт суурилагдсан) <br> 4. Ачаа тээш, мөнгөн тэмдэгт, үнэт зүйлсийн тээвэрлэлт <br> 5. Галын дохиоллын систем угсралт, суурилуулалт (Fire alarm system) <br> 6. Цахилгаан шугам сүлжээ, угсралт, дотоод сүлжээ (Electric and arrangement Installation) <br> 7. Цаг бүртгэлийн систем (Attendance management system) <br> 8. Аудио, видео, домофон систем (Audio Video Doorphone system) <br> 9. Зарлан мэдээллийн систем (PA System) <br> 10. Тээврийн хэрэгсэл, бие хүний хяналт, хамгаалалтын GPS систем <br> 11. Галын хор, гамшгаас хамгаалах хэрэгслэлийн худалдаа <br> 12. Электрон хамгаалалтын хаалга (EAS Door) <br> 13. Бүх төрлийн сейф <br> 14. Соронзон цоож, нэвтрэх систем <br> 15. Авто зогсоолын смарт хаалт <br> 16. Харуул хамгаалалтын хяналтын систем <br> 17. Банкны АТМ-ын хамгаалалтын үйлчилгээ <br> 18. Тусгай зориулалтын техник хэрэгсэлийн худалдаа <br> 19. X-RAY бүх төрлийн хяналтын систем <br> 20. Хамгаалалтын Лед гэрэл <br> 21. Автомашин, барилга байгууламжийн тусгай <br> 22. Замын тэмдэг, тэмдэглэгээ <br> 23. Техник, программ хангамжийн үйлчилгээ <br> 24. Сургалт, зөвлөгөө, судалгаа <br> 25. Зөвлөх үйлчилгээ',
                engTitle: 'ИНЖЕНЕР ТЕХНИКИЙН ҮЙЛЧИЛГЭЭНИЙ ДАВУУ ТАЛ',
                eng1: 'Судалгаа шинжилгээний хэлтэс',
                eng2: 'Инженер техникийн угсралт, суурилуулалтын мэргэшсэн алба',
                eng3: 'Программ хангамж, техник серверийн үйлчилгээ',
                eng4: 'Мэдээлэл, технологийн аюулгүй байдлын алба',
                eng5: 'GPS-ын хяналтын өөрийн сервер, үйлчилгээ',
                eng6: 'Шуурхай байдлыг хангах мэргэшсэн албан хаагчидтай',
                eng7: 'Удирдагын хяналтын нэгдсэн төвтэй',
                eng8: 'Тоног төхөөрөмж засварлах мэргэжлийн багтай',
                eng9: 'Инженер техникийн зөвөлгөө, тусламжийн үйлчилгээ',
                secTitle: 'ХАРУУЛ ХАМГААЛАЛТЫН ҮЙЛЧИЛГЭЭНИЙ ДАВУУ ТАЛ',
                sec1: 'Сургалт, судалгааны хэлтэс',
                sec2: 'Аюулгүй байдал, бодлого зохицуулалтын алба',
                sec3: 'Гал унтраах, аврах ажиллагааны мэргэшсэн алба',
                sec4: 'Харуул хамгаалалтын нэгдсэн удирдлага, дотоод хяналтын систем',
                sec5: 'Улаанбаатар хот болон орон нутгийн 24 цагийн харуул хамгаалалтын үйлчилгээ',
                sec6: 'Удирдлагын хяналтын төвтэй.'
            },
            aboutUs: {
                heroTitle: 'Их Хар Сүлд ХХК — Таны аюулгүй байдлын итгэлтэй түнш',
                heroDesc: '2005 оноос хойш Монголын аюулгүй байдлын салбарт тэргүүлж, 1100+ гаруй харилцагчийн итгэлийг хүлээн ажиллаж байна.',
                companyTitle: 'Компанийн тухай',
                companyP1: 'Их Хар Сүлд ХХК нь 2005 онд үүсгэн байгуулагдсан бөгөөд Монгол улсын хамгаалалт, дохиолол, инженер техникийн аюулгүй байдлын салбарт 20 гаруй жил тасралтгүй ажиллаж ирсэн тэргүүлэх компани юм. Манай компани нь улсын болон хувийн хэвшлийн байгууллага, аж ахуйн нэгж, иргэдэд иж бүрэн хамгаалалтын шийдлийг санал болгодог.',
                companyP2: 'Бид 350 гаруй мэргэшсэн мэргэжилтэн, тусгай бэлтгэлтэй харуул хамгаалагч, инженер техникийн ажилтнуудаасаа бүрдсэн хамт олонтойгоо харилцагч бүрийн хэрэгцээнд нийцсэн, чанарын өндөр стандарт бүхий үйлчилгээг тасралтгүй үзүүлж байна.',
                missionTitle: '🎯 Эрхэм зорилго',
                missionDesc: 'Таны эрүүл мэнд, эд хөрөнгийг найдвартай хамгаална.',
                visionTitle: '👁 Алсын харaa',
                visionDesc: 'Тогтвор суурьшилтай ажиллах.',
                valuesTitle2: '⚙ Үнэт зүйлс',
                valuesDesc2: 'Хамгийн үнэтэй зүйл "Ажиллах хүч"',
                historyTitle: 'Манай түүх',
                h2005Title: 'Компани үүсгэн байгуулагдав',
                h2005Desc: '2005 оноос биечилсэн хамгаалалт, дохиолол, зайны хяналт, инженер техникийн үйлчилгээ, хамгаалалт, аюулгүй байдал, гал, гамшгаас хамгаалах тоног төхөөрөмж нийлүүлэлт, суурилуулалт, программ хангамж, практик сургалтын чиглэлээр үйл ажиллагаа явуулан салбартаа тэргүүлж харилцагчдын сэтгэл ханамж, аюулгүй байдал, нэр төрийн баталгааг эрхэм болгон ажиллаж байна.',
                h2010Title: 'Үйлчилгээний цар хүрээ өргөжив',
                h2010Desc: '2010 оноос Олон Улсын Бие Хамгаалах Академийн Монгол дахь төлөөлөгчөөр сонгогдон хамгаалалтын сургалтын үйл ажиллагааг тогтмол явуулснаар гэмт халдлага, гал түймэр, хулгайн (300 гаруй удаагийн) үйлдлийг газар дээр нь таслан Зогсоож харилцагчдынхаа талархал хүндэтгэлийг хүлээж ирсэн нь бидний хамтын ажиллагааны бахдам амжилт юм.',
                h2013Title: 'Удирдлагын Хяналтын Нэгдсэн Төв нээгдэв',
                h2013Desc: '24/7 цагийн тасралтгүй хяналтын мэргэшсэн төв байгуулагдаж, бодит цагийн хяналт, хурдан хариу арга хэмжээний систем нэвтэрлээ.',
                h2024Title: '1000+ харилцагчийн итгэлийг хүлээв',
                h2024Desc: 'Монгол улсын нийт аймагт үйлчилгээ хүргэж, 1000 гаруй харилцагч, 350 гаруй мэргэжилтэнтэй томоохон байгууллага болон өсөв.',
                h2026Title: '1100+ харилцагчийн итгэлийг хүлээв',
                h2026Desc: 'Харилцагч өөрийн гар утсаар өмчөө зайнаас хянах боломжийг олгосон "Сүлд" мэдээлэл технологийн аюулгүй байдлын системийг амжилттай нэвтрүүллэв.',
                coreValuesTitle: 'МАНАЙ ҮНЭ ЦЭНЭ',
                cv1Title: 'Найдвартай байдал',
                cv1Desc: 'Харилцагч бүрийн аюулгүй байдлыг 24/7 цагаар тасралтгүй хамгаалж, хүлээсэн үүргээ нарийн биелүүлнэ.',
                cv2Title: 'Мэргэжлийн ур чадвар',
                cv2Desc: 'Байнгын сургалт, чадавхижуулалтаар дамжуулан багийнхаа мэдлэг, ур чадварыг тасралтгүй дээшлүүлнэ.',
                cv3Title: 'Итгэлцэл',
                cv3Desc: 'Харилцагчтайгаа нээлттэй, шударга харилцааг эрхэмлэж, урт хугацааны найдвартай түншлэлийг бүрдүүлнэ.',
                cv4Title: 'Технологийн дэвшил',
                cv4Desc: 'Орчин үеийн дэвшилтэт технологийг нэвтрүүлж, харилцагч бүрт хамгийн үр дүнтэй хамгаалалтын шийдлийг санал болгоно.',
                cv5Title: 'Нэр төр',
                cv5Desc: 'Монгол улсын аюулгүй байдлын салбарт нэр хүндтэй байгууллага болохыг эрмэлзэн, бүх үйл ажиллагаандаа өндөр стандартыг баримтална.',
                cv6Title: 'Нийгмийн хариуцлага',
                cv6Desc: 'Монгол нийгэмд аюулгүй орчин бүрдүүлэхэд хувь нэмрээ оруулж, ажлын байр шинээр бий болгон, дараагийн үеийн мэргэжилтнийг бэлдэнэ.',
                licensesTitle: 'Зөвшөөрөл ба баталгаажуулалт',
                licensesDesc: 'Их Хар Сүлд ХХК нь Монгол улсын холбогдох хууль тогтоомж, эрх бүхий байгууллагуудын зөвшөөрлийн дагуу, нийтэд итгэмжлэгдсэн байдлаар үйл ажиллагаа явуулдаг.',
                licStateReg: 'Улсын бүртгэл',
                licMinistry: 'Барилга хот байгуулалтын яам',
                licTelecom: 'Харилцаа холбооны зохицуулах хороо',
                licPolice: 'Цагдаагийн ерөнхий газар'
            },
            contact: {
                title: 'Холбоо барих',
                cardPhone: 'Утас',
                cardEmail: 'И-мэйл',
                cardAddress: 'Хаяг',
                cardAddressText: 'Улаанбаатар хот, Чингэлтэй дүүрэг,<br> 4-р хороо, 18/1 байр, 3 давхар, 7 тоот',
                cardHours: 'Ажлын цаг',
                cardHoursWeekday: 'Даваа – Баасан: 09:00 – 18:00',
                cardHoursWeekend: 'Бямба – Ням: 24/7 шуурхай',
                formEmail: 'Таны и-мэйл:',
                formEmailPlaceholder: 'example@mail.com',
                formMessage: 'Таны мессеж:',
                formMessagePlaceholder: 'Энд бичнэ үү...',
                formSubmit: 'Илгээх'
            },
            gallery: { title: 'ЗУРГИЙН САН' },
            intro: { title: 'Танилцуулга цахим ном' }
        },

        en: {
            nav: { home: 'Home', services: 'Services', news: 'News', intro: 'Introduction', about: 'About Us', gallery: 'Gallery', contact: 'Contact' },
            mob: { openMenu: 'Open menu' },
            clients: { title: 'Our Partners' },
            stats: { clients: 'Clients', specialists: 'Specialists', experience: 'Years of Experience', departments: 'Departments' },
            footer: {
                licenses: 'Licenses',
                stateReg: 'State Registration: 9011173142',
                ministry: 'Ministry of Construction: BU-18-40/17',
                telecom: 'Communications Regulatory Commission: 20520023 · 205110005',
                police: 'National Police Agency: 201807000088',
                copyright: '© 2026. All rights reserved – "Ikh Khar Suld LLC"'
            },
            home: {
                heroTagline: 'Your Security Guarantee',
                heroDesc: '24/7 uninterrupted security guard services, modern engineering, and comprehensive alarm protection.',
                aboutTitle: 'Entrust Your Security to Us',
                aboutDesc: '<strong>Ikh Khar Suld LLC</strong> is a leading security, alarm, and technical services company with 20+ years of experience and 1,000+ clients. Earning the trust and gratitude of our clients is our greatest achievement.',
                servicesTitle: 'COMPREHENSIVE SECURITY SOLUTIONS',
                s1Title: 'Security Guard Services',
                s1Desc: 'Professional 24/7 security guard services for facilities and organizations. Comprehensive security for businesses, residential complexes, shopping centers, and public venues.',
                s2Title: 'Security Consulting Services',
                s2Desc: 'Marketing, training, and research division — continuous monitoring of quality and standards compliance. Risk assessment, security audits, and consulting services.',
                s3Title: 'Unified Command and Control Center',
                s3Desc: 'Fully equipped, state-of-the-art 24/7 professional monitoring center. Real-time data transmission and automated response systems.',
                s4Title: 'Personal and Group Protection',
                s4Desc: 'Personal and group bodyguard services. VIP protection specialists adhering to international standards. Highly trained professionals.',
                s5Title: 'IT Security Department',
                s5Desc: 'Installation of alarm and surveillance systems based on modern technology. The "Suld" system for remote real-time monitoring of your property.',
                s6Title: 'Special Equipment and Devices',
                s6Desc: 'Sales of CCTV cameras, tactical clothing, fire extinguishers, and special security equipment. Installation and technical maintenance services.'
            },
            services: {
                aboutTitle: 'Our Service Types',
                types: '1. Alarm protection <br> 2. Physical security <br> 3. Remote monitoring (camera-based) <br> 4. Cargo, currency, and valuables transportation <br> 5. Fire alarm system installation <br> 6. Electrical wiring, installation, and internal networking <br> 7. Attendance management system <br> 8. Audio, video, and door phone system <br> 9. Public address (PA) system <br> 10. Vehicle and personal GPS tracking and security system <br> 11. Fire extinguisher and disaster prevention equipment sales <br> 12. Electronic security door (EAS Door) <br> 13. All types of safes <br> 14. Magnetic locks and access control systems <br> 15. Smart parking gate <br> 16. Security guard monitoring system <br> 17. Bank ATM security services <br> 18. Special purpose equipment sales <br> 19. X-RAY and all types of inspection systems <br> 20. Security LED lighting <br> 21. Special services for vehicles and buildings <br> 22. Road signs and markings <br> 23. Hardware and software services <br> 24. Training, consulting, and research <br> 25. Consulting services',
                engTitle: 'ENGINEERING SERVICE ADVANTAGES',
                eng1: 'Research and Analysis Department',
                eng2: 'Specialized Engineering Installation and Setup Division',
                eng3: 'Software, Hardware, and Server Services',
                eng4: 'Information and Technology Security Division',
                eng5: 'Proprietary GPS Monitoring Server and Service',
                eng6: 'Specialized Emergency Response Personnel',
                eng7: 'Unified Command and Control Center',
                eng8: 'Professional Equipment Maintenance Team',
                eng9: 'Engineering Technical Consulting and Support Services',
                secTitle: 'SECURITY GUARD SERVICE ADVANTAGES',
                sec1: 'Training and Research Department',
                sec2: 'Security and Policy Coordination Division',
                sec3: 'Specialized Firefighting and Rescue Division',
                sec4: 'Unified Guard Management and Internal Control System',
                sec5: '24-hour security guard services in Ulaanbaatar and the provinces',
                sec6: 'Command Control Center'
            },
            aboutUs: {
                heroTitle: 'Ikh Khar Suld LLC — Your Trusted Security Partner',
                heroDesc: 'Leading Mongolia\'s security sector since 2005, earning the trust of 1,100+ clients.',
                companyTitle: 'About the Company',
                companyP1: 'Ikh Khar Suld LLC was founded in 2005 and is a leading company with over 20 years of continuous operation in Mongolia\'s security, alarm, and engineering safety sector. Our company offers comprehensive security solutions to public and private sector organizations, businesses, and individuals.',
                companyP2: 'With a team of 350+ specialized professionals, specially trained security guards, and engineering staff, we continuously provide high-standard services tailored to each client\'s needs.',
                missionTitle: '🎯 Mission',
                missionDesc: 'To reliably protect your health and property.',
                visionTitle: '👁 Vision',
                visionDesc: 'To operate with stability and sustainability.',
                valuesTitle2: '⚙ Core Values',
                valuesDesc2: 'Our greatest asset is our "Workforce".',
                historyTitle: 'Our History',
                h2005Title: 'Company Founded',
                h2005Desc: 'Since 2005, we have operated in physical security, alarm systems, remote monitoring, engineering services, safety, disaster prevention equipment supply and installation, software, and practical training — leading the industry and prioritizing client satisfaction, safety, and reputation.',
                h2010Title: 'Service Scope Expanded',
                h2010Desc: 'Since 2010, selected as the Mongolian representative of the International Personal Protection Academy, we have regularly conducted security training and stopped 300+ criminal offenses, fires, and thefts on-site — earning the gratitude of our clients, a proud achievement of our teamwork.',
                h2013Title: 'Unified Command and Control Center Established',
                h2013Desc: 'A specialized 24/7 continuous monitoring center was established, introducing real-time surveillance and rapid response systems.',
                h2024Title: 'Earned the Trust of 1,000+ Clients',
                h2024Desc: 'Expanded to serve all provinces of Mongolia, growing into a major organization with 1,000+ clients and 350+ specialists.',
                h2026Title: 'Earned the Trust of 1,100+ Clients',
                h2026Desc: 'Successfully launched the "Suld" IT security system, enabling clients to remotely monitor their property from their mobile phones.',
                coreValuesTitle: 'OUR VALUES',
                cv1Title: 'Reliability',
                cv1Desc: 'We provide uninterrupted 24/7 protection for every client and fulfill our commitments with precision.',
                cv2Title: 'Professional Excellence',
                cv2Desc: 'We continuously improve our team\'s knowledge and skills through ongoing training and capacity building.',
                cv3Title: 'Trust',
                cv3Desc: 'We prioritize open, honest relationships with clients and build long-term, reliable partnerships.',
                cv4Title: 'Technological Innovation',
                cv4Desc: 'We adopt modern advanced technology to offer each client the most effective security solutions.',
                cv5Title: 'Integrity',
                cv5Desc: 'We strive to be a respected organization in Mongolia\'s security sector, maintaining high standards in all our activities.',
                cv6Title: 'Social Responsibility',
                cv6Desc: 'We contribute to creating a safer environment for Mongolian society, creating new jobs and training the next generation of professionals.',
                licensesTitle: 'Licenses and Certifications',
                licensesDesc: 'Ikh Khar Suld LLC operates in full compliance with relevant Mongolian legislation and the authorizations of competent authorities.',
                licStateReg: 'State Registration',
                licMinistry: 'Ministry of Construction',
                licTelecom: 'Communications Regulatory Commission',
                licPolice: 'National Police Agency'
            },
            contact: {
                title: 'Contact',
                cardPhone: 'Phone',
                cardEmail: 'Email',
                cardAddress: 'Address',
                cardAddressText: 'Ulaanbaatar city, Chingeltei district,<br> 4th khoroo, Building 18/1, 3rd floor, Room 7',
                cardHours: 'Working Hours',
                cardHoursWeekday: 'Mon – Fri: 09:00 – 18:00',
                cardHoursWeekend: 'Sat – Sun: 24/7 Emergency',
                formEmail: 'Your email:',
                formEmailPlaceholder: 'example@mail.com',
                formMessage: 'Your message:',
                formMessagePlaceholder: 'Write here...',
                formSubmit: 'Send'
            },
            gallery: { title: 'PHOTO GALLERY' },
            intro: { title: 'Digital Introduction' }
        }
    };

    function getVal(obj, key) {
        return key.split('.').reduce(function (o, k) {
            return o && o[k] !== undefined ? o[k] : undefined;
        }, obj);
    }

    function applyTranslations(t) {
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var v = getVal(t, el.getAttribute('data-i18n'));
            if (v !== undefined) el.textContent = v;
        });
        document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
            var v = getVal(t, el.getAttribute('data-i18n-html'));
            if (v !== undefined) el.innerHTML = v;
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
            var v = getVal(t, el.getAttribute('data-i18n-placeholder'));
            if (v !== undefined) el.setAttribute('placeholder', v);
        });
        document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
            var v = getVal(t, el.getAttribute('data-i18n-aria'));
            if (v !== undefined) el.setAttribute('aria-label', v);
        });
        document.documentElement.lang = currentLang === 'en' ? 'en' : 'mn-MN';
        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            btn.classList.toggle('lang-btn--active', btn.dataset.lang === currentLang);
        });
    }

    function setLang(lang) {
        currentLang = lang;
        localStorage.setItem(STORAGE_KEY, lang);
        applyTranslations(T[lang] || T.mn);
    }

    function init() {
        applyTranslations(T[currentLang] || T.mn);
    }

    window.setLang = setLang;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
