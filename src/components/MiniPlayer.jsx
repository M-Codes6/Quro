import { useContext, useState } from "react"
import { PlayerContext } from "../context/PlayerContext"
import { FaPlay, FaPause, FaForward, FaBackward, FaTimes } from "react-icons/fa"

function MiniPlayer(){

const {
track,
isPlaying,
togglePlay,
nextTrack,
prevTrack,
progress,
duration,
seek
} = useContext(PlayerContext)

const [collapsed,setCollapsed] = useState(false)

if(!track) return null

if(collapsed){

return(

<button
className="mini-circle"
onClick={()=>setCollapsed(false)}
>
▶
</button>

)

}

return(

<div className="mini-player">

<button
className="mini-close"
onClick={()=>setCollapsed(true)}
>
<FaTimes/>
</button>

<div className="player-row">

<div className="track-text">

<div className="title">{track.title}</div>
<div className="artist">{track.artist}</div>

</div>

<input
type="range"
className="seekbar"
value={progress}
max={duration}
onChange={seek}
/>

<div className="controls">

<button onClick={prevTrack}>
<FaBackward/>
</button>

<button onClick={togglePlay}>
{isPlaying ? <FaPause/> : <FaPlay/>}
</button>

<button onClick={nextTrack}>
<FaForward/>
</button>

</div>

</div>

</div>

)

}

export default MiniPlayer