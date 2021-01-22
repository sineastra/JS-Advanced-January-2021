function foo(arr) {
    return arr.reduce((a, v) => {
        if (v >= (a[a.length - 1] || arr[0])) {
            a.push(v)
        }
        return a
    }, [])
}
