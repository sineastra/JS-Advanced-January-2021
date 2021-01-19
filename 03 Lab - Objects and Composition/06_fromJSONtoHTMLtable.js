function foo(str) {
    const parsed = JSON.parse(str)
    const escapeChar = w =>
        `${w}`
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;")
    const makeRow = (tag, data) =>
        `<tr>${data.map(x => `<${tag}>${escapeChar(x)}</${tag}>`).join("")}</tr>`

    return `<table>
${makeRow("th", Object.keys(parsed[0]))}
${parsed.map(x => makeRow("td", Object.values(x))).join("\n")}
</table>`
}