

import React from 'react'
import pic from '../videos/space1.jpg'
import { Link } from 'react-router-dom'

export const Main = () => {
  return (
    <div className='main-content'>
        <div className='main-inner'>
            <div className='streamer'>
              <img src={pic} alt=''/>
            </div>
            <div className='streamer-view'>
              <div className='streamer-info'>
                <div className='str-img'>
                  <img src='https://images3.alphacoders.com/648/thumbbig-648583.webp' alt=''/>
                  <span>Canlı</span>
                </div>
                <div className='str-name'>
                  <h3>TomBomb4dil</h3>
                  <p>Yayın Başladı...</p>
                </div>
                <div className='str-game'>
                  <Link>Just Chatting</Link>
                  <div className='cats'>
                    <Link><span>Aile dostu</span></Link>
                    <Link><span>Türkçe</span></Link>
                    <Link><span>Aksiyon</span></Link>
                  </div>
                </div>
              </div>
              <div className='streamer-subs'>
                <div className='str-subs'>
                  <div className='icons-sub'>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="notifications-outline"></ion-icon>
                  </div>
                  <Link className='abone-ol'>Abone Ol</Link>
                </div>
                <div className='str-viewer'>
                  <span className='izleyici'>
                    <ion-icon name="people-outline"></ion-icon>
                    1246356
                  </span>
                  <span className='timer'>
                    1:31:59
                  </span>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Main