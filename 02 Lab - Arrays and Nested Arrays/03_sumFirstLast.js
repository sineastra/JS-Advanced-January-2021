function foo(arr) {
    arr = arr.map(Number)
    return arr[0] + arr[arr.length - 1]
}