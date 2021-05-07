import React,{useEffect} from 'react'
import axios from 'axios'
import {useHistory}  from 'react-router-dom'
import "../styles/users.css"
import { useState } from 'react'
function Users(props) {
let [loading,setLoading] = useState(true)
    let history = useHistory()
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>
        {
        props.setUsers(res.data)
        setLoading(false)
        })
    },[])
    function clickHandle(e,id){
        history.push(`/${id}`)
    }

    return (
        <React.Fragment>

        <h1> Users </h1>
            {loading ?<h1>Loading...</h1> : <div className="user-container">
                {
                    props.users.map((obj) => {
                        return <div className="user-card" onClick={(e) => { clickHandle(e, obj.id) }} key={obj.username}>
                            <h5>Name: </h5>  {obj.name} <br />
                            <h5>UserName:</h5> {obj.username}  <br />
                            <h5>Email:</h5> {obj.email} <br />
                            <h5> Phone:</h5> {obj.phone} <br />
                            <h5> Company Name: </h5>  {obj.company.name} <br />
                            <h5>Street:</h5>  {obj.address.street} <br />
                            <h5> City: </h5>  {obj.address.city} <br />
                            <h5> Website: </h5>  {obj.website} <br />
                            <button className="btn" onClick={(e) => clickHandle(e, obj.id)} >Posts</button>
                        </div>
                    })
                }
            </div>}

        </React.Fragment>
    )
}

// "id":1,
//       "name":"Leanne Graham",
//       "username":"Bret",
//       "email":"Sincere@april.biz",
//       "address":{
//          "street":"Kulas Light",
//          "suite":"Apt. 556",
//          "city":"Gwenborough",
//          "zipcode":"92998-3874",
//          "geo":{
//             "lat":"-37.3159",
//             "lng":"81.1496"
//          }
//       },
//       "phone":"1-770-736-8031 x56442",
//       "website":"hildegard.org",
//       "company":{
//          "name":"Romaguera-Crona",
//          "catchPhrase":"Multi-layered client-server neural-net",
//          "bs":"harness real-time e-markets"
//       }
export default Users
