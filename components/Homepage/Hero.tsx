import Image from "next/image";

export default  function Hero(){
    const images:number = 28;
    return(
        <div className='homegrid flex flex-col gap-5 p-5 absolute top-0 left-0 '>
            <img src='/homegrid/Row-1.png' alt='jk'/>
            <img src='homegrid/Row-2.png' alt='jk'/>
            <img src='homegrid/Row-3.png' alt='jk'/>
            <img src='homegrid/Row-4.png' alt='jk'/>
        </div>
    )
}