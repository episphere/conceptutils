console.log('conceptUtils UI components loaded')


let conceptCache={}

const buttons=[
    'root concepts',
    'dependency map',
]

let rootConcepts=[
    129084651,
    192505768,
    237817859,
    332961895,
    819848608,
    825323676
]

// debine button onclick functions

let fun={}

fun.root_concepts=function(ids=rootConcepts){
    resultsDiv.innerHTML=''
    rootConcepts.forEach(id=>{
        resultsDiv.innerHTML+=`[<a href="#" onmouseover="conceptViz(${id})">${id}</a>]` 
    })
    resultsDiv.innerHTML+='<hr><pre id="conceptVizPre" style="color:green;font-size:large">...</pre><hr><div id="childrenDiv">...</div>'
}

async function conceptViz(id){
    childrenDiv.innerHTML=''
    let cj = await getConcept(id)
    let cji = Object.assign({}, cj)
    let subCol=cj.subcollections
    if(subCol){
        delete cji.subcollections
        let h = ''
        subCol.forEach(id=>{
            id = id.replace('.json','')
            h+=`[<a href="#"  onmouseover="conceptVizSub(${id})">${id}</a>]`
            //childrenDiv.innerHTML+=`[${id}]`
            //document.querySelector('pre').innerHTML=JSON.stringify(x,null,3).replace(/(\w+)\.json/g,'<a href="#" onmouseover="conceptVizSub($1)">$1.json</a>')
        })
        childrenDiv.innerHTML=h
    }
    conceptVizPre.innerHTML=JSON.stringify(cji,null,3)
    
    //console.log(await getConcept(id))
}

async function conceptVizSub(id){
    conceptVizPre.textContent=JSON.stringify(await getConcept(id),null,3)
}

function viewURL(id=119643471){
    return `https://episphere.github.io/conceptGithubActions/jsons/${id}.json`
}

function editURL(id=119643471){
    return `https://github.com/episphere/conceptGithubActions/blob/master/jsons/${id}.json`
}

async function getConcept(id=119643471){
    if(conceptCache[id]){
        return conceptCache[id]
    } else {
        let url = viewURL(id)
        conceptCache[id] = await (await fetch(url)).json()
        return conceptCache[id]
    }
}

fun.dependency_map=function(){
    console.log(Date())
}

// assemble buttons

panelDiv.innerHTML=''
buttons.forEach(bt=>{
    let btEl = document.createElement('button')
    btEl.id=`button ${bt}`
    btEl.textContent=bt
    panelDiv.appendChild(btEl)
    btEl.onclick=fun[bt.replace(/\s/g,'_')]
})


