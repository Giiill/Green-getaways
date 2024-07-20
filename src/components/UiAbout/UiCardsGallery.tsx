import Style from "@/styles/cardsGallery.module.scss";

const galleryCards = [
    {
        img: "../../images/cardsGallery/1.jpeg",
    },
    {
        img: "../../images/cardsGallery/2.jpeg",
    },
    {
        img: "../../images/cardsGallery/3.jpeg",
    },
    {
        img: "../../images/cardsGallery/4.jpeg",
    },
    {
        img: "../../images/cardsGallery/5.jpeg",
    },
]

const UiCardsGallery = () => {
    return (
        <div className={Style.wrapper}>
   
            {galleryCards.map((item) => {
                return (
                    <div className={Style.cardsGallery}>
                        <img src={item.img} alt="" />
                    </div>
                )
            })}
           
         </div>

    )
}

export { UiCardsGallery };