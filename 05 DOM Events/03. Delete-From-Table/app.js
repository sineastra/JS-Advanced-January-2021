function deleteByEmail() {
    const data = {
        emails: Array.from(
            document.querySelectorAll("tbody tr td:nth-child(2)")
        ),
        inputValue: document.querySelector("body > label > input[type=text]")
            .value,
        outputField: document.getElementById("result"),
    }
    let removed = false

    data.emails.forEach(x => {
        if (x.innerHTML.includes(data.inputValue)) {
            x.parentNode.remove()
            data.outputField.innerHTML = "Deleted."
            removed = true
        }
    })

    if (removed === false) data.outputField.innerHTML = "Not found."
}
