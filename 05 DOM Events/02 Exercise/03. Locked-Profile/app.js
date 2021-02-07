function lockedProfile() {
    const toggle = (btn, content) => {
        if (btn.innerHTML === "Show more") {
            btn.innerHTML = "Hide it"
            content.style.display = "block"
        } else {
            btn.innerHTML = "Show more"
            content.style.display = "none"
        }
    }

    document.getElementById("main").addEventListener("click", e => {
        if (e.target.tagName === "BUTTON") {
            const parent = e.target.parentNode
            const isUnlocked =
                parent.querySelector("input[type=radio]:checked").value ===
                "unlock"

            if (isUnlocked) {
                const infoDiv = parent.querySelector("div")
                toggle(e.target, infoDiv)
            }
        }
    })
}
