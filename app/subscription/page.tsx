export default function Page(){

    return(
        <div className='flex flex-col items-start px-4 py-6 md:py-10 md:px-12 gap-6' id='devices'>
            <h3 className='font-manrope  md:text-3xl '>We Provide you streaming experience across various devices.</h3>
            <p className='text-primary-grey-text'>Join StreamJet and select from our flexible subscription options
                tailored to suit your viewing preferences. Get ready for non-stop entertainment!</p>

            <div className='flex flex-col md:flex-row  gap-4 mt-20'>
                <div className='flex flex-col p-5 w-84 border-2 gap-4 border-primary-grey rounded-lg devices'>
                    <h3 className='font-manrope text-xl'>
                        Basic Plan
                    </h3>
                    <p className='text-primary-grey-text'>Enjoy an extensive library of movies and shows, featuring a
                        range of content, including recently released titles.</p>
                    <span className='inline-flex items-end text-xl text-white'>
                            ₹150
                            <span className='text-xs text-primary-grey-text'>/month</span>
                        </span>
                    <button className='bg-primary delay-75 hover:scale-125 duration-200 ease-outbg-primary w-40 text-center  flex gap-1 rounded-lg px-4 py-3 items-center p-4'>
                        Choose plan
                    </button>
                </div>
                <div className='flex flex-col p-5 w-84 border-2 gap-4 border-primary-grey rounded-lg devices'>

                    <h3 className='font-manrope text-xl'>
                        Standard Plan
                    </h3>
                    <p className='text-primary-grey-text'>Access to a wider selection of movies and shows, including
                        most new releases and exclusive content </p>
                    <span className='inline-flex items-end text-xl text-white'>
                            ₹450
                            <span className='text-xs text-primary-grey-text'>/month</span>
                        </span>
                    <button className='bg-primary delay-75 hover:scale-125 duration-200 ease-outbg-primary w-40 text-center  flex gap-1 rounded-lg px-4 py-3 items-center p-4'>
                        Choose plan
                    </button>
                </div>
                <div className='flex flex-col p-5 w-84 border-2 gap-4 border-primary-grey rounded-lg devices'>
                    <h3 className='font-manrope text-xl'>
                        Premium Plan
                    </h3>
                    <p className='text-primary-grey-text'>Access to a widest selection of movies and shows, including
                        all new releases and Offline Viewing</p>
                    <span className='inline-flex items-end text-xl text-white'>
                            ₹1050
                            <span className='text-xs text-primary-grey-text'>/month</span>
                        </span>
                    <button className='bg-primary delay-75 hover:scale-125 duration-200 ease-outbg-primary w-40 text-center  flex gap-1 rounded-lg px-4 py-3 items-center p-4'>
                        Choose plan
                    </button>
                </div>
            </div>
            <h3 className='pt-6 font-manrope  md:text-3xl '>Compare our plans and find the right one for you</h3>
            <p className='text-primary-grey-text'>StreamJet offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you.</p>
                <table className="pt-6 hidden md:block table-fixed text-left  gap-4 rounded-lg border border-primary-grey">
                    <thead>
                     <tr className='bg-primary-black'>
                         <th className='px-6 py-3 border-r border-primary-grey'>Features</th>
                         <th className='px-6 py-3 border-r border-primary-grey'>Basic</th>
                         <th className='px-6 py-3 border-r border-primary-grey'>Standard</th>
                         <th className='px-6 py-3 border-r border-primary-grey'>Premium</th>
                    </tr>
                    </thead>
                    <tbody>
                     <tr className='border-b border-primary-grey'>
                        <td className='px-6 py-3 text-left border-r border-primary-grey'>Price</td>
                        <td className='px-6 py-3 text-left border-r border-primary-grey'>₹150</td>
                        <td className='px-6 py-3 text-left border-r border-primary-grey'>₹450</td>
                        <td className='px-6 py-3 text-left border-r border-primary-grey'>₹1050</td>
                    </tr>
                     <tr className='border-b border-primary-grey'>
                        <td className='px-6 py-3 text-left border-r border-primary-grey'>Content</td>
                        <td className='px-6 py-3 text-left border-r border-primary-grey'>Access to a wide selection of movies and shows, including some new releases.</td>
                        <td className='px-6 py-3 text-left border-r border-primary-grey'>Access to a wider selection of movies and shows, including most new releases and exclusive
                            content
                        </td>
                        <td className='px-6 py-3 text-left border-r border-primary-grey'>Access to a widest selection of movies and shows, including all new releases and Offline
                            Viewing
                        </td>
                    </tr>
                     <tr className='border-b border-primary-grey'>
                        <td className='px-6 py-3 text-left border-r border-primary-grey'>Devices</td>
                        <td className='px-6 py-3 text-left border-r border-primary-grey'>One Mobile only</td>
                        <td className='px-6 py-3 text-left border-r border-primary-grey'>Upto 2 devices</td>
                        <td className='px-6 py-3 text-left border-r border-primary-grey'>Upto 4 devices</td>
                    </tr>
                     <tr className='border-b border-primary-grey'>
                        <td className='px-6 py-3 text-left border-r border-primary-grey'>HDR</td>
                        <td className='px-6 py-3 text-left border-r border-primary-grey'>No</td>
                        <td className='px-6 py-3 text-left border-r border-primary-grey'>Yes</td>
                        <td className='px-6 py-3 text-left border-r border-primary-grey'>Yes</td>
                    </tr>
                     <tr className='border-b border-primary-grey'>
                        <td className='px-6 py-3 text-left border-r border-primary-grey'>Dolby Atmos</td>
                        <td className='px-6 py-3 text-left border-r border-primary-grey'>No</td>
                        <td className='px-6 py-3 text-left border-r border-primary-grey'>Yes</td>
                        <td className='px-6 py-3 text-left border-r border-primary-grey'>Yes</td>
                    </tr>
                     <tr className='border-b border-primary-grey'>
                        <td className='px-6 py-3 text-left border-r border-primary-grey'>Ad-Free</td>
                        <td className='px-6 py-3 text-left border-r border-primary-grey'>No</td>
                        <td className='px-6 py-3 text-left border-r border-primary-grey'>Yes</td>
                        <td className='px-6 py-3 text-left border-r border-primary-grey'>Yes</td>
                    </tr>
                     <tr className='border-b border-primary-grey'>
                        <td className='px-6 py-3 text-left border-r border-primary-grey'>Offline Viewing</td>
                        <td className='px-6 py-3 text-left border-r border-primary-grey'>No</td>
                        <td className='px-6 py-3 text-left border-r border-primary-grey'>Yes, For selected content</td>
                        <td className='px-6 py-3 text-left border-r border-primary-grey'>Yes</td>
                    </tr>
                     <tr className='border-b border-primary-grey'>
                        <td className='px-6 py-3 text-left border-r border-primary-grey'>Dolby Atmos</td>
                        <td className='px-6 py-3 text-left border-r border-primary-grey'>No</td>
                        <td className='px-6 py-3 text-left border-r border-primary-grey'>Yes</td>
                        <td className='px-6 py-3 text-left border-r border-primary-grey'>Yes</td>
                    </tr>
                     <tr className='border-b border-primary-grey'>
                        <td className='px-6 py-3 text-left border-r border-primary-grey'>Highest Quality</td>
                        <td className='px-6 py-3 text-left border-r border-primary-grey'>720p</td>
                        <td className='px-6 py-3 text-left border-r border-primary-grey'>1080p</td>
                        <td className='px-6 py-3 text-left border-r border-primary-grey'>4k</td>
                    </tr>
                    </tbody>
                </table>
            </div>
    )
}