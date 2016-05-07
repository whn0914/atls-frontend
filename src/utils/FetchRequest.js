/**
 * Created by haonan on 16/4/13.
 */
import 'isomorphic-fetch';

const API_ROOT = "http://www.atlsmall.com:8080";


export default class FetchRequest {

    static paramsToString(params) {
        const paramsArray = [];
        for (const name in params) {
            if (params.hasOwnProperty(name)) {
                let str = '';
                if (params[name] !== null) {
                    str = JSON.stringify(params[name]);
                }
                if (str.substring(0, 1) === '\"' && str.substring(str.length - 1) === '\"') {
                    str = str.substring(1, str.length - 1);
                }
                paramsArray.push(`${name}=${str}`);
            }
        }
        return paramsArray.join('&');
    }

    static call(endpoint, params) {
        const fullUrl = API_ROOT + endpoint;

        const headers = new Headers();
        headers.append('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
        const body = this.paramsToString(params);

        return fetch(fullUrl, {
            headers,
            body,
            method: 'post'
        })
            .then(res => res.json());
    }
}