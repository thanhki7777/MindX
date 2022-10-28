import {useState} from 'react'
import React from 'react'
// function Counter() {
//     const [counter,setCounter] = useState(0)
//     const handleClick = () => {
//                 setCounter(counter + 1)
//             }
//    return (
//     <div className=''>
//           <h1>{counter}</h1>
//           <button onClick={handleClick}>Increase</button>
//     </div>
//    )
// }
export default Counter
class Counter extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      counter : 1
    }
    this.clickCounter = this.clickCounter.bind(this)
  }
  clickCounter() {
    this.setState({
      ...this.state,
      counter:this.state.counter + 1,
    })
  }
  componentWillReceiveProps() {
    console.log('Receive props');
  }
  componentWillUnmount() {
    console.log('will mount');
  }
  componentDidMount(){
    console.log('Mounted');useState
  }
  render(){
    console.log('render');
    return <div><div>Counter :{this.state.counter}</div>
    <button onClick={() => {
      this.setState({
        ...this.state,
      counter:this.state.counter + 1,
      })
    }}>Click me</button></div>
  }
}
