function foo(s) {
    return s.match(/\w+/g).join(", ").toLocaleUpperCase()
}
