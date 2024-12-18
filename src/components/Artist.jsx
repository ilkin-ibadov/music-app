import { artists } from "@/utils/static"
import ArtistItem from "../components/ArtistItem"

const Artist = () => {
  return (
    <div className="grid grid-cols-3 gap-[13px] px-[13px] pb-[13px]">
      {artists.length ? artists.map(item => <ArtistItem item={item} key={item.id}/>) : <p>No artists found</p>}
    </div>
  )
}

export default Artist