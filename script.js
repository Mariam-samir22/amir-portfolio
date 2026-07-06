// ===============================
// LOADER
// ===============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            }, 800);

        }, 1800);

    }

});


// ===============================
// AOS
// ===============================

if (typeof AOS !== "undefined") {

    AOS.init({

        duration: 1200,
        once: true,
        easing: "ease-in-out"

    });

}


// ===============================
// BACK TO TOP
// ===============================

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            topBtn.style.display = "flex";

        } else {

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}


// ===============================
// ACTIVE NAV LINK
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

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


// ===============================
// VIDEO HOVER
// ===============================

const videos = document.querySelectorAll(".video-card video");

videos.forEach(video => {

    video.addEventListener("mouseenter", () => {

        video.play();

    });

    video.addEventListener("mouseleave", () => {

        video.pause();
        video.currentTime = 0;

    });

});


// ===============================
// NAVBAR EFFECT
// ===============================

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(0,0,0,.75)";
        navbar.style.backdropFilter = "blur(18px)";

    } else {

        navbar.style.background = "rgba(0,0,0,.25)";
        navbar.style.backdropFilter = "blur(18px)";

    }

});


// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// ===============================
// CURRENT YEAR IN FOOTER
// ===============================

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}