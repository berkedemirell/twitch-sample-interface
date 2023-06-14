import React from 'react'
import { Link } from 'react-router-dom'

export const More = () => {
  return (
    <div className='more-cont'>
        <div className='more'>
            <h4 className='genel'>Genel</h4>
            <ul className='more-list-items'>
                <li className='more-list-item'><Link className='more-link'>Basın</Link></li>
                <li className='more-list-item'><Link className='more-link'>Blog</Link></li>
                <li className='more-list-item'><Link className='more-link'>Geliştiriciler</Link></li>
                <li className='more-list-item'><Link className='more-link'>Hakkımızda</Link></li>
                <li className='more-list-item'><Link className='more-link'>IGDB</Link></li>
                <li className='more-list-item'><Link className='more-link'>İş Olanakları</Link></li>
                <li className='more-list-item'><Link className='more-link'>Loot Cave</Link></li>
                <li className='more-list-item'><Link className='more-link'>Partnerler</Link></li>
                <li className='more-list-item'><Link className='more-link'>Reklamcılar</Link></li>
                <li className='more-list-item'><Link className='more-link'>Turbo</Link></li>
                <li className='more-list-item'><Link className='more-link'>Twitch Gift Card</Link></li>
                <li className='more-list-item'><Link className='more-link'>Uygulama İndirin</Link></li>
            </ul>
            <h4 className='genel'>Yardım ve Yasal Bilgiler</h4>
            <ul className='more-list-items'>
                <li className='more-list-item'><Link className='more-link'>Çerez Politikası</Link></li>
                <li className='more-list-item'><Link className='more-link'>Erişilebilirlik Beyanı</Link></li>
                <li className='more-list-item'><Link className='more-link'>Gizlilik Politikası</Link></li>
                <li className='more-list-item'><Link className='more-link'>Topluluk İlkeleri</Link></li>
                <li className='more-list-item'><Link className='more-link'>Reklam Seçenekleri</Link></li>
                <li className='more-list-item'><Link className='more-link'>Şartlar</Link></li>
                <li className='more-list-item'><Link className='more-link'>Yardım</Link></li>
                <li className='more-list-item'><Link className='more-link'>Güvenlik</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default More