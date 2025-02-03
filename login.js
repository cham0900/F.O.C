function validatePassword() {
    const passwordField = document.getElementById("password");
    const warning = document.getElementById("password-warning");

    if (passwordField.value.length < 8) {
        warning.style.display = "inline"; // แสดงดอกจันสีแดง
    } else {
        warning.style.display = "none"; // ซ่อนถ้าถูกต้อง
    }
}