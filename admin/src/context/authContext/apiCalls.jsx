import axios from "axios"
import { loginFailure, loginStart, loginSuccess } from "./AuthActions"

export const login = async(user, dispatch)=>{
    dispatch(loginStart());
    try {
        const res = axios.post("http://localhost:8800/api/auth/login", user);
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure());
    }
}