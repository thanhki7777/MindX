import{useState,useEffect} from'react'

function Register() {
    const[fullname,setFullname] = useState('')
    const[username,setUsername] = useState('')
    const[password,setPassword] = useState('')
    const[passwordConfirm,setPasswordConfirm] = useState('')
    const[errorMessage,setErrorMessage] = useState({
        fullname:'',
        username:'',
        password:'',
        passwordConfirm:'',
    })
    useEffect(() => {
        if(password != passwordConfirm){
            setPasswordConfirm('Both passwords are not similar')
        }
    },[password])

    const onchangeInput = (nameInput,value) => {
      const errorMessage = {
        ...this.state.errorMessage,
      }
      const nameRegex = /^[a-zA-Z\-]+$/;
      const validFullname = nameRegex.test(fullname)
      if(validFullname === false){
        errorMessage['fullname'] = "Your fullname or username is not valid"
      }else{
        errorMessage['fullname'] = "" 
      }  
      const validUsername = nameRegex.test(username)
      if(validUsername === false){
        errorMessage['username'] = "Your username or username is not valid"
      }else{
        errorMessage['username'] = ""
      }
      if (nameInput === "confirm" && password !== value) {
        errorMessage['confirm'] = "Password is not the same";
      } else {
        errorMessage['confirm'] = "";
      }
      // this.setState({
      //   ...this.state,
      //   [nameInput]: value,
      //   errorMessage: errorMessage,
      // })
      console.log(value);
    }
    const handleSubmitForm = (e) => {
        e.preventDefault();
        const newUser = {
          fullname,
          username,
          password,
        };
        fetch("https://635d31a4cb6cf98e56af2c5e.mockapi.io/User", {
          method: "POST",
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((res) => {
          } );
      };
      return(
        <div>
            <form className='infoform' onSubmit={handleSubmitForm}>
      <div>
        <label>Fullname:</label>
        <input type='text' name='fullname' onChange={(e) =>{this.onchangeInput("fullname",e.target.value)}}/>
        <p>{errorMessage.fullname}</p></div>
     <div>
       <label>Username</label>
       <input type='text' name='username' onChange={(e) =>{this.onchangeInput("username",e.target.value)}}/>
       <p>{errorMessage.username}</p></div>
      <div>
        <label>password:</label>
        <input type='text' name='password' onChange={(e) =>{this.onchangeInput("password",e.target.value)}}/></div>
      <div>
        <label>Confirm password:</label>
        <input type='text' name='passwordConfirm' onChange={(e) =>{this.onchangeInput("confirm",e.target.value)}}/>
        </div>
      <div>
        <input type='submit'/></div>
             </form>
        </div>
      )
}

export default Register