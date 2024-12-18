import { modalItems } from "@/utils/static"
import Image from "next/image"
import close from "../assets/icons/close.svg"

const Modal = ({ setIsModalOpen }) => {
    return (
        <div className='absolute w-full h-full top-0 left-0 bg-black/40 flex items-center justify-center px-[13px] pt-[35px] z-20'>
            <div className="bg-[#0D1C38] px-[21px] pt-[60px] pb-[28px] rounded-[14px] border-[1px] border-[#2A5CBC] relative">
                <button onClick={() => {
                    setIsModalOpen(false)
                }} className="absolute right-4 top-4">
                    <Image
                        src={close}
                        width={24}
                        height={24}
                        alt="close.svg"
                    />
                </button>

                <h1 className='text-[24px] text-white font-bold mb-[28px] text-center'>Create SongShortcuts</h1>

                {modalItems.map((item, index) => <div key={index} className="flex items-center gap-[12px]">
                    <Image
                        style={{ objectFit: 'cover' }}
                        src={item.img}
                        width={84}
                        height={84}
                        alt="modalItem.svg"
                    />

                    <p className="text-[14px] text-white">{item.text}</p>
                </div>)}
            </div>
        </div>
    )
}

export default Modal