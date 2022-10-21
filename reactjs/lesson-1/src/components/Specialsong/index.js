import {special} from '../../data/store'
import './style.css'

function Specialsong() {
    return(
        <div className="special">
            <h1>Special Song</h1>
            {special.map((item) => {
                return(
                    <div className='item'>
                        <div className='imgs'>
                            <img src={item.img} alt = ''></img>
                        </div>
                        <div className='title'>
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Specialsong