import React,{useState,useEffect} from 'react'
import { useParams ,useHistory} from 'react-router-dom';
import axios from 'axios';
import "../styles/multiplePosts.css"
function MultiplePosts() {
    let [loading, setLoading] = useState(true)
    const [posts,setPosts] =useState([]) 
    let history = useHistory()
    let param = useParams()
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts?userId="+param.id).then((res)=>{
           setPosts(res.data)
           setLoading(false)
        },[setPosts])
    },[param.id])
    function clickHandle(e,id){
        history.push(`/posts/${id}`)
    }
    
    return (
        <React.Fragment>
        <h1  className="posts"> Posts </h1>
            {loading ? <h1>Loading...</h1> : <div className="posts-container">
                {
                    posts.map((obj) => {
                        return <div className="post-card" key={obj.id} onClick={(e) => { clickHandle(e, obj.id) }}>
                            <h4> {obj.title} </h4>
                            <p> {obj.body} </p> <br />
                        </div>
                    })
                }
            </div>}
        
        </React.Fragment>
    )
}
// "UserId": 2,
//     "Id": 11,
//         "Title": "And it is because they gave"
// "Body", "selected for rejecting annoying blind does not happen that small pleasure \ naccusamus for him to be happy, \ river or pleasures that are beneficial to the incident \ nut of convenience"

export default MultiplePosts
