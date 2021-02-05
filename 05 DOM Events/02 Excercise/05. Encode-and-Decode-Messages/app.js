function encodeAndDecodeMessages() {
    const [encodeField, decodeField] = document.querySelectorAll("textarea")

    const transform = (str, type) =>
        str
            .split("")
            .map(x =>
                String.fromCharCode(
                    type === "encode"
                        ? x.charCodeAt(0) + 1
                        : x.charCodeAt(0) - 1
                )
            )
            .join("")

    document.addEventListener("click", e => {
        if (e.target.tagName === "BUTTON") {
            if (e.target.textContent.includes("Encode")) {
                decodeField.value = transform(encodeField.value, "encode")
                encodeField.value = ""
            } else {
                decodeField.value = transform(decodeField.value, "decode")
            }
        }
    })
}
