function foo(w, h, c) {
    return {
        width: w,
        height: h,
        color: c[0].toUpperCase() + c.slice(1),
        calcArea: function () {
            return this.width * this.height
        },
    }
}