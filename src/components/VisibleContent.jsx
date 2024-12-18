"use client"
import { useEffect, useState } from 'react'
import Tabbar from "../components/Tabbar"
import Controls from "../components/Controls"
import Artist from "./Artist"
import Genre from "../components/Genre"

const VisibleContent = () => {
    const [activeTab, setActiveTab] = useState("controls")
    const [visibleSection, setVisibleSection] = useState(<Controls />);

    useEffect(() => {
        switch (activeTab) {
            case "controls":
                setVisibleSection(<Controls />);
                break;
            case "artist":
                setVisibleSection(<Artist />);
                break;
            case "genre":
                setVisibleSection(<Genre />);
                break;
            default:
                setVisibleSection(<Controls />);
                break;
        }
    }, [activeTab]);

    return (
        <div className='w-full max-h-[553px] overflow-scroll'>
            <Tabbar activeTab={activeTab} setActiveTab={setActiveTab} />
            {visibleSection}
        </div>
    )
}

export default VisibleContent