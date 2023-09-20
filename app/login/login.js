import axios from 'axios';

export const login = async (id, pw) => {
    const result = await axios.post('http://front.cau-likelion.org', { id, pw }, {
        headers: {
            'Access-Control-Allow-Origin': 'http://front.cau-likelion.org',
            // 필요한 경우 다른 CORS 관련 헤더도 추가할 수 있습니다.
            // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
          },
    });

    return result.data;
}