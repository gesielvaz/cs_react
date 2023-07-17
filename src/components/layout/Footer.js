import styles from './Footer.module.css';
import{FaFacebook,FaInstagram, FaLinkedinIn} from 'react-icons/fa'


export function Footer() {
    return (
        <footer>
            <ul className={styles.socialList}>
                <li>
                    <FaFacebook/>
                </li>
                <li>
                    <FaInstagram/>
                </li>
                <li>
                    <FaLinkedinIn/>
                </li>
            </ul>
            <p>Rodapé</p>
        </footer>
    )
}