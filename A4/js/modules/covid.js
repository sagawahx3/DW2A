import {showData} from "./data.js"


async function covidData(state){
    let uf = await state.uf
    let covidData = `https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${uf}`

    await fetch(covidData, {"method": "GET"})
    .then(function(response){
        response.json()
        .then(function(data) {
            showData(data)
        })
    })
    .catch(err => console.log(err));  
}

export {covidData}