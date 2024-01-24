// =================================================================
//     Boot camp exercise 2 - form validation
//     Author: Siyuan Zhao
//     CS422 Spring 2024
// =================================================================

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const ageCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    const ageCheckboxesArray = Array.from(ageCheckboxes);

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
        const isAgeSelected = ageCheckboxesArray.some(checkbox => checkbox.checked);
        if (isAgeSelected) {
            document.getElementById("age-warning").textContent = '';
        }
    }

    // Add event listener to checkboxes using event delegation
    form.addEventListener('change', function(event) {
        if (event.target.type === 'checkbox') {
            clearAgeWarning();
        }
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault();  
        let isValid = true;
  
        // Clear previous warnings and remove invalid class
        document.querySelectorAll('.warning-message').forEach(e => e.textContent = '');
        document.querySelectorAll('input').forEach(e => e.classList.remove('invalid'));
  
        // Validate fields
        isValid = validateField(document.getElementById("first-name"), "first-name-warning", "First Name is required.") && isValid;
        isValid = validateField(document.getElementById("last-name"), "last-name-warning", "Last Name is required.") && isValid;
        isValid = validateField(document.getElementById("email"), "email-warning", "Valid Email is required.") && isValid;
        isValid = validateField(document.getElementById("phone"), "phone-warning", "Phone number is required.") && isValid;
  
        // Age validation
        clearAgeWarning();
        const isAgeSelected = ageCheckboxesArray.some(checkbox => checkbox.checked);
        if (!isAgeSelected) {
            document.getElementById("age-warning").textContent = "Please select an age range.";
            isValid = false;
        }

        if(isValid) {
            alert("Thank you for your submission!");
        }
    });
});
