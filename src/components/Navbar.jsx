import Image from 'next/image'
import hamburgerMenu from "../assets/icons/hamburgerMenu.svg"
import navbarInfo from "../assets/icons/navbarInfo.svg"


const Navbar = ({ setIsModalOpen }) => {
    return (
        <div className='flex items-center justify-between pt-[27px] pl-[25px] pr-[11px] pb-[30px]'>
            <button>
                <Image
                    src={hamburgerMenu}
                    width={24}
                    height={24}
                    alt="hamburgerMenu.svg"
                />
            </button>

            <h1 className='text-[24px] font-bold text-white'>Create a Song</h1>

            <button onClick={() => {
                setIsModalOpen(true)
            }} className='p-[10px] rounded-full border-[1px] border-[#2A5CBC]'>
                <Image
                    src={navbarInfo}
                    width={20}
                    height={20}
                    alt="navbarInfo.svg"
                />
            </button>
        </div>
    )
}

export default Navbar