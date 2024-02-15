'use client'
import QuestionCard from "@/app/support/QuestionCard";
import FAQ from "@/components/FAQ";
import { useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'

export default function Support(){
    const [formData,setFormData] = useState({from_first:'',last:'',from_email:'',message:'',from_phone:''});
    const handleChange = (event:any) => {
        const { name, value } = event.target;
        console.log(name+" "+value);
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
      };
    const handleSubmit = (e:any) =>{
        e.preventDefault();
        setFormData((prev)=>({...prev,to_name:"FlickFix Team"}))
        // @ts-ignore
        emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, e.target, process.env.NEXT_PUBLIC_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon : 'success',
                    title: 'Message Sent Successfully'
            })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                title: 'Ooops, something went wrong',
                text: error.text,
            })
            });
        e.target.reset()

    }
    return(
        <div className='mt-0  flex flex-col px-2 py-4  md:px-12 md:py-12 gap-10'>
            <div className='flex flex-col md:flex-row justify-between gap-10 w-full'>
                <div className='flex flex-col w-full md:w-2/4  gap-4'>
                    <h1 className='text-4xl'>Welcome To Our Support Page!</h1>
                     <p className='text-primary-grey-text'>We are here to help you with any problems you may be having with our product.</p>
                    <div className='flex flex-col overflow-clip gap-2 p-2 bg-primary-grey justify-center items-center rounded-lg'>
                        <img src='/homegrid/movie-grid.jpg' className='rounded-lg'  alt={'no'}/>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className='w-full flex flex-col p-8 bg-primary-black gap-10 border-2 border-primary-grey rounded-lg'>
                    <div className='flex flex-col md:flex-row  justify-between w-full gap-2'>
                        <div className='flex flex-col w-full md:w-2/4 gap-2'>
                            <label className='text-lg font-manrope'>
                                First Name
                            </label>
                            <input className='rounded-lg  p-4  text-white bg-primary-grey'
                                   placeholder={'Enter Your First Name'} name='from_first' value={formData.from_first} onChange={handleChange}/>
                        </div>
                        <div className='flex flex-col w-full md:w-2/4 gap-2'>
                            <label className='text-lg font-manrope'>
                                Last Name
                            </label>
                            <input className='rounded-lg  p-4 text-white bg-primary-grey'
                                   placeholder={'Enter Your Last Name'} name={'last'} value={formData.last} onChange={handleChange}/>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row justify-between w-full gap-2'>
                        <div className='flex flex-col w-full md:w-2/4 gap-2'>
                            <label className='text-lg font-manrope'>
                                Email
                            </label>
                            <input value={formData.from_email} onChange={handleChange} name='from_email' className='rounded-lg  p-4  text-white bg-primary-grey'
                                   placeholder={'Enter Your Email'}/>
                        </div>
                        <div className='flex flex-col w-full md:w-2/4 gap-2'>
                            <label className='text-lg font-manrope'>
                                Phone Number
                            </label>
                            <input value={formData.from_phone} name='from_phone' onChange={handleChange} className='rounded-lg  p-4 text-white bg-primary-grey'
                                   placeholder={'Enter Your Phone Number'}/>
                        </div>
                    </div>
                    <textarea value={formData.message} name='message' onChange={handleChange} className='rounded-lg  p-4 text-white bg-primary-grey' placeholder={'Enter Your Message'}></textarea>
                    <button className=' delay-75 hover:scale-125 duration-200 ease-out bg-primary w-40 text-center  flex gap-1 rounded-lg px-4 py-3 items-center p-4'>
                        Send Message
                    </button>
                </form>
            </div>
            <FAQ/>
        </div>
    )
}