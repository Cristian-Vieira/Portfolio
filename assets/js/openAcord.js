const TRIGGERS = document.querySelectorAll('.acordeon .openAcord')

TRIGGERS.forEach((trigger) => {
    trigger.addEventListener('click', (x) => {
        const ACORDEON = trigger.parentElement
        const OPEN = ACORDEON.classList.contains("open")

        if (OPEN) {
            ACORDEON.classList.remove('open')
        } else {
            ACORDEON.classList.add('open')
        }
    })
})