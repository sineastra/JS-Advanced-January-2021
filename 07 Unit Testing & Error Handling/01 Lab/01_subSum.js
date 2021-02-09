function foo (arr, i, i1) {
    i = arr[i] === undefined ? 0 : i
    i1 = arr[i] === undefined ? arr.length - 1 : i1

    try {
        return (arr.slice(i, i1 + 1)
            .reduce((a, v) => a + v, 0) * 10) / 10
    } catch (e) {
        return NaN
    }
}