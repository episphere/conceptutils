(async ()=>{
    conceptUtils = await import('./export.js')
    //PGSmap = await import('https://episphere.github.io/concept/export.js')
    if(typeof(define)!='undefined'){
        define(conceptUtils)
    }
})()