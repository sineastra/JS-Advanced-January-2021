function foo(area, volume, inputs) {
    return JSON.parse(inputs).reduce((a, v, i, obj) => {
        a.push({
            area: area.call(v),
            volume: volume.call(v),
        })
        return a
    }, [])
}
