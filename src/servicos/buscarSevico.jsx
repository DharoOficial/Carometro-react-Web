import http from '../utils/http-axios'

const BuscaroRg = () => {
    return http.get('student')
}
export default {
    BuscaroRg
}