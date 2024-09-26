"use client"
import Style from '@/styles/popularTour.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const galleryCards = [
    {
        key: 0,
        img: "/images/cardsGallery/1.jpeg",
    },
    {
        key: 1,
        img: "/images/cardsGallery/2.jpeg",
    },
    {
        key: 2,
        img: "/images/cardsGallery/3.jpeg",
    },
    {
        key: 3,
        img: "/images/cardsGallery/4.jpeg",
    },
    {
        key: 4,
        img: "/images/cardsGallery/5.jpeg",
    },
]

const UiPopularTour = () => {

    return (
        <div className={Style.wrapper}>
            <div className={Style.backImage}>
                <Image
                    priority={true}
                    src="/images/popularTour/bgSection.jpg"
                    width={1393}
                    height={720}
                    alt=""
                    className={Style.backImg}

                />
                <div className={Style.shadow}></div>
            </div>
            <div className={Style.title}>popular tour</div>
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                grabCursor={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                slidesPerView={4}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    550: {
                        slidesPerView: 2
                    },
                    800: {
                        slidesPerView: 3
                    },
                    1540: {
                        slidesPerView: 4
                    }
                }}
                className={Style.sliderCards}
            >
                {galleryCards.map((item) => {
                    return (
                        <SwiperSlide key={item.key} className={Style.card}>
                            <div className={Style.image}>
                                <Image
                                    priority={true}
                                    src={item.img}
                                    width={870}
                                    height={468}
                                    alt=""
                                    className={Style.img}
                                />
                                <div className={Style.blockName}>
                                    <div>
                                        <div className={Style.destinationName}>
                                            destination-name
                                        </div>
                                        <span>Plan trip</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div >
    )
}

export { UiPopularTour };