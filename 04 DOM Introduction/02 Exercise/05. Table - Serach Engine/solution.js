function solve() {
    const data = {
        collection: document.getElementsByTagName("tr"),
        getValue: () => document.getElementById("searchField").value,
    }

    function onClick({ collection, value }) {
        collection.map(x => (x.className = ""))
        collection.map(x => {
            if (x.innerHTML.includes(value)) x.className = "select"

            return x
        })
    }

    document.getElementById("searchBtn").addEventListener("click", () =>
        onClick({
            collection: Array.from(data.collection),
            value: data.getValue(),
        })
    )
}