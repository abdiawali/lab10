import axios from 'axios'

let base = 'api'

export default {
    getHelloMessage() {
        return axios.get(base).then(Response => {
            return Response.data
        })
    }
}