

import QuestionCard from "@/app/support/QuestionCard";


const faqs = [
    {
        question : 'What is StreamJet?',
        ans : 'StreamJet is a streaming service that allows you to watch movies and shows on demand.'
    },
    {
        question: 'How much does StreamVibe cost?',
        ans : 'StreamJet is abs'
    },
    {
        question: 'What content is available on StreamVibe?',
        ans:'hello',
    },
    {
        question: 'How can I watch StreamVibe?',
        ans : 'hello',
    },
    {
        question: 'What is the StreamVibe free trial?',
        ans : 'hello',
    },
    {
        question: 'How do I contact StreamVibe customer support?',
        ans: 'helo',
    },
    {
        question: 'What are the StreamVibe payment methods?',
        ans:'helllo',
    }

]

export default function Support(){

    return(
        <div className='mt-44 flex flex-col px-12 py-12 gap-10'>
            <div className='inline-flex justify-between gap-10 w-full'>
                <div className='flex flex-col w-2/4  gap-4'>
                    <h1 className='text-4xl'>Welcome To Our Support Page!</h1>
                     <p className='text-primary-grey-text'>We are here to help you with any problems you may be having with our product.</p>
                    <div className='flex flex-col overflow-clip gap-2 p-2 bg-primary-grey justify-center items-center rounded-lg'>
                        <img src='/homegrid/movie-grid.jpg' className='rounded-lg' />
                    </div>
                </div>
                <form className='w-full flex flex-col p-8 bg-primary-black gap-10 border-2 border-primary-grey rounded-lg'>
                    <div className='inline-flex justify-between w-full gap-2'>
                        <div className='flex flex-col w-2/4 gap-2'>
                            <label className='text-lg font-manrope'>
                                First Name
                            </label>
                            <input className='rounded-lg  p-4  text-white bg-primary-grey'
                                   placeholder={'Enter Your First Name'}/>
                        </div>
                        <div className='flex flex-col w-2/4 gap-2'>
                            <label className='text-lg font-manrope'>
                                Last Name
                            </label>
                            <input className='rounded-lg  p-4 text-white bg-primary-grey'
                                   placeholder={'Enter Your Last Name'}/>
                        </div>
                    </div>
                    <div className='inline-flex justify-between w-full gap-2'>
                        <div className='flex flex-col w-2/4 gap-2'>
                            <label className='text-lg font-manrope'>
                                Email
                            </label>
                            <input className='rounded-lg  p-4  text-white bg-primary-grey'
                                   placeholder={'Enter Your Email'}/>
                        </div>
                        <div className='flex flex-col w-2/4 gap-2'>
                            <label className='text-lg font-manrope'>
                                Phone Number
                            </label>
                            <input className='rounded-lg  p-4 text-white bg-primary-grey'
                                   placeholder={'Enter Your Phone Number'}/>
                        </div>
                    </div>
                    <textarea className='rounded-lg  p-4 text-white bg-primary-grey' placeholder={'Enter Your Message'}></textarea>
                    <button className='bg-primary w-40 text-center  flex gap-1 rounded-lg px-4 py-3 items-center p-4'>
                        Send Message
                    </button>
                </form>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='inline-flex justify-between'>
                    <div className='flex flex-col'>
                         <h1 className='text-2xl font-manrope'>Frequently Asked Questions</h1>
                         <p className='text-primary-grey-text'>Got questions? We ve got answers! Check out our FAQ section to find answers to the most common questions about StreamJet.</p>
                    </div>
                    <button className='bg-primary w-40 text-center text-white flex gap-1 rounded-lg px-4 py-3 items-center p-4'>
                        Ask a question
                    </button>
                </div>
                <div className='flex flex-col gap-6'>
                    {faqs?.map((faq,index:number)=>{
                        return <QuestionCard key={faq.question} faq={faq} index={index}/>
                    })}
                </div>
            </div>
        </div>
    )
}