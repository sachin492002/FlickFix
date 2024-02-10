import {FaGithub, FaInstagram, FaLinkedinIn} from "react-icons/fa";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";

export default function Footer(){
    return(
        <div className='flex  flex-col px-10 py-10 gap-2 bg-primary-black scroll-smooth' id='footer'>
            <div className='grid grid-cols-4 row-auto gap-6 border-b-2 border-primary-grey'>
                <div className='flex flex-col col-span-2 md:col-span-1 gap-2'>
                    <Link href='/' className='font-bitter font-bold text-xl'>Home</Link>
                    <Link href='/#category' scroll={true} className='text-primary-grey-text'>Categories</Link>
                    <Link href='/#devices' className='text-primary-grey-text'>Devices</Link>
                </div>
                <div className='flex flex-col  col-span-2 md:col-span-1 gap-2'>
                    <Link href='/Movies' className='font-bitter font-bold text-xl'>Movies</Link>
                    <Link href='/Movies/#trending' className='text-primary-grey-text'>Trending</Link>
                    <Link href='/Movies/#latest' className='text-primary-grey-text'>Latest</Link>
                </div>
                <div className='flex flex-col col-span-2 md:col-span-1 gap-2'>
                    <Link href='/support' className='font-bitter font-bold text-xl'>Support</Link>
                    <Link href='/support/#contact' className='text-primary-grey-text'>Contact Us</Link>
                    <Link href='/support/#about' className='text-primary-grey-text'>About Us</Link>
                </div>
                <div className='col-span-2 md:col-span-1 gap-4'>
                    <h3 className='font-bitter font-bold text-xl'>Connect With Us</h3>
                    <div className='inline-flex gap-4'>
                        <Link aria-label={'instagram'} href='https://instagram.com/xo_sachin1'>
                    <button aria-label={'instagram'} className='bg-primary-grey hover:bg-primary delay-75 hover:scale-125 duration-200 ease-out text-xl p-2 rounded-lg'>
                        <FaInstagram/>
                    </button>
                        </Link>
                        <Link aria-label={'github'} href='https://github.com/sachin492002'>
                    <button aria-label={'github'} className='bg-primary-grey hover:bg-primary delay-75 hover:scale-125 duration-200 ease-out text-xl p-2 rounded-lg'>
                        <FaGithub/>
                    </button>
                        </Link>
                        <Link aria-label={'linkedin'} href='https://linkedin.com/in/sachin-meena-9188ab200'>
                    <button aria-label={'linkedin'} className=' bg-primary-grey hover:bg-primary delay-75 hover:scale-125 duration-200 ease-out text-xl p-2 rounded-lg'>
                        <FaLinkedinIn/>
                    </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='inline-flex'>
                <h3 className='text-primary-grey-text'>@2023 sachin, All Rights Reserved</h3>
            </div>
        </div>
    )
}