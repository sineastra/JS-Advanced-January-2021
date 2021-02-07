function attachEventsListeners() {
    const fields = {
        unitsFrom: document.getElementById("inputUnits"),
        unitsTo: document.getElementById("outputUnits"),
        inputValue: document.getElementById("inputDistance"),
        output: document.getElementById("outputDistance"),
    }
    const convert = (v, to, sign) => {
        const signs = { "/": (a, b) => a / b, "*": (a, b) => a * b }

        return signs[sign](v, to)
    }

    const values = {
        km: 1,
        m: 1000,
        cm: 100000,
        mm: 1000000,
        mi: 0.621371,
        yrd: 1093.61,
        ft: 3280.84,
        in: 39370.1,
    }

    document.body.addEventListener("click", e => {
        if (e.target.id === "convert") {
            const [from, to, inputValue] = [
                fields.unitsFrom.value,
                fields.unitsTo.value,
                Number(fields.inputValue.value),
            ]

            fields.output.value = convert(
                convert(inputValue, values[from], "/"),
                values[to],
                "*"
            )
        }
    })
}
