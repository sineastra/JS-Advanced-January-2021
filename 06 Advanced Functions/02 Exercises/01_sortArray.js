function foo(arr, a) {
    return a === "asc" ? arr.sort((x, y) => x - y) : arr.sort((x, y) => y - x)
}
