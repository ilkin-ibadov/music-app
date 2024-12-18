"use client"
import { tabOptions } from "@/utils/static"

const Tabbar = ({activeTab, setActiveTab}) => {

    return (
        <div className="w-auto mx-3 h-[32px] flex items-center gap-2 bg-[#2A5CBC1A]/10 rounded-[4px] mb-5 overflow-hidden">
            {tabOptions.map(item => <button key={item.value} className={`h-full w-1/3 border-[1px] rounded-[4px] ${activeTab === item.value ? "border-[#2A5CBC] shadow-lg shadow-zinc-950" : "border-transparent"} text-sm text-white font-medium`} onClick={() => {
                setActiveTab(item.value)
            }}>
                {item.title}
            </button>)}
        </div>
    )
}

export default Tabbar