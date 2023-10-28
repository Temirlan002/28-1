import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const SwiperComponent = ({ swiperImage }) => {
    

    console.log(swiperImage)
  return (
    <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={3}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          autoplay
    >
          {swiperImage.map(item => 
              <SwiperSlide >
                  <img style={{ height: '300px', width: '400px'}} src={item.url} alt='sfddsfdsfsdfs' />
              </SwiperSlide>
        )}
    </Swiper>
  );
};