import {covidData} from "./covid.js"

export async function cepData(cepUrl) {
    let url = `https://viacep.com.br/ws/${cepUrl}/json/`
    const result = await fetch(url, {"method": "GET"})
    const convertedResult = await result.json()
    covidData(convertedResult) 
  
}

