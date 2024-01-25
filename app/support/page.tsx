

import QuestionCard from "@/app/support/QuestionCard";
import FAQ from "@/components/FAQ";




export default function Support(){

    return(
        <div className='mt-0  flex flex-col px-2 py-4  md:px-12 md:py-12 gap-10'>
            <div className='flex flex-col md:flex-row justify-between gap-10 w-full'>
                <div className='flex flex-col w-full md:w-2/4  gap-4'>
                    <h1 className='text-4xl'>Welcome To Our Support Page!</h1>
                     <p className='text-primary-grey-text'>We are here to help you with any problems you may be having with our product.</p>
                    <div className='flex flex-col overflow-clip gap-2 p-2 bg-primary-grey justify-center items-center rounded-lg'>
                        <img src='/homegrid/movie-grid.jpg' className='rounded-lg' />
                    </div>
                </div>
                <form className='w-full flex flex-col p-8 bg-primary-black gap-10 border-2 border-primary-grey rounded-lg'>
                    <div className='flex flex-col md:flex-row  justify-between w-full gap-2'>
                        <div className='flex flex-col w-full md:w-2/4 gap-2'>
                            <label className='text-lg font-manrope'>
                                First Name
                            </label>
                            <input className='rounded-lg  p-4  text-white bg-primary-grey'
                                   placeholder={'Enter Your First Name'}/>
                        </div>
                        <div className='flex flex-col w-full md:w-2/4 gap-2'>
                            <label className='text-lg font-manrope'>
                                Last Name
                            </label>
                            <input className='rounded-lg  p-4 text-white bg-primary-grey'
                                   placeholder={'Enter Your Last Name'}/>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row justify-between w-full gap-2'>
                        <div className='flex flex-col w-full md:w-2/4 gap-2'>
                            <label className='text-lg font-manrope'>
                                Email
                            </label>
                            <input className='rounded-lg  p-4  text-white bg-primary-grey'
                                   placeholder={'Enter Your Email'}/>
                        </div>
                        <div className='flex flex-col w-full md:w-2/4 gap-2'>
                            <label className='text-lg font-manrope'>
                                Phone Number
                            </label>
                            <input className='rounded-lg  p-4 text-white bg-primary-grey'
                                   placeholder={'Enter Your Phone Number'}/>
                        </div>
                    </div>
                    <textarea className='rounded-lg  p-4 text-white bg-primary-grey' placeholder={'Enter Your Message'}></textarea>
                    <button className='hover:bg-primary delay-75 hover:scale-125 duration-200 ease-outbg-primary w-40 text-center  flex gap-1 rounded-lg px-4 py-3 items-center p-4'>
                        Send Message
                    </button>
                </form>
            </div>
            <FAQ/>
        </div>
    )
}