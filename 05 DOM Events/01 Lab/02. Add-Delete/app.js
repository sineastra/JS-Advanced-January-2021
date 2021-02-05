function addItem() {
    const data = {
        valueToAdd: document.getElementById("newText").value,
        list: document.getElementById("items"),
    }

    function eFactory(tag, content) {
        const temp = document.createElement(tag)
        temp.innerHTML = content

        return temp
    }

    const item = eFactory("li", data.valueToAdd)
    const deleteLink = eFactory("a", "[Delete]")
    deleteLink.href = "#"
    deleteLink.addEventListener("click", e => e.target.parentNode.remove())

    item.appendChild(deleteLink)

    data.list.appendChild(item)
}
