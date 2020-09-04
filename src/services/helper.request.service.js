const Promise = require('bluebird')
const rq = Promise.promisifyAll(require('request'))

async function createGetRequestOptions(uri, body) {
    let opt = {
        url: uri,
        headers: {
            'content-type': "application/json",
            'method': 'GET'
        }
    }
    return opt
}

async function createGetRequestOpt(uri, body) {
    let opt = {
        url: uri,
        headers: {
            'content-type': "application/json",
            'method': 'GET'
        }
    }
    return opt
}

async function createPutRequestOptions(uri, body) {
    let opt = {
        url: uri,
        headers: {
            'content-type': "application/json",
            'method': 'PUT'
        },
        body: JSON.stringify(body)
    }
    return opt
}

async function createPostRequestOptions(uri, body) {
    let opt = {
        url: uri,
        headers: {
            'content-type': "application/json",
            'method': 'POST'
        },
        body: JSON.stringify(body)
    }
    return opt
}

module.exports = {
    /**
     * Faz uma requisição put
     */
    createPutRequest: async(uri, body) => {
        let opt = await createPutRequestOptions(uri, body)
        return await rq.putAsync(opt)
    },
    /**
     * Faz uma requisição post
     */
    createPostRequest: async(uri, body) => {
        let opt = await createPostRequestOptions(uri, body)
        return await rq.postAsync(opt)
    },

    /**
     * Faz uma requisição get   
     */
    createGetRequest: async(uri, body) => {
        let opt = await createGetRequestOptions(uri)
        return await rq.getAsync(opt)
    },
    /**
     * Faz uma requisição get sem 'content-type': "application/json",
     */
    createRequestGet: async(uri, body) => {
        let opt = await createGetRequestOpt(uri)
        return await rq.getAsync(opt)
    }


}