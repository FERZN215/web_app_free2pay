import api from './api'
export default {

    params(params){
        return api().post('params', {params})
    },

   
}