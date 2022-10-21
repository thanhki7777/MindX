import './style.css'
function List(props) {
    return(
        <div className='card'>
          <div className='card-left'>
            <div className='image'><img src={props.img} alt=''></img></div>
        </div>
          <div className='card-right'>
            <h4>{props.title}</h4>
            <p>{props.artists}</p>
            <p>{props.remaintime}</p>
        </div>

    </div>
    
    )
}
export default List