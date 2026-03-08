import { useEffect, useState } from "react"

function InstallPrompt(){

const [prompt,setPrompt] = useState(null)

useEffect(()=>{

window.addEventListener("beforeinstallprompt",(e)=>{

e.preventDefault()

setPrompt(e)

})

},[])

function install(){

prompt.prompt()

}

if(!prompt) return null

return(

<div className="install-popup">

<p>Install Quro App</p>

<button onClick={install}>Install</button>

</div>

)

}

export default InstallPrompt