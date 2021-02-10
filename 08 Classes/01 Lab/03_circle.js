class Circle {
    constructor (r) {
        this._radius = r
    }

    get radius () { return this._radius}

    get diameter () { return this._radius * 2 }
    set diameter (d) { this._radius = d / 2}

    get area () { return Math.PI * this._radius * this._radius }
}
