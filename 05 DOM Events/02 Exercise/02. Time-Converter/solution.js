function attachEventsListeners() {
    const htmlData = {
        buttons: Array.from(document.querySelectorAll("input[type='button']")),
        fields: Array.from(document.querySelectorAll("input[type='text']")),
    }

    const fillObj = (seconds, minutes, hours, days) => ({
        seconds,
        minutes,
        hours,
        days,
    })
    const types = {
        seconds: v => fillObj(v, v / 60, v / 3600, v / 86400),
        minutes: v => fillObj(v * 60, v, v / 60, v / 1440),
        hours: v => fillObj(v * 3600, v * 60, v, v / 24),
        days: v => fillObj(v * 86400, v * 1440, v * 24, v),
    }

    htmlData.buttons.forEach(x =>
        x.addEventListener("click", () => {
            const [typeOfUnits, value] = [
                x.previousElementSibling.id,
                x.previousElementSibling.value,
            ]
            const data = types[typeOfUnits](value)

            htmlData.fields.map(y => (y.value = data[y.id]))
        })
    )
}
