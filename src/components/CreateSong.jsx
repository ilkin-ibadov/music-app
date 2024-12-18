"use client"
import { useState } from "react"
import Navbar from "../components/Navbar"
import VisibleContent from "../components/VisibleContent"
import ControlPanel from "../components/ControlPanel"
import Modal from "../components/Modal"

const CreateSong = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <div className="bg-[#0D1C38] w-[390px] min-h-[720px] relative">
            <Navbar setIsModalOpen={setIsModalOpen}/>
            <VisibleContent />
            <ControlPanel />

            {isModalOpen && <Modal setIsModalOpen={setIsModalOpen}/>}
        </div>
    )
}

export default CreateSong