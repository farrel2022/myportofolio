function hamburg(){
    const navbar = document.querySelector('.dropdown');
    navbar.style.transform = 'translateY(0px)';
}

 function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
  }
function cancel(){
    const navbar = document.querySelector('.dropdown');
    navbar.style.transform = 'translateY(-500px)';
}

function typewriterEffect(elementSelector, texts, speed = 100, pause = 1000) {
    const element = document.querySelector(elementSelector);
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];
        
        // Nambah atau menghapus karakter
        if (isDeleting) {
            element.innerHTML = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            element.innerHTML = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        // Atur kecepatan
        let currentSpeed = speed;
        if (isDeleting) currentSpeed /= 2;

        // Kalau selesai nulis
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            currentSpeed = pause; // jeda sebelum hapus
        }
        // Kalau selesai hapus
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length; // pindah ke teks berikutnya
        }

        setTimeout(type, currentSpeed);
    }

    type();
}

// Jalankan efek untuk dua elemen berbeda
window.onload = () => {
    typewriterEffect('.typewriter-text', ["You can check my profile", "By Click The button below"]);
    typewriterEffect('.typewriter-text1', [" IT Programmer", "Mobile Developer", "Website Developer"]);
};

function typewriterEffect(elementSelector, texts, speed = 100, pause = 1000) {
    const element = document.querySelector(elementSelector);

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            element.innerHTML = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            element.innerHTML = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let currentSpeed = speed;
        if (isDeleting) currentSpeed /= 2;

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            currentSpeed = pause;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }

        setTimeout(type, currentSpeed);
    }

    type();
}

// Jalankan saat DOM siap
document.addEventListener("DOMContentLoaded", () => {
    typewriterEffect('.typewriter-text1', [" Programmer", "Mobile Developer", "Website Developer"]);
});

