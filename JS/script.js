document.addEventListener("DOMContentLoaded", function () {


    /* =========================================
       MOBILE MENU
    ========================================= */

    const menuButton = document.getElementById("mobileMenuBtn");
    const mobileNav = document.getElementById("mobileNav");


    if (menuButton && mobileNav) {

        menuButton.addEventListener("click", function () {

            const isOpen = mobileNav.classList.toggle("show");


            if (isOpen) {

                menuButton.textContent = "×";

                menuButton.setAttribute(
                    "aria-expanded",
                    "true"
                );

                menuButton.setAttribute(
                    "aria-label",
                    "إغلاق القائمة"
                );

            } else {

                menuButton.textContent = "☰";

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.setAttribute(
                    "aria-label",
                    "فتح القائمة"
                );

            }

        });


        /* -----------------------------------------
           إغلاق القائمة بعد الضغط على أي رابط
        ----------------------------------------- */

        mobileNav.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                mobileNav.classList.remove("show");

                menuButton.textContent = "☰";

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.setAttribute(
                    "aria-label",
                    "فتح القائمة"
                );

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