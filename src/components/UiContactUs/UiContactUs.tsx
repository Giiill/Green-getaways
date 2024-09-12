import globalStyle from '@/styles/global.module.scss';
import Style from '@/styles/contactUs.module.scss';
import Image from 'next/image';

const UiContactUs = () => {
    return (
        <div className={[globalStyle.style, Style.wrapper].join(' ')}>
            <div className={Style.upBlock}>
                <div className={Style.title}><h1>Commitment to <br />the Environment</h1></div>
                <div className={Style.description}>We collaborate closely with Australian communities to promote tourist practices that respect the environment. From conserving natural spaces to fostering sustainable agriculture and embracing renewable energies, our commitment is to drive positive change in conjunction with these communities,  ensuring a beneficial and lasting impact on the region</div>
                <div className={Style.image}>
                    <Image
                        priority={true}
                        src="/images/contactUs/contactUsImage.jpg"
                        width={1257}
                        height={706}
                        className={Style.img}
                        alt=''              
                    />
                    <div className={Style.shadow}></div>
                </div>
            </div>
            <div className={Style.bottomBlock}>
                <div className={Style.title}> <h1>contact<br />us</h1></div>
                <form className={Style.form}>
                    <label>
                        <input type="text" name='name' placeholder='name' />
                    </label>
                    <label>
                        <input type="text" name='email' placeholder='e-mail' />
                    </label>
                    <label>
                        <input type="text" name='messanger' placeholder='messanger' />
                    </label>
                    <div>
                        <div className={Style.block}></div>
                        <input type="submit" className={Style.submit} value='send' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export { UiContactUs };