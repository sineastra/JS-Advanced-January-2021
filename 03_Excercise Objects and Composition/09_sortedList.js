function foo() {

    class SortedList {
        constructor() {
            this.list = []
            this.size = 0
        }

        sortList = () => (this.list = this.list.sort((a, b) => a - b))

        checkIndex = i => {
            if (this.list[i] === undefined) {
                throw new Error()
            }
        }

        updateSize = () => (this.size = this.list.length)

        add = e => {
            this.list.push(e)
            this.sortList()
            this.updateSize()
        }

        remove = i => {
            this.checkIndex(Number(i))
            this.list.splice(i, 1)
            this.sortList()
            this.updateSize()
        }

        get = i => {
            this.checkIndex(Number(i))
            this.sortList()
            return this.list[i]
        }
    }

    return new SortedList()
}