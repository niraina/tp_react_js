import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Loading from '../components/Loading'
import postsApi from '../services/postsApi'

const Home = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [query, setQuery] = useState("")

    const fetchPosts = async () => {
        const data = await postsApi.findAll()
        setPosts(data)
        setLoading(true)
    }
    useEffect(() => {
        fetchPosts()
    }, [])
    return (
        <>
            <div className="container">
                <input 
                    className='form-control mb-4' 
                    placeholder='Rechercher...' 
                    type="search"
                    onChange={(e) => setQuery(e.target.value)} />
                <div className="row">
                    {
                        loading ? posts.filter((post) =>
                            post.title.toLowerCase().includes(query) ||
                            post.body.toLowerCase().includes(query)
                        ).map(post => {
                            return (
                                <Card 
                                    key = {post.id}
                                    title = {post.title}
                                    body = {post.body}
                                    link = {"/posts/"+post.id}
                                />
                            )
                        }) : <Loading />
                    }
                </div>
            </div>
        </>
    )
}
export default Home