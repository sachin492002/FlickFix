import QuestionCard from "@/app/support/QuestionCard";
import {faqs} from "@/components/utils";


export default function FAQ(){
    return (
        <div className='flex flex-col px-12 gap-4'>
            <div className='flex flex-col md:flex-row gap-2 justify-between'>
                <div className='flex flex-col'>
                    <h3 className='text-2xl font-manrope'>Frequently Asked Questions</h3>
                    <p className='text-primary-grey-text'>Got questions? We ve got answers! Check out our FAQ section to
                        find answers to the most common questions about StreamJet.</p>
                </div>
                <button
                    className='bg-primary delay-75 hover:drop-shadow-3xl hover:scale-105 duration-200 ease-outbg-primary w-40 text-center text-white flex gap-1 rounded-lg p-2 md:p-4 items-center'>
                    Ask a question
                </button>
            </div>
            <div className='inline-flex  gap-4'>
                <div className='flex flex-col w-1/2 gap-2'>
                {faqs?.map((faq, index: number) => {
                    if(index%2==0)
                    return <QuestionCard key={faq.question} faq={faq} index={index}/>
                })}
                </div>
                <div className='flex w-1/2 flex-col gap-2'>
                {faqs?.map((faq, index: number) => {
                    if(index%2==1)
                    return <QuestionCard key={faq.question} faq={faq} index={index}/>
                })}
                </div>
            </div>
        </div>
    )
}