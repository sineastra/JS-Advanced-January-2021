class List {
    constructor () {
        this.list = []
        this.size = this.list.length
    }

    updateSize = () => this.size = this.list.length
    orderList = () => this.list.sort((a, b) => a - b)

    add (e) {
        this.list.push(e)
        this.updateSize()
        this.orderList()
    }
    remove (i) {
        if (this.list[i] !== undefined) {
            this.list.splice(i, 1)
            this.updateSize()
            this.orderList()
        }
    }
    get (i) {
        if (this.list[i] !== undefined) {
            this.updateSize()
            this.orderList()
            return this.list[i]
        }
    }
}