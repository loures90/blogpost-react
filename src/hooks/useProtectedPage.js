import { useLayoutEffect } from 'react'
import { useHistory } from 'react-router'
import { goToLogin } from '../router/Coordinator'

const useProtectedPage = () =>{
    const history = useHistory()
    useLayoutEffect(()=>{
        const token = localStorage.getItem("token")
        if(!token){
            goToLogin(history)
        }
    },[history])

}
export default useProtectedPage