import React from 'react'
import '../styles/style.css'
import card0 from '../assets/1/0.jpg'

function Screens() {
  return (
    <div className='screen__1'>
      <div className='screen__header-container'>
        <button className='prev__button page__btn'>Back</button>
        <h1 className='screen__header'>Instructions</h1>
        <button className='next__button page__btn'>Next</button>
      </div>
      <h2 className='screen__subheader'>
        We are now going to consider what your own values are.
      </h2>
      <h2 className='screen__subheader'>
        You will be shown a card like the one below. Hover over the card and
        click to drag it.
      </h2>
      <img src={card0} alt='' className='card' />
      <div className='drag__container'>
        <div className='drag__card'>
          <h1 className='card__header'>Very important to me</h1>
          <div className='card__drag-area'></div>
        </div>
        <div className='drag__card'>
          <h1 className='card__header'>Important to me</h1>
          <div className='card__drag-area'></div>
        </div>
        <div className='drag__card'>
          <h1 className='card__header'>Not important to me</h1>
          <div className='card__drag-area'></div>
        </div>
      </div>
    </div>
  )
}

export default Screens
