import {FaGithub, FaInstagram, FaLinkedinIn} from "react-icons/fa";
import Link from "next/link";

export default function Footer(){
    return(
        <div className='px-20 pt-20 pb-5 bg-primary-black scroll-smooth' id='footer'>
            <div className='grid grid-cols-4 grid-rows-4 gap-6 border-b-2 border-primary-grey'>
                <div className='flex flex-col row-span-3 gap-2'>
                    <Link href='/' className='font-bitter font-bold text-xl'>Home</Link>
                    <Link href='/#category' scroll={true} className='text-primary-grey-text'>Categories</Link>
                    <Link href='/#devices' className='text-primary-grey-text'>Devices</Link>
                </div>
                <div className='flex flex-col row-span-3 gap-2'>
                    <Link href='/movies' className='font-bitter font-bold text-xl'>Movies</Link>
                    <Link href='/movies/#trending' className='text-primary-grey-text'>Trending</Link>
                    <Link href='/movies/#latest' className='text-primary-grey-text'>Latest</Link>

                </div>
                <div className='flex flex-col row-span-3 gap-2'>
                    <Link href='/support' className='font-bitter font-bold text-xl'>Support</Link>
                    <Link href='/support/#contact' className='text-primary-grey-text'>Contact Us</Link>
                    <Link href='/support/#about' className='text-primary-grey-text'>About Us</Link>
                </div>
                <div className='row-span-2 gap-4'>
                    <h1 className='font-bitter font-bold text-xl'>Connect With Us</h1>
                    <div className='inline-flex gap-4'>
                        <Link href='https://instagram.com/xo_sachin1'>
                    <button className='bg-primary-grey text-xl p-2 rounded-lg'>
                        <FaInstagram/>
                    </button>
                        </Link>
                        <Link href='https://github.com/sachin492002'>
                    <button className='bg-primary-grey text-xl p-2 rounded-lg'>
                        <FaGithub/>
                    </button>
                        </Link>
                        <Link href='https://linkedin.com/in/sachin-meena-9188ab200'>
                    <button className=' bg-primary-grey text-xl p-2 rounded-lg'>
                        <FaLinkedinIn/>
                    </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='inline-flex'>
                <h1 className='text-primary-grey-text'>@2023 sachin, All Rights Reserved</h1>
            </div>
        </div>
    )
}