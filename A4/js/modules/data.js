import {format} from "./format.js"

export function showData(data){

    let results = document.querySelector('#data-out')
    if(data.error){
        alert('Erro: retorno de dados inválido.')
    }
    else{
        results.innerHTML = `<h2>${data.state}</h2>
                                <section id="covid-content">
                                    <p>Casos: ${format.formatResults(data.cases)}</p>
                                    <p>Mortes confirmadas: ${format.formatResults(data.deaths)}</p>
                                    <p>Suspeitas: ${format.formatResults(data.suspects)}</p>
                                </section>`
    }
    
}