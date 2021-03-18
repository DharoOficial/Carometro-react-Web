import http from '../utils/http-axios'

const BuscaroRg = () => {
    return http.get('student',{
        headers : {
            'authorization' : `Bearer ${localStorage.getItem('token-carometro')}`
        }
    })
}
export default {
    BuscaroRg
}