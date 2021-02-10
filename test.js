const arr = new Array(10000000).fill(1)

function reverseBuilt (arr) {
    arr = arr.reverse()
}

function myReverse (arr) {
    const myArr = []
    for (let i = 0; i < arr.length; i++) {
        myArr.push(arr.pop())
    }
}

console.time('reverseBuilt')
reverseBuilt(arr)
console.timeEnd('reverseBuilt')

console.time('myReverse')
myReverse(arr)
console.timeEnd('myReverse')
