const BASE_URL = 'http://192.168.178.42:3000';
const LOGIN_URL = BASE_URL + '/account/login';
const REGISTER_URL = BASE_URL + '/account/register';

import * as http from 'http';

export default class AuthService {
    login(email, password) {
        alert('login')
    }

    register(email, password) {
        console.log(REGISTER_URL);
        alert(REGISTER_URL);
        http.request({
            url: REGISTER_URL,
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            content: JSON.stringify({
                email,
                password
            })
        }).then((response) => {
            let token = response.content.toString();
            console.log(token);
            alert(token)
        }, (e) => {
            alert(JSON.stringify(e))
            console.log(e)
        });
    }
}