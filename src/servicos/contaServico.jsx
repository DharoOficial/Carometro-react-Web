const cadastrarAdmin = dados =>{

    return fetch('https://localhost:44357/v1/admin/signup', {
        method : 'POST',
        body : JSON.stringify(dados),
        headers : {
            'content-type' : 'application/json'
        }
    })

}

export default {

    cadastrarAdmin

}