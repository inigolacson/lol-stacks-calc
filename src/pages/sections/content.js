import form from '@styles/modules/content.module.scss';
import bg from '@styles/modules/content.module.scss'
import { SennaCalculator } from '../components/form';

export function Content() {
    return (
        <section className={form.contentContainer}>
                <div className={form.formContainer}>
                <SennaCalculator/>
                </div>
                <p className={bg.mainTitle}>SENNA<br/>MIST STACKS<br/>CALCULATOR</p>
        </section>
    )
}