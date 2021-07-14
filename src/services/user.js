import axios from "axios"
import { BASE_URL } from "../constants/url"
import { goToFeed, goToLogin } from "../router/Coordinator"

export const loginAuth = (body, clear, history, setRightButton) => {
    axios.post(`${BASE_URL}/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            goToFeed(history)
            setRightButton("Logout")
        }).catch ((err) => {
            alert(err.response.data.error)
        })
        clear()
}

export const signupUser = (body, clear, history) => {
    axios.post(`${BASE_URL}/signup`, body)
        .then((res) => {
            goToLogin(history)
        }).catch ((err) => alert(err.response.data.error))
        clear()
}