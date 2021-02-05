function attachGradientEvents() {
    const html = {
        hoverDiv: document.getElementById("gradient"),
        output: document.getElementById("result"),
    }

    function displayPercent(event, element) {
        html.output.textContent = `${Math.floor(
            (event.offsetX / event.target.clientWidth) * 100
        )}%`
    }

    html.hoverDiv.addEventListener("mousemove", e =>
        displayPercent(e, html.hoverDiv)
    )
}
