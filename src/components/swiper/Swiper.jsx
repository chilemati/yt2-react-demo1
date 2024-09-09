// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';

// export default () => {
//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={1}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//       className='w-full  border-2 border-red-600 flex flex-col items-center justify-center '
//     >
//       <SwiperSlide className='bg-black text-white text-center' >Slide 1</SwiperSlide>
//       <SwiperSlide className='bg-black text-white text-center' >Slide 2</SwiperSlide>
//       <SwiperSlide className='bg-black text-white text-center' >Slide 3</SwiperSlide>
//       <SwiperSlide className='bg-black text-white text-center' >Slide 4</SwiperSlide>
//       ...
//     </Swiper>
//   );
// };

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay,EffectFade,]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      autoplay={{clickable:true}}
      effect='cube'
      className='w-full px-10 flex flex-col items-center justify-center gap-10 '

      style={{
  "--swiper-pagination-color": "#FFBA08",
  "--swiper-pagination-bullet-inactive-color": "#999999",
  "--swiper-pagination-bullet-inactive-opacity": "1",
  "--swiper-pagination-bullet-size": "16px",
  "--swiper-pagination-bullet-horizontal-gap": "6px"
}}
    >
      <SwiperSlide className='bg-black text-white mb-4 text-center min-h-[20vh]' >Slide 1</SwiperSlide>
      <SwiperSlide className='bg-black text-white mb-4 text-center min-h-[20vh]' >Slide 2</SwiperSlide>
      <SwiperSlide className='bg-black text-white mb-4 text-center min-h-[20vh]' >Slide 3</SwiperSlide>
      <SwiperSlide className='bg-black text-white mb-4 text-center min-h-[20vh]' >Slide 4</SwiperSlide>
    </Swiper>
  );
};