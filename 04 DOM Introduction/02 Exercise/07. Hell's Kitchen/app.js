function solve() {
    const html = {
        inputField: document.querySelector("#inputs textarea"),
        outputBestName: document.querySelector("#bestRestaurant p"),
        outputBestWorkers: document.querySelector("#workers p"),
    }

    const getBest = data =>
        Object.entries(data).sort(
            (x, y) => getAverage(y[1]) - getAverage(x[1])
        )[0]

    const getAverage = workersData =>
        workersData.reduce((a, v) => a + v[1], 0) / workersData.length

    function deserialize(data) {
        const getWorkers = data =>
            data
                .split(", ")
                .map(x => x.split(" ").map(y => (isNaN(y) ? y : Number(y))))

        return JSON.parse(data)
            .map(x => x.split(" - "))
            .reduce((a, v) => {
                const [name, workers] = v

                a[name] = a[name]
                    ? [...a[name], ...getWorkers(workers)]
                    : getWorkers(workers)
                return a
            }, {})
    }

    function displayResult(data) {
        let [name, workers] = data
        workers = workers.sort((x, y) => y[1] - x[1])

        html.outputBestName.innerHTML = `Name: ${name} Average Salary: ${getAverage(
            workers
        ).toFixed(2)} Best Salary: ${workers[0][1].toFixed(2)}`

        html.outputBestWorkers.innerHTML = `${workers
            .map(x => `Name: ${x[0]} With Salary: ${x[1]}`)
            .join(" ")}`
    }

    document
        .getElementById("btnSend")
        .addEventListener("click", () =>
            displayResult(getBest(deserialize(html.inputField.value)))
        )
}
