function foo(arr) {
    const parsedData = arr.reduce((a, b) => {
        const [name, population] = b.split(" <-> ")
        a[name] = (a[name] || 0) + Number(population)
        return a
    }, {})

    return Object.entries(parsedData)
        .map(x => `${x[0]} : ${x[1]}`)
        .join("\n")
}
