function foo(arr) {
    const result = arr.sort().reduce((a, v) => {
        a[v[0]] = a[v[0]] || []
        a[v[0]].push(v)
        return a
    }, {})
    Object.entries(result).forEach(([letter, items]) =>
        console.log(`${letter}
  ${items.map(y => y.split(" : ").join(": ")).join("\n  ")}`)
    )
}
