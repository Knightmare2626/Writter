function validatePassword(event) {
    event.preventDefault();
    const str = document.querySelector(".password").value;
    const message = document.querySelector(".main-message");
    if (str === "expressisgood") {
        window.location.href = "/tasks";
    }
    else {
        message.textContent = "Wrong Password! Please try again!";
        message.style.color = "crimson"
    }
    console.log("Submitted")
}
