function notify (message) {
    const notifDiv = document.getElementById(`notification`)
    notifDiv.textContent = message
    notifDiv.style.display = 'block'
    notifDiv.addEventListener('click', () => notifDiv.style.display = 'none')
}