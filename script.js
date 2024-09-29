const form = document.getElementById("contactForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const messageInput = document.querySelector("#message");

// Save original label text for restoration
const saveOriginalLabels = () => {
    const labels = document.querySelectorAll("label");
    labels.forEach((label) => {
        label.setAttribute("data-original", label.textContent);
    });
};

// Validate Name
const validateName = (name) => {
    const namePattern = /^[a-zA-Z\s-]+$/;
    return name.trim() !== "" && namePattern.test(name) && !/^\s|\d/.test(name);
};

// Validate Email
const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email.trim() !== "" && emailPattern.test(email) && !/^\s|\d/.test(email);
};

// Clear error message
const clearError = (input) => {
    const label = input.previousElementSibling;
    label.textContent = label.getAttribute("data-original"); // Restore original text
    label.classList.remove("error-label");
    input.classList.remove("error");
};

// Show error message
const showError = (input, message) => {
    const label = input.previousElementSibling;
    label.textContent = message; // Modify label text
    label.classList.add("error-label"); // Add error styling class
    input.classList.add("error");
};

// Validate all fields
const validateFields = () => {
    let isValid = true;

    // Validate Name
    if (!validateName(nameInput.value)) {
        isValid = false;
        showError(nameInput, "Please enter a valid name.");
    } else {
        clearError(nameInput);
    }

    // Validate Email
    if (!validateEmail(emailInput.value)) {
        isValid = false;
        showError(emailInput, "Please enter a valid email.");
    } else {
        clearError(emailInput);
    }

    // Validate Subject
    if (subjectInput.value.trim() === "") {
        isValid = false;
        showError(subjectInput, "Subject cannot be empty.");
    } else {
        clearError(subjectInput);
    }

    // Validate Message
    if (messageInput.value.trim() === "") {
        isValid = false;
        showError(messageInput, "Message cannot be empty.");
    } else {
        clearError(messageInput);
    }

    return isValid;
};

// Form submission
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validateFields()) {
        form.reset(); // Reset form fields
    }
});

// Immediate validation on input change
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

// Save original label text on page load
saveOriginalLabels();


//Mobile menu adaptation

const menuToggleCheckbox = document.getElementById("menu-toggle-checkbox");
const mobileMenu = document.querySelector(".mobile-menu");
const menuItems = document.querySelectorAll(".mobile-menu li a"); // Select all menu links

// Event listener for the checkbox to toggle the mobile menu
menuToggleCheckbox.addEventListener("change", () => {
    if (menuToggleCheckbox.checked) {
        mobileMenu.style.display = "flex"; // Show the mobile menu
    } else {
        mobileMenu.style.display = "none"; // Hide the mobile menu
    }
});

// Event listener to close the menu when a menu item is clicked
menuItems.forEach(item => {
    item.addEventListener("click", () => {
        menuToggleCheckbox.checked = false; // Uncheck the checkbox
        mobileMenu.style.display = "none"; // Hide the mobile menu
    });
});
