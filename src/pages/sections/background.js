import bg from '@styles/modules/bg.module.scss';

export function MainBackground() {
    return(
        <section className={bg.photoContainer}>
            <div className={bg.backgroundPicture}/>
            <div className={bg.backgroundOverlay}/>
            <p className={bg.footer}>Splash art © Riot Games. This is a fan project not affiliated with Riot Games.</p>     
        </section>
    )
} 