import {useState} from 'react'

function Card() {
    const [click,setClick] = useState(true)
    return (
        <div className='button'>
           <button onClick={() => setClick(!setclick)}>{}</button>
        </div>
    )
}