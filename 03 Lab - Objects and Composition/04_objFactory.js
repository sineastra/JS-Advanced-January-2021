function foo(library, orders) {
    return orders.reduce((a, v) => {
        // both ways are 100/100, just wanted to experiment abit with spread and arrays to properties

        const temp = {}
        temp.name = v.template.name
        v.parts.forEach(x => {
            temp[x] = library[x]
        })
        a.push(temp)
        return a
    }, [])
    //     a.push({
    //         name: v.template.name,
    //         ...v.parts.reduce((a1, v1) => {
    //             a1[v1] = library[v1]
    //             return a1
    //         }, {}),
    //     })
    //     return a
    // }, [])
}