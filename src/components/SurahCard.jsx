import { useContext } from "react"
import { PlayerContext } from "../context/PlayerContext"
import { FaPlay, FaPause, FaHeart, FaRegHeart } from "react-icons/fa"

function SurahCard({ surah, playlist, index }) {

const {
playTrack,
togglePlay,
track,
isPlaying,
favorites,
toggleFavorite
} = useContext(PlayerContext)

const currentTitle = surah.name.startsWith("Surah")
? surah.name
: `Surah ${surah.name}`
const isCurrent = track?.title === currentTitle

const isFav = favorites.some(
f => f.id === surah.id && f.type === "surah"
)

return(

<div className="surah-card">

<div className="surah-left">

<div className="surah-number">
{surah.id}
</div>

<div>

<div className="surah-title-row">

<div className="surah-title">
{surah.name}
</div>

<button
className="fav-btn"
onClick={()=>toggleFavorite({
id: surah.id,
type:"surah",
name: surah.name,
arabic: surah.arabic
})}
>

{isFav ? <FaHeart color="#d4af37"/> : <FaRegHeart/>}

</button>

</div>

<div className="surah-sub">
{surah.english}
</div>

</div>

</div>

<div className="surah-right">

<div className="surah-arabic">
{surah.arabic}
</div>

<div className="surah-verses">
{surah.verses} verses
</div>

</div>

<button
className="play-btn"
onClick={()=>{

if(isCurrent){
togglePlay()
}else{
playTrack(playlist,index)
}

}}
>

{isCurrent && isPlaying ? <FaPause/> : <FaPlay/>}

</button>

</div>

)

}

export default SurahCard