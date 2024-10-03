const form = document.getElementById("contactForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const messageInput = document.querySelector("#message");

const saveOriginalLabels = () => {
    const labels = document.querySelectorAll("label");
    labels.forEach((label) => {
        label.setAttribute("data-original", label.textContent);
    });
};

const validateName = (name) => {
    const namePattern = /^[a-zA-Z\s-]+$/;
    return name.trim() !== "" && namePattern.test(name) && !/^\s|\d/.test(name);
};

const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email.trim() !== "" && emailPattern.test(email) && !/^\s|\d/.test(email);
};

const clearError = (input) => {
    const label = input.previousElementSibling;
    label.textContent = label.getAttribute("data-original");
    label.classList.remove("error-label");
    input.classList.remove("error");
};

const showError = (input, message) => {
    const label = input.previousElementSibling;
    label.textContent = message;
    label.classList.add("error-label");
    input.classList.add("error");
};

const validateFields = () => {
    let isValid = true;

    if (!validateName(nameInput.value)) {
        isValid = false;
        showError(nameInput, "Please enter a valid name.");
    } else {
        clearError(nameInput);
    }

    if (!validateEmail(emailInput.value)) {
        isValid = false;
        showError(emailInput, "Please enter a valid email.");
    } else {
        clearError(emailInput);
    }

    if (subjectInput.value.trim() === "") {
        isValid = false;
        showError(subjectInput, "Subject cannot be empty.");
    } else {
        clearError(subjectInput);
    }

    if (messageInput.value.trim() === "") {
        isValid = false;
        showError(messageInput, "Message cannot be empty.");
    } else {
        clearError(messageInput);
    }

    return isValid;
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validateFields()) {
        form.reset();
    }
});

nameInput.addEventListener("input", () => {
    clearError(nameInput);
    if (!validateName(nameInput.value)) {
        showError(nameInput, "Please enter a valid name.");
    }
});

emailInput.addEventListener("input", () => {
    clearError(emailInput);
    if (!validateEmail(emailInput.value)) {
        showError(emailInput, "Please enter a valid email.");
    }
});

saveOriginalLabels();

const menuToggleCheckbox = document.getElementById("menu-toggle-checkbox");
const mobileMenu = document.querySelector(".mobile-menu");
const menuItems = document.querySelectorAll(".mobile-menu li a");

menuToggleCheckbox.addEventListener("change", () => {
    if (window.innerWidth <= 948) {
        if (menuToggleCheckbox.checked) {
            mobileMenu.style.display = "flex";
        } else {
            mobileMenu.style.display = "none";
        }
    }
});

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        if (window.innerWidth <= 930) {
            menuToggleCheckbox.checked = false;
            mobileMenu.style.display = "flex";
        }
    });
});
