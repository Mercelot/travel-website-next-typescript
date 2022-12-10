import styles from '../styles/Icon.module.scss'
import Link from "next/link";
import {GenericComponentProps} from "./type";

interface IconProps extends Omit<GenericComponentProps, 'variant' | 'content'> {
    onclick?: () => void
}

export default function Icon({onclick}: IconProps) {
    return (
        <Link href='/' className={styles.navbar_logo} onClick={onclick}>
            <span className={styles.page_Name}>ESCP</span><i className="fa-solid fa-earth-americas"></i>
        </Link>
    )
}