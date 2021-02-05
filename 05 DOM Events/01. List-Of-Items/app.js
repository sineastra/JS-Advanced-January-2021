function addItem() {
    const data = {
        valueToAdd: document.getElementById("newItemText").value,
        list: document.getElementById("items"),
    }

    function eFactory(tag, content) {
        const temp = document.createElement(tag)
        temp.innerHTML = content
        return temp
    }

    data.list.appendChild(eFactory("li", data.valueToAdd))
}
