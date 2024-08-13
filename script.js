document.addEventListener("DOMContentLoaded", function() {
    const path = window.location.pathname;

    if (path.includes("index.html")) {
        const content = "I am a student, blogger, YouTuber & designer.";
        const text = document.querySelector("p");
        let i = 0;

        function typing() {
            if (i < content.length) {
                let txt = content.charAt(i);
                text.innerHTML += txt;
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }

        let typingInterval;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typingInterval = setInterval(typing, 50);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        const triggerElement = document.querySelector('.home-content h3'); 
        observer.observe(triggerElement);

    } else if (path.includes("about.html")) {
        const content = "based in Toronto, Canada.";
        const text = document.querySelector(".text"); 
        let i = 0;

        function typing() {
            if (i < content.length) {
                let txt = content.charAt(i);
                text.innerHTML += txt;
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }

        let typingInterval;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typingInterval = setInterval(typing, 50);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        const triggerElement = document.querySelector('[data-trigger]');
        observer.observe(triggerElement);
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert("Thank you for contacting me! You'll hear from me soon!");

    });
});
