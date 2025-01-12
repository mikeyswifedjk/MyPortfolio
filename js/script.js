// Scroll to top functionality
const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 200) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Typing Animation Effect
const typingElement = document.getElementById('typing-text');
const greetings = ['Hi, I\'m Maika. Nice meeting you!', 'Ciao, sono Maika. Piacere di conoscerti!', 'Hey, I\'m Maika. Nice to meet you!', 'Hello, I\'m Maika. It\'s a pleasure to meet you!'];
let index = 0;

function typeText() {
    let currentGreeting = greetings[index];
    typingElement.textContent = '';
    let i = 0;

    let typingInterval = setInterval(() => {
        typingElement.textContent += currentGreeting[i];
        i++;
        if (i >= currentGreeting.length) {
            clearInterval(typingInterval);
            setTimeout(() => {
                index = (index + 1) % greetings.length;
                typeText(); // Type the next greeting
            }, 1000); // Wait before changing to the next greeting
        }
    }, 100); // Speed of typing
}

typeText(); // Start typing the first greeting