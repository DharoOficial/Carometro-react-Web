const logar = dados =>{

    return fetch('https://localhost:44357/v1/login/signin', {
        method : 'POST',
        body : JSON.stringify(dados),
        headers : {
            'content-type' : 'application/json'
        }
    })

}

export default {

    logar

}