// Left for later

// class ContactNfo {
// 	constructor (f, l, p, e) {
// 		this.fName = f
// 		this.lName = l
// 		this.phone = p
// 		this.email = e
// 		this._online = false
// 		this.div = document.createElement('div')
// 	}
//
// 	get online () {
// 		return this._online
// 	}
//
// 	set online (v) {
// 		this._online = v
// 		this.div.className = this._online ? 'title online' : 'title'
// 	}
//
// 	render (id) {
// 		const parent = document.getElementById(id)
// 		const data = document.createElement('article')
//
// 		const inner = `${this.fName} ${this.lName}
// <button>&#8505;</button></div>
//     <div class="info" style="display: none">
//         <span>&phone; ${this.phone}</span>
//         <span>&#9993 ${this.email}</span>`
//
// 		this.div.className = 'title'
// 		this.div.innerHTML = inner
// 		data.appendChild(this.div)
// 		parent.appendChild(data)
//
// 		document.addEventListener('click', (e) => {
// 			if (e.target.tagName === 'BUTTON') {
// 				const infoDiv = e.target.parentNode.nextElementSibling
//
// 				infoDiv.style.display = infoDiv.style.display === 'none'
// 					? 'block'
// 					: 'none'
// 			}
// 		})
// 	}
// }
//
// let contacts = [
// 	new ContactNfo('Ivan', 'Ivanov', '0888 123 456', 'i.ivanov@gmail.com'),
// 	new ContactNfo('Maria', 'Petrova', '0899 987 654', 'mar4eto@abv.bg'),
// 	new ContactNfo('Jordan', 'Kirov', '0988 456 789', 'jordk@gmail.com')
// ]
// contacts.forEach(c => c.render('main'))
//
// // After 1 second, change the online status to true
// setTimeout(() => contacts[1].online = true, 2000)
// setTimeout(() => contacts[1].online = false, 4000)