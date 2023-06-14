import React from 'react'

export const Profile = () => {
  return (
    <div className='prof-cont'>
        <div className='prof-inner-cont'>
            <div className='prof'>
                <img src="https://images5.alphacoders.com/481/thumbbig-481903.webp" alt="" />
                <p>TomBomb4dil</p>
            </div>
            <div className='line'></div>
            <ul className='prof-list-items'>
                <li className='prof-list-item'>
                    <ion-icon name="accessibility-outline"></ion-icon>
                    <p>Kanal</p>
                </li>
                <li className='prof-list-item'>
                    <ion-icon name="videocam-outline"></ion-icon>
                    <p>Video Yapım Kiti</p>
                </li>
                <li className='prof-list-item'>
                    <ion-icon name="stats-chart-outline"></ion-icon>
                    <p>Yapımcı Paneli</p>
                </li>
                <li className='prof-list-item'>
                    <ion-icon name="shield-outline"></ion-icon>
                    <p>Güvenlik</p>
                </li>
                <div className='line'></div>
                <li className='prof-list-item'>
                    <ion-icon name="pencil-outline"></ion-icon>
                    <p>İfade Atıflar</p>
                </li>
                <div className='line'></div>
                <li className='prof-list-item'>
                    <ion-icon name="star-outline"></ion-icon>
                    <p>İfade Abonelikler</p>
                </li>
                <li className='prof-list-item'>
                    <ion-icon name="gift-outline"></ion-icon>
                    <p>Drop ve Ödüller</p>
                </li>
                <li className='prof-list-item'>
                    <ion-icon name="wallet-outline"></ion-icon>
                    <p>Twitch Wallet</p>
                </li>
                <div className='line'></div>
                <li className='prof-list-item'>
                    <ion-icon name="settings-outline"></ion-icon>
                    <p>Ayarlar</p>
                </li>
                <li className='prof-list-item'>
                    <ion-icon name="hammer-outline"></ion-icon>
                    <p>İçerik özelleştirme</p>
                </li>
                <li className='prof-list-item'>
                    <ion-icon name="globe-outline"></ion-icon>
                    <p>Dil</p>
                </li>
                <li className='prof-list-item'>
                    <ion-icon name="moon-outline"></ion-icon>
                    <p>Koyu Tema</p>
                </li>
                <div className='line'></div>
                <li className='prof-list-item'>
                    <ion-icon name="exit-outline"></ion-icon>
                    <p>Oturum Kapat</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Profile