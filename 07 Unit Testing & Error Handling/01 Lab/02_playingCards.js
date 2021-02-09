// had fun doing this without a class.

function cardFactory (f, s) {
    const faces = {
        2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 'J', Q: 'Q', K: 'K', A: 'A',
    }
    const suits = { S: '\u2660', H: '\u2665', D: '\u2666', C: '\u2663', }
    const setter = (c, e) => {
        if (! c[e]) throw new Error()
        return c[e]
    }
    let [face, suit] = [setter(faces, f), setter(suits, s)]

    const card = { face, suit, toString: () => `${face}${suit}` }

    Object.defineProperties(card, {
        face: {
            get () {return face},
            set: (f) => setter(faces, f)
        }, suit: {
            get () {return suit},
            set: (s) => setter(suits, s)
        },

    })

    return card
}

module.exports = { cardFactory }
