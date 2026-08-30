document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       MOBILE MENU
    ========================================= */

    const menuButton = document.getElementById("mobileMenuBtn");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {

        menuButton.addEventListener("click", function () {

            navLinks.classList.toggle("show");

            if (navLinks.classList.contains("show")) {

                menuButton.textContent = "×";

            } else {

                menuButton.textContent = "☰";

            }

        });


        /* إغلاق القائمة عند الضغط على أي رابط */

        navLinks.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("show");

                menuButton.textContent = "☰";

            });

        });

    }


    /* =========================================
       SMOOTH SCROLL
    ========================================= */

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (targetId && targetId !== "#") {

                const target = document.querySelector(targetId);

                if (target) {

                    e.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        });

    });

});