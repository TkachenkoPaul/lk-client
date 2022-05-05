import { Carousel } from 'antd'
import React from 'react'
import { v4 as uuid } from 'uuid'

export const Slides = () => {
  let slides = [
    {
      img: 'https://api.lorem.space/image/furniture?w=1920&h=600&hash=8B7BCDC2',
    },
    {
      img: 'https://api.lorem.space/image/furniture?w=1920&h=600&hash=500B67FB',
    },
    {
      img: 'https://api.lorem.space/image/furniture?w=1920&h=600&hash=A89D0DE6',
    },
    {
      img: 'https://api.lorem.space/image/furniture?w=1920&h=600&hash=225E6693',
    },
  ]
  return (
    <Carousel autoplay effect="fade" dotPosition="bottom">
      {slides.map(slide => (
        <img key={uuid()} src={slide.img} alt="desc" />
      ))}
    </Carousel>
  )
}
