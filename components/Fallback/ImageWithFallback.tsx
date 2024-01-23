import {useEffect, useState} from "react";
import Image from 'next/image'

interface Props{
    fallback : any,
    alt : string,
    src: any,
    width:number,
    height:number,
    className:string,
}
export default function ImageWithFallback({
                               fallback,
                               alt,
                               src,
                               width,
                               className,
    height,
                               ...props
                           }:Props)
{
    const [error, setError] = useState(null)

    useEffect(() => {
        setError(null)
    }, [src])

    return (
        <Image placeholder='empty'
            className={className}
            alt={alt}
            onError={()=>setError}
            width={width}
            height={height}
            src={error ? fallback : src}
            {...props}
        />
    )
}