/* =========================
   MOBILE NAVIGATION
========================= */

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});


document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
    });

});


/* =========================
   ACTIVE NAV LINK
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 200;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/* =========================
   BOOKING FORM
========================= */

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const button = this.querySelector(".reserve-btn");

    button.innerHTML = "Slot Reserved ✓";

    button.style.background = "#7b9a72";

    setTimeout(() => {

        button.innerHTML = 'Reserve My Slot <span>→</span>';
        button.style.background = "";

        bookingForm.reset();

    }, 3000);

});


/* =========================
   ANIMATED COFFEE PARTICLES
========================= */

const canvas = document.getElementById("coffeeCanvas");
const ctx = canvas.getContext("2d");

let particles = [];

function resizeCanvas() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);


class Particle {

    constructor() {

        this.x = Math.random() * canvas.width;

        this.y = Math.random() * canvas.height;

        this.size = Math.random() * 2 + .4;

        this.speedX = (Math.random() - .5) * .25;

        this.speedY = Math.random() * -.35 - .05;

        this.opacity = Math.random() * .35;

    }


    update() {

        this.x += this.speedX;
        this.y += this.speedY;

        if (this.y < -10) {

            this.y = canvas.height + 10;
            this.x = Math.random() * canvas.width;

        }

    }


    draw() {

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = `rgba(201,163,106,${this.opacity})`;

        ctx.fill();

    }

}


function createParticles() {

    particles = [];

    const amount = window.innerWidth < 600 ? 45 : 90;

    for (let i = 0; i < amount; i++) {
        particles.push(new Particle());
    }

}

createParticles();


function animate() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    particles.forEach(particle => {

        particle.update();
        particle.draw();

    });

    requestAnimationFrame(animate);

}

animate();


/* =========================
   MOUSE LIGHT EFFECT
========================= */

let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", event => {

    mouseX = event.clientX;
    mouseY = event.clientY;

});


function mouseGlow() {

    const gradient = ctx.createRadialGradient(
        mouseX,
        mouseY,
        0,
        mouseX,
        mouseY,
        250
    );

    gradient.addColorStop(
        0,
        "rgba(130,80,40,.08)"
    );

    gradient.addColorStop(
        1,
        "rgba(130,80,40,0)"
    );

    ctx.fillStyle = gradient;

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    requestAnimationFrame(mouseGlow);

}

mouseGlow();