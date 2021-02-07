function foo(arr) {
    return [
        ...arr.map(x => x.reduce((a, v) => a + v, 0)),
        ...arr.reduce((a, v, i) => {
            a.push(arr.reduce((c, d) => c + d[i], 0))
            return a
        }, []),
    ].every((x, _, arr) => x === arr[0])
}
