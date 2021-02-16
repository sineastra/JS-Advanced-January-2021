class Contact {
	constructor (f, l, p, e) {
		this.firstName = f
		this.lastName = l
		this.phone = p
		this.email = e
		this._online = false
	}

	get online () {
		return this._online
	}

	set online (v) {
		this._online = v

		if (this.onlineDiv) {
			this.onlineDiv.className = this._online ? 'title online' : 'title'
		}
	}

	eFactory (tag, content = '') {
		const e = document.createElement(tag)
		e.innerHTML = content

		return e
	}

	render (id) {
		this.templ = this.eFactory('article')
		this.onlineDiv = this.eFactory('div', `${this.firstName} ${this.lastName}`)
		this.infoBtn = this.eFactory('button', '&#8505;')
		this.infoDiv =
			this.eFactory(
				'div',
				`<span>&phone; ${this.phone}</span><span>&#9993; ${this.email}</span>`
			)


		this.onlineDiv.className = this.online ? 'title online' : 'title'
		this.infoDiv.className = 'info'
		this.infoDiv.style.display = 'none'

		this.onlineDiv.appendChild(this.infoBtn)
		this.templ.appendChild(this.onlineDiv)
		this.templ.appendChild(this.infoDiv)

		document.getElementById(id).appendChild(this.templ)

		this.infoBtn.addEventListener('click', () => {
			this.infoDiv.style.display = this.infoDiv.style.display === 'none' ? 'block' : 'none'
		})
	}
}