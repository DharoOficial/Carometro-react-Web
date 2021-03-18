import axios from 'axios';

export default axios.create({
    baseURL : 'https://192.168.15.11:5001/v1/',
    headers : {
        'content-type' : 'application/json'
    }    
})

//Dharo - https://192.168.15.11:5001/v1/
//toshi - https://localhost:44357/v1/