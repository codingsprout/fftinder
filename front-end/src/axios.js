import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://ff14-tinder.herokuapp.com/',
})

export default instance