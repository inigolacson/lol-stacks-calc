import bg from '@styles/modules/bg.module.scss'
import def from '@styles/modules/home.module.scss'

export function MainBackground() {
    return(
        <section className={bg.photoContainer}>
            <div className={bg.backgroundPicture}></div>
            <div className={bg.backgroundOverlay}></div>
        </section>
    )
} 