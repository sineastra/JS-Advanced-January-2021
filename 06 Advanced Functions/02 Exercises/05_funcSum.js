function foo(n) {
    let temp = 0

    function recursive(x) {
        temp += x
        recursive.toString = () => temp

        return recursive
    }
    return recursive(n)
}
