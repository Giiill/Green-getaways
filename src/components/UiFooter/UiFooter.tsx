import globalStyle from '@/styles/global.module.scss';
import Style from '@/styles/footer.module.scss';
import Image from 'next/image';

const socialNetworksSVG = [
    {
        name: 'instagram',
        img: '/images/footer/instagramSVG.svg'
    },
    {
        name: 'facebook',
        img: '/images/footer/facebookSVG.svg'
    },
    {
        name: 'twiter',
        img: '/images/footer/twiterSVG.svg'
    }
];

const UiFooter = () => {
    return (
        <div className={[globalStyle.style, Style.wrapper].join(' ')}>
            <div className={Style.title}>green getaways</div>
            <div className={Style.socialNetworks}>
                {socialNetworksSVG.map((item) => {
                    return (
                        <button>
                            <Image
                                priority={true}
                                src={item.img}
                                alt=''
                                width={29}
                                height={32}
                            />
                        </button>
                    )
                })}
            </div>
            <nav className={Style.nav}>
                <button>HOME</button>
                <button>ABOUT</button>
                <button>TOURS</button>
                <button>CONTACT</button>
            </nav>
        </div>
    )

};

export { UiFooter };