function largestNum(...args) {
    return `The largest number is ${args.sort((a, b) => b - a)[0]}.`
}