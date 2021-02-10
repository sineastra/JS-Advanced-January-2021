class Stringer {
    constructor (s, l) {
        this.innerString = s
        this.innerLength = l
    }

    increase (v) {
        this.innerLength += v
    }
    decrease (v) {
        const result = this.innerLength - v
        this.innerLength = result < 0 ? 0 : result
    }

    toString () {
        if (this.innerLength === 0) return '...'

        if (this.innerString.length > this.innerLength) {
            return `${this.innerString.slice(0, this.innerLength)}...`
        }

        return this.innerString
    }
}