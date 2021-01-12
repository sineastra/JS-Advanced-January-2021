function foo(n) {
    const arr = `${n}`.split("")
    return `${arr.every((x, i, arr1) => arr1.slice(i).every(y => x === y))}
${arr.map(Number).reduce((a, v) => a + v, 0)}`
}
