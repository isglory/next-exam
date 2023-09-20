import axios from "axios";

export async function signup(id,pw,name,age){
    const result = await axios.post('http://front.cau-likelion.org/signup',
        {
            id,
            pw,
            name,
            age
        },
    );
        return result.data;
}