// Global Variables******************************************
var phoneInput = null;
var urlInput = null;
var logoInput = null;
var bgInput = null;
var languageInput = null;
var selectedLanguages = [];
var output = [];

var staticText = {
    en:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"English"},
    af:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Afrikaans"},
    sq:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Albanian"},
    ar:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Arabic"},
    be:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Belarusian"},
    bs:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Bosnian"},
    bg:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Bulgarian"},
    my:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Burmese"},
    zhs:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Chinese (Simplified)"},
    zh:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Chinese (Traditional)"},
    hr:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Croatian"},
    cs:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Czech"},
    da:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Danish"},
    nl:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Dutch"},
    et:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Estonian"},
    fil:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Filipino"},
    fi:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Finnish"},
    nlbe:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Flemish"},
    frca:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"French (Canada)"},
    fr:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"French (France)"},
    ka:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Georgian"},
    de:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"German"},
    gr:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Greek"},
    he:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Hebrew"},
    hi:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Hindi"},
    hu:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Hungarian"},
    id:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Indonesian"},
    it:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Italian"},
    ja:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Japanese"},
    ko:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Korean"},
    lo:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Lao"},
    lv:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Latvian"},
    lt:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Lithuanian"},
    ms:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Malay"},
    kxd:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Malay (Brunei)"},
    no:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Norwegian"},
    fa:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Persian (Farsi)"},
    pl:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Polish"},
    pt:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Portuguese"},
    ro:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Romanian"},
    ru:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Russian"},
    sr:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Serbian (Cyrillic)"},
    srcs:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Serbian (Latin)"},
    sk:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Slovak"},
    sl:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Slovenian"},
    so:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Somali"},
    es:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Spanish"},
    ke:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Swahili"},
    th:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Thai"},
    tr:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Turkish"},
    uk:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Ukrainian"},
    ur:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Urdu"},
    vi:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Vietnamese"},
    cy:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Welsh"},
    zu:{title:"Report your concerns in confidence",body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we're available 24/7.",contact:"How to contact us",lang:"Zulu"}    
};


// Functions *********************************************
function init() {
    createLanguageCheckboxes();


    // Set Global Variables
    phoneInput = document.getElementById("phone");
    urlInput = document.getElementById("url");
    logoInput = document.getElementById("logo");
    bgInput = document.getElementById("bg");
    languageInput = document.getElementById("lang-checkbox-group").children;

    // Hide print and home buttons that display once posters are generated.
    $("#homeButton").hide();
    $("#printButton").hide();

    // Set up button to create posters
    document.getElementById("button").addEventListener("click", function(event) {
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
            $('.logo').attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
};

function uploadBackground (input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var posterPages = document.getElementsByClassName("page-wrapper");
            for (i = 0; i < posterPages.length; i++) {
                posterPages[i]. style.backgroundImage = "url('" + e.target.result + "')";
            }
        };
        reader.readAsDataURL(input.files[0]);
    }
};

function getLanguageText(input) {
    for (i = 0; i < input.length; i++) {
        console.log(input[i]);
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
            phone:"",
            background:""
        };
        dataOutput.title = staticText[langs[i]].title;
        dataOutput.body = staticText[langs[i]].body;
        dataOutput.contact = staticText[langs[i]].contact;
        dataOutput.logo = logoInput;
        dataOutput.background = bgInput;
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
        var logoElement = document.createElement("img");
        var logoElementWrapper = document.createElement("div");
        var urlElement = document.createElement("p");
        var phoneElement = document.createElement("p");
        var contactWrapper = document.createElement("div");
        // Add Classes
        logoElement.classList.add("logo");
        logoElementWrapper.append(logoElement);
        logoElementWrapper.classList.add("logo-wrapper");
        pageWrapper.classList.add("page-wrapper");
        contactWrapper.classList.add("contact-wrapper");
        // Font Color Check
        document.getElementById("black-text").checked ? pageWrapper.style.color = "#000" : pageWrapper.style.color = "#fff";
        // Place text in elements
        titleElement.innerText = page[i].title;
        bodyElement.innerText = page[i].body;
        contactElement.innerText = page[i].contact;
        urlElement.innerText = page[i].url;
        phoneElement.innerText = page[i].phone;
        // Wrap Elements in a container
        pageWrapper.append(titleElement);
        pageWrapper.append(bodyElement);
        // Wrap contact info
        contactWrapper.appendChild(contactElement);
        contactWrapper.appendChild(urlElement);
        contactWrapper.appendChild(phoneElement);
        // Wrap contact info and logo
        pageWrapper.append(contactWrapper);
        pageWrapper.append(logoElementWrapper);
        // Append elements to DOM
        document.getElementById("output").append(pageWrapper);
    }
    //  Upload Images
    uploadLogo(logoInput);
    uploadBackground(bgInput);
};

// DOM Ready *********************************************
document.addEventListener("load", init());