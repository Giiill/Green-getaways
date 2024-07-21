import globalStyle from '@/styles/global.module.scss';
import Style from '@/styles/whyUs.module.scss';
import Image from 'next/image'

const UiWhyUs = () => {
    return (
        <div className={[globalStyle.wrapper, Style.wrapper].join(' ')}>
            <div className={Style.backImage}>
                <Image
                    src="/images/whyUs/whyUsImage.jpeg"
                    width={836}
                    height={698}
                    alt=""
                />
            </div>
            <div className={Style.image}>
                <Image
                    priority={true}
                    src="/images/whyUs/whyUsImage.jpeg"
                    style={{
                        width: '100%',
                        height: '498px',
                      }}
                    width={436}
                    height={498}
                    alt=""
                />
            </div>
            <div className={Style.content}>
                <h1 className={Style.title}>why us?</h1>
                <div className={Style.description}>
                    Discover how our travel experiences in Australia not only connect you with astounding nature but also with local communities committed to sustainability. Our programs are crafted in collaboration with these communities, offering you an authentic cultural immersion while supporting their initiatives to protect the environment.
                </div>
                <button className={Style.button}>view all tours</button>
            </div>
        </div>
    )
}

export { UiWhyUs };