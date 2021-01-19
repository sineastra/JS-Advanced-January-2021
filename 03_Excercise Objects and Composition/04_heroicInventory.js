function foo(arr) {
    return JSON.stringify(
        arr
            .map(x => x.split(" / "))
            .reduce((a, v) => {
                a.push({ name: v[0], level: Number(v[1]), items: v[2] ? v[2].split(", ") : [] })
                return a
            }, [])
    )
}
