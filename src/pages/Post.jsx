import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import postsAPI from '../services/postsApi'

const Post = () => {
    const [posts, setPosts] = useState([])
    const [user, setUser] = useState([])
    const {id} = useParams();
    console.log(id);

    const fetchPost = async () => {
        const posts = await postsAPI.findPost(id)
        setPosts(posts)
        console.log(posts);
    }

    useEffect(() => {
        fetchPost()
    }, [])

    const fetchUser = async () => {
        const user = await postsAPI.user(posts.userId)
        setUser(user)
        console.log(user);
    }
    useEffect(() => {
        fetchUser()
    }, [])
    
    return (
        <>
            <div className="container mt-4">
                <Avatar/><span>{user.username}</span>
                <p>{user.name}</p>
                <em>{user.email}</em>
                <h1>{posts.title}</h1>
                <p>{posts.body}</p>
            </div>
        </>
    )
}
export default Post