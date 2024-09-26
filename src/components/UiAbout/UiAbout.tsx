import globalStyle from '@/styles/global.module.scss';
import Style from '../../styles/about.module.scss'
import { UiCardsGallery } from './UiCardsGallery';
import Image from 'next/image';

const UiAbout = () => {
    return (
        <div className={[globalStyle.wrapper, Style.wrapper].join(' ')}>
            <div className={Style.backImage}>
                <Image
                    priority={true}
                    src="/images/about/bgSection.jpg"
                    width={1393}
                    height={720}
                    alt=""
                    className={Style.backImg}
                />
                <div className={Style.shadow}></div>
            </div>
            <div className={Style.upBlock}>
                <h3 className={Style.h3}>Explore Australia</h3>
                <p className={Style.text}>At Green Getaways, we take pride in our partnership with local communities in Australia who share our vision for sustainable tourism. We work hand in hand with these communities, supporting their efforts to preserve nature and promote eco-friendly practices that help reduce the ecological footprint in the regions we visit.</p>
            </div>
            <div className={Style.bottomBlock} >
                <UiCardsGallery />
            </div>
        </div>
    )
};

export { UiAbout }