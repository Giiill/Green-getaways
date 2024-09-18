"use client"
import globalStyle from '@/styles/global.module.scss';
import Style from '@/styles/popularTour.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const galleryCards = [
    {
        img: "/images/cardsGallery/1.jpeg",
    },
    {
        img: "/images/cardsGallery/2.jpeg",
    },
    {
        img: "/images/cardsGallery/3.jpeg",
    },
    {
        img: "/images/cardsGallery/4.jpeg",
    },
    {
        img: "/images/cardsGallery/5.jpeg",
    },
]

const UiPopularTour = () => {
    return (
        <div className={Style.wrapper}>
            <div className={Style.title}>popular tour</div>
                    <Swiper  
                        loop={false}
                        
                        spaceBetween={30}
                        grabCursor={true}
                        pagination={{
                          clickable: true,
                        }}
                        slidesPerView={4}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            550 : {
                                slidesPerView: 2
                            },
                            800: {
                                slidesPerView: 3
                            },
                            1540: {
                                slidesPerView: 4
                            }    
                        }}
                        modules={[Pagination]}
                        className={Style.sliderCards}
                    >
                        {galleryCards.map((item) => {
                            return (
                                <SwiperSlide className={Style.card}>
                                    <Image
                                        priority={true}
                                        src={item.img}
                                        width={870}
                                        height={468}
                                        alt=""
                                        className={Style.img}
                                    />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>              
            </div>
    )
}

export { UiPopularTour };