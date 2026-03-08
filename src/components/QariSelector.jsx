import { useContext } from "react"
import { PlayerContext } from "../context/PlayerContext"
import { qaris } from "../data/qaris"

function QariSelector(){

const { qari, setQari } = useContext(PlayerContext)

return(

<div className="qari-selector">

<select
value={qari}
onChange={(e)=>setQari(e.target.value)}
>

{qaris.map(q => (

<option key={q.id} value={q.id}>
{q.name}
</option>

))}

</select>

</div>

)

}

export default QariSelector