'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Lottie from 'react-lottie-player';
import lottieJson from '/public/animation_login.json';
import {login} from './login';
import Link from "next/link";
import {useForm} from '../hooks/useForm';

export default function Login(){
    const router = useRouter();
    const [id, onChangeId] = useForm();
    const [pw, onChangePw] = useForm();

    const onclickLogin = async () => {
        try{
            const result = await login(id, pw);
            const {accessToken, refreshToken}  = result.data;
            localStorage.setItem('access', accessToken);
            localStorage.setItem('refresh', refreshToken);
            router.push('/');
        }catch(error){
            alert('login faild');
        }
    };

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
                    <input type="email" id="email" name="email" 
                        className="bg-gray-500 w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        value={pw}
                        onChange={onChangePw}
                        placeholder='비밀번호'
                    />
                </div>
                <div className='flex'>
                    <button 
                        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mr-2"
                        onClick={onclickLogin}
                    >로그인
                    </button>
                    <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mr-2">
                        <Link href="/signup">등록</Link>
                    </button>
                </div>
                <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
            </div>
    )
}