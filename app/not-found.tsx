
import Navbar from './../components/Navbar/Navbar';

export default function NotFound() {
  return (
    <>
   
    <div className='notfound flex justify-between items-center p-10'>
        <h1 className='text-primary font-lobster'>Page Not Found!</h1>
        <div className='inline-flex gap-2 text- justify-center items-center'>
        <h1 className='text-primary font-[horror] text-[200px] pb-40 font-extrabold '>4</h1>
        <img className='w-20 h-30' src='/homegrid/giri.png'/>
        <h1 className='text-primary font-[horror] text-[200px] pt-40 font-extrabold'>4</h1>
        </div>
        <h1 className='text-primary font-lobster' >Hair Not Found!</h1>
    </div>
    </>
  )
}
