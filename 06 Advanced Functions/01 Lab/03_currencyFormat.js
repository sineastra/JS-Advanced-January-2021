function foo(a, b, c, d) {
    return d.bind(undefined, a, b, c)
}