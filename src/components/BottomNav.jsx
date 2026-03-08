import { FaHome, FaUser, FaBookOpen, FaHeadphones } from "react-icons/fa"
import { Link, useLocation } from "react-router-dom"

function BottomNav(){

const location = useLocation()

return(

<div className="bottom-nav">

<Link to="/" className={location.pathname === "/" ? "active" : ""}>
<FaHome size={24}/>
</Link>

<Link to="/surahs" className={location.pathname === "/surahs" ? "active" : ""}>
<FaBookOpen size={24}/>
</Link>

<Link to="/nasheeds" className={location.pathname === "/nasheeds" ? "active" : ""}>
<FaHeadphones size={24}/>
</Link>

<Link to="/profile" className={location.pathname === "/profile" ? "active" : ""}>
<FaUser size={24}/>
</Link>

</div>

)

}

export default BottomNav