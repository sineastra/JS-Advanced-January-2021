function calcPrice(a, x, y) {
    const kg = x / 1000
    return `I need $${(kg * y).toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${a}.`
}