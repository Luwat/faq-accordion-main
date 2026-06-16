const faqs = document.querySelectorAll(".faq-question");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        const faqAnswer = faq.nextElementSibling;
        const faqQuestionText = faq.querySelector(".faq-question-text");

        faqAnswer.classList.toggle("hide");
        if (faqAnswer.classList.contains("hide")) {
            faqQuestionText.textContent = "+";
            faqQuestionText.classList.remove("dark-text");
        } else {
            faqQuestionText.textContent = "−";
            faqQuestionText.classList.add("dark-text");
        }
    })
})