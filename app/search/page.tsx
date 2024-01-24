'use client'
import {useRouter, useSearchParams} from "next/navigation";
import GenrePage from "@/components/Genre/GenrePage";



export default function Page(){
    const router = useRouter();
    const searchParams = useSearchParams()

    const search = searchParams.get('q')
    console.log(search)
    return(
         <GenrePage type={'search'} url={search}/>
    )
}