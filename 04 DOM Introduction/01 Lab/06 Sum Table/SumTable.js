function sumTable() {
    let dataCells = Array.from(document.getElementsByTagName("td"))

    document.getElementById("sum").innerHTML = dataCells
        .slice(0, dataCells.length - 1)
        .reduce((a, v) => a + (Number(v.innerHTML) || 0), 0)
}