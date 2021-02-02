function extract(content) {
    const target = document.getElementById(content)

    return target.innerHTML
        .match(/(?!\()[\w*\s*\d*]*(?=\))/g)
        .filter(x => x !== "")
        .join("; ")
}