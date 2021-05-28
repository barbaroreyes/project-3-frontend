import React,{useState,useContext} from 'react'
import {GlobalCtx} from '../App'
 const SignUp = (props) => {
    const {gState, setGState}= useContext(GlobalCtx)
   const {url} = gState
   const emptyUser = {
    username:'',
     password:''
   }

   const [form, setForm]= useState(emptyUser)

  const handleChange =(e) => {
  
  setForm({...form,[e.target.name]:e.target.value})
   }

   const handleSubmit = (event)=>{
    event.preventDefault()
  const {username, password} = form

   fetch(`${url}/auth/signup`,{
       method: 'POST',
       headers: { 'Content-Type':'application/json'},
       body : JSON.stringify({username,password})
   })
   .then(response => response.json())
   .then(data => {
       console.log(data)
       setForm(emptyUser)
       props.history.push('/login')
   })
   


   }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='username' value={form.username} onChange={handleChange}/>
                <input type="password" name='password' value={form.password} onChange={handleChange}/>
                <input type="submit" value="signup"/>
            </form>
        </div>
    )
}


export default SignUp