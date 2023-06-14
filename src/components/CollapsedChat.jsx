
import React from 'react'
import { Link } from 'react-router-dom'

export const CollapsedChat = (props) => {
  return (
    <div className='collapsed-chat'>
        <Link onClick={props.handleCollapse}><ion-icon name="arrow-back-outline"></ion-icon></Link>
    </div>
  )
}

export default CollapsedChat