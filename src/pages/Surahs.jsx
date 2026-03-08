import { useEffect, useState, useContext } from "react"
import { PlayerContext } from "../context/PlayerContext"
import SurahCard from "../components/SurahCard"
import QariSelector from "../components/QariSelector"

function Surahs({search=""}){

const { qari } = useContext(PlayerContext)

const [surahs,setSurahs] = useState([])

useEffect(()=>{

fetch("https://api.quran.com/api/v4/chapters")
.then(res=>res.json())
.then(data=>setSurahs(data.chapters))

},[])


/* FILTER SEARCH */

const filteredSurahs = surahs.filter(s =>
s.name_simple.toLowerCase().includes(search.toLowerCase())
)


/* PLAYLIST */

const playlist = filteredSurahs.map(surah => ({
id: surah.id,
type: "surah",
title:`Surah ${surah.name_simple}`,
artist:qari,
url:`https://cdn.islamic.network/quran/audio-surah/128/${qari}/${surah.id}.mp3`
}))


return(

<div className="surah-container">

<QariSelector/>

{filteredSurahs.map((surah,index)=>(

<SurahCard
key={surah.id}
index={index}
playlist={playlist}
surah={{
id:surah.id,
name:surah.name_simple,
english:surah.translated_name.name,
arabic:surah.name_arabic,
verses:surah.verses_count
}}
/>

))}

</div>

)

}

export default Surahs