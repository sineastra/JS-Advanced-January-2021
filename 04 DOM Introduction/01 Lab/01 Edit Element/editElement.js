function editElement(el, match, replacer) {
    const r = new RegExp(match, "g")
    el.textContent = el.textContent.replace(r, replacer)
}
