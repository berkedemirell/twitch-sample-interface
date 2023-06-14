

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Notifications = () => {

    const [display, setDisplay] = useState(false)

  return (
    <div className='not-cont'>
        <div className='not-inner-cont'>
            <div className='bildirimler'>
                <div className='icon'><ion-icon name="file-tray-full-outline"></ion-icon></div>
                <p className='p-bild'>Bildirimler</p>
                <Link className='ayarlar'><ion-icon name="settings-outline"></ion-icon></Link>
            </div>
            <div className='not-btns'>
                <button className='twitch-im' style={{backgroundColor:!display ? "rgb(59,48,48" : ""}} onClick={() => setDisplay(false)}>Twitch'im</button>
                <button className='kanalım-btn' style={{backgroundColor:display ? "rgb(59,48,48" : ""}} onClick={() => setDisplay(true)}>Kanalım</button>
            </div>
            {!display ? <div className='messages'>
                <div className='message'>
                    <img className='user-img' src='https://images2.alphacoders.com/516/thumbbig-516664.webp' alt=''/>
                    <div className='mes-cont'>
                        <p className='mes-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, deleniti?</p>
                        <span className='mes-span'>Dün</span>
                    </div>
                </div>
                <div className='message'>
                    <img className='user-img' src='https://images3.alphacoders.com/726/thumbbig-72695.webp' alt=''/>
                    <div className='mes-cont'>
                        <p className='mes-p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus exercitationem recusandae fugit.</p>
                        <span className='mes-span'>Dün</span>
                    </div>
                </div>
                <div className='message'>
                    <img className='user-img' src='https://images8.alphacoders.com/548/thumbbig-548717.webp' alt=''/>
                    <div className='mes-cont'>
                        <p className='mes-p'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        <span className='mes-span'>Dün</span>
                    </div>
                </div>
                <div className='message'>
                    <img className='user-img' src='https://images4.alphacoders.com/126/thumbbig-126438.webp' alt=''/>
                    <div className='mes-cont'>
                        <p className='mes-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, accusantium.</p>
                        <span className='mes-span'>3 gün önce</span>
                    </div>
                </div>
                <div className='message'>
                    <img className='user-img' src='https://images7.alphacoders.com/737/thumbbig-737400.webp' alt=''/>
                    <div className='mes-cont'>
                        <p className='mes-p'>Lorem ipsum dolor sit amet.</p>
                        <span className='mes-span'>Geçen hafta</span>
                    </div>
                </div>
                <div className='message'>
                    <img className='user-img' src='https://images4.alphacoders.com/128/thumbbig-128706.webp' alt=''/>
                    <div className='mes-cont'>
                        <p className='mes-p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, sint quas?</p>
                        <span className='mes-span'>2 hafta önce</span>
                    </div>
                </div>
            </div> :
            
            <div className='kanalım'>
                <div className='kanal'>
                    <div className='kanal-img-div'>
                        <img src='https://images5.alphacoders.com/481/thumbbig-481903.webp' alt=''/>
                    </div>
                    <h3>Yayın işinde yeni misiniz? Deneyin!</h3>
                    <p>Hobilerinizi paylaşın ve yeni arkadaşlarla tanışın.</p>
                    <button>Yayıncı Paneline gidin</button>
                </div>

            </div>
            }
        </div>
    </div>
  )
}

export default Notifications