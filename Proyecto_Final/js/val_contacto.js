const nombre = document.getElementById("name")
const email = document.getElementById("email")
const tel = document.getElementById("tel")
const form = document.getElementById("form")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    // reinicia los valores de los campos ingresados incorrectamente
    parrafo.innerHTML = ""

    // si el nombre contiene menos de 2 letras
    if(nombre.value.length <2){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }

    // validacion del email 
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }

    // Valida si los campos estan completos 
    if(entrar){
        parrafo.innerHTML=warnings
    }
    else{
        parrafo.innerHTML = "Consulta enviada"
    }
})
