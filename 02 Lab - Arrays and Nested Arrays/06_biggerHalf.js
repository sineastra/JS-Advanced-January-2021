function foo(arr) {
    return arr.sort((x, y) => x - y).slice(-Math.ceil(arr.length / 2))
}
