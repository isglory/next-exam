'use client'

import { useForm } from '../hooks/useForm';
import { useRouter } from 'next/navigation';
import Lottie from 'react-lottie-player';
import lottieJson from '/public/animation_login.json';
import { signup } from '../apis/signup';

export default function Signup(){
    const router = useRouter();
    const [id, onChangeId] = useForm();
    const [pw, onChangePw] = useForm();
    const [userName, onChangeUserName] = useForm();
    const [userAge, onChangeUserAge] = useForm();
    const onlcickRegister = async ()=>{
        const result = await signup(id,pw,userName, userAge);
        console.log(result);
        if (result.status === 200) {
            alert(result.message);
            router.push('/login');
        } else {
            alert('failed');
        }
    }
    return(
        <div className="lg:flex-grow w-3/4 lg:pr-24 md:pr-16 flex flex-col mb-16 md:mb-0 items-center text-center">
            <div className="lg:1/5 md:w-1/3 ">
                <Lottie
                    loop
                    animationData={lottieJson}
                    play
                />
            </div>
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font"></h2>
            <div className="relative mb-4 ">
                <input type="text" id="id" name="id" 
                    className="bg-gray-500 w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value = {id}
                    onChange={onChangeId}
                    placeholder='아이디'
                />
            </div>
            <div className="relative mb-4">
                <input type="password" id="email" name="email" 
                    className="bg-gray-500 w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={pw}
                    onChange={onChangePw}
                    placeholder='패스워드'
                />
            </div>
            <div className="relative mb-4">
                <input type="text" id="userName" name="userName" 
                    className="bg-gray-500 w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={userName}
                    onChange={onChangeUserName}
                    placeholder='이름'
                />
            </div>
            <div className="relative mb-4">
                <input type="text" id="userAge" name="userAge" 
                    className="bg-gray-500 w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={userAge}
                    onChange={onChangeUserAge}
                    placeholder='나이'
                />
            </div>

            <button 
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                onClick={onlcickRegister}
            > 등록
            </button>
            <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
        </div>
    )
}