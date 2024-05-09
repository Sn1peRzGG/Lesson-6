const comment = {
	author: 'Александр Ковалев',
	date: '10 березня 2024',
	seller: 'Rozetka',
	operatingSystem: 'Без ОС',
	review: `Купив його рік тому, дуже задоволений. Ніяких проблем не виникало. Топ за свої гроші.`,
	advantages: 'За свої гроші достатньо потужний, тихий, естетичний',
	disadvantages: 'Відсутні',
	rating: '5',
	likes: 1,
	dislikes: 0,
	addLike: function () {
		this.likes++
	},
	addDislike: function () {
		this.dislikes++
	},
	removeLike: function () {
		if (this.likes > 0) {
			this.likes--
		}
	},
	removeDislike: function () {
		if (this.dislikes > 0) {
			this.dislikes--
		}
	},
}

function getStars(rating) {
	const fullStars = '★ '.repeat(rating)
	const emptyStars = '☆ '.repeat(5 - rating)
	return fullStars + emptyStars
}

function printComment(comment) {
	console.log(`Автор: ${comment.author}`)
	console.log(`Дата: ${comment.date}`)
	console.log(`Продавець: ${comment.seller}`)
	console.log(`Операційна система: ${comment.operatingSystem}`)
	console.log(`Відгук: ${comment.review}`)
	console.log(`Переваги: ${comment.advantages}`)
	console.log(`Недоліки: ${comment.disadvantages}`)
	console.log(`Рейтинг: ${getStars(comment.rating)}`)
	console.log(`Лайки: ${comment.likes}`)
	console.log(`Дизлайки: ${comment.dislikes}`)
}

printComment(comment)
