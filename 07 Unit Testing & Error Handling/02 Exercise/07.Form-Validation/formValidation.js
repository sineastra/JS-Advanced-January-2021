function validate () {
    const html = {
        companyCheck: document.getElementById(`company`),
        submit: document.getElementById(`submit`),
        validDiv: document.getElementById(`valid`),
        companyInfo: document.getElementById(`companyInfo`)
    }

    const inputFields = {
        username: document.getElementById(`username`),
        email: document.getElementById(`email`),
        password: document.getElementById(`password`),
        'confirm-password': document.getElementById(`confirm-password`),
        companyNumber: document.getElementById(`companyNumber`),

    }

    const checkLength = (v, s, e) => v.length >= s && v.length <= e
    const checkPassword = (v, s, e, f) =>
        checkLength(v, s, e) && /^\w+$/g.test(v) && v === inputFields[f].value

    const validate = {
        username: (v) => checkLength(v, 3, 20) && /^[a-zA-Z0-9]*$/g.test(v),
        password: (v) => checkPassword(v, 5, 15, 'confirm-password'),
        'confirm-password': (v) => checkPassword(v, 5, 15, 'password'),
        email: (v) => /^.*@.*\..*$/g.test(v),
        companyNumber: (v, c) => c ? v >= 1000 && v <= 9999 : true
    }

    const changeBorder = (c, e) => {
        const style = c ? 'border: none' : 'border-color: red'

        e.style = style
    }

    html.companyCheck.addEventListener('change', (e) => {
        if (e.target.checked === true) {
            html.companyInfo.style.display = 'block'
        } else {
            html.companyInfo.style.display = 'none'
        }
    })

    html.submit.addEventListener('click', (e) => {
        e.preventDefault()
        const checked = html.companyCheck.checked
        let oneInvalid = false

        Object.entries(inputFields).forEach(([name, valueField]) => {
            const valid = validate[name](valueField.value, checked)

            changeBorder(valid, inputFields[name])

            if (! valid) oneInvalid = true
        })

        if (oneInvalid) {
            html.validDiv.style.display = 'none'
        } else {
            html.validDiv.style.display = 'block'
        }
    })
}
