class Point {
    constructor (x, y) {
        this._x = x
        this._y = y
    }

    get x () {return this._x}
    get y () {return this._y}

    static distance = (a, b) => Math.hypot(b.x - a.x, b.y - a.y)
}