function sum(x, y) {
    [x, y] = [x, y].map(Number)
    let sum = 0

    for (let i = x; i <= y; i++) {
        sum += i
    }

    return sum
}