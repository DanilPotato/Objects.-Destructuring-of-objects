// 1

let user = {
	name: 'John',
	age: 30,
	hobby: 'reading',
	premium: true,
}

user.mood = 'happy'
user.hobby = 'skydiving'
user.premium = false

for (let key of Object.keys(user)) {
	const { [key]: value } = user
	console.log(`${key}: ${value}`)
}

// 2

const countProps = function (obj) {
	return Object.keys(obj).length
}

console.log(countProps(user))

// 3

const tasksByEmployee = {
	John: 23,
	Alice: 17,
	Bob: 30,
	Eve: 25,
	David: 19,
}

const findBestEmployee = function (employees) {
	let maxTasks = 0
	let bestEmployee = ''

	for (let employee in employees) {
		const { [employee]: tasks } = employees
		if (tasks > maxTasks) {
			maxTasks = tasks
			bestEmployee = employee
		}
	}

	return bestEmployee
}

console.log(findBestEmployee(tasksByEmployee))

// 4

const countTotalSalary = function (employees) {
	let total = 0
	const values = Object.values(employees)
	for (let salary of values) {
		total += salary
	}
	return total
}

const employees = {
	John: 1000,
	Jane: 1500,
	Alex: 1200,
}

console.log(countTotalSalary(employees))

// 5

const getAllPropValues = function (arr, prop) {
	const propValues = []

	for (const obj of arr) {
		const { [prop]: value } = obj
		if (value !== undefined) {
			propValues.push(value)
		}
	}

	return propValues
}

const products = [
	{ name: 'Радар', price: 1300, quantity: 4 },
	{ name: 'Сканер', price: 2700, quantity: 3 },
	{ name: 'Дроїд', price: 400, quantity: 7 },
	{ name: 'Захват', price: 1200, quantity: 2 },
]

console.log(getAllPropValues(products, 'name'))
console.log(getAllPropValues(products, 'quantity'))
console.log(getAllPropValues(products, 'category'))

// 6

function calculateTotalPrice(allProducts, productName) {
	let totalPrice = 0

	for (const { name, price, quantity } of allProducts) {
		if (name === productName) {
			totalPrice = price * quantity
			break
		}
	}

	return totalPrice
}
console.log(calculateTotalPrice(products, 'Радар'))
console.log(calculateTotalPrice(products, 'Сканер'))
console.log(calculateTotalPrice(products, 'Дроїд'))
console.log(calculateTotalPrice(products, 'Захват'))
