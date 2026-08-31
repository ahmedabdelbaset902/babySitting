/* =====================================================
   APPLICATION FORM
===================================================== */

const form = document.getElementById("applicationForm");


/* =====================================================
   INPUTS
===================================================== */

const fullName = document.getElementById("fullName");
const phone = document.getElementById("phone");
const whatsapp = document.getElementById("whatsapp");
const qualification = document.getElementById("qualification");

const jobStatus = document.getElementById("jobStatus");
const educationStatus = document.getElementById("educationStatus");
const city = document.getElementById("city");

const experience = document.getElementById("experience");
const address = document.getElementById("address");


/* =====================================================
   WHATSAPP NUMBER
===================================================== */

const whatsappNumber = "201092404102";


/* =====================================================
   ERROR
===================================================== */

function showError(input, message) {

    const group = input.closest(".form-group");

    if (!group) return;

    group.classList.add("error");

    const error = group.querySelector(".error-message");

    if (error) {
        error.textContent = message;
    }

}


function removeError(input) {

    const group = input.closest(".form-group");

    if (!group) return;

    group.classList.remove("error");

    const error = group.querySelector(".error-message");

    if (error) {
        error.textContent = "";
    }

}


/* =====================================================
   REQUIRED VALIDATION
===================================================== */

function required(input, message) {

    if (!input.value.trim()) {

        showError(input, message);

        return false;
    }

    removeError(input);

    return true;
}


/* =====================================================
   PHONE VALIDATION
===================================================== */

function validPhone(input, message) {

    const value = input.value.trim();

    const pattern = /^[0-9+\s()-]{10,15}$/;


    /* Empty */

    if (!value) {

        showError(
            input,
            message
        );

        return false;
    }


    /* Invalid */

    if (!pattern.test(value)) {

        showError(
            input,
            "ادخل رقم هاتف صحيح"
        );

        return false;
    }


    removeError(input);

    return true;
}


/* =====================================================
   SELECT VALIDATION
===================================================== */

function validSelect(select, message) {

    if (!select.value) {

        showError(
            select,
            message
        );

        return false;
    }

    removeError(select);

    return true;
}


/* =====================================================
   LIVE VALIDATION
===================================================== */

[
    fullName,
    phone,
    whatsapp,
    qualification,
    experience,
    address
].forEach(input => {

    input.addEventListener("input", function () {

        if (this.value.trim() !== "") {

            removeError(this);

        }

    });

});


/* =====================================================
   SELECT LIVE VALIDATION
===================================================== */

[
    jobStatus,
    educationStatus,
    city
].forEach(select => {

    select.addEventListener("change", function () {

        if (this.value) {

            removeError(this);

        }

    });

});


/* =====================================================
   FORM SUBMIT
===================================================== */

form.addEventListener("submit", function (event) {

    event.preventDefault();


    let isValid = true;


    /* =================================================
       FULL NAME
    ================================================= */

    if (
        !required(
            fullName,
            "من فضلك ادخل الاسم الكامل"
        )
    ) {

        isValid = false;

    }


    /* =================================================
       PHONE
    ================================================= */

    if (
        !validPhone(
            phone,
            "من فضلك ادخل رقم الهاتف"
        )
    ) {

        isValid = false;

    }


    /* =================================================
       WHATSAPP
    ================================================= */

    if (
        !validPhone(
            whatsapp,
            "من فضلك ادخل رقم واتساب"
        )
    ) {

        isValid = false;

    }


    /* =================================================
       QUALIFICATION
    ================================================= */

    if (
        !required(
            qualification,
            "من فضلك ادخل المؤهل التعليمي"
        )
    ) {

        isValid = false;

    }


    /* =================================================
       JOB STATUS
    ================================================= */

    if (
        !validSelect(
            jobStatus,
            "اختر الحالة المهنية"
        )
    ) {

        isValid = false;

    }


    /* =================================================
       EDUCATION STATUS
    ================================================= */

    if (
        !validSelect(
            educationStatus,
            "اختر الحالة التعليمية"
        )
    ) {

        isValid = false;

    }


    /* =================================================
       CITY
    ================================================= */

    if (
        !validSelect(
            city,
            "اختر المدينة"
        )
    ) {

        isValid = false;

    }


    /* =================================================
       EXPERIENCE
    ================================================= */

    if (
        !required(
            experience,
            "من فضلك ادخل الخبرة"
        )
    ) {

        isValid = false;

    }


    /* =================================================
       ADDRESS
    ================================================= */

    if (
        !required(
            address,
            "من فضلك ادخل العنوان"
        )
    ) {

        isValid = false;

    }


    /* =================================================
       STOP IF INVALID
    ================================================= */

    if (!isValid) {

        const firstError =
            document.querySelector(
                ".form-group.error input, " +
                ".form-group.error textarea, " +
                ".form-group.error select"
            );

        if (firstError) {

            firstError.focus();

            firstError.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }

        return;
    }


    /* =================================================
       CREATE WHATSAPP MESSAGE
    ================================================= */

const message = `
*طلب تقديم على وظيفة جليسة أطفال جديد*

━━━━━━━━━━━━━━━━━━

*الاسم الكامل:*
${fullName.value.trim()}

*رقم الهاتف:*
${phone.value.trim()}

*رقم واتساب:*
${whatsapp.value.trim()}

*المؤهل التعليمي:*
${qualification.value.trim()}

*الحالة المهنية:*
${jobStatus.options[jobStatus.selectedIndex].text}

*الحالة التعليمية:*
${educationStatus.options[educationStatus.selectedIndex].text}

*المدينة:*
${city.options[city.selectedIndex].text}

*الخبرة في مجال رعاية الأطفال:*
${experience.value.trim()}

*العنوان:*
${address.value.trim()}

━━━━━━━━━━━━━━━━━━

*تم إرسال طلب التقديم من موقع الفه*
`;


    /* =================================================
       WHATSAPP URL
    ================================================= */

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


    /* =================================================
       OPEN WHATSAPP
    ================================================= */

    window.open(
        whatsappURL,
        "_blank"
    );


    /* =================================================
       SUCCESS MESSAGE
    ================================================= */

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
        "تم تجهيز طلب التقديم على واتساب ❤️";


    successMessage.style.cssText = `
        margin-top: 15px;
        padding: 12px 15px;
        background: #f1fbf5;
        color: #25804c;
        border-radius: 8px;
        text-align: center;
        font-size: 13px;
        font-weight: 600;
    `;


    form.appendChild(successMessage);


    /* =================================================
       BUTTON
    ================================================= */

    const button =
        form.querySelector(".submit-button");


    if (button) {

        button.disabled = true;

        button.style.opacity = "0.7";

        const buttonText =
            button.querySelector("span");

        if (buttonText) {

            buttonText.textContent =
                "تم الإرسال";

        }

    }


    /* =================================================
       RESET
    ================================================= */

    setTimeout(() => {

        form.reset();


        /* Remove errors */

        [
            fullName,
            phone,
            whatsapp,
            qualification,
            experience,
            address,
            jobStatus,
            educationStatus,
            city
        ].forEach(input => {

            removeError(input);

        });


        /* Restore button */

        if (button) {

            button.disabled = false;

            button.style.opacity = "1";

            const buttonText =
                button.querySelector("span");

            if (buttonText) {

                buttonText.textContent =
                    "إرسال التقديم";

            }

        }


        /* Remove success */

        if (successMessage) {

            successMessage.remove();

        }

    }, 3000);

});


/* =====================================================
   SELECT COLOR
===================================================== */

[
    jobStatus,
    educationStatus,
    city
].forEach(select => {

    select.addEventListener("change", function () {

        this.style.color = "#263b55";

    });

});