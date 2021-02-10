function foo (request) {
    const errMsg = (x) => {
        const capitalized = x !== 'uri'
            ? x.charAt(0)
               .toLocaleUpperCase() + x.slice(1)
            : x.toLocaleUpperCase()
        return `Invalid request header: Invalid ${capitalized}`
    }

    function propsExist (obj, arr) {
        arr.forEach(x => {
            if (! obj.hasOwnProperty(x)) {
                throw new Error(errMsg(x))
            }
        })

        return obj
    }

    function validProps (obj) {
        const checks = {
            method: (m) => ['GET', 'POST', 'DELETE', 'CONNECT'].includes(m),
            uri: (u) => /^(\.*[a-zA-Z]*[0-9]*\.*\**)+$/g.test(u) && u !== '',
            version: (v) => [
                'HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'
            ].includes(v),
            message: (m) => /^[^<>\\&'"]*$/g.test(m)
        }

        Object.entries(obj).forEach(([prop, value]) => {
            if (! checks[prop](value)) {
                throw new Error(errMsg(x[0]))
            }
        })

        return obj
    }

    return validProps(propsExist(request, [
        'method', 'uri', 'version', 'message'
    ]))
}