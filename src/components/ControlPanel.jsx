import refresh from "../assets/icons/refresh.svg"
import pause from "../assets/icons/pause.svg"
import Image from 'next/image'

const ControlPanel = () => {
    return (
        <div className="absolute h-[68px] z-10 bottom-0 left-0 flex items-center justify-between px-[24px] py-[20px] gap-4 border-t-[1px] border-white/10">
            <button className="w-[140px] h-[30px] flex items-center justify-center gap-1 bg-[#2A5CBC1A]/10 border-[1px] border-[#2A5CBC] rounded-[4px]">
                <Image
                    src={refresh}
                    width={12}
                    height={12}
                    alt="refresh.svg"
                />

                <p className="font-bold text-white text-[10px]">Refresh All</p>
            </button>

            <button className="bg-white p-[6px] rounded-full">
            <Image
                    src={pause}
                    width={20}
                    height={20}
                    alt="pause.svg"
                />
            </button>


            <button className="w-[140px] h-[30px] flex items-center justify-center gap-1 bg-[#2A5CBC] border-[1px] border-[#2A5CBC] rounded-[4px]">
               

                <p className="font-bold text-white text-[10px]">Create Song</p>
            </button>
        </div>
    )
}

export default ControlPanel