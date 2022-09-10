import { validation } from "./modules/input_validation.js";

const form = document.querySelector('form');
const allInptus = [...document.querySelectorAll('input')];
const registers = [];

function Register(nome, cpf, date, email, fone, cep){
    this.nome = nome;
    this.cpf = cpf;
    this.date = date;
    this.email = email;
    this.fone = fone;
    this.cep = cep;
  }

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let cpf = allInptus.find(el => el.id == "cpf").value;
    let date = allInptus.find(el => el.id == "dt_nasc").value;
    let email = allInptus.find(el => el.id == "email").value;
    let phone = allInptus.find(el => el.id == "fone").value;
    let cep = allInptus.find(el => el.id == "cep").value;

    if(!validation.checkCPF(cpf))
    {
        alert("CPF inválido.");
        return;
    }    
    if(!validation.checkDate(date))
    {   
        alert("Data inválida.");
        return;
    }

    if(!validation.checkEmail(email))
    {   
        alert("E-mail inválido.");
        return;
    }

    if(!validation.checkNumber(phone, 11))
    {
        alert("Telefone inválido.");
        return;
    }

    if(!validation.checkNumber(cep, 8))
    {
        alert("CEP Incompleto");
        return;
    }

    if(allInptus.find(el => el.value.trim("") == ""))
    {
        alert("Formulário incompleto.");
        return;
    }

    var register = new Register(
        document.getElementById("nome").value,
        document.getElementById("cpf").value,
        document.getElementById("dt_nasc").value,
        document.getElementById("email").value,
        document.getElementById("fone").value,
        document.getElementById("cep").value
    )
    registers.push(register)

});


