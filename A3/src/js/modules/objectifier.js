var registers = [];

function Register(nome, cpf, date, email, fone, cep){
    this.nome = nome;
    this.cpf = cpf;
    this.date = date;
    this.email = email;
    this.fone = fone;
    this.cep = cep;
  }

function newRegister(){
    var register = new Register(
        document.getElementById("nome").value,
        document.getElementById("cpf").value,
        document.getElementById("dt_nasc").value,
        document.getElementById("email").value,
        document.getElementById("fone").value,
        document.getElementById("cep").value
    )
    registers.push(register)
}