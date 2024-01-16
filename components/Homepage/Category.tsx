import {FaArrowLeft, FaArrowRight} from "react-icons/fa";


export default function Category(){
    return(
        <div className='flex flex-col px-12 py-20 gap-16' id='category'>
            <div className='flex gap-1 justify-between flex-wrap'>
                <div className='max-w-[80%]'><h1 className='font-manrope text-3xl'>Explore our wide variety of categories</h1><p>Whether you're
                    looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn
                    something new</p></div>

                <div
                    className="inline-flex border-2 border-primary-grey gap-1 items-center text-2xl p-3 rounded-lg bg-primary-black">
                 <button className='p-4 bg-primary-grey rounded-lg'> <FaArrowLeft/></button>
                 <div className='pills inline-flex gap-1 items-center justify-center'>
                     <div className='w-4 h-1 bg-green-500'></div>
                     <div className='w-4 h-1 bg-green-500'></div>
                     <div className='w-4 h-1 bg-green-500'></div>
                     <div className='w-4 h-1 bg-green-500'></div>
                 </div>
                 <button className='p-4 bg-primary-grey rounded-lg'><FaArrowRight/></button>
             </div>
            </div>

            <div className='flex gap-4'>
                <div className='category-card border-2 flex flex-col gap-2 border-primary-grey rounded-lg p-4'>
                    <img src='/homegrid/Action.png' alt='no'/>
                    <div className='inline-flex justify-between text-md  items-center '>
                        <h1>Action</h1>
                        <FaArrowRight/>
                    </div>
                </div>
                <div className='category-card border-2 flex flex-col gap-2 border-primary-grey rounded-lg p-4'>
                    <img src='/homegrid/Adventure.png' alt='no'/>
                    <div className='inline-flex justify-between text-md  items-center '>
                        <h1>Adventure</h1>
                        <FaArrowRight/>
                    </div>
                </div>
                <div className=' category-card border-2 flex flex-col gap-2 border-primary-grey rounded-lg p-4'>
                    <img src='/homegrid/Comedy.png' alt='no'/>
                    <div className='inline-flex justify-between text-md  items-center '>
                        <h1>Comedy</h1>
                        <FaArrowRight/>
                    </div>
                </div>
                <div className=' category-card border-2 flex flex-col gap-2 border-primary-grey rounded-lg p-4'>
                    <img src='/homegrid/FamilyDrama.png' alt='no'/>
                    <div className='inline-flex justify-between text-md  items-center '>
                        <h1>Family Drama</h1>
                        <FaArrowRight/>
                    </div>
                </div>
                <div className=' category-card border-2 flex flex-col gap-2 border-primary-grey rounded-lg p-4'>
                    <img src='/homegrid/Horror.png' alt='no'/>
                    <div className='inline-flex justify-between text-md  items-center '>
                        <h1>Horror</h1>
                        <FaArrowRight/>
                    </div>
                </div>
            </div>
        </div>
    )
}