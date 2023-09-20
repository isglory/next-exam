const { default: axios } = require("axios")
const { getRefreshToken } = require("./refresh") 

export const getAuth = (token) => {
    const {accessToken} = token;

    const authAxios = axios.create({
        baseURL: 'http://front.cau-likelion.org',
        headers: {
            Authorization: accessToken,
        }
    });
    authAxios.interceptors.response.use(
        (res) => res, 
        async (error) => {
            if(error.response.status === 401){
                //토큰이 만료 되었을때
                const {accessToken, refreshToken} = await getRefreshToken();
                error.config.headers.Authorization = accessToken;
                localStorage.setItem('access', accessToken);
                localStorage.setItem('refresh', refreshToken);
                return (await axios.get(error.config.url, error.config)).data;
            }
        }
    );
    return authAxios;
}