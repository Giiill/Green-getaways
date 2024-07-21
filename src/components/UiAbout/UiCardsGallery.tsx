import Style from "@/styles/cardsGallery.module.scss";
import Image from 'next/image'

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

const UiCardsGallery = () => {
    return (
        <div className={Style.wrapper}>
            {galleryCards.map((item) => {
                return (

                    <div className={Style.card}>
                        <Image
                             src={item.img}
                             width={324}
                             height={524}
                             alt=""
                           />
                    </div>
                )
            })}
        </div>
    )
}

export { UiCardsGallery };