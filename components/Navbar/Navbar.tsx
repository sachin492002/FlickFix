'use client'
import {CiSearch} from "react-icons/ci";
import {IoIosNotificationsOutline} from "react-icons/io";

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
export default function Navbar(){
    const router = usePathname();
    return(
        <div

            className='flex navbar justify-between  items-center py-8 px-40'>
            <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <svg xmlns="http://www.w3.org/2000/svg" x="20" y="20" width="22" height="22" viewBox="0 0 22 22"
                         fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M4.63037 5.68283C4.63037 4.47348 5.92695 3.70685 6.9866 4.28966L16.7729 9.67214C17.8713 10.2762 17.8713 11.8544 16.7729 12.4585L6.9866 17.841C5.92695 18.4238 4.63037 17.6571 4.63037 16.4478V5.68283Z"
                              fill="white"/>
                    </svg>
                    <path
                        d="M49.7834 24.0839C49.3635 10.9327 38.7071 0.319787 25.5115 0C25.1716 0 24.8917 0.259827 24.8917 0.5996L24.8717 9.43371C24.8717 9.87342 24.5318 10.2132 24.092 10.2332C10.9364 10.6329 0.319893 21.3058 0 34.497C0 34.8368 0.259913 35.1166 0.5998 35.1166L9.41686 35.1366C9.85671 35.1366 10.1966 35.4763 10.2166 35.9161C10.6365 49.0673 21.3129 59.6802 34.4885 60C34.8284 60 35.1083 59.7402 35.1083 59.4004L35.1283 50.5663C35.1283 50.1266 35.4682 49.7868 35.908 49.7668C49.0636 49.3471 59.6801 38.6742 60 25.503C60 25.1632 59.7401 24.8834 59.4002 24.8834L50.5831 24.8634C50.1433 24.8634 49.8034 24.5236 49.7834 24.0839ZM34.2486 49.7069C26.7711 49.2672 20.7731 43.1912 20.4932 35.6762C20.4732 35.3564 20.2133 35.0966 19.8934 35.0966L11.0963 35.0766C10.6365 35.0766 10.2766 34.6969 10.2966 34.2372C10.7364 26.7622 16.8144 20.7662 24.3319 20.4863C24.6518 20.4664 24.9117 20.2065 24.9117 19.8867L24.9317 11.0726C24.9317 10.6129 25.3116 10.2532 25.7714 10.2732C33.2489 10.7129 39.2469 16.7888 39.5268 24.3038C39.5468 24.6236 39.8067 24.8834 40.1266 24.8834L48.9237 24.9034C49.3835 24.9034 49.7434 25.2831 49.7234 25.7428C49.2836 33.4177 42.9057 39.5137 35.1283 39.5137L35.1083 48.9074C35.0883 49.3671 34.7084 49.7268 34.2486 49.7069Z"
                        fill="#E60000"/>
                </svg>
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