import { getAuth } from "../apis/auth";

export const getMe = async () =>{
    const access = localStorage.getItem('access');
    const auth = getAuth(access);
    const result = await auth.get('/mypage');

    return result;
}