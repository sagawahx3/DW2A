import {format} from "./modules/format.js"
import {validate} from "./modules/validate.js"
import {cepData} from "./modules/cep.js"


const form = document.querySelector('form')

let input = document.querySelector('input')


input.addEventListener('input', (e) => {
    e.target.value = format.cep(input.value)
}, false)


form.addEventListener('submit', (e) => {

    e.preventDefault()

    let cep = input.value
    let cepUrl = format.Url(cep)

    if(input.value.trim("") == ""){
        alert('Erro : CPF inválido.')
    }
    
    else if(!(validate.validateCEP(cep, 8))){
        alert('Erro: CPF inválido.');
    }

    else{
        cepData(cepUrl)
    }
})





