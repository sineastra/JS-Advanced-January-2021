const { expect } = require('chai')
const ChristmasMovies = require('./app')

describe(`testing ChristmasMovies Class`, () => {
	let instance = {}

	beforeEach(() => instance = new ChristmasMovies())

	describe('testing constructor', () => {
		it(`has props: movieCollection, watched and actors`, () => {
			expect(instance.movieCollection).to.not.be.undefined
			expect(instance.watched).to.not.be.undefined
			expect(instance.actors).to.not.be.undefined
		})
	})

	describe(`testing buyMovie() method`, () => {
		it(`proper msg on valid input`, () => {
			expect(instance.buyMovie('a', ['b', 'c', 'b'])).to
				.eq(`You just got a to your collection in which b, c are taking part!`)
		})
		it(`throws if movie is already bought`, () => {
			instance.buyMovie('a', ['b'])
			expect(() => instance.buyMovie('a', ['b'])).to
				.throw(`You already own a in your collection!`)
		})
	})

	describe(`discardMovie()`, () => {
		it(`proper msg on successfuly discarded movie`, () => {
			instance.buyMovie('a', ['b'])
			instance.watched.a = 1
			expect(instance.discardMovie('a')).to.eq(`You just threw away a!`)
		})
		it(`throws if you didnt buy the movie`, () => {
			expect(() => instance.discardMovie('a')).to.throw(`a is not at your collection!`)
		})
		it(`throws if the movie is bought but not watched yet`, () => {
			instance.buyMovie('a', ['b'])
			expect(() => instance.discardMovie('a')).to.throw(`a is not watched!`)
		})
	})

	describe(`watchMovie`, () => {
		it(`watching a movie adds it in .watched prop successfuly`, () => {
			instance.buyMovie('a', ['b'])
			instance.watchMovie('a')
			expect(instance.watched.a).to.eq(1)
		})
		it(`throws if trying to watch movie which is not bought`, () => {
			expect(() => instance.watchMovie('a')).to.throw('No such movie in your collection!')
		})
	})

	describe(`favouriteMovie`, () => {
		it(`proper msg for fav movie if prop .watched has atleast 1 movie added`, () => {
			instance.watched.a = 1
			instance.watched.b = 2
			expect(instance.favouriteMovie()).to
				.eq(`Your favourite movie is b and you have watched it 2 times!`)
		})
		it(`throws if there are no watched movies`, () => {
			expect(() => instance.favouriteMovie()).to
				.throw('You have not watched a movie yet this year!')
		})
	})

	describe(`mostStarredActors()`, () => {
		it(`prop msg on most starred actors`, () => {
			instance.buyMovie('a', ['b', 'c'])
			instance.buyMovie('a1', ['b', 'd'])
			expect(instance.mostStarredActor()).to
				.eq(`The most starred actor is b and starred in 2 movies!`)
		})
		it(`throws if there are no watched movies `, () => {
			expect(() => instance.mostStarredActor()).to
				.throw('You have not watched a movie yet this year!')
		})
	})
})