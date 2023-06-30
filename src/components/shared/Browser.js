import styles from "./Browser.module.css";
import { Link } from "react-router-dom";

export default function Browser({ Icono, text, to }) {
  return (
    <Link to={to} className={styles.link}>
      <Icono className={styles.icono} />
      {text && <span className={styles.text}>{text}</span>}
    </Link>
  );
}
