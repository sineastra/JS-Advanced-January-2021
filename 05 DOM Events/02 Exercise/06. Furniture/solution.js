function solve() {
    const [generateBtn, buyBtn] = document.getElementsByTagName("button")
    const [generateInput, buyOutput] = document.getElementsByTagName("textarea")
    const tableBody = document.querySelector("tbody")

    const htmlTemplate = ({ img, name, price, decFactor }) => {
        const row = document.createElement("tr")

        row.innerHTML = `<td><img src=${img}></td>
<td><p>${name}</p></td>
<td><p>${price}</p></td>
<td><p>${decFactor}</p></td>
<td><input type="checkbox"/></td>`

        return row
    }

    const generate = () =>
        JSON.parse(generateInput.value).forEach(x =>
            tableBody.appendChild(htmlTemplate(x))
        )

    const buy = () => {
        const braindeadData = Array.from(
            tableBody.querySelectorAll("input[type=checkbox]:checked")
        ).map(x =>
            Array.from(x.parentNode.parentNode.children)
                .slice(1, 4)
                .map(
                    x =>
                        Number(x.children[0].innerHTML) ||
                        x.children[0].innerHTML
                )
        )
        const getSum = arr => arr.reduce((a, v) => a + v, 0)

        const names = braindeadData.map(x => x[0]).join(", ")
        const prices = getSum(braindeadData.map(x => x[1]))
        const avFactors =
            getSum(braindeadData.map(x => x[2])) / braindeadData.length

        buyOutput.value = `Bought furniture: ${names}
Total price: ${prices.toFixed(2)}
Average decoration factor: ${avFactors}`
    }

    generateBtn.addEventListener("click", generate)
    buyBtn.addEventListener("click", buy)
}