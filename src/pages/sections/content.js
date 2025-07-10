import form from '@styles/modules/content.module.scss';
import bg from '@styles/modules/content.module.scss'

export function Content() {
    return (
        <section className={form.formContainer}>
                <p className={bg.mainTitle}>SENNA<br/>MIST STACKS<br/>CALCULATOR</p>
                <p className={bg.footer}>Splash art © Riot Games. This is a fan project not affiliated with Riot Games.</p>
        </section>
    )
}