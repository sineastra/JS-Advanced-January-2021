function foo(arr) {
    let count = 0
    arr.forEach(x =>
        x.reduce((a, v) => {
            if (a === v) {
                count += 1
            }
            return v
        })
    )

    for (let i = 0; i < arr.length - 1; i++) {
        arr[i].forEach((_, j) => {
            if (arr[i][j] === arr[i + 1][j]) {
                count += 1
            }
        })
    }
    return count
}
