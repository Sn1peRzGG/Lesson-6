const products = require('./task2.json')

let totalWithoutDiscount = 0
let totalWithDiscount = 0

products.forEach(product => {
	product.data.forEach(modification => {
		totalWithoutDiscount += modification.price
		totalWithDiscount += modification.price * (1 - modification.sale / 100)
	})
})

console.log(
	'Загальна сума цін без знижок: ' + totalWithoutDiscount.toFixed(2) + ' грн!'
)
console.log(
	'Загальна сума цін з урахуванням знижок: ' +
		totalWithDiscount.toFixed(2) +
		' грн!'
)
