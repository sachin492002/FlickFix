'use client'
import {CiSearch} from "react-icons/ci";
import {IoIosNotificationsOutline} from "react-icons/io";
import WatchNow from "@/components/Homepage/WatchNow";
import Link from "next/link";

import {usePathname, useRouter} from "next/navigation";


const navItems = [
    {
        path:"/",
        name:"Home",
    },
    {
        path:"/movies",
        name:"Movies",
    },
    {
        path:'/support',
        name:"Support",
    },
    {
        path:'/about',
        name:"About Us",
    }
]
export default  function Navbar(){
    const router = usePathname();


    return( 
        <div
            className='flex navbar fixed top-0 w-full z-30  justify-between  items-center py-8 px-40'>
            <div className='flex items-center'>
                <img src={'/logo.svg'} alt='koi'/>
                <h1 className='text-2xl font-lobster'>StreamGuru</h1>
            </div>

            <div

                className='inline-flex border-4 bg-primary-black font-light text-lg gap-7 px-4 py-4 border-primary-grey rounded-xl'>
                {
                    navItems.map(nav=>{
                        return(
                            <Link key={nav.name} href={nav.path}>
                                <span className={router == nav.path ? "text-lg p-3 rounded-lg bg-primary-grey" : "text-lg p-3 rounded-lg hover:bg-primary-grey duration-300 ease-out"} >{nav.name}</span>
                            </Link>
                        )
                    })
                }
            </div>
            <div className='inline-flex text-3xl gap-6 font-bold'>
                <CiSearch/>
                <IoIosNotificationsOutline/>
            </div>
        </div>
    )
}