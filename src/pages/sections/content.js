import form from '@styles/modules/content.module.scss';
import bg from '@styles/modules/content.module.scss'

export function Content() {
    return (
        <section className={form.contentContainer}>
                <div className={form.formContainer}>
                <p style={{ color: 'black' }}>Test Content</p>
                </div>
                <p className={bg.mainTitle}>SENNA<br/>MIST STACKS<br/>CALCULATOR</p>
        </section>
    )
}