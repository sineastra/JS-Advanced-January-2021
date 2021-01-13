function foo(arr, s) {
    const result = []
    for (let i = 0; i < arr.length; i += s) {
        result.push(arr[i])
    }

    return result
}
