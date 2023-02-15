import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import postsApi from '../services/postsApi';

const PostSingle = () => {

    const [post, setPost] = useState([])
    const [user, setUser] = useState([])
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(false)
    
    const {id} = useParams()
    
    const fetchPost = async () => {
        const post = await postsApi.findOnePost(id)
        setPost(post)
        const user = await postsApi.user(post.userId)
        setUser(user)
        const data = await postsApi.comments(post.id)
        setComments(data)
        setLoading(true)
    }

    useEffect(() => {
        fetchPost()
    }, [])
    
    return ( 
        <div className="container">
            <div className="mb-4">
                
                {loading ? (<p>{user.name} <em>({user.email})</em></p>) : <Loading />}
            </div>
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container py-5">
                    <h1 className="display-5 fw-bold">{post.title}</h1>
                    <p className="col-md-8 fs-4">{post.body}</p>
                </div>
            </div>
            <div className="list-group w-auto mb-5">
                {
                    comments.map(comment => {
                        return(
                        <div key={comment.id} className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                            <div className="d-flex gap-2 w-100 justify-content-between">
                            <div>
                                <h6 className="mb-0">{comment.email}</h6>
                                <p className="mb-0 opacity-75">{comment.body}</p>
                            </div>
                            <small className="opacity-50 text-nowrap">now</small>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
     );
}
 
export default PostSingle;