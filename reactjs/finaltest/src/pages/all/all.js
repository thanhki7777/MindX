import {useState} from 'react'
import styles from "./styles.module.css";


function All() {
    const storageDeatail = JSON.parse(localStorage.getItem('detail'));

    const [detail, setDetail] = useState('');
    const [details, setDetails] = useState(storageDeatail ?? []);

    const handleSubmit =() =>{
        setDetails(prev =>{
            const newDetail = [...prev, detail];
            const jsonDetail = JSON.stringify(newDetail);
            localStorage.setItem('detail',jsonDetail);
            return newDetail;
        });
        setDetail('');
    }

  return (
    <div className={styles.body}>
      <div>
        <input className={styles.input} type="text" placeholder='add detail' onChange={e =>setDetail(e.target.value)}></input>
        <button className={styles.button} onClick={handleSubmit}>Add</button>
      </div>
      <div className={styles.box}>
        <ul>
            {details.map((detail, index) =>(
                <li className={styles.list} key={index}><input className={styles.checkboxx} type='checkbox' ></input>{detail}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default All;