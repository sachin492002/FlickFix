'use client'
import {CiSearch} from "react-icons/ci";
import {IoIosNotificationsOutline} from "react-icons/io";
import WatchNow from "@/components/Homepage/WatchNow";
import Link from "next/link";

import {usePathname, useRouter} from "next/navigation";
import {HiHome} from "react-icons/hi";
import {MdDeveloperMode, MdMovie, MdOutlineSupportAgent} from "react-icons/md";


const navItems = [
    {
        path:"/",
        name:"Home",
        icon:<HiHome/>
    },
    {
        path:"/Movies",
        name:"Movies",
        icon : <MdMovie/>
    },
    {
        path:'/support',
        name:"Support",
        icon : <MdOutlineSupportAgent/>
    },
    {
        path:'/about',
        name:"About Us",
        icon : <MdDeveloperMode/>
    }
]
export default  function Navbar(){
    const router = usePathname();


    return(
        <>
        <div
            className='hidden md:flex sticky top-0 w-full z-30 navbar justify-between  items-center py-8 px-40'>
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
            <div className='fixed z-50 w-full md:hidden h-16 max-w-lg -translate-x-1/2 bg-primary-black rounded-full bottom-4 left-1/2'>
                <div className="grid h-full max-w-lg grid-cols-4 place-items-center mx-auto">
                    {
                        navItems.map(nav=>{
                            return(
                                <Link key={nav.name} href={nav.path}>
                                    <button className={router == nav.path ? "text-lg px-4 py-2 col-span-1 rounded-lg bg-primary md:bg-primary-grey" : "text-lg p-3 rounded-lg hover:bg-primary-grey duration-300 ease-out"} >{nav.icon}</button>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
            </>
    )
}