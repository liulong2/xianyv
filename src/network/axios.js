import axios from "axios"

export function request(config) {
    const instance = axios.create({
        baseURL: "http://localhost:10160/yhzg",
        timeout: 5000
    })

    instance.interceptors.request.use(config => {
        return config
    },error => {
        return error
    })
    instance.interceptors.response.use(res => {
        return res
    },error => {
        return error
    })

    return instance(config)
}