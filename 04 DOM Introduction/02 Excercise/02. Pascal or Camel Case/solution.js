function solve() {
    const data = {
        case: document.getElementById("naming-convention").value,
        str: document.getElementById("text").value,
        resultSpan: document.getElementById("result"),
    }
    const result = data.str
        .split(" ")
        .map(x => x.toLocaleLowerCase())
        .map(x => `${x.charAt(0).toLocaleUpperCase()}${x.slice(1)}`)
        .join("")

    if (data.case !== "Camel Case" && data.case !== "Pascal Case") {
        data.resultSpan.innerHTML = "Error!"
    } else {
        data.resultSpan.innerHTML =
            data.case === "Pascal Case"
                ? result
                : `${result.charAt(0).toLocaleLowerCase()}${result.slice(1)}`
    }
}
