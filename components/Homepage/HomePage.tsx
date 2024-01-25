import WatchNow from "@/components/Homepage/WatchNow";
import Category from "@/components/Homepage/Category";
import Devices from "@/components/Homepage/Devices";
import FAQ from "@/components/FAQ";


export default  function HomePage() {


    return (
        <div className='gap-20 w-full justify-center'>
            <WatchNow/>
            <Category/>
            <FAQ/>
            <Devices/>

        </div>
    )
}
