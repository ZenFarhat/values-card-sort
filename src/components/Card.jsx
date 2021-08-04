import React from 'react'
import { useDrag } from 'react-dnd'

function Card({ src, id }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'image',
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))
  return (
    <img
      ref={drag}
      src={src}
      id={id}
      alt='drag-card'
      width='250px'
      className='card'
    />
  )
}

export default Card
