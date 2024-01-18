import Image from "next/image";


export default function Support(){

    return(
        <div className='mt-44 flex flex-col px-12'>
            <div className='inline-flex'>
                <div className='flex flex-col w-2/5'>
                    <h1 className='text-4xl'>Welcome To Our Support Page!</h1>
                     <p className='text-primary-grey-text'>We're here to help you with any problems you may be having with our product.</p>
                    <div className='flex flex-col overflow-clip gap-2 p-2 bg-primary-grey justify-center items-center rounded-lg'>
                        <img src='/homegrid/movie-grid.jpg' className='rounded-lg' />
                    </div>
                </div>
                <form className='w-full p-4'>
                       <label className=''>
                           <input className=''/>
                       </label>
                </form>
            </div>
        </div>
    )
}