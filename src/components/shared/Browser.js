import styles from './Browser.module.css';

export default function Browser({Icono,text,href}){
    return (
        <>
               <a href={href} className={styles.link}>
                    <Icono className={styles.icono}/>
                    {text && <span className={styles.text}>{text}</span>}
                </a>
        </>
    )
}