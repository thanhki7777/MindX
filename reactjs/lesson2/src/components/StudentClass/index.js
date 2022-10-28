import React, { useState } from "react";

// function Student() {
//     const [student,setStudent] = useState(name:'Dang Quang Thanh', age:22)
//     const handleClick = () => {
//         setStudent(...student,student.age + 1)
//     }
//     return(
//         <div className="div">
//           <h1>I'm {age} years old</h1>
//           <button onClick={handleClick}>Click</button>
//         </div>
//     )
// }
class Student extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            student:{
                age: 22
            }
        }
        this.handleClick = this.handleClick.bind(this)

    }
    handleClick() {
       this.setState({  
        
            ...this.state,
            student :{
                ...this.state.student,
                age:this.state.student.age + 1
            }
        
       })
    }
    render(){
        return(
            <div>
                <div>Age : {this.state.student.age}</div>
                <button onClick={() => {
                    this.setState({
                        // ...this.state,
                        student :{
                            ...this.state.student,
                            age:this.state.student.age + 1
                        }
                    })
                }}>Update</button>
            </div>
        )
    }
}

export default Student