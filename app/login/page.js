'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Lottie from 'react-lottie-player';
import lottieJson from '/public/animation_login.json';
import {login} from './login';

export default function Login(){
    const router = useRouter();
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const onChangeId= (e) => {
        setId(e.target.value);
    }
    const onChangePw= (e) => {
        setPw(e.target.value);
    }

    const onclickLogin = async () => {
        const result = await login(id, pw);
        const {accessToken, refreshToken}  = result.data;
        localStorage.setItem('access', accessToken);
        localStorage.setItem('refresh', refreshToken);
        router.push('/');
    };

    return(
        <section className="">
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
                    />
                </div>
                <div className="relative mb-4">
                    <input type="email" id="email" name="email" 
                        className="bg-gray-500 w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        value={pw}
                        onChange={onChangePw}
                    />
                </div>
                <button 
                    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    onClick={onclickLogin}
                >로그인</button>
                <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
            </div>
        </section>
    )
}