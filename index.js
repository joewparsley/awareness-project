// Global Variables******************************************
var phoneInput = null;
var urlInput = null;
var fileInput = null;
var languageInput = null;
var selectedLanguages = [];
var output = [];

var staticText = {
    en:{
        title:"Report your concerns in confidence",
        body:"If you see or suspect wrongdoing, speak up. It’s free, secure and we’re available 24/7.",
        contact:"How to contact us"
    },
    es:{
        title:"Informe sus inquietudes en confianza",
        body:"Si ve o sospecha de una mala acción, hable. Es gratis, seguro y estamos disponibles 24/7.",
        contact:"Cómo contactarnos"
    },
    de:{
        title:"Melden Sie Ihre Bedenken vertraulich",
        body:"Wenn Sie ein Fehlverhalten bemerken oder vermuten, melden Sie sich. Es ist kostenlos, sicher und wir sind rund um die Uhr für Sie da.",
        contact:"Wie Sie uns erreichen"
    },
    fr:{
        title:"Signalez vos préoccupations en toute confiance",
        body:"Si vous voyez ou soupçonnez un acte répréhensible, parlez. C’est gratuit, sécurisé et disponible 24h / 24 et 7j / 7.",
        contact:"Comment nous contacter"
    }
};


// Functions *********************************************
function init() {
    // Set Global Variables
    phoneInput = document.getElementById("phone");
    urlInput = document.getElementById("url");
    fileInput = document.getElementById("logo");
    languageInput = document.getElementById("checkbox-group").children;

    // Set Button
    document.getElementById("button").addEventListener("click", function(event) {
        displayOutput();
    })
};

function displayOutput() {
    // Process Data
    getLanguageText(languageInput);
    prepareOutput(selectedLanguages);
    createPages(output);
    // Hide The Form
    $("#nav").hide();
    $("#form").hide();
    // Force Print
    setTimeout(function() {
        window.print();
    },5000);
};

function uploadImage (input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('.logo').attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
};

function getLanguageText(input) {
    for (i = 0; i < input.length; i++) {
        if (input[i].checked) {
            selectedLanguages.push(input[i].value)
        }
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
        dataOutput.logo = fileInput;
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
    uploadImage(fileInput);
}




// DOM Ready *********************************************
document.addEventListener("load", init());