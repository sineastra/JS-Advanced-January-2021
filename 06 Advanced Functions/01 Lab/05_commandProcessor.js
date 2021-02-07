function foo() {
    let str = ""

    return {
        append: v => (str += v),
        removeStart: x => (str = str.slice(x)),
        removeEnd: x => (str = str.slice(0, -x)),
        print: () => console.log(str),
    }
}

