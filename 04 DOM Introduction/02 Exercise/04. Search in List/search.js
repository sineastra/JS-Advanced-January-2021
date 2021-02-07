function search() {
    const html = {
        value: document.getElementById("searchText").value,
        data: document.getElementById("towns").children,
        result: document.getElementById("result"),
    }
    let count = 0

    Array.from(html.data).map(x => {
        if (x.innerHTML.includes(html.value)) {
            x = x.style.textDecoration = "bold underline"
            count += 1
        }
        return x
    })

    html.result.innerHTML = `${count} matches found`
}
