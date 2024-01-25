import {FaPlay} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import laptop from '/public/homegrid/laptop.svg';
import mobile from '/public/homegrid/phone.svg'
import tablet from '/public/homegrid/tablet.svg'
export default function Devices() {
    return (
        <div className='flex flex-col items-start px-4 py-6 md:py-20 md:px-12 gap-6' id='devices'>
            <h3 className='font-manrope  md:text-3xl '>We Provide you streaming experience across various devices.</h3>
            <p className='text-primary-grey-text'>With StreamJet, you can enjoy your favorite movies and TV shows
                anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that
                you never miss a moment of entertainment.</p>

            <div className='flex flex-col md:flex-row  gap-4 mt-20'>
                <div className='flex flex-col p-5 w-84 border-2 gap-4 border-primary-grey rounded-lg devices'>
                    <div className='inline-flex items-center gap-4'>
                        <button aria-label={'phone'} className='px-4 py-3 bg-primary-grey rounded-lg'>
                            <Image src={mobile} alt='no'/>
                        </button>
                        <h4 className='font-manrope text-xl'>
                            Smartphones
                        </h4>
                    </div>
                    <p className='text-primary-grey-text'>StreamJet is optimized for both Android and iOS smartphones.
                        Download our app from the Google Play Store or the Apple App Store</p>
                </div>
                <div className='flex flex-col p-5 w-84 border-2 gap-4 border-primary-grey rounded-lg devices'>
                    <div className='inline-flex items-center gap-4'>
                        <button aria-label={'tablet'} className='px-4 py-3 bg-primary-grey rounded-lg'>
                            <Image src={tablet} alt='no'/>
                        </button>
                        <h4 className='font-manrope text-xl'>
                            Tablet
                        </h4>
                    </div>
                    <p className='text-primary-grey-text'>StreamJet is optimized for both Android and iOS smartphones.
                        Download our app from the Google Play Store or the Apple App Store</p>
                </div>
                <div className='flex flex-col p-5 w-84 border-2 gap-4 border-primary-grey rounded-lg devices'>
                    <div className='inline-flex items-center gap-4'>
                        <button aria-label={'laptop'} className='px-4 py-3 bg-primary-grey rounded-lg'>
                            <Image src={laptop} alt='no' />

                        </button>
                        <h4 className='font-manrope text-xl'>
                            Laptop
                        </h4>
                    </div>
                    <p className='text-primary-grey-text'>StreamJet is optimized for both Android and iOS smartphones.
                        Download our app from the Google Play Store or the Apple App Store</p>
                </div>


            </div>
            <div
                className=' bg-[url(/homegrid/hero.webp)] mt-20 flex flex-col md:flex-row bg-cover w-full min-h-40 justify-center text-center md:text-start md:justify-between px-12 py-12 items-center'>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-md md:text-3xl'>Start watching today!</h2>
                    <p className='text-primary-grey-text '>Don`t wait! Go ahead with your favourite movies.</p>
                </div>

                <Link href={'/Movies'}>
                    <button className='bg-primary delay-75 hover:scale-125 duration-200 ease-outbg-primary flex gap-1 rounded-lg px-4 py-2 md:px-4 md:py-3 items-center'>
                        <FaPlay/>
                        <p>Watch Now</p>
                    </button>
                </Link>
            </div>
        </div>
    )
}