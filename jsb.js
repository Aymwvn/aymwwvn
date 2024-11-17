document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded successfully!');

    document.querySelectorAll('.navbar a, .btn').forEach(link => {
        link.addEventListener('click', (e) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    document.querySelectorAll('.animate').forEach(element => {
        observer.observe(element);
    });

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 70;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    document.querySelector('.contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for reaching out! I will get back to you soon.');
        e.target.reset();
    });

    const textElement = document.getElementById('typing-text');
    const textList = ["CyberSecurity Engineer", "CyberSecurity Analyst", "Full-stack Developer"];
    let currentIndex = 0;
    let charIndex = 0;
    let typingSpeed = 100;
    let erasingSpeed = 50;
    let delayBetweenTexts = 1500;

    function typeText() {
        if (charIndex < textList[currentIndex].length) {
            textElement.textContent += textList[currentIndex][charIndex];
            charIndex++;
            setTimeout(typeText, typingSpeed);
        } else {
            setTimeout(eraseText, delayBetweenTexts);
        }
    }

    function eraseText() {
        if (charIndex > 0) {
            textElement.textContent = textList[currentIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseText, erasingSpeed);
        } else {
            currentIndex = (currentIndex + 1) % textList.length;
            setTimeout(typeText, typingSpeed);
        }
    }

    setTimeout(typeText, delayBetweenTexts); 
});
function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    document.getElementById(tabName).classList.add('active');
    document.querySelector(`button[onclick="showTab('${tabName}')"]`).classList.add('active');
}
const sections = document.querySelectorAll(".home-section, .about-section, .services-section");
sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop <= window.innerHeight) {
        section.classList.add("visible");
    }
});

