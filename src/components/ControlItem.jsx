import Image from 'next/image'
import volumeOn from "../assets/icons/volumeOn.svg"
import volumeOff from "../assets/icons/volumeOff.svg"
import refresh from "../assets/icons/refresh.svg"
import refreshMute from "../assets/icons/refreshMute.svg"
import { useState } from 'react'

const ControlItem = ({ item }) => {
    const [mute, setMute] = useState(false)
    const [refreshOn, setRefreshOn] = useState(false)

    return (
        <div className={`w-full h-[62px] flex justify-between rounded-[8px] border-[1px] ${mute ? "border-white/10" : "border-[#2A5CBC80]/50"} overflow-hidden`}>
            <div className='mt-[10px] ml-[14px]'>
                <p className={`text-[14px] font-medium ${mute ? "text-zinc-500" : "text-white"}`}>{item.track}</p>
                <p className={`text-[10px] ${mute ? "text-zinc-500" : "text-zinc-400"}`}>{item.artist}</p>
            </div>

            <div className='flex items-center'>
                <button onClick={() => {
                    setMute(prevState => !prevState)
                }} className={`size-[62px] border-l-[1px] ${mute ? "border-white/10" : "border-[#2A5CBC80]/50"} flex items-center justify-center`}>
                    <Image
                        src={mute ? volumeOff : volumeOn}
                        width={20}
                        height={20}
                        alt={mute ? "volumeOff.svg" : "volumeOn.svg"}
                    />
                </button>
                <button disabled={mute} onClick={() => {
                    setRefreshOn(prevState => !prevState)
                }} className={`size-[62px] border-l-[1px] ${mute ? "border-white/10" : "border-[#2A5CBC80]/50"} flex items-center justify-center ${refreshOn && "bg-[#2A5CBC80]/50"}`}>
                    <Image
                        src={mute ? refreshMute : refresh}
                        width={20}
                        height={20}
                        alt={mute ? "refreshMute.svg" : "refresh.svg"}
                    />
                </button>
            </div>

        </div>
    )
}

export default ControlItem