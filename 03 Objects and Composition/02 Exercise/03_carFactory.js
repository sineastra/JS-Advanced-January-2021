function foo({ model, power, color, carriage, wheelsize }) {
    const storageEngines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 },
    ]
    const storageCarriage = [
        { type: "hatchback", color: "" },
        { type: "coupe", color: "" },
    ]
    const getWheels = s => {
        const arr = []
        arr.length = 4
        return s % 2 === 0 ? arr.fill(s - 1) : arr.fill(s)
    }

    return {
        model,
        engine: storageEngines.reduce((a, v) =>
            Math.abs(a.power - power) < Math.abs(v.power - power) ? a : v
        ),
        carriage: { type: carriage, color },
        wheels: getWheels(wheelsize),
    }
}