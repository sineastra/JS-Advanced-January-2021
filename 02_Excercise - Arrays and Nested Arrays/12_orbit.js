function foo(arr) {
    let matrix = new Array(arr[0]).fill(new Array(arr[1]).fill(''))

    return matrix
        .map((x, i) => x.map((y, j) => Math.max(Math.abs(j - arr[3]), Math.abs(i - arr[2])) + 1))
        .map(x => x.join(" "))
        .join("\n")
}
