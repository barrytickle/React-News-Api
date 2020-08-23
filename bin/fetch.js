const fetch = require('node-fetch');
const Bluebird = require('bluebird');

class Request{

    async send(url, params, requestOptions){
        fetch.Promise = Bluebird;
        return  await fetch(url, requestOptions)
            .then((data) => {
                return data.text()
            })
            .catch((err) => {
                return 'error ' + err
            });
    }


}

module.exports = Request;