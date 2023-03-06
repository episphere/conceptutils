const hello='hello world from connectUtils at '+Date()

function viewURL(id=119643471){
    return `https://episphere.github.io/conceptGithubActions/jsons/${id}.json`
}

function editURL(id=119643471){
    return `https://github.com/episphere/conceptGithubActions/blob/master/jsons/${id}.json`
}

async function getConcept(id=119643471){
    let url = viewURL(id)
    return await (await fetch(url)).json()
}

function tabulate(ids=[129084651,192505768,237817859,332961895,819848608,825323676]){
    let tbl = document.createElement('table')
    ["Concepts","Path"]
    
    return tb
}

export{
    hello,
    viewURL,
    editURL,
    getConcept
}