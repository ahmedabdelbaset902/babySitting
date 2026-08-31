/* =========================================
   REQUEST FORM
========================================= */

const form = document.getElementById("requestForm");

const fullName = document.getElementById("fullName");
const phone = document.getElementById("phone");
const whatsapp = document.getElementById("whatsapp");
const children = document.getElementById("children");
const city = document.getElementById("city");
const address = document.getElementById("address");
const notes = document.getElementById("notes");

const submitBtn = document.getElementById("submitBtn");


/* =========================================
   WHATSAPP NUMBER
========================================= */

const whatsappNumber = "201092404102";


/* =========================================
   VALIDATION
========================================= */

function showError(input, message) {

    const formGroup = input.closest(".form-group");

    formGroup.classList.add("error");

    const errorMessage =
        formGroup.querySelector(".error-message");

    if (errorMessage) {
        errorMessage.textContent = message;
    }
}


function removeError(input) {

    const formGroup = input.closest(".form-group");

    formGroup.classList.remove("error");

    const errorMessage =
        formGroup.querySelector(".error-message");

    if (errorMessage) {
        errorMessage.textContent = "";
    }
}


/* =========================================
   CHECK REQUIRED FIELD
========================================= */

function validateRequired(input, message) {

    if (input.value.trim() === "") {

        showError(input, message);

        return false;
    }

    removeError(input);

    return true;
}


/* =========================================
   PHONE VALIDATION
========================================= */

function validatePhone(input, message) {

    const value = input.value.trim();

    const phonePattern = /^[0-9+\s()-]{10,15}$/;

    if (value === "") {

        showError(input, message);

        return false;
    }

    if (!phonePattern.test(value)) {

        showError(
            input,
            "ادخل رقم هاتف صحيح"
        );

        return false;
    }

    removeError(input);

    return true;
}


/* =========================================
   LIVE ERROR REMOVAL
========================================= */

[
    fullName,
    phone,
    whatsapp,
    children,
    address,
    notes
].forEach(input => {

    input.addEventListener("input", function () {

        if (this.value.trim() !== "") {

            removeError(this);

        }

    });

});


/* =========================================
   FORM SUBMIT
========================================= */

form.addEventListener("submit", function (event) {

    event.preventDefault();


    let isValid = true;


    /* =========================================
       Full Name
    ========================================= */

    if (
        !validateRequired(
            fullName,
            "من فضلك ادخل الاسم الكامل"
        )
    ) {

        isValid = false;

    }


    /* =========================================
       Phone
    ========================================= */

    if (
        !validatePhone(
            phone,
            "من فضلك ادخل رقم الهاتف"
        )
    ) {

        isValid = false;

    }


    /* =========================================
       WhatsApp
    ========================================= */

    if (
        !validatePhone(
            whatsapp,
            "من فضلك ادخل رقم واتساب"
        )
    ) {

        isValid = false;

    }


    /* =========================================
       Children
    ========================================= */

    if (
        !validateRequired(
            children,
            "من فضلك ادخل عدد الأطفال"
        )
    ) {

        isValid = false;

    }


    /* =========================================
       Address
    ========================================= */

    if (
        !validateRequired(
            address,
            "من فضلك ادخل العنوان"
        )
    ) {

        isValid = false;

    }


    /* =========================================
       Notes
    ========================================= */

    if (
        !validateRequired(
            notes,
            "من فضلك ادخل الملاحظات"
        )
    ) {

        isValid = false;

    }


    /* =========================================
       STOP IF INVALID
    ========================================= */

    if (!isValid) {

        const firstError =
            document.querySelector(
                ".form-group.error input, .form-group.error textarea"
            );

        if (firstError) {

            firstError.focus();

        }

        return;
    }


    /* =========================================
       CREATE WHATSAPP MESSAGE
    ========================================= */

    const message = `
👶 *طلب جليسة أطفال جديد*

━━━━━━━━━━━━━━━━━━

👤 *الاسم الكامل:*
${fullName.value.trim()}

📞 *الهاتف:*
${phone.value.trim()}

💬 *واتساب:*
${whatsapp.value.trim()}

👶 *عدد الأطفال:*
${children.value.trim()}

📍 *المدينة:*
${city.value || "غير محددة"}

🏠 *العنوان:*
${address.value.trim()}

📝 *الملاحظات:*
${notes.value.trim()}

━━━━━━━━━━━━━━━━━━

📩 تم إرسال الطلب من موقع ألفة
`;


    /* =========================================
       WHATSAPP URL
    ========================================= */

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


    /* =========================================
       OPEN WHATSAPP
    ========================================= */

    window.open(
        whatsappURL,
        "_blank"
    );


    /* =========================================
       SUCCESS MESSAGE
    ========================================= */

    const oldSuccess =
        document.querySelector(".form-success");

    if (oldSuccess) {

        oldSuccess.remove();

    }


    const successMessage =
        document.createElement("div");

    successMessage.className =
        "form-success";

    successMessage.textContent =
        "تم تجهيز الطلب على واتساب ❤️";


    form.appendChild(successMessage);

    successMessage.style.display =
        "block";


    /* =========================================
       BUTTON
    ========================================= */

    submitBtn.disabled = true;

    submitBtn.style.opacity = "0.7";

    submitBtn.querySelector("span").textContent =
        "تم الإرسال";


    /* =========================================
       RESET
    ========================================= */

    setTimeout(() => {

        form.reset();

        submitBtn.disabled = false;

        submitBtn.style.opacity = "1";

        submitBtn.querySelector("span").textContent =
            "إرسال الطلب";

        successMessage.remove();

    }, 3000);

});


/* =========================================
   CITY SELECT
========================================= */

city.addEventListener("change", function () {

    this.style.color = "#263b55";

});