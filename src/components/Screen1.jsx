import React from 'react'
import '../styles/style.css'
import card0 from '../assets/1/0.jpg'

function Screens() {
  return (
    <div className='screen__1'>
      <h1 className='screen__header'>Instructions</h1>
      <h2 className='screen__subheader'>
        We are now going to consider what your own values are.
      </h2>
      <h2 className='screen__subheader'>
        You will be shown a card like the one below. Hover over the card and
        click to drag it.
      </h2>
      <img src={card0} alt='' className='card' />
    </div>
  )
}

export default Screens
