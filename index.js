// Global Variables******************************************
var phoneInput = null;
var urlInput = null;
var logoInput = null;
var languageInput = null;
var selectedLanguages = [];
var output = [];

var staticText = {
    en:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"English"},
    ar:{title:"ابلغ عن مخاوفك بثقةٍ تامة",body:"إذا علمت بأمر خطأ أو اشتبهت به، تحدث إلينا. فهذا مجاني وآمن كما أننا متاحون طوال اليوم في جميع أيام الأسبوع.",contact:"كيف تتصل بنا",lang:"Arabic"},
    be:{title:"আপনার উদ্বেগগুলি আত্মবিশ্বাসের সাথে প্রতিবেদন করুন",body:"আপনি যদি কোনরকম অপকর্ম হতে দেখেন বা তেমন কিছু সন্দেহ করেন, তাহলে জানান। এটি নিঃশুল্ক, নিরাপদ এবং আমরা 24/7 উপলব্ধ।",contact:"আমাদের সাথে কীভাবে যোগাযোগ করবেন",lang:"BE"},
    bg:{title:"Докладвайте своите проблеми поверително",body:"Ако станете свидетел или подозирате нередност, разкрийте я. Услугата ни е безплатна, сигурна и налична 24/7.",contact:"Как да се свържете с нас.",lang:"BG"},
    cz:{title:"Nahlaste své obavy důvěrně",body:"Pokud uvidíte špatné jednání, nebo na něj máte podezření, promluvte o tom. Je to bezplatné, bezpečné a jsme k dispozici 24 hodin denně.",contact:"Jak nás kontaktovat",lang:"CZ"},
    da:{title:"Indberet dine bekymringer i fortrolighed",body:"Hvis du oplever en forkert eller ulovlig handling, eller har mistanke om en sådan, skal du sige noget og ikke tie. Det er gratis, sikkert, og vi kan kontaktes 24/7",contact:"Sådan kontakter du os",lang:"DA"},
    de:{title:"Melden Sie Ihr Anliegen vertraulich",body:"Melden Sie sich bei uns, wenn Sie ein Fehlverhalten beobachten oder vermuten – unser Service ist kostenlos, sicher und rund um die Uhr verfügbar.",contact:"So nehmen Sie Kontakt mit uns auf",lang:"DE"},
    el:{title:"Αναφέρετε τις ανησυχίες σας εμπιστευτικά.",body:"Εάν δείτε ή εάν υποπτεύεστε κάποια αδικοπραγία, μιλήστε. Δωρεάν, με ασφάλεια και 24/7.",contact:"Πώς να επικοινωνήσετε μαζί μας",lang:"EL"},
    es:{title:"Puedes comunicar tus preocupaciones en confianza.",body:"Si ves o sospechas algún comportamiento ilícito, dilo.  Es gratis y seguro, y estamos disponibles las 24 horas del día.",contact:"Cómo contactarte con nosotros.",lang:"ES"},
    et:{title:"Teatage julgelt, mille pärast te muret tunnete",body:"Kui te näete või kahtlustate väärtegu, rääkige sellest. See ei maksa midagi, on turvaline ning saadaval iga päeva 24 tundi päevas.",contact:"Kuidas meiega ühendust võtta",lang:"ET"},
    fa:{title:"مشکلات خود را با اطمینان خاطر با ما درمیان گذارید.",body:"در صورت مشاهده خلاف یا چنانچه مشکوک به انجام خلاف هستید، آن را با ما درمیان گذارید. خدمات ما رایگان، ایمن و 7/24 است.",contact:"نحوه تماس با ما",lang:"FA"},
    fi:{title:"Raportoi huolenaiheesi luottamuksellisesti",body:"Jos näet väärinkäytöksen tai epäilet sellaista, puhu asiasta. Palvelu on ilmainen, turvallinen ja olemme saatavilla 24/7.",contact:"Miten voit ottaa meihin yhteyttä",lang:"FI"},
    fr:{title:"Faites-nous part de vos problèmes en toute confiance",body:"Si vous suspectez ou vous êtes témoin d’un méfait, dites-le. C’est gratuit, sûr et nous sommes disponibles 24 heures sur 24, 7 jours sur 7.",contact:"Comment nous joindre.",lang:"FR"},
    hi:{title:"अपनी चिंताओं की रिपोर्ट गुप्त रूप से करें",body:"यदि आप किसी ग़लत कार्य को देखते हैं या शक है, तो साफ तौर पर बोलें। यह निःशुल्क, सुरक्षित है और हम 24/7 उपलब्ध हैं।",contact:"हमसे सम्पर्क कैसे करना है",lang:"HI"},
    hr:{title:"Prijavite o svojim brigama na povjerljiv način",body:"Ako vidite ili posumnjate na prijestup, slobodno govorite. To je besplatno, sigurno a mi smo na raspolaganju 24 sata dnevno.",contact:"Kako nas kontaktirati.",lang:"HR"},
    hu:{title:"Jelentse aggályait biztonságosan",body:"Ha szabálysértést észlel vagy gyanít, szólaljon fel. Ingyenes, biztonságos és napi 24 órában, a hét minden napján megteheti.",contact:"Hogyan veheti fel velünk a kapcsolatot?",lang:"HU"},
    hy:{title:"Հաղորդեք Ձեր մտահոգությունների մասին գաղտնիության պայմաններում",body:"Եթե Դուք տեսնում, կամ կասկածում եք, որ տեղի է ունենում հակաօրինական գործողութուն՝ բարձրաձայնե՛ք։ Դա անվճար է, ապահով, իսկ մենք հասանելի ենք 24/7։ ",contact:"Ինչպես կապվել մեզ հետ",lang:"HY"},
    id:{title:"Laporkan permasalahan Anda secara rahasia",body:"Jika Anda melihat atau menduga adanya tindakan pelanggaran, ungkapkan. Kami bisa dihubungi secara gratis, aman dan tersedia 24/7. ",contact:"Bagaimana cara menghubungi kami.",lang:"ID"},
    it:{title:"Riporta le tue preoccupazioni in maniera confidenziale",body:"Se sei testimone di o sospetti delle ingiustizie, parlane. È gratis, sicuro e noi siamo disponibili 24 ore su 24, 7 giorni su 7.",contact:"Come contattarci.",lang:"IT"},
    ja:{title:"問題を匿名で報告しましょう",body:"不正行為を目撃した場合、またはその疑いがある場合は、報告してください。無料で安全、24時間いつでも利用できます。",contact:"弊社へのご連絡方法",lang:"JA"},
    ka:{title:"გაგვიზიარეთ თქვენი პრობლემები გაბედულად ",body:"იმ შემთხვევაში, თუ შეამჩნევთ ან ეჭვები გაგიჩნდებათ დანაშაულის შესახებ, აუცილებლად შეგვატყობინეთ. ეს ყველაფერი უფასო და უსაფრთხოა, ჩვენთან დაკავშირება შესაძლებელია 24/7 განმავლობაში. ",contact:"როგორ უნდა დაგვიკავშირდეთ? ",lang:"KA"},
    kk:{title:"Мәселелеріңізді мұқият хабарлаңыз",body:"Егер қате жұмысты көрсеңіз немесе анықтасаңыз, бізге айтыңыз. Бұл әрекет тегін, қауіпсіз және 24/7 бойы қолжетімді.",contact:"Бізге хабарласу жолы.",lang:"KK"},
    ko:{title:"우려 사항을 기밀로 안전하게 보고하십시오",body:"부정행위를 목격하거나 이러한 상황이 의심되는 경우, 이에 대해 보고해주십시오. 신고 서비스는 무료로, 안전하게, 하루 24시간 일주일 내내 이용 가능합니다.",contact:"연락 방법",lang:"KO"},
    ku:{title:"نیگەرانیەکانت بە نهێنی ڕابگەیەنە ",body:"ئەگەر گومانت لە کارێکی خراپ ، دەنگ بەرزکردنەوە کرد. ئەوە بێ بەرامبەر و سەلامەتە و ئێمە 24/7. بەردەستین. ",contact:"چۆن بتوانیت پەیوەندیمان پێوە بکەیت",lang:"KU"},
    lt:{title:"Nesibaimindami praneškite apie tai, kas jums kelia rūpestį",body:"Jei pastebėjote ar įtariate kokią nors negerovę, netylėkite. Apie ją galite pranešti nemokamai, saugiai ir bet kuriuo paros metu.",contact:"Kaip su mumis susisiekti.",lang:"LT"},
    lv:{title:"Konfidenciāli informējiet par problēmsituācijām",body:"Ja jūs redzat pārkāpumu vai jums ir aizdomas par pārkāpumu, ziņojiet par to. Tas ir bez maksas, droši, un mēs esam pieejami 24 stundas diennaktī.",contact:"Kā ar mums sazināties",lang:"LV"},
    ml:{title:"ആത്മവിശ്വാസത്തോടെ നിങ്ങളുടെ ആശങ്കകൾ റിപ്പോർട്ടുചെയ്യുക",body:"എന്തെങ്കിലും തെറ്റായാണ് നടക്കുന്നതെന്ന് നിങ്ങൾ സംശയിക്കുന്നുണ്ടെങ്കിൽ, തുറന്നുപറയുക. ഞങ്ങളുടെ സേവനം സൗജന്യമാണ്, ആഴ്ചയിൽ ഏഴ് ദിവസവും 24 മണിക്കൂറും ലഭ്യവുമാണ്.",contact:"ഞങ്ങളെ എങ്ങനെ ബന്ധപ്പെടാം",lang:"ML"},
    mr:{title:"आपले प्रश्न विश्वासाने कळवा.",body:"जर एखादी अयोग्य कृती आपल्या निदर्शानास आली तर त्याला वाचा फोडा. ते करणे मोफत आहे, सुरक्षितही आहे आणि आम्ही 24/7 उपलब्ध आहोत.",contact:"आमच्याशी संपर्क कसा साधावा?",lang:"MR"},
    ms:{title:"Laporkan kebimbangan anda dengan keyakinan",body:"Jika anda melihat atau mengesyaki salah laku, sila bersuara. Ia adalah percuma, selamat dan kami boleh didapati 24/7.",contact:"Bagaimana untuk menghubungi kami.",lang:"MS"},
    ne:{title:"आफ्ना सरोकारहरूलाई दृढतापूर्वक प्रतिवेदन गर्नुहोस्",body:"= तपाईंले गलत काम देख्नुभयो वा महसुस गर्नुभयो भने, आवाज उठाउनुहोस्। यो नि:शुल्क, सुरक्षित छ र हामी चौबिसै घण्टा सातै दिन उपलब्ध हुन्छौं।",contact:"हामीलाई कसरी सम्पर्क गर्ने।",lang:"NE"},
    nl:{title:"Meld uw zorgen in vertrouwen",body:"Als u misstanden ziet of vermoedt, praat er dan over. Het is gratis en veilig en wij zijn 24 uur per dag bereikbaar.",contact:"Hoe u contact met ons kunt opnemen.",lang:"NL"},
    no:{title:"Trygg rapportering av det som bekymrer deg ",body:"Si ifra når du ser eller mistenker urett. Det er gratis, trygt og vi er tilgjengelige døgnet rundt.",contact:"Slik kontaktes vi",lang:"NO"},
    pl:{title:"Zgłaszaj obawy, zachowując poufność",body:"Jeśli zauważysz lub podejrzewasz nadużycie, zgłoś to. Możesz to zrobić bezpłatnie, bezpiecznie i przez całą dobę.",contact:"Kontakt z nami.",lang:"PL"},
    pt:{title:"Denuncie, de forma confidencial, quaisquer preocupações que tenha",body:"Se presenciar ou suspeitar de alguma ilegalidade, denuncie. É gratuito, seguro e estamos ao seu dispor 24 horas por dia, 7 dias por semana.",contact:"Como entrar em contacto connosco.",lang:"PT"},
    ro:{title:"Raportați cu încredere îngrijorările dvs.",body:"Dacă vedeți sau suspectați practici incorecte, vorbiți. Este gratuit, sigur și suntem disponibili 24/7.",contact:"Cum ne puteți contacta.",lang:"RO"},
    ru:{title:"Конфиденциально сообщите о Ваших проблемах",body:"Если Вы стали свидетелем или подозреваете правонарушение, скажите об этом. Это бесплатно, безопасно, мы работаем круглосуточно и без выходных.",contact:"Как обратиться к нам",lang:"RU"},
    sk:{title:"Nahláste svoje obavy dôverne",body:"Ak uvidíte nesprávne konanie, alebo na neho budete mať podozrenie, prehovorte o tom. Je to bezplatné, bezpečné a sme k dispozícii 24 hodín denne.",contact:"Ako nás kontaktovať",lang:"SK"},
    sl:{title:"Svoje pomisleke sporočite zaupno",body:"Če opazite ali sumite na nepravilnosti, ne molčite. Storitev je brezplačna, varna in na voljo 24 ur na dan, vse dni v tednu.",contact:"Naši kontaktni podatki.",lang:"SL"},
    sq:{title:"Raportoni shqetësimet tuaja në konfidencë",body:"Nëse shikoni ose dyshoni se gjërat po bëhen gabim, flisni. Shërbimi është falas, i sigurt dhe ne jemi në dispozicion 24/7.",contact:"Si të na kontaktoni",lang:"SQ"},
    sr:{title:"Prijavite vašu zabrinutost u poverenju",body:"Ako vidite ili se sumnjate u prestup, iskažite se. Besplatno je, bezbedno je, a mi smo dostupni 24/7.",contact:"Kako da kontaktirate s nama.",lang:"SR"},
    sv:{title:"Rapportera dina orosmål konfidentiellt",body:"Om du upptäcker eller misstänker att något är på tok - berätta om det. Det är gratis, säkert och vi finns här dygnet runt för dig.",contact:"Så här kontaktar du oss.",lang:"SV"},
    sw:{title:"Ripoti mashaka yako kwa usiri",body:"Ukiona au ukishuku utendaji mbaya, zungumza. Ni bila malipo, salama na tunapatikana 24/7.",contact:"Jinsi ya kuwasiliana nasi.",lang:"SW"},
    ta:{title:"உங்கள் குறைகளை இரகசியமாகப் புகாரளியுங்கள்",body:"தவறாக நடப்பதைப் பார்த்தால் அல்லது தவறாக இருக்குமெனச் சந்தேகித்தால், வெளிப்படையாகத் தெரிவியுங்கள். இச்சேவை இலவசமானது, பாதுகாப்பானது, மேலும், நாங்கள் எல்லா நாட்களிலும் எல்லா நேரங்களிலும் இருப்போம்.",contact:"எங்களைத் தொடர்புகொள்ளும் முறை.",lang:"TA"},
    th:{title:"รายงานสิ่งที่ไม่สบายใจได้อย่างมั่นใจ",body:"หากคุณสงสัยว่ามีการกระทำผิด อย่าเก็บเงียบไว้ การรายงานทำได้โดยไม่มีค่าใช้จ่าย ปลอดภัย และทำได้ตลอด 24 ชั่วโมงทุกวัน",contact:"วิธีติดต่อเรา",lang:"TH"},
    tl:{title:"I-report ang inyong mga alalahanin ng may pagtitiwala.",body:"Kung ikaw ay nakapansin o naghihinalang may maling kaganapan, magsalita ka. Ito’y libre, ligtas at magagamit 24/7.",contact:"Paano makikipag-ugnayan sa amin.",lang:"TL"},
    tr:{title:"Endişelerinizi güvenilir bir şekilde bildirin",body:"Eğer bir yanlışlık görür veya şüphe duyarsanız, dile getirin. Ücretsiz, güvenli bir şekilde ve 7/24 bize ulaşabilirsiniz.",contact:"Bize nasıl ulaşabilirsiniz?",lang:"TR"},
    uk:{title:"Конфіденційне повідомлення про стурбованість",body:"Якщо ви бачите або підозрюєте порушення, не мовчіть. Це безкоштовно, безпечно та цілодобово.",contact:"Як з нами зв'язатися.",lang:"UK"},
    ur:{title:"اعتماد سے اپنے خدشات کی اطلاع دیں",body:"اگر آپ غلط کام ہوتے دیکھتے ہیں یا آپ کو شک ہے، تو ہم سے بات کریں۔ یہ مفت ہے، محفوظ ہے اور ہم 24/7 دستیاب ہیں۔",contact:"ہم سے رابطہ کیسے کرنا ہے۔",lang:"UR"},
    vi:{title:"Báo cáo mối lo ngại của bạn một cách bảo mật",body:"Nếu bạn nhìn thấy hoặc nghi ngờ có việc làm sai trái, hãy lên tiếng. Quá trình báo cáo hoàn toàn miễn phí, bảo mật và chúng tôi luôn sẵn sàng 24/7.",contact:"Làm thế nào để liên hệ với chúng tôi",lang:"VI"},
    we:{title:"Adroddwch am eich pryderon yn gyfrinachol",body:"Os ydych yn gweld neu’n amau bod camwedd yn digwydd, siaradwch. Mae am ddim, yn ddiogel, ac rydym ar gael 24/7.",contact:"Sut mae cysylltu â ni.",lang:"Welsh"},
    zhs:{title:"保密地报告您的疑虑",body:"如果您看到或怀疑不法行为，请说出来。我们的服务免费和安全，并全天无休。",contact:"如何联系我们。",lang:"ZHS"},
    zh:{title:"自信地報告您的疑慮",body:"如果您看到或懷疑有不法行為，請說出來。 我們的服務是免費且安全的，並提供24/7全天候服務。",contact:"如何联系我們。",lang:"ZH"}
    // ***TESTING DATA****
    // af:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Afrikaans"},
    // sq:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Albanian"},
    // ar:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Arabic"},
    // be:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Belarusian"},
    // bs:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Bosnian"},
    // bg:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Bulgarian"},
    // my:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Burmese"},
    // zhs:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Chinese (Simplified)"},
    // zh:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Chinese (Traditional)"} 
    // ***TESTING DATA****
};


// Functions *********************************************
function init() {
    createLanguageCheckboxes();

    // Set Global Variables
    phoneInput = document.getElementById("phone");
    urlInput = document.getElementById("url");
    logoInput = document.getElementById("logo");
    languageInput = document.getElementById("lang-checkbox-group").children;

    // Hide print and home buttons that display once posters are generated.
    $("#homeButton").hide();
    $("#printButton").hide();

    // Set up button to create posters
    document.getElementById("button").addEventListener("click", function(event) {
        // Clear old content
        document.getElementById("output").innerHTML = "";
        displayOutput();
    });
    // Set up Home button
    document.getElementById("homeButton").addEventListener("click", function(event) {
        location.reload();
    });
    // Setup print button
    document.getElementById("printButton").addEventListener("click", function(event) {
        $("#homeButton").hide();
        $("#printButton").hide();
        window.print();
        setTimeout(function() {
            $("#homeButton").show();
            $("#printButton").show();
        },100);
    });
};

function displayOutput() {
    // Process Data
    getLanguageText(languageInput);
    prepareOutput(selectedLanguages);
    createPages(output);
    // Hide The Form
    $("#nav").hide();
    $("#form").hide();
    // Show Buttons
    $("#homeButton").show();
    $("#printButton").show();
};

function uploadLogo (input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {

            $('.logo').css('background', "url(" + e.target.result + ") no-repeat center center");
            $('.logo').css('background-size', "contain");
        };
        reader.readAsDataURL(input.files[0]);
    }
};

function setBackground () {
    var posterPages = document.getElementsByClassName("page-wrapper");
    for (i = 0; i < posterPages.length; i++) {
        posterPages[i]. style.backgroundImage = "url('bg.jpg')";
    }
};

function getLanguageText(input) {
    for (i = 0; i < input.length; i++) {
        if (input[i].firstChild.checked) {
            selectedLanguages.push(input[i].firstChild.value)
        }
    }
};

function createLanguageCheckboxes() {
    var objectKeys = Object.keys(staticText);
    for (i = 0; i < objectKeys.length; i++) {
        // Create elements
        var cbLabel = document.createElement("label");
        var cbInput = document.createElement("input");
        var cbWrapper = document.createElement("div");
        // Set up Label
        cbLabel.setAttribute("for", staticText[objectKeys[i]].lang);
        cbLabel.innerHTML = staticText[objectKeys[i]].lang;
        // Set up Input
        cbInput.setAttribute("type", "checkbox");
        cbInput.setAttribute("name", staticText[objectKeys[i]].lang);
        cbInput.setAttribute("value", objectKeys[i]);
        // Add class
        cbWrapper.classList.add("cbwrapper");
        // Append to the output div
        cbWrapper.append(cbInput);
        cbWrapper.append(cbLabel);
        document.getElementById("lang-checkbox-group").append(cbWrapper);
    }
};

function prepareOutput(langs) {
    for (i = 0; i < langs.length; i++) {
        var dataOutput = {
            title:"",
            body:"",
            contact:"",
            logo:"",
            url:"",
            phone:""
        };
        dataOutput.title = staticText[langs[i]].title;
        dataOutput.body = staticText[langs[i]].body;
        dataOutput.contact = staticText[langs[i]].contact;
        dataOutput.logo = logoInput;
        dataOutput.url = urlInput.value;
        dataOutput.phone = phoneInput.value;
        output.push(dataOutput);
    };
};

function createPages(page) {
    for (i = 0; i < page.length; i++) {
        // Create Elements
        var pageWrapper = document.createElement("div");
        var titleElement = document.createElement("h1");
        var bodyElement = document.createElement("h2");
        var contactElement = document.createElement("h3");
        var urlElement = document.createElement("p");
        var phoneElement = document.createElement("p");
        var contactWrapper = document.createElement("div");
        var ngLogoElement = document.createElement("div");
        var customerLogoElement = document.createElement("div");
        var logoElementWrapper = document.createElement("div");
        var footerCopyText = document.createElement("p");
        // Add Classes
        ngLogoElement.classList.add("ngLogo")
        customerLogoElement.classList.add("logo");
        footerCopyText.classList.add("footer-copy");
        logoElementWrapper.classList.add("footer-wrapper");
        urlElement.classList.add("url");
        phoneElement.classList.add("phone");
        pageWrapper.classList.add("page-wrapper");
        contactWrapper.classList.add("contact-wrapper");
        // Prepare footer
        footerCopyText.innerText = "©2020 NAVEX Global®.  All Rights Reserved  NVX29171  01/19";
        logoElementWrapper.append(customerLogoElement);
        logoElementWrapper.append(ngLogoElement);
        logoElementWrapper.append(footerCopyText);
        // Place text in elements
        titleElement.innerText = page[i].title;
        bodyElement.innerText = page[i].body;
        contactElement.innerText = page[i].contact;
        urlElement.innerText = urlInput.value;
        phoneElement.innerText = phoneInput.value;
        // Wrap Elements in a container
        pageWrapper.append(titleElement);
        pageWrapper.append(bodyElement);
        // Wrap contact info
        contactWrapper.appendChild(contactElement);
        contactWrapper.appendChild(phoneElement);
        contactWrapper.appendChild(urlElement);
        // Wrap contact info and logo
        pageWrapper.append(contactWrapper);
        pageWrapper.append(logoElementWrapper);
        // Append elements to DOM
        document.getElementById("output").append(pageWrapper);
    }
    //  Upload Images
    uploadLogo(logoInput);
    setBackground();
};

// DOM Ready *********************************************
document.addEventListener("load", init());