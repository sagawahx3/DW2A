class Validate{

    validateCEP(cep, size){
        cep = cep.replace(/\D/g, '')
        return cep.length == size
    }
}

export const validate = new Validate()