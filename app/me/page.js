'use client'
import { useEffect, useState } from "react";
import { getMe } from './api';

export default function Me(){
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
       getMe().then((res)=>setData(res));
       setLoading(false);
    },[])

    if(loading) return <div>정보를 받아오는중 입니다</div>

    return(
       <>
        <div>{data?.name}</div>
        <div>{data?.age}</div>
       </>
    )
}