import React,{useState,useEffect} from 'react'

const Home =() =>{
    const[data,setData] = useState([])
    useEffect(()=>{
     fetch('/allpost',{
      headers:{
          "Authorization":"Bearer "+localStorage.getItem("jwt")
      } 
    }).then(res=>res.json())
    .then(result=>{
        // setData(result.posts)
    })
    },[])
    const likePost= (id)=>{
      fetch('/like',{
        method:"put",
        headers:{
          "content-Type":"application/json",
          "Authorization":"Bearer"+localStorage.getItem("jwt")
        },
        body:JSON.stringify({
          PostId:id
        })
      }).then(res=>res.json())
      .then(result=>{
        console.log(result)
      })
    }
    const unlikePost= (id)=>{
      fetch('/like',{
        method:"put",
        headers:{
          "content-Type":"application/json",
          "Authorization":"Bearer"+localStorage.getItem("jwt")
        },
        body:JSON.stringify({
          PostId:id
        })
      }).then(res=>res.json())
      .then(result=>{
        console.log(result)
      })
    }
    return(
        <div className="home">
          {
            data.map(item=>{
              return(
                <div className="card home-card">
                  <h5>{item.postedBy.name}</h5>
                  <div className="card-image">
                      <img src={item.photo}></img>
                  </div>
                  <div className="card-content">
                  <i className="material-icons" style={{color:"red"}}>favorite</i>
                  <i class="material-icons">thumb_up</i>
                  <i class="material-icons">thumb_down</i>
                    <h6>{item.likes.length}likes</h6>
                    <h6>{item.title}</h6>
                    <p>{item.body}</p>
                    <input type="text" placeholder="add a comment"/>
                  </div>
                </div>   
              )
            })     
          }
        </div>
    )
}
export default Home