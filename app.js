let Letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let numbers = "1234567890";
let specialChar = "`@#$%^&*()?<>.,/";

function generateAndShowPassword() {
    let length = document.getElementById("length").value;
    
    if (length > 0) {
        let generatedPassword = generatePassword(length);
        document.getElementById("showpw").textContent = generatedPassword;
    } else {
        alert("Please enter a valid positive number for the length.");
    }
}

function generatePassword(length) {
    let allChars = Letters + numbers + specialChar;
    let password = "";

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    return password;
}
