"use client"
import { useState } from 'react'
import { genres } from "@/utils/static"
import GenreItem from "../components/GenreItem"

const Genre = () => {
  const [selectedGenre, setSelectedGenre] = useState(null)

  return (
    <div className="w-[full] flex flex-wrap px-[25px] gap-[8px]">
      {genres.length ? genres.map(item => <GenreItem selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} item={item} key={item.id}/>) : <p>No genres found</p>}
    </div>
  )
}

export default Genre