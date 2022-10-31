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
        <input type='text' name='fullname' onChange={(e) =>{setFullname(e.target.value)}}/>
        {fullname.length>6?setErrorMessage('The character length must be longer than words'):<></>}</div>
     <div>
       <label>Username</label>
       <input type='text' name='username' onChange={(e) =>{setUsername(e.target.value)}}/></div>
      <div>
        <label>password:</label>
        <input type='text' name='password' onChange={(e) =>{setPassword(e.target.value)}}/></div>
      <div>
        <label>Confirm password:</label>
        <input type='text' name='passwordConfirm' onChange={(e) =>{setPasswordConfirm(e.target.value)}}/>
        </div>
      <div>
        <input type='submit'/></div>
             </form>
        </div>
      )
}

export default Register