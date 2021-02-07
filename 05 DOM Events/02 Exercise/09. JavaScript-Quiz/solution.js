function solve() {
    const html = {
        sections: document.getElementsByTagName("section"),
        outputSection: document.getElementById("results"),
        outputElement: document.querySelector("#results > li > h1"),
    }
    const rightAnswers = [
        "onclick",
        "JSON.stringify()",
        "A programming API for HTML and XML documents",
    ]
    const answers = []
    let i = 0

    document.body.addEventListener("click", e => {
        if (e.target.className === "answer-text") {
            const sectionsArr = Array.from(html.sections)
            sectionsArr[i].style.display = "none"

            if (!rightAnswers.includes(e.target.textContent)) {
                answers.push(e.target.innerHTML)
            }

            if (sectionsArr[i + 1] !== undefined) {
                sectionsArr[i + 1].style.display = "block"
                i += 1
            } else {
                html.outputSection.style.display = "block"
                html.outputElement.innerHTML =
                    answers.length > 0
                        ? `You have ${3 - answers.length} right answers`
                        : "You are recognized as top JavaScript fan!"
            }
        }
    })
}
