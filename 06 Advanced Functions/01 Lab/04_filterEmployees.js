function foo(a, b) {
    const parsed = JSON.parse(a)
    const [crit, value] = b.split("-")

    return parsed
        .filter(x => x[crit] === value)
        .map((x, i) => `${i}. ${x.first_name} ${x.last_name} - ${x.email}`)
        .join("\n")
}