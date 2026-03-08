import { nasheeds } from "../data/nasheeds"
import NasheedCard from "../components/NasheedCard"

function Nasheeds({search=""}){

const filtered = nasheeds.filter(n =>
n.title.toLowerCase().includes(search.toLowerCase())
)

return(

<div className="surah-container">

{filtered.map((nasheed,index)=>(

<NasheedCard
key={nasheed.id}
nasheed={nasheed}
playlist={nasheeds}
index={nasheeds.findIndex(n=>n.id===nasheed.id)}
/>

))}

</div>

)

}

export default Nasheeds