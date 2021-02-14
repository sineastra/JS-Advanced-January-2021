function generateReport() {
    const html = {
        checkboxes: document.querySelectorAll("input[type='checkbox']"),
        rows: document.getElementsByTagName("tr"),
        output: document.getElementById("output"),
    }
    const selected = Array.from(html.checkboxes)
        .map((x, i) => [x, i])
        .filter(x => x[0].checked)
        .map(x => [x[0].name, x[1]])

    const rowData = Array.from(html.rows)
        .slice(1)
        .map(x => Array.from(x.children).map(y => y.innerHTML))

    // here we have all the rows without the headers in an array -> rowData
    // we also have the selected checkboxes as an array of tuple [name, originalIndex]
    // that original index we saved so we can now know which row entries are selected.
    // e.g. if user clicked on column with index 2, we saved its name and index 2 [name, index]
    // so we now take the row and pick row[index] to get a selected column entry from the row.
    // We reduce every row, and for every row iteration we take the names of the selected
    // columns and put them as keys, and take the selected row entries by index and use them as values.
    html.output.value = JSON.stringify(
        rowData.map(x =>
            selected.reduce((a, v) => {
                const [sColName, sColIndex] = v
                a[sColName] = x[sColIndex]
                return a
            }, {})
        )
    )
}