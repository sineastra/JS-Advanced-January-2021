const { cardFactory } = require('./02_playingCards')

function foo (arr) {
    const deck = []

    for (let i = 0; i < arr.length; i++) {
        const cardData = arr[i].split('')
        const [face, suit] = [
            cardData.slice(0, -1).join(''),
            cardData[cardData.length - 1]
        ]

        try {
            deck.push(cardFactory(face, suit).toString())
        } catch (e) {
            console.log(`Invalid card: ${arr[i]}`)
            return
        }
    }

    return deck.join(' ')
}