let nome = document.getElementById('nome')
let email = document.getElementById('email')
let assunto = document.querySelector('#assunto')//.assunto -> classe
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = "25.9%"
email.style.width = "25.6%"

function ola (){
    alert("Seja bem vinde!")
}

function validarNome(){
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3){
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color = "red"
    }else {
        txtNome.innerHTML = "Nome válido"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validarEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
        
    }else{
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validarAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Digite no máximo 100 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    }else{
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar(){
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert ("Formulário enviado com sucesso!")
    }else{
        alert ("Preencha o formulário corretamente!")
    }
}

function mapaZoom(){
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapaNormal(){
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}