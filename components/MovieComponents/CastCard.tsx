

import Image from 'next/image'
interface Props{
    cast : any,
}
export default function CastCard({cast}:Props){
    console.log(cast)
    return(
        <div className='p-2 flex flex-col '>
            <Image className={'rounded-lg'} src={process.env.NEXT_PUBLIC_PIC_PATH+'w500'+cast.profile_path} width={400} height={600} alt={'no'}/>
            <h1>{cast.name}</h1>
            <span className={'text-primary-grey-text text-xs'}>{cast.character}</span>
        </div>
    )
}