function toggle() {
    const html = {
        button: document.getElementsByClassName("button")[0],
        content: document.getElementById("extra"),
    }

    if (html.button.innerHTML === "More") {
        html.button.innerHTML = "Less"
        html.content.style.display = "block"
    } else {
        html.button.innerHTML = "More"
        html.content.style.display = "none"
    }
}
