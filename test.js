function* foo(s, e, st) {
    for (let i = s; i < e; i += st) {
        yield i
    }
}

const as = foo(0, 100, 1)
console.log(as.next())
console.log(as.next())
