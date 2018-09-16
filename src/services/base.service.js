import { AsyncStorage } from 'react-native';

export class ApiManager {
   static getFromApi(url) {
        return fetch(url, {
            method: 'get',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json'
            }
        });
    }

    static postToApi(url, body) {
        return fetch(url, {
            method: 'post',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    }

}

export class LocalManager {
    static saveToDevice = async (key , value) => {
       return await AsyncStorage.setItem(key , value);
    }

    static getFromDevice= async (key) => {
        return await AsyncStorage.getItem(key);
    }
}