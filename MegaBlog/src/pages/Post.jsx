import React, {useState, useEffect} from 'react'
import { Container, Button } from '../components'
import appwriteService from '../appwrite/config.js'
import { useParams, useNavigate, Link } from 'react-router-dom'
import parse from 'html-react-parser'
import { useSelector } from 'react-redux'

function Post() {
    const [post, setPost] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPostbySlug(slug).then((post) => {
                if (post) {
                    setPost(post)
                } else {
                    navigate('/')
                }
            });
        } else navigate('/')
    }, [slug, navigate])

    const deletePost  = () =>{
        appwriteService.deletePost(post.$id).then((status) =>{
            if (status) {
                appwriteService.deleteFile(post.covermage);
                navigate('/')
            }
        })
    }


  return post ? (
    <div className='py-8'>
        <Container>
            <div className='w-full flex justify-center mb-4 relative border rounded-xl py-2'>
                <img src= {appwriteService.getFilePreview
                    (post.featuredimage)
                } alt= {post.title}
                className='rounded-xl' />

                {isAuthor && (
                    <div className='absolute top-2 right-2 flex space-x-2'>
                        <Link to={`/editpost/${post.$id}`}>
                            <Button 
                            className='bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded'
                            >Edit</Button>
                        </Link>
                        <Button bgColor = 'bg-red-500'
                        onClick={deletePost}>
                            Delete
                        </Button>
                    </div>
                )}
                <div className='w-full mb-6'>
                    <h1 className='text-2xl font-bold'>
                        {post.title}
                    </h1>
                </div>
                <div className='browser-css'>{parse(post.content)}</div>
            </div>
        </Container>
    </div>
  ) : null
}

export default Post