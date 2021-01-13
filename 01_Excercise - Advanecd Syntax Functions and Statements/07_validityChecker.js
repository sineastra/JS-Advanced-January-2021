function validDistance(x, y, x1, y1) {
    const isValidDist = (x, y, x1, y1) =>
        Math.sqrt(Math.pow(x1 - x, 2) + Math.pow(y1 - y, 2)) % 1 === 0
    const pairs = [
        [x, y, 0, 0],
        [x1, y1, 0, 0],
        [x, y, x1, y1],
    ]
    const printMsg = (a, b, c, d, validity) => `{${a}, ${b}} to {${c}, ${d}} is ${validity}`
    pairs.forEach((x, i) =>
        console.log(isValidDist(...pairs[i]) ? printMsg(...x, "valid") : printMsg(...x, "invalid"))
    )
}