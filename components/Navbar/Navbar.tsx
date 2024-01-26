'use client'
import {CiSearch} from "react-icons/ci";
import {IoIosNotificationsOutline} from "react-icons/io";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {HiHome} from "react-icons/hi";
import {MdDeveloperMode, MdMovie, MdOutlineSupportAgent} from "react-icons/md";
import {ChangeEvent, useState} from "react";
import {GiCrossedSabres} from "react-icons/gi";
import {AiOutlineSearch} from "react-icons/ai";
import Image from "next/image";
import logo from '/public/logo.svg'
const navItems = [
    {
        path: "/",
        name: "Home",
        icon: <HiHome/>
    },
    {
        path: "/Movies",
        name: "Movies",
        icon: <MdMovie/>
    },
    {
        path: '/support',
        name: "Support",
        icon: <MdOutlineSupportAgent/>
    },
    {
        path: '/subscription',
        name: "Subscription",
        icon: <MdDeveloperMode/>
    }
]
export default function Navbar() {
    const router = usePathname();
    const router1 = useRouter()
    const [isSearchBarOpen, setisSearchBarOpen] = useState(false)
    const [inputValue, setValue] = useState('')
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setValue(inputValue);
    }
    const handleSearch = (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(inputValue.length > 0) {
            router1.push(`/search?q=${inputValue}`)
        }
    }

    return (
        <>
            <div
                className='flex flex-col md:flex-row sticky top-0 w-full z-30 navbar justify-between  items-center px-2 py-2 md:py-2 md:px-40'>
                <div className='inline-flex  justify-between items-center w-full'>
                    <Link href={'/'} className={!isSearchBarOpen ? 'flex items-center gap-2' : 'hidden md:flex items-center'}>
                        <Image src={logo} alt='koi'/>
                        <span className='text-2xl font-lobster'>FlickFix</span>
                    </Link>

                    <div

                        className={!isSearchBarOpen ? 'hidden md:inline-flex border-4 bg-primary-black font-light text-lg gap-7 px-2 py-2 border-primary-grey rounded-xl' : 'hidden'}>
                        {
                            navItems.map(nav => {
                                return (
                                    <Link key={nav.name} href={nav.path}>
                                    <h5
                                        className={router == nav.path ? "text-lg p-3 rounded-lg bg-primary-grey" : "text-lg p-3 rounded-lg hover:bg-primary-grey duration-300 ease-out"}>{nav.name}</h5>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <div className='order-last inline-flex text-3xl gap-10 font-bold'>
                        {!isSearchBarOpen && <CiSearch onClick={() => setisSearchBarOpen(true)}/>}
                        {isSearchBarOpen && <GiCrossedSabres onClick={() => setisSearchBarOpen(false)}/>}
                        <IoIosNotificationsOutline/>
                    </div>
                    <form
                        className={isSearchBarOpen ? 'flex flex-row justify-between bg-primary-black items-center font-light text-lg px-4 py-4 w-2/3 md:w-1/2 border-primary-grey rounded-full' : 'hidden'}
                        onSubmit={handleSearch}>
                        <input
                            className='bg-primary-black w-4/5 outline-0 '
                            onChange={handleChange} value={inputValue}>
                        </input>
                        <button aria-label={'search'} type='submit'>
                            <AiOutlineSearch className='text-2xl font-bold'/>
                        </button>
                    </form>
                </div>
            </div>

            <div
                className='fixed z-50 w-full md:hidden h-16 max-w-lg -translate-x-1/2 bg-primary-black rounded-full bottom-4 left-1/2'>
                <div className="grid h-full max-w-lg grid-cols-4 place-items-center mx-auto">
                    {
                        navItems.map(nav => {
                            return (
                                <Link key={nav.name} href={nav.path}>
                                    <button aria-label={'navbar'}
                                        className={router == nav.path ? "text-lg p-6 transition  -translate-y-1/3  duration-300 z-10 delay-75 ease-in   col-span-1 rounded-full bg-primary md:bg-primary-grey " : "text-lg p-3 rounded-lg hover:bg-primary-grey duration-300 ease-out"}>{nav.icon}</button>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}