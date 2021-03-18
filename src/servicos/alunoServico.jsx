import http from '../utils/http-axios';

const listar = dados => {
    return http.get('student', JSON.stringify(dados), {

        headers: {
            'authorization': `Bearer ${localStorage.getItem('token-carometro')}`

        }
    });
}

//https://192.168.15.11:5001/v1/student
const cadastrar = dados => {
    return http.post('student/signup',  JSON.stringify(dados),{
        headers: {
            'authorization': `Bearer ${localStorage.getItem('token-carometro')}`,
        },
    });
}

const alterar = dados => {
    return http.put(`student/${dados.buscRg}`, JSON.stringify(dados), {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('token-carometro')}`
        }
    });
}





export default {
    listar,
    cadastrar,
    alterar,
}