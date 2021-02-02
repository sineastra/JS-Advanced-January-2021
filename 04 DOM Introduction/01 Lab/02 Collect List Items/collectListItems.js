function extractText() {
    const html = {
        list: () => document.getElementById("items"),
        result: () => document.getElementById("result"),
    }

    html.result().innerHTML = Array.from(html.list().children)
        .map(x => x.innerHTML)
        .join("\n")
}
