import styles from "./Header.module.css";

import { ReactComponent as LogoSVG } from "../../Media/img/logo.svg";
import { ReactComponent as PerfilSVG } from "../../Media/img/perfil.svg";
import Browser from "./Browser";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <LogoSVG className={styles.logo} />
        <a className={styles.title} href="/">
          Metas App
        </a>
      </div>
      <nav>
        <Browser
            to="/perfil" 
            Icono={PerfilSVG} />
      </nav>
    </header>
  );
}
