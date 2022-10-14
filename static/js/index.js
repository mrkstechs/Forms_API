const form = document.querySelector('#myForm')
const greetingInput = document.querySelector('#greeting')
const greetingOutput = document.querySelector('#greeting-output')
const events = document.querySelector('#events')
const eventOutput = document.querySelector('#event-output')
const msgInput = document.querySelector('#message')
const msgOutput = document.querySelector('#greeting-msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    greetingOutput.textContent = greetingInput.value
    eventOutput.textContent = `Wishing you all the best on your ${events.value}`
    msgOutput.textContent = msgInput.value
})
