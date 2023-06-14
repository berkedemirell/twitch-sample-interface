

import React from 'react'

export const Bit = () => {
  return (
    <div className='bit-cont'>
        <div className='bit-inner-cont'>
            <div className='bit-header'>
                <p>Bit Satın Alın</p>
                <span>0 Bit'iniz var</span>
            </div>
            <div className='bit-fiyatlar'>
                <p>Fiyatlar TRY olarak gösteriliyor ve KDV dahil</p>
            </div>
            <div className='bit-fiyat-list'>
                <ul className='fiyat-items'>
                    <li className='fiyat-item'>
                        <p className='bit-value'>300 Bit</p>
                        <div className='buy'>
                            <button className='buy-btn'>₺65,59</button>
                            <span>%29 indirim</span>
                        </div>
                    </li>
                    <li className='fiyat-item'>
                        <p className='bit-value'>100 Bit</p>
                        <div className='buy'>
                            <button className='buy-btn'>₺30,61</button>
                            <span></span>
                        </div>
                    </li>
                    <li className='fiyat-item'>
                        <p className='bit-value'>500 Bit</p>
                        <div className='buy'>
                            <button className='buy-btn'>₺153,06</button>
                            <span></span>
                        </div>
                    </li>
                    <li className='fiyat-item'>
                        <p className='bit-value'>1.500 Bit</p>
                        <div className='buy'>
                            <button className='buy-btn'>₺436,23</button>
                            <span>%5 indirim</span>
                        </div>
                    </li>
                    <li className='fiyat-item'>
                        <p className='bit-value'>5.000 Bit</p>
                        <div className='buy'>
                            <button className='buy-btn'>₺1.408,18</button>
                            <span>%8 indirim</span>
                        </div>
                    </li>
                    <li className='fiyat-item'>
                        <p className='bit-value'>10.000 Bit</p>
                        <div className='buy'>
                            <button className='buy-btn'>₺2.755,13</button>
                            <span>%10 indirim</span>
                        </div>
                    </li>
                    <li className='fiyat-item'>
                        <p className='bit-value'>25.000 Bit</p>
                        <div className='buy'>
                            <button className='buy-btn'>₺6.734,76</button>
                            <span>%12 indirim</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Bit