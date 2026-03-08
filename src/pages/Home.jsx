import { useContext, useState } from "react"
import { PlayerContext } from "../context/PlayerContext"
import { surahs } from "../data/surahs"
import SurahCard from "../components/SurahCard"

import { FaStar } from "react-icons/fa"
import { MdHistory } from "react-icons/md"
import { GiOpenBook } from "react-icons/gi"
import { FaHeadphones } from "react-icons/fa"
import { IoArrowBack } from "react-icons/io5"

import { qaris } from "../data/qaris"
import { useNavigate } from "react-router-dom"
import { FEATURES } from "../config/features"

import logo from "../assets/logo-icon2.png"

function Home(){

const { qari, playTrack, favorites, recent } = useContext(PlayerContext)

const [activeSection,setActiveSection] = useState(null)

const navigate = useNavigate()

/* SURAH OF DAY */

const today = new Date().toDateString()

let stored = localStorage.getItem("surahOfDay")
let todaySurah = null

try{

const parsed = stored ? JSON.parse(stored) : null

if(parsed && parsed.date === today){
todaySurah = surahs.find(s => s.id === parsed.id)
}

if(!todaySurah){

const randomIndex = Math.floor(Math.random()*surahs.length)
todaySurah = surahs[randomIndex]

localStorage.setItem(
"surahOfDay",
JSON.stringify({
date:today,
id:todaySurah.id
})
)

}

}catch{

todaySurah = surahs[Math.floor(Math.random()*surahs.length)]

}

/* PLAYLIST */

const playlist = surahs.map((surah)=>({

id:surah.id,
type:"surah",

title: surah.name.startsWith("Surah")
? surah.name
: `Surah ${surah.name}`,

artist:qari,

url:`https://cdn.islamic.network/quran/audio-surah/128/${qari}/${surah.id}.mp3`

}))

/* FAVORITES */

const favoriteSurahs = favorites.filter(f=>f.type==="surah")

return(

<div className="home-page">

{/* HEADER */}

<div className="home-fixed">

<div className="home-top">

<img src={logo} className="home-logo"/>

<div className="home-title">
<h2>Quro</h2>
<p>Listen with heart</p>
</div>

</div>

{/* SURAH OF DAY */}

{todaySurah && (

<div className="surah-day-card">

<div>
<h4>🌙 Surah of the day</h4>
<h3>{todaySurah.name}</h3>
</div>

<button
className="play-day"
onClick={()=>{

const index = surahs.findIndex(s=>s.id===todaySurah.id)

playTrack(playlist,index)

}}
>
Play
</button>

</div>

)}

</div>


{/* CONTENT */}

<div className="home-content">


{/* MAIN HOME SCREEN */}

{!activeSection && (

<>

<div className="home-grid">

<div
className="small-card"
onClick={()=>setActiveSection("favorites")}
>
<FaStar/>
<span>Favourite Surahs</span>
</div>

<div
className="small-card"
onClick={()=>setActiveSection("popular")}
>
<GiOpenBook/>
<span>Popular Surahs</span>
</div>

<div
className="small-card"
onClick={()=>setActiveSection("recent")}
>
<MdHistory/>
<span>Recents</span>
</div>

<div
className="small-card"
onClick={()=>setActiveSection("nasheeds")}
>
<FaHeadphones/>
<span>Favourite Nasheeds</span>
</div>

</div>


{/* FEATURED RECITERS */}

{FEATURES.QARI_RECITERS && (

<>

<h3 className="section-title">Featured Reciters</h3>

<div className="qari-grid">

{qaris.map((qari)=>(
<div
key={qari.id}
className="qari-card"
onClick={()=>navigate(`/qari/${qari.id}`)}
>

<img src={qari.image} alt={qari.name}/>

<div className="qari-name">
{qari.name}
</div>

</div>
))}

</div>

</>

)}

</>

)}


{/* BACK BUTTON */}

{activeSection && (

<button
className="back-btn"
onClick={()=>setActiveSection(null)}
>
<IoArrowBack/> Back
</button>

)}


{/* FAVORITES */}

{activeSection==="favorites" && favoriteSurahs.map((fav,index)=>{

const surah = surahs.find(s=>s.id===fav.id)

if(!surah) return null

return(

<SurahCard
key={surah.id}
surah={surah}
playlist={playlist}
index={index}
/>

)

})}


{/* RECENTS */}

{activeSection==="recent" && recent.map((item,index)=>{

const surah = surahs.find(s=>`Surah ${s.name}`===item.title)

if(!surah) return null

return(

<SurahCard
key={index}
surah={surah}
playlist={playlist}
index={index}
/>

)

})}


{/* POPULAR */}

{activeSection==="popular" && surahs.slice(0,10).map((surah,index)=>(

<SurahCard
key={surah.id}
surah={surah}
playlist={playlist}
index={index}
/>

))}

</div>

</div>

)

}

export default Home