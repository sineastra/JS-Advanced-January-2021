function getEvens(arr) {
    arr = arr.filter((_, i) => i % 2 === 0)
    console.log(arr.join(" "))
}
