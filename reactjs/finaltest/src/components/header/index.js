import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div  className={styles.body}>
      <div>
        <h1>#todo</h1>
      </div>
      <div>
        <ul className={styles.title}>
          <li>
            <Link className={styles.link} to="/all">All</Link>
          </li>
          <li>
            <Link className={styles.link} to="/active">Active</Link>
          </li>
          <li>
            <Link className={styles.link} to="/completed">Completed</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;