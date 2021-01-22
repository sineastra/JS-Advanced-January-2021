function circleArea(r) {
    const result =
        typeof r === "number"
            ? (Math.PI * r * r).toFixed(2)
            : `We can not calculate the circle area, because we receive a ${typeof r}.`
    return result
}