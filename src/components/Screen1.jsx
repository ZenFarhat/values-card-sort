import React, { useEffect, useState } from 'react'
import '../styles/style.css'
import { useDrop } from 'react-dnd'
import Card from './Card'

function Screens() {
  const [board, setBoard] = useState([])
  const cardList = []

  const loadWeek1Images = (week) => {
    for (let i = 0; i <= 33; i++) {
      cardList.push({ src: `../assets/1/${i}.jpg`, id: i })
    }
  }

  useEffect(() => {
    loadWeek1Images(1)
    console.log(cardList)
  }, [])

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))

  const addImageToBoard = (id) => {}

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
      {cardList.map((card) => {
        return <Card src={card.src} id={card.id} key={card.id} />
      })}
      <div className='drag__container'>
        <div className='drag__card'>
          <h1 className='card__header'>Very important to me</h1>
          <div className='card__drag-area' ref={drop}></div>
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
