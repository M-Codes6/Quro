import { useContext, useState } from "react"
import { PlayerContext } from "../context/PlayerContext"
import SurahCard from "../components/SurahCard"
import NasheedCard from "../components/NasheedCard"
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"

import {
FaHeart,
FaBookmark,
FaInfoCircle,
FaUserCog,
FaShieldAlt,
FaCommentDots
} from "react-icons/fa"

function Profile(){

const { favorites } = useContext(PlayerContext)

const favoriteSurahs = favorites.filter(f => f.type === "surah")
const favoriteNasheeds = favorites.filter(f => f.type === "nasheed")

const [section,setSection] = useState(null)

return(

<div className="profile-container">

{/* PROFILE HEADER */}

<div className="profile-header">

<img
src="/profile.png"
alt="profile"
className="profile-avatar"
/>

<h2>Quro User</h2>
<p>Listen with Heart</p>

</div>


{/* ---------------- MAIN MENU ---------------- */}

{section === null && (

<>

{/* SAVED CONTENT */}


<div className="profile-menu">

<div
className="profile-card red"
onClick={()=>setSection("favSurahs")}
>
<FaHeart/>
<span>Favourite Surahs</span>
</div>

<div
className="profile-card purple"
onClick={()=>setSection("favNasheeds")}
>
<FaBookmark/>
<span>Favourite Nasheeds</span>
</div>

<div
className="profile-card green"
onClick={()=>setSection("about")}
>
<FaInfoCircle/>
<span>About App</span>
</div>

</div>


{/* ACCOUNT & LEGAL */}


<div className="profile-menu">

<div
className="profile-card gray"
onClick={()=>setSection("dev")}
>
<FaUserCog/>
<span>Dev Info</span>
</div>

<div
className="profile-card teal"
onClick={()=>setSection("privacy")}
>
<FaShieldAlt/>
<span>Privacy Policy</span>
</div>

<div
className="profile-card blue"
onClick={()=>setSection("feedback")}
>
<FaCommentDots/>
<span>Feedback</span>
</div>

</div>

</>

)}


{/* ---------------- FAVORITE SURAHS ---------------- */}

{section === "favSurahs" && (

<>

<button
className="back-btn"
onClick={()=>setSection(null)}
>
← Back
</button>

<h3 className="profile-section">⭐ Favorite Surahs</h3>

{favoriteSurahs.length === 0 && <p>No favorites yet</p>}

{favoriteSurahs.map((surah,index)=>(
<SurahCard key={index} surah={surah}/>
))}

</>

)}


{/* ---------------- FAVORITE NASHEEDS ---------------- */}

{section === "favNasheeds" && (

<>

<button
className="back-btn"
onClick={()=>setSection(null)}
>
← Back
</button>

<h3 className="profile-section">🎧 Favorite Nasheeds</h3>

{favoriteNasheeds.length === 0 && <p>No favorites yet</p>}

{favoriteNasheeds.map((n,index)=>(
<NasheedCard key={index} nasheed={n}/>
))}

</>

)}


{/* ---------------- ABOUT APP ---------------- */}

{section === "about" && (

<>

<button className="back-btn" onClick={()=>setSection(null)}>
← Back
</button>

<h3 className="profile-section">About Quro</h3>

<p>
Quro is a lightweight installable web app (PWA) designed to provide a fast,
simple, and distraction-free Quran listening experience that works smoothly
on both mobile devices and desktops.
</p>

<p>
Quro is created to help Muslims listen to the beautiful recitation of the
Holy Quran and Islamic nasheeds in a calm and focused environment.
Unlike general music platforms such as Spotify or YouTube, Quro is built
specifically for Quran recitation so that the experience remains spiritual
and free from unnecessary distractions.
</p>

<p>
Quro is completely <strong>free and without advertisements</strong>. The app
will never contain ads because its purpose is not profit, but benefit.
This project is intended as a small effort towards
<strong>Sadaqah Jariyah</strong> — a continuous charity that benefits others
even after it is created.
</p>

<p>
The app currently includes features such as listening to Surahs,
saving favorite recitations,
and streaming Islamic nasheeds through a clean and minimal interface.
</p>

<p>
Quro is still growing. In the future the app aims to support more Qari
recitations, improved offline listening, better organization of content,
and community-driven improvements to make the experience even better.
</p>

<p>
This project is <strong>open-source</strong>, and developers are welcome to
contribute ideas, improvements, and new features. Any contribution that
helps spread the recitation of the Quran is always appreciated.
</p>

<p>
If this app benefits you, please remember the developers and contributors
in your duas. May Allah accept this effort and make it beneficial for
everyone who uses it.
</p>

Version 1.0 • Built with intention of serving the Ummah

</>

)}


{/* ---------------- DEV INFO ---------------- */}

{section === "dev" && (

<>

<button className="back-btn" onClick={()=>setSection(null)}>
← Back
</button>

<h3 className="profile-section">Developer Info</h3>

<p><strong>Developer:</strong> Muzamil Naik</p>

<p>
Quro is a personal project built with the intention of making Quran
recitation easily accessible in a simple and distraction-free way.
This project is created as a small effort towards Sadaqah Jariyah.
</p>

<p><strong>App:</strong> Quro – Quran Audio App</p>

<p><strong>Built with:</strong> React, Progressive Web App (PWA)</p>

<p>
This project is open-source and contributions, suggestions, and feedback
are always welcome.
</p>

<p><strong>Connect:</strong></p>

<div className="dev-links">

<a
href="https://github.com/M-Codes6"
target="_blank"
rel="noopener noreferrer"
className="dev-link"
>
<FaGithub /> GitHub
</a>

<a
href="https://www.linkedin.com/in/muzamilnaik/"
target="_blank"
rel="noopener noreferrer"
className="dev-link"
>
<FaLinkedin /> LinkedIn
</a>

<a
href="https://x.com/muzamilnaik_"
target="_blank"
rel="noopener noreferrer"
className="dev-link"
>
<FaXTwitter /> Twitter
</a>

</div>

<p className="dev-note">
If you have suggestions to improve Quro, Feel free to connect, report issues, or contribute to the project.
</p>

</>

)}


{/* ---------------- PRIVACY ---------------- */}

{section === "privacy" && (

<>

<button className="back-btn" onClick={()=>setSection(null)}>
← Back
</button>

<h3 className="profile-section">Privacy Policy</h3>

<p>
Quro respects your privacy and is designed to work without collecting
any personal information from its users.
</p>

<p>
The app does not collect, store, or transmit any personal data.
There are no user accounts, no tracking systems, and no background
data collection of any kind.
</p>

<p>
Features such as favorite Surahs and recently played recitations
are stored locally on your device using your browser's local storage.
This data never leaves your device and is not shared with anyone.
</p>

<p>
Quro also does not use advertisements, analytics trackers,
or third-party tracking services.
</p>

<p>
The goal of this app is to provide a simple and respectful
Quran listening experience while maintaining complete user privacy.
</p>


</>

)}


{/* ---------------- FEEDBACK ---------------- */}

{section === "feedback" && (

<>

<button className="back-btn" onClick={()=>setSection(null)}>
← Back
</button>

<h3 className="profile-section">Feedback</h3>

<p>
We would love to hear your feedback.
</p>

<a
href="mailto:naikmuzamil06@gmail.com?subject=Quro App Feedback&body=Assalamu Alaikum,%0A%0AI would like to share the following feedback:%0A"
className="feedback-btn"
>
Send Feedback
</a>


</>

)}

</div>

)

}

export default Profile