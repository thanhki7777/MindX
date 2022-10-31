import logo from './logo.svg';
import './App.css';
import React from 'react';
import Register from './components/Register'
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Register/>
    </div>
  );
}

export default App;

// class RegisterPage extends React.Component{
//   constructor(props){
//     super(props)
//     this.state={
//       fullname:'',
//       username:'',
//       password:'',
//       passwordConfirm:'',
//       errorMessage:{
//         fullname:'',
//         username:'',
//         password:'',
//         passwordConfirm:'',
//       }

//     }
//   }
//    onChangeInput = (nameInput,value) => {
//     this.setState({
//       ...this.state,
//       [nameInput]:value
//     })
//     handleSubmitForm = (e) => {
//       e.preventDefault();
//       if(this.state.password != this.state.passwordConfirm && nameInput == 'password'){
//         this.setState({
//           ...this.state,
//           errorMessage:{
//             ...this.errorMessage,
//             passwordConfirm:'Password deo giong nhau',
//           }
//         })
//       }
//     }
//   }
//   render(){
//     const {errorMessage} = this.state
//     return<form className='infoform' onSubmit={handleSubmitForm}>
//       <div>
//         <label>Fullname:</label>
//         <input type='text' name='fullname' onChange={(e) =>{onChangeInput("fullname",e.target.value)}}/></div>
//      <div>
//        <label>Username</label>
//        <input type='text' name='username' onChange={(e) =>{onChangeInput("username",e.target.value)}}/></div>
//       <div>
//         <label>password:</label>
//         <input type='text' name='password' onChange={(e) =>{onChangeInput("password",e.target.value)}}/></div>
//       <div>
//         <label>Confirm password:</label>
//         <input type='text' name='passwordConfirm' onChange={(e) =>{onChangeInput("passwordConfirm",e.target.value)}}/></div>
//       <div>
//         <input type='submit'/></div>
//     </form>
//   }
// }
