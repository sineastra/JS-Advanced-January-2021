function foo(input) {
    const data = {}

    const getAllProps = obj => {
        const p = {}
        for (
            ;
            !obj.hasOwnProperty("constructor");
            obj = Object.getPrototypeOf(obj)
        ) {
            let op =
                Object.getOwnPropertyNames(obj) !== -1
                    ? Object.getOwnPropertyNames(obj)
                    : 0
            for (let i = 0; i < op.length; i++) p[op[i]] = obj[op[i]]
        }
        return p
    }

    const instr = {
        create: (n, inherits, n2) =>
            (data[n] = inherits ? Object.create(data[n2]) : {}),
        set: (n, k, v) => (data[n][k] = v),
        print: n => {
            console.log(
                Object.entries(getAllProps(data[n]))
                    .map(x => `${x[0]}:${x[1]}`)
                    .join(", ")
            )
        },
    }

    input.forEach(x => {
        const [c, n, k, v] = x.split(" ")

        instr[c](n, k, v)
    })
}