const btnSubmit = document.getElementById('submit')
const btnReset = document.getElementById('reset')
const txtName = document.getElementById('name')
const txtEmail = document.getElementById('mail')
const txtMessage = document.getElementById('message')

function guardarDatos(e) {
    e.preventDefault()
    localStorage.setItem('user', JSON.stringify({
        name: txtName.value,
        email: txtEmail.value,
        message: txtMessage.value
    }))
    const userData = JSON.parse(localStorage.getItem('user'))
    console.log('Datos de usuario',userData)
} 

btnSubmit.addEventListener('click', guardarDatos)
btnReset.addEventListener('click', () => localStorage.clear())

