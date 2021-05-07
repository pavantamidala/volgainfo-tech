import React,{useState,useEffect} from 'react'
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import '../styles/singlePost.css'
function SinglePost() {
    let [loading, setLoading] = useState(true)
    const [singlePost,setSinglePost] = useState({})
    
    let param = useParams()
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/"+param.id).then((res)=>{
        setSinglePost(res.data)
        setLoading(false)
        // console.log(res)
        })
    },[param.id])
    return (
        <div className="single">
            <h1>Post Details</h1>
        {loading?<h1>Loading...</h1>:<div className="single-post">
          <h4 className="title"> {singlePost.title} </h4>
                <span className="body"> {singlePost.body} </span>
        </div>}
        </div>
    )
}
// {
//     "userId": 1,
//         "id": 1,
//             "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//                 "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// }
export default SinglePost
