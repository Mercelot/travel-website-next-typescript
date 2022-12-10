import styles from '../styles/HeroSection.module.scss'
import {GenericComponentProps} from "./type";
import Button from "./Button";

interface HeroSectionProps extends Omit<GenericComponentProps, 'variant' | 'content'> {
    onclick?: () => void
}
export default function HeroSection({}: HeroSectionProps) {
    return (
        <div className={styles.hero_container}>
            <video className={styles.video} autoPlay loop muted src={'../public/videos/video-2.mp4'}/>
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className={styles.hero_btns}>
                <Button style={['btn--outline']} size={['btn--large']} content={'GET STARTED'}/>
            </div>
        </div>
    )
}