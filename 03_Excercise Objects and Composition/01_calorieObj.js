function foo(arr) {
    return arr.reduce((a, v, i) => {
        if (i % 2 === 0) {
            a[v] = Number(arr[i + 1])
        }
        return a
    }, {})
}
