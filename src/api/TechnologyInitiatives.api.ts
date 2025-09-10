
import axios from 'axios'


export const technologyInitiativesApi = axios.create({
    baseURL: 'http://localhost:8080/'
})