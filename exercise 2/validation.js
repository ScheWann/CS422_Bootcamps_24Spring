// =================================================================
//     Boot camp exercise 2
//     Author: Siyuan Zhao
//     CS422 Spring 2024
// =================================================================

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
  
    // Function to validate individual fields
    function validateField(field, warningId, message) {
        if (!field.value.trim()) {
            document.getElementById(warningId).textContent = message;
            field.classList.add('invalid');
            return false;
        }
        return true;
    }

    // Function to clear age warning
    function clearAgeWarning() {
        const ageCheckboxes = document.querySelectorAll('input[type="checkbox"]');
        const isAgeSelected = Array.from(ageCheckboxes).some(checkbox => checkbox.checked);
        if (isAgeSelected) {
            document.getElementById("age-warning").textContent = '';
        }
    }

    // Add event listeners to checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', clearAgeWarning);
    });

    form.addEventListener("submit", function(event) {
        // Prevent form from submitting traditionally
        // You can try what happens if do not have event.preventDefault()
        event.preventDefault();  
        let isValid = true;
  
        // Clear previous warnings
        document.querySelectorAll('.warning-message').forEach(e => e.textContent = '');
        document.querySelectorAll('input, textarea').forEach(e => e.classList.remove('invalid'));
  
        // Validate fields
        isValid &= validateField(document.getElementById("first-name"), "first-name-warning", "First Name is required.");
        isValid &= validateField(document.getElementById("last-name"), "last-name-warning", "Last Name is required.");
        isValid &= validateField(document.getElementById("email"), "email-warning", "Valid Email is required.");
        isValid &= validateField(document.getElementById("phone"), "phone-warning", "Phone number is required.");
  
        // Age validation
        clearAgeWarning();
        const ageCheckboxes = document.querySelectorAll('input[type="checkbox"]');
        const isAgeSelected = Array.from(ageCheckboxes).some(checkbox => checkbox.checked);
        if (!isAgeSelected) {
            document.getElementById("age-warning").textContent = "Please select an age range.";
            isValid = false;
        }

        // If not valid, prevent form submission
        if (!isValid) {
            return false;
        }

    });
});