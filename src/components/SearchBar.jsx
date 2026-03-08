import { useLocation } from "react-router-dom"

function SearchBar({search,setSearch}){

const location = useLocation()

if(location.pathname === "/profile") return null

return(

<div className="search-wrapper">

<input
type="text"
placeholder="Search..."
className="search-bar"
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

</div>

)

}

export default SearchBar