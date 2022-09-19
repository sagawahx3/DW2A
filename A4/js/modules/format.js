class Format{

    cep(value){
        return value
        .replace(/\D/g, '')
        .replace(/(\d{5})(\d)/,'$1-$2')
        .replace(/(-\d{3})\d+?$/,'$1')
    }

    Url(value){
        return value.replace(/\D/g, '')

    }

    formatResults(value){
        value = String(value)
        
        return value
        .replace(/(\d?)(\d{3})$/, '$1.$2')
        .replace(/(\d)(\d{3}?)(\.)/, '$1.$2$3')
    }
}

export const format = new Format()