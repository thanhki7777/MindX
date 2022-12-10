import { useEffect } from "react";
import styles from "./styles.module.css";

function Completed() {
    const storageDeatail = JSON.parse(localStorage.getItem('detail'));
    const details = storageDeatail ?? [];

    const deleteDetail = (id) =>{
        console.log(id);
    }
  return (
    <div className={styles.body}>
      <div className={styles.box}>
        <ul>
            {details.map((detail, index) =>(
                <li className={styles.list} key={index}><input className={styles.checkbox} type='checkbox' ></input>{detail}<button className={styles.delete} onClick={deleteDetail(index)}>Xóa</button></li>
            ))}
        </ul>
      </div>
      <div>
      <button className={styles.clear}>Clear All</button>
      </div>
    </div>
     );
}

export default Completed;