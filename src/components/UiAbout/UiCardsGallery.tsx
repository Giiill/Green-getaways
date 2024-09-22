"use client"
import Style from "@/styles/cardsGallery.module.scss";
import Image from 'next/image'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';


// import required modules
import { EffectCube, Autoplay } from 'swiper/modules';

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
]

const UiCardsGallery = () => {
    return (
        <div className={Style.wrapper}>
            <>
                <Swiper
                    effect={'cube'}
                    speed={3500}
                    grabCursor={true}
                    allowTouchMove={true}
                    loop={true}
                    slidesPerView={4}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        
                    }}
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 50,
                        shadowScale: 1,
                    }}
                    modules={[EffectCube, Autoplay]}
                    className={Style.swiper}
                >
                    {galleryCards.map((item) => {
                        return (
                            <SwiperSlide className={Style.swiperSlide}>
                                <Image
                                priority={true}
                                src={item.img}
                                width={870}
                                height={468}
                                alt=""
                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </>
        </div>
    )
}

export { UiCardsGallery };
