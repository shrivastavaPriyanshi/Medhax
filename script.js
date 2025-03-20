// Function to show the sign-in form with the selected role
function showForm(role) {
    const roleBox = document.getElementById("roleBox");
    const signinBox = document.getElementById("signinBox");
    const formTitle = document.getElementById("formTitle");

    // Update the form title based on the selected role
    formTitle.textContent = `Sign In as ${role.charAt(0).toUpperCase() + role.slice(1)}`;

    // Hide role selection and show the form
    roleBox.style.display = "none";
    signinBox.style.display = "block";
}

// Function to go back to role selection
function goBack() {
    const roleBox = document.getElementById("roleBox");
    const signinBox = document.getElementById("signinBox");

    roleBox.style.display = "block";
    signinBox.style.display = "none";
}
