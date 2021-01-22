function foo(arr) {
    arr = arr.map(x => x.split(" ").map(Number))
    const getDiagSum = arr => arr.reduce((a, v, i) => a + v[i], 0)
    const mapToSum = (arr, sum) =>
        arr.map((x, i) => x.map((y, j) => (j === i || j === x.length - i - 1 ? y : sum)))
    const print = arr => arr.map(x => x.join(" ")).join("\n")

	const [reversedMatrix, resultMatrix] = [arr.reverse(), arr.reverse()]

    return getDiagSum(resultMatrix) === getDiagSum(reversedMatrix)
        ? print(mapToSum(resultMatrix, getDiagSum(resultMatrix)))
        : print(resultMatrix)
}
