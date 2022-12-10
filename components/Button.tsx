import styles from '../styles/Button.module.scss'
import { GenericComponentProps } from './type'
import Link from 'next/link'

type AllowedStyles = 'btn--primary' | 'btn--outline';
type AllowedSizes = 'btn--medium' | 'btn--large';

interface ButtonProps extends Omit<GenericComponentProps, 'variant'> {
    style?: AllowedStyles[];
    size?: AllowedSizes[];
    onclick?: () => void;
}

export default function Button({style, size, content, onclick}: ButtonProps) {
    const classNames = style ? style.map((element) => styles[element]).join(' ') : undefined;
    const classSizes = size ? size.map((element) => styles[element]).join(' ') : undefined;

    return (
        <Link href='/sign-up' className='btn-mobile'>
            <button className={`${classSizes} ${classNames}`} onClick={onclick}>{content}</button>
        </Link>
    )
}