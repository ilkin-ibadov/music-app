import Image from "next/image"

const ArtistItem = ({ item }) => {
    return (
        <div className="relative w-[112px] h-[112px] rounded-[4px] overflow-hidden">
            <Image
                style={{ objectFit: 'cover' }}
                src={item.img}
                width={112}
                height={112}
                alt={`${item.name}.svg`}
            />

            <p className="absolute bottom-0 left-0 w-full h-[22px] pl-2 pt-1 z-10 backdrop-blur-sm text-[10px] font-medium">{item.name}</p>
        </div>
    )
}

export default ArtistItem