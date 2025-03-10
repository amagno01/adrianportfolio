/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () =>{
const header = document.getElementById('header')
   // When the scroll is greater than 50 viewport height, add the shadow-header class to the header tag
this.scrollY >= 50 ? header.classList.add('shadow-header') 
: header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission

    emailjs.sendForm('service_m5cw7og', 'template_m12irm9', '#contact-form', 'uwT9GRr4xDwJLj7tr')
        .then(() => {
            contactMessage.textContent = "Message sent successfully ✅";
            contactMessage.style.color = "green";

            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);

            contactForm.reset(); // Clear input fields

        }).catch((error) => {
            contactMessage.textContent = "Message not sent ❌ (Service Error)";
            contactMessage.style.color = "red";
            console.error("EmailJS Error:", error);
        });
}

contactForm.addEventListener('submit', sendEmail);

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId = current.getAttribute('id'),
			sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true // Animations repeat
})

sr.reveal(`.home__perfil, .about__image, .contact__mail`, {origin: 'right'})
sr.reveal(`.home__name, .home__info, 
            .about__container .section__title-1, .about__info, 
            .contact__social, .contact__data`, {origin: 'left'})
sr.reveal(`.services__card, .projects__card`, {interval: 100})




document.addEventListener("DOMContentLoaded", function () {
    let chatbotHeader = document.getElementById("chatbot-header");
    let chatbotBox = document.getElementById("chatbot-box");
    let chatbotMessages = document.getElementById("chatbot-messages");
    let inputField = document.getElementById("chatbot-input");
    let sendButton = document.getElementById("chatbot-send");

    // Chatbot Toggle Function
    chatbotHeader.addEventListener("click", function () {
        chatbotBox.style.display = chatbotBox.style.display === "block" ? "none" : "block";
    });

    // Chatbot Response Function
    function getChatbotResponse(userMessage) {
        let lowerCaseMessage = userMessage.toLowerCase();

        // Responses based on keywords
        if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
            return "Hi there! I'm Adrian's chatbot. How can I assist you today?";
        } 
        else if (lowerCaseMessage.includes("how are you")) {
            return "I'm great! Thanks for asking. How about you?";
        } 
        else if (lowerCaseMessage.includes("your name")) {
            return "I'm Adrian's chatbot, built to assist with portfolio questions!";
        } 
        else if (lowerCaseMessage.includes("who is adrian")) {
            return "Adrian Magno is an Azure Developer with experience in web development, Java, Python, and cybersecurity!";
        }
        else if (lowerCaseMessage.includes("education")) {
            return "Adrian is currently pursuing a Bachelor's degree in Computer Technology - Network Enterprise Infrastructure at Bowie State University. He also holds an Associate’s degree from Prince George’s Community College.";
        }
        else if (lowerCaseMessage.includes("experience")) {
            return "Adrian has experience as a Jr. Software Developer at Cognosante MVH, a Jr. Associate Developer at Kurrent Logic LLC, and as a Cargo Specialist in the U.S. Army Reserves.";
        }
        else if (lowerCaseMessage.includes("skills")) {
            return "Adrian's skillset includes Python, Java, JavaScript, React.js, FastAPI, Azure Cloud Services, Git, and DevOps tools.";
        }
        else if (lowerCaseMessage.includes("projects")) {
            return "Adrian has worked on projects such as Tic-Tac-Toe AI, Metric Converter, Reverse Proxy Server using Fedora 40, and Ransomware Detection using Machine Learning. You can check them out in the projects section!";
        }
        else if (lowerCaseMessage.includes("resume")) {
            return "You can view or download Adrian's resume by visiting the Resume section on this website.";
        }
        else if (lowerCaseMessage.includes("certifications")) {
            return "Adrian holds certifications in Microsoft Azure Fundamentals and Lean Six Sigma Yellow Belt, and is currently working on the Azure Administrator certification.";
        }
        else if (lowerCaseMessage.includes("contact")) {
            return "You can contact Adrian through the Contact section of this website. Feel free to leave a message!";
        }
        else if (lowerCaseMessage.includes("bye")) {
            return "Goodbye! Have a great day!";
        }
        else if (lowerCaseMessage.includes("time")) {
            let currentTime = new Date().toLocaleTimeString();
            return `The current time is ${currentTime}.`;
        }
        else {
            return "I'm not sure I understand. Can you try rephrasing your question?";
        }
    }

    // Send Chat Message Function
    function sendChatMessage() {
        let userMessage = inputField.value.trim();
        if (userMessage === "") return; // Prevent sending empty messages

        // Append user message
        let userMessageElement = document.createElement("p");
        userMessageElement.innerHTML = `<strong>You:</strong> ${userMessage}`;
        chatbotMessages.appendChild(userMessageElement);

        // Clear input field
        inputField.value = "";

        // Auto-scroll to latest message
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

        // Simulate chatbot response
        setTimeout(() => {
            let botReply = getChatbotResponse(userMessage);

            let botMessageElement = document.createElement("p");
            botMessageElement.innerHTML = `<strong>Bot:</strong> ${botReply}`;
            chatbotMessages.appendChild(botMessageElement);

            // Auto-scroll after bot response
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }, 500);
    }

    // Event listener for "Send" button click
    sendButton.addEventListener("click", sendChatMessage);

    // Event listener for "Enter" key in the input field
    inputField.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevents new line
            sendChatMessage();
        }
    });
});




