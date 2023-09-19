import axios from "axios"
import {getRefreshToken} from "../login/refresh"

export const getMe = async () =>{
    const access = localStorage.getItem('access');

    try{
        const result = await axios.get('http://front.cau-likelion.org/mypage',{
            headers:{
                Authorization: access
            },
        });
        return  result.data;
    }catch(error){
        if(error.response.status === 401){
            //토큰이 만료 되었을때
            const {accessToken, refreshToken} = await getRefreshToken();
            error.config.headers.Authorization = accessToken;
            localStorage.setItem('access', accessToken);
            localStorage.setItem('refresh', refreshToken);
            //return (await axios.get(error.config.url, error.config)).data;
        }
    }
}