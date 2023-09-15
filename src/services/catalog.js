import {GET_ALL_PROPOSITION} from './config';

export const getAllProposition = () => {
    console.log("catalogService > getAllProposition called...");
    return new Promise((resolve, reject) => {
        try {
            fetch(`http://localhost:3000${GET_ALL_PROPOSITION}`)
                .then(response => {
                    return response.json();
                })
                .then(json => {
                    resolve(json)
                })
                .catch(err => {
                    reject(err)
                })
        } catch (err) {
            console.error("in catalogService > getAllProposition, Err===", err);
            reject(err);
        }
    });
};