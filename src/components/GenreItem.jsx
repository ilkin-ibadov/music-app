const GenreItem = ({item, selectedGenre, setSelectedGenre}) => {

    return (
        <button onClick={() => {
            setSelectedGenre(item.id)
        }} className={`${selectedGenre === item.id ? "bg-white text-black" : "bg-transparent text-white"} text-[10px] px-[16px] py-[8px] border-[1px] border-white/25 flex items-center gap-[12px] rounded-full`}>
            <div className={`size-[8px] rounded-full ${selectedGenre === item.id ? "bg-[#2A5CBC]" : "bg-white"}`}></div>
            {item.title}
        </button>
    )
}

export default GenreItem