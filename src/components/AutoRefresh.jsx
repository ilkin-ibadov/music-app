import Image from 'next/image'
import refresh from "../assets/icons/refresh.svg"

const AutoRefresh = () => {
    return (
        <button className='w-full mt-[2px] mb-[14px] flex justify-end'>
            <div className='w-[110px] h-[30px] flex items-center justify-between bg-[#F96718] rounded-full p-[2px]'>
                <p className='text-[10px] text-white font-bold ml-3'>Auto Refresh</p>
                <Image
                    className='p-[5px] bg-[#AE4811] rounded-full'
                    src={refresh}
                    width={24}
                    height={24}
                    alt="refresh.svg"
                />
            </div>
        </button>
    )
}

export default AutoRefresh