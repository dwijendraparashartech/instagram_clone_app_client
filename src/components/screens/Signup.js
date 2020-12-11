import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'


const Signup =() =>{
    const history= useHistory("")
    const [name,setName]= useState("")
    const [password,setPassword]= useState("")
    const [email,setEmail]= useState("")
    const PostData = ()=>{
        // if(!(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]).test(email)){
        //     M.toast({html:"invalid Email",classes:"#c62828 red darken-3"})
        // }
        fetch("signup",{    
        method:"Post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
           name,
           password,
           email
        })
        }).then(res=>res.json())        
        .then(data=>{
            if(data.error){
                M.toast({html:data.error,classes:"#c62828 red darken-3"})
            }
            else{
                M.toast({html:data.message,classes:"#43a047 green darken-1"})
                history.push('/signin')
            }
        }).catch(err=>{
            console.log(err)
        })
    }

    return(
        <div className="mycard">    
            <div className="card auth-card input-field ">
              <h2>Instagram</h2>
              <input type ="text" 
              placeholder="name"
              value={name}
              onChange={(e)=>setName(e.target.value)} 
              />
              <input type ="text" 
              placeholder="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)} 
              />
              <input type ="text" 
              placeholder="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)} 
              />              
              <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
                  onClick={()=>PostData()}               
                  >
                  Signup
                </button>
                <h5>
                    <Link to="/signin">Already have an account?</Link>
                </h5>
            </div>  
        </div>  
    )
}
export default Signup