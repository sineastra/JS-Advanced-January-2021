class Request {
    constructor (m, u, v, msg) {
        this.method = m
        this.uri = u
        this.version = v
        this.message = msg
        this.response = undefined
        this.fulfilled = false
    }
}