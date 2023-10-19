import { useEffect, useState } from "react";
import './Home.css';
import { Link } from 'react-router-dom';
import blogAxios from "../../Hooks/Axios/Axios-config";

const Home = () => {
    
    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        try {
            const response = await blogAxios.get('/posts')
            const data = response.data
            console.log(data)
            setPosts(data)

        } catch (error) {
            
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div className="home">
            <h1>Últimos Posts</h1>

            {posts.length === 0 ? (
                <p>Carregando...</p>
            ) :(
                posts.map((post) => 
                <div className="post" key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <Link to={`/posts/${post.id}`} className="btn">Saiba Mais</Link>
                </div>
                )
            )}
            
        </div>
    );
}
 
export default Home;