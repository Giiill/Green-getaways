import globalStyle from '@/styles/global.module.scss';
import Style from '@/styles/main.module.scss';


const UiMain = () => {
    return (
        <div className={Style.bg}>
            <div className={[globalStyle.wrapper, Style.wrapper].join(" ")}>
                <div className={Style.mainTitle}>
                    <h1>Green<br />Getaways</h1>
                </div>
            </div>
        </div>
    )
}

export { UiMain }