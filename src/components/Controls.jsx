import { tracks } from "@/utils/static"
import ControlItem from "./ControlItem"
import AutoRefresh from "./AutoRefresh"

const TrackList = () => {

  return (
    <div className="flex flex-col gap-3 px-[23px]">
      {tracks.length ? tracks.map(item => <ControlItem key={item.id} item={item}/>) : <p>No controls found</p>}
      <AutoRefresh />
    </div>
  )
}

export default TrackList