function calc() {
    const html = {
        getNumField: n => document.getElementById(`num${n}`),
        result: () => document.getElementById("sum"),
    }
    const getNum = e => Number(e.value)

    html.result().value =
        getNum(html.getNumField(1)) + getNum(html.getNumField(2))
}
