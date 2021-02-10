// wont refactor this one.

class Company {
	constructor () {
		this.departments = []
	}

	getDepart (name) {
		const depart = this.departments.find(x => x.name === name)

		if (! depart) {
			const temp = { name, employees: [], salaries: [], positions: [] }
			this.departments.push(temp)
			return temp
		} else {
			return depart
		}
	}

	getSalariesSum = depart => depart.salaries.reduce((a, v) => a + v, 0)

	bestSalaryDepart = () =>
		this.departments.sort((a, b) =>
			this.getSalariesSum(b) / b.salaries.length -
			this.getSalariesSum(a) / a.salaries.length)
			[0]

	addEmployee (...args) {
		if (
			args.some(x => x === undefined || x === null || x === '') ||
			args[1] < 0
		) {
			throw new Error('Invalid input!')
		}

		const department = this.getDepart(args[3])

		department.employees.push(args[0])
		department.salaries.push(args[1])
		department.positions.push(args[2])
		return `New employee is hired. Name: ${args[0]}. Position: ${args[2]}`
	}

	bestDepartment () {
		const best = this.bestSalaryDepart()

		const printData = best.employees
			.reduce((a, v, i) => {
				a[i] = []
				a[i].push(v, best.salaries[i], best.positions[i])
				return a
			}, [])
			.sort((a, b) => b[1] - a[1] === 0
				? a[0].localeCompare(b[0])
				: b[1] - a[1])
			.map(x => x.join(' '))
			.join('\n')

		return `Best Department is: ${best.name}
Average salary: ${(this.getSalariesSum(best) / best.salaries.length).toFixed(2)}
${printData}`
	}
}
