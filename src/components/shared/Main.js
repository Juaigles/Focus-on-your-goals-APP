import Browser from "./Browser";
import { ReactComponent as ListaSVG } from "../../Media/img/lista.svg";
import { ReactComponent as NuevaSVG } from "../../Media/img/nueva.svg";
import styles from "./Main.module.css";
import stylesHeader from "./Header.module.css";

export default function Main({ children }) {
  return (
    <div className={styles.app}>
      <aside className={styles.aside}>
        <Browser href={"/list"} text="Lista de Metas"
          Icono={ListaSVG} />
        
        <Browser href={"/create"} text="Nueva Meta"
          Icono={NuevaSVG} />
    
      </aside>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
