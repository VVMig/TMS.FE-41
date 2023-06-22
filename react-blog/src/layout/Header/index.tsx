import { NavPanel } from "../NavPanel";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <NavPanel />
      </div>
      <div>
        <form>
          <input className={styles.search} type="text" placeholder="Serch..." />
        </form>
      </div>
    </header>
  );
};
