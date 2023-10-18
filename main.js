// const btnSubmit = document.getElementById('submit')
// const btnReset = document.getElementById('reset')
// const txtName = document.getElementById('name')
// const txtEmail = document.getElementById('mail')
// const txtMessage = document.getElementById('message')

let btnSubmit = document.getElementById('submit')
let btnReset = document.getElementById('reset')
let txtName = document.getElementById('name')
let txtEmail = document.getElementById('mail')
let txtMessage = document.getElementById('message')
let arr = []

function guardarDatos(e) {
    e.preventDefault()

    arr.push({
        name: txtName.value,
        email: txtEmail.value,
        message: txtMessage.value
    })

    localStorage.setItem('user',JSON.stringify(arr))

    let userData = JSON.parse(localStorage.getItem('user'))
    console.log('Datos de usuario\n',userData)
} 

btnSubmit.addEventListener('click', guardarDatos)
btnReset.addEventListener('click', () => localStorage.clear())

