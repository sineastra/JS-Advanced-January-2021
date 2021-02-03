function subtract() {
    const html = {
        firstV: document.getElementById("firstNumber"),
        secondV: document.getElementById("secondNumber"),
        result: document.getElementById("result"),
    }

    html.result.innerHTML =
        (Number(html.firstV.value) || 0) - (Number(html.secondV.value) || 0)
}
