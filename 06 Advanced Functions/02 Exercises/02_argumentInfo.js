function foo(...args) {
    const count = {}
    const result = args.map(x => {
        count[typeof x] = (count[typeof x] || 0) + 1
        return `${typeof x}: ${x}`
    })

    result.forEach(x => console.log(x))
    Object.entries(count).sort((x,y) => y[1] - x[1]).map(([type, counts]) =>
        console.log(`${type} = ${counts}`)
    )
}