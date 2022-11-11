import{useState,useEffect} from'react'

function Register() {
    const[fullname,setFullname] = useState('')
    const[username,setUsername] = useState('')
    const[password,setPassword] = useState('')
    const[passwordConfirm,setPasswordConfirm] = useState('')
    const[errorMessage,setErrorMessage] = useState({
        fullnameM:'',
        usernameM:'',
        passwordM:'',
        passwordConfirmM:'',
    })

    const onchangeInput = (nameInput,value) => {
      const errorMessage = {
        ...this.state.errorMessage,
      }
      const nameRegex = /^[a-zA-Z\-]+$/;
      const validFullname = nameRegex.test(fullname)
      if(nameInput == 'username'){
        this.checkUsernameExist(value)
      }
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
    const checkUsernameExist = (valueInput) => {
      fetch(`https://635d3184cb6cf98e56af2894.mockapi.io/api/v1/users?username=${valueInput}`, {
        method: "GET"
      }).then((response) => response.json()).then((users) => {
        if (users.filter((user) =>
          user.username == valueInput
        ).length > 0) {
          this.setState({
            ...this.state,
            errorMessage: {
              ...this.state.errorMessage,
              usernameM: "Username da ton tai",
            },
          })
        } else {
          this.setState({
            ...this.state,
            errorMessage: {
              ...this.state.errorMessage,
              usernameM: "",
            },
          })
        }
      }).catch((error) => {
        console.log(error);
      });
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