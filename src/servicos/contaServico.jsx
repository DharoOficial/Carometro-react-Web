const cadastrarAdmin = dados =>{

    return fetch('https://192.168.15.11:5001/v1/admin/signup', {
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