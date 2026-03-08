import { useParams } from "react-router-dom"
import { surahs } from "../data/surahs"
import { qaris } from "../data/qaris"
import SurahCard from "../components/SurahCard"

function QariSurahs(){

const { id } = useParams()

const qari = qaris.find(q => q.id === id)

if(!qari) return <div>Qari not found</div>

const playlist = surahs.map((surah)=>({

id:surah.id,
type:"surah",

title:`Surah ${surah.id}`,
artist:qari.name,

url:`https://res.cloudinary.com/djfuwzxdu/video/upload/surahs/${qari.folder}/${surah.id}.mp3`

}))

return(

<div className="surah-container">

<h2 style={{margin:"20px"}}>{qari.name}</h2>

{surahs.map((surah,index)=>(
<SurahCard
key={surah.id}
surah={surah}
playlist={playlist}
index={index}
/>
))}

</div>

)

}

export default QariSurahs