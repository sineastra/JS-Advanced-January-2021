function result (command) {
    const actions = {
        upvote: x => (x.upvotes += 1), downvote: x => (x.downvotes += 1), score: x => getScore(x),
    }

    function isObfuscable (votes) {
        return votes > 50
    }

    function getObfNum (u, d) {
        return Math.ceil(0.25 * Math.max(u, d))
    }

    function calcRating (u, d) {
        //Branch for me, branch for you, branch for everyonnee... :-)

        if (u + d < 10) return 'new'
        if (u > (u + d) * 0.66) return 'hot'
        if (u - d >= 0 && (u > 100 || d > 100)) return 'controversial'
        if (u - d < 0) return 'unpopular'

        return 'new'
    }

    function getScore ({upvotes, downvotes}) {
        const obfNum = isObfuscable(upvotes + downvotes) ? getObfNum(upvotes, downvotes) : 0
        const [rUps, rDowns] = [upvotes + obfNum, downvotes + obfNum]
        const balance = rUps - rDowns

        return [rUps, rDowns, balance, calcRating(upvotes, downvotes)]
    }

    return actions[command](this)
}

result.call({upvotes: 1, downvotes: 2}, 'upvote')
