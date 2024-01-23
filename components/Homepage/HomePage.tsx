import WatchNow from "@/components/Homepage/WatchNow";
import Category from "@/components/Homepage/Category";
import Devices from "@/components/Homepage/Devices";


export default  function HomePage() {


    return (
        <div className='gap-20 w-full justify-center'>
            <WatchNow/>
            <Category/>
            <Devices/>
        </div>
    )
}
