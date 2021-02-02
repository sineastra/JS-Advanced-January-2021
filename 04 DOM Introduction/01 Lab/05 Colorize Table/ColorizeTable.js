function colorize() {
    let table = Array.from(document.getElementsByTagName("tr"))

    table = table.map((x, i) => {
        if (i % 2 !== 0) {
            x.style.backgroundColor = "teal"
        }
        return x
    })
}
