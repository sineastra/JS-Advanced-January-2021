function solve() {
    const html = {
        products: document.getElementsByClassName("product"),
        output: document.querySelector("body > div > textarea"),
        checkout: document.getElementsByClassName("checkout")[0],
        buttons: document.getElementsByTagName("button"),
    }

    const state = {
        names: new Set(),
        price: 0,
    }

    function getSectionInfo(e) {
        return {
            name: e.getElementsByClassName("product-title")[0].innerHTML,
            button: e.getElementsByClassName("add-product")[0],
            price:
                Number(
                    e.getElementsByClassName("product-line-price")[0].innerHTML
                ) || 0,
        }
    }

    function addToCart({ name, price }) {
        state.names.add(name)
        state.price += price

        return { name, price }
    }

    function displayToCart({ name, price }) {
        html.output.innerHTML += `Added ${name} for ${price.toFixed(
            2
        )} to the cart.\n`
    }

    Array.from(html.products)
        .map(getSectionInfo)
        .forEach(x =>
            x.button.addEventListener("click", () =>
                displayToCart(addToCart(x))
            )
        )

    html.checkout.addEventListener("click", () => {
        html.output.innerHTML += `You bought ${[...state.names.keys()].join(
            ", "
        )} for ${state.price.toFixed(2)}.`
        Array.from(html.buttons).map(x => (x.disabled = "true"))
    })
}
