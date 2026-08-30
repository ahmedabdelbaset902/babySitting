/* =========================================
   FAQ TABS
========================================= */

const faqTabs = document.querySelectorAll(".faq-tab");
const faqCategories = document.querySelectorAll(".faq-category");


faqTabs.forEach(tab => {

    tab.addEventListener("click", function () {

        const category = this.dataset.category;


        /* إزالة Active من كل التابات */

        faqTabs.forEach(item => {
            item.classList.remove("active");
        });


        /* إضافة Active للتاب الحالي */

        this.classList.add("active");


        /* تغيير الأسئلة */

        faqCategories.forEach(section => {

            section.classList.remove("active");

            if (section.id === category) {
                section.classList.add("active");
            }

        });


        /* إغلاق أي سؤال كان مفتوح */

        document.querySelectorAll(".faq-item").forEach(item => {
            item.classList.remove("open");
        });

    });

});



/* =========================================
   FAQ ACCORDION
========================================= */

const faqQuestions = document.querySelectorAll(".faq-question");


faqQuestions.forEach(question => {

    question.addEventListener("click", function () {

        const currentItem = this.closest(".faq-item");

        const currentCategory = this.closest(".faq-category");


        /* هل السؤال مفتوح بالفعل؟ */

        const isOpen = currentItem.classList.contains("open");


        /*
         إغلاق كل الأسئلة الموجودة
         داخل نفس التصنيف
        */

        currentCategory
            .querySelectorAll(".faq-item")
            .forEach(item => {

                item.classList.remove("open");

            });


        /*
         لو كان مغلق افتحه
         ولو كان مفتوح يفضل مغلق
        */

        if (!isOpen) {

            currentItem.classList.add("open");

        }

    });

});

/* =========================================
   GENERAL FAQ ACCORDION
========================================= */

const generalFaqQuestions = document.querySelectorAll(
    ".general-faq-question"
);


generalFaqQuestions.forEach(question => {

    question.addEventListener("click", function () {

        const currentItem =
            this.closest(".general-faq-item");


        const isOpen =
            currentItem.classList.contains("open");


        /*
         إغلاق كل الأسئلة
        */

        document
            .querySelectorAll(".general-faq-item")
            .forEach(item => {

                item.classList.remove("open");

            });


        /*
         فتح السؤال الذي تم الضغط عليه
        */

        if (!isOpen) {

            currentItem.classList.add("open");

        }

    });

});