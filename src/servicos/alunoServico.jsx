import http from '../utils/http-axios';

const listar = () => {
    return http.get('student')
}

//https://192.168.15.11:5001/v1/student
const cadastrar = dados => {
    return http.post('student', JSON.stringify(dados), {
        headers : {
            'authorization' : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmYW1pbHlfbmFtZSI6IkVyY2lrIiwiZW1haWwiOiJlbWFpbEBlbWFpbC5jb20iLCJqdGkiOiIyZTc2OWM3NC1iM2QzLTRiMzQtYTA3MS02YmU0M2Y0MTUwYzEiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbmlzdHJhZG9yIiwiSWRVc3VhcmlvIjoiNmRmMDkwMTQtNjg4ZS00MGVkLWM5M2UtMDhkOGU4NzFkN2Q0IiwiUm9sZSI6IkFkbWluaXN0cmFkb3IiLCJleHAiOjE2MTU5OTE4MTgsImlzcyI6ImNhcm9tZXRybyIsImF1ZCI6ImNhcm9tZXRybyJ9.lKJwqbX_6W6RSWOqlgCBxPiOEk0GO6E_tH8XNKtd7wo`
        }
    });
}

const alterar = dados => {
    return http.put(`student/${dados.rg}`, JSON.stringify(dados), {
        headers : {
            'authorization' : `Bearer ${localStorage.getItem('')}`
        }
    });
}





export default {
    listar,
    cadastrar,
    alterar,
}