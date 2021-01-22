function foo(arr) {
    return arr.reduce((a, v) => {
        v < 0 ? a.unshift(v) : a.push(v)
        return a
    }, [])
}