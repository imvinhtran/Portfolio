import React from 'react'
import './testimonial.css'
import Customer1 from '../../assets/photos/avatar1.jpg'
import Customer2 from '../../assets/photos/avatar2.jpg'
import Customer3 from '../../assets/photos/avatar3.jpg'
import Customer4 from '../../assets/photos/avatar4.jpg'

/* ============== Slider by Swiperjs =========*/
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";



const dataReviewers = [
  {
    id: 1,
    avatar: Customer1,
    name: 'Tina Snow',
    comment: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
  },
  {
    id: 2,
    avatar: Customer2,
    name: 'Tina Snow',
    comment: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
  },
  {
    id: 3,
    avatar: Customer3,
    name: 'Tina Snow',
    comment: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
  },
  {
    id: 4,
    avatar: Customer4,
    name: 'Mina Young',
    comment: 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione'
  }
]

const Testimonial = () => {
  return (
    <section id='container testimonial'>
    <h5>Review from clients</h5>
    <h2>Testimonial</h2>
    <Swiper
        spaceBetween={20}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
    {
      dataReviewers.map(({id, avatar, name, comment}) => {
        return (
    <SwiperSlide key={id} className='testimonial__content'>
      <img src={avatar} alt="" />
      <h3>{name}</h3>
      <p>{comment}</p>
    </SwiperSlide>
        )
      })
    }
    </Swiper>
    </section>
  )
}

export default Testimonial