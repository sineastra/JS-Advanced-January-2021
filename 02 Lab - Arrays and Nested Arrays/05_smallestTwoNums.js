function foo(arr) {
    return arr
        .sort((x, y) => x - y)
        .slice(0, 2)
        .join(" ")
}