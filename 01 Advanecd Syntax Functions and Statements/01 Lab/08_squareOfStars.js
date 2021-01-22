function printSquare(n = 5) {
    const row = "* ".repeat(n).trim()
	for (let i = 0; i < n; i++) {
		console.log(row)
	}
}