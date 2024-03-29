'use client'
import {useState} from "react";
import {CiCircleMinus, CiCirclePlus} from "react-icons/ci";


interface Props{
    faq: {
        question: string,
        ans :string,

    },
    index: number,
}
export default function  QuestionCard({faq,index}:Props){
    const [open,setOpen] = useState(false);
    const handlClick = () => {
        console.log(open)
        setOpen(!open);
    }
    return(
        <div className={`question-card transition delay-100 duration-300 ease-in w-full p-4 inline-flex justify-between`}>
            <div className='inline-flex justify-center gap-4 items-center'>
                <div className='bg-primary-grey py-4 px-5 rounded-lg '>
                    {index+1}
                </div>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-xl font-manrope '>{faq.question}</h3>
                    <p className={(open == false) ? 'text-primary-grey-text hidden' : 'text-primary-grey-text '}>{faq.ans}</p>
                </div>

            </div>
            <button aria-label={'Search'} onClick={() => handlClick()}>
                {!open && <CiCirclePlus className='text-2xl font-bold hover:text-primary'/>}
                {open && <CiCircleMinus className='text-2xl font-bold hover:text-primary'/>}
            </button>
        </div>
    )
}