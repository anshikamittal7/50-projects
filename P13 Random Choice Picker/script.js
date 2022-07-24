let str = '';
document.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        let text = document.getElementById('text').value;
        console.log(text);
    }
})