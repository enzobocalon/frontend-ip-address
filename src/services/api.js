import axios from "axios"

const API_URL = 'https://ipgeolocation.abstractapi.com/v1/?api_key=6f16458cdbfd41b7b262f784901a8fe7'

export const getData = async (client) => {
    try {
        if (client !== ''){
            const response = await axios.get(`${API_URL}&ip_address=${client}`)
            return response.data;
        } else {
            const response = await axios.get(API_URL)
            return response.data;
        }
        
    } catch (error) {
        console.log(error);
    }

}