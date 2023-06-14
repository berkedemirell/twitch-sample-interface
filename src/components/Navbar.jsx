

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {Prime} from './Prime.jsx'
import {Notifications} from './Notifications.jsx'
import {More} from './More.jsx'
import {Bit} from './Bit.jsx'
import {Profile} from './Profile.jsx'

export const Navbar = () => {
    const [genel, setGenel] = useState(false)
    const [prime, setPrime] = useState(false)
    const [not, setNot] = useState(false)
    const [bit, setBit] = useState(false)
    const [prof, setProf] = useState(false)
  return (
    <div className='nav'>
        <div className='general'>
            <div className='inline-general'>
                <Link className='gen-link logo'><ion-icon name="logo-twitch"></ion-icon></Link>
                <Link className='gen-link'>Takip Edilen</Link>
                <Link className='gen-link'>Gözat</Link>
                <div>
                    {<Link className='gen-link' title='Daha fazla' onClick={() => setGenel((prev) => !prev)}>...</Link>}
                    {genel && <More/>}
                </div>
            </div>
        </div>
        <div className='search-bar'>
            <div className='input-search'>
                <input className='s-input' type='text' placeholder='Ara'/>
                <button className='search-btn'><ion-icon name="search-outline"></ion-icon></button>
            </div>
        </div>
        <div className='profile-falan'>
            <div className='profile-infos'>
                <div>
                    <button className='prof-link' title='Yeni prime ganimeti'  onClick={() => setPrime((prev) => !prev)}><ion-icon name="bookmarks-outline"></ion-icon></button>
                    {prime && <Prime/>}
                </div>
                <div>
                <button className='prof-link' title='Bildirimler' onClick={() => setNot((prev) => !prev)}><ion-icon name="file-tray-outline"></ion-icon></button>
                {not && <Notifications/>}
                </div>
                <button className='prof-link' title='Fısıltılar'><ion-icon name="chatbox-outline"></ion-icon></button>
                <div>
                    <button className='prof-link-bit' onClick={() => setBit((prev) => !prev)}>Bit Al</button>
                    {bit && <Bit/>}
                </div>
                <Link onClick={() => setProf((prev) => !prev)}><img className='prof-pic' src='https://images5.alphacoders.com/481/thumbbig-481903.webp' alt=''/></Link>
                {prof && <Profile/>}
            </div>
        </div> 
    </div>
  )
}

export default Navbar