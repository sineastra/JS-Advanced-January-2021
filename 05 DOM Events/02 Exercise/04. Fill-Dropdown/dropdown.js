function addItem() {
    const html = {
        text: document.getElementById("newItemText"),
        value: document.getElementById("newItemValue"),
        menu: document.getElementById("menu"),
    }

    const e = document.createElement("option")
    e.textContent = html.text.value
    e.value = html.value.value
    html.text.value = ""
    html.value.value = ""

    html.menu.appendChild(e)
}
