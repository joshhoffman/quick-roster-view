import axios from 'axios';

export const HTTP = axios.create({
    baseURL: `https://crtsp3a0u3.execute-api.us-east-1.amazonaws.com/dev/`,
    // headers: {
    //     Authorization: 'Bearer {token}'
    // }
});