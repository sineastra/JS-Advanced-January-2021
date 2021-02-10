class Rectangle {
    constructor (w, h, c) {
        this._width = w
        this._height = h
        this._color = c
    }

    get width () { return this._width }
    get height () { return this._height }
    get color () {
        return this._color.charAt(0).toLocaleUpperCase() + this._color.slice(1)
    }

    calcArea = () => this._width * this._height
}
