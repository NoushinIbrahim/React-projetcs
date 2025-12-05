import React, {useEffect, useState} from 'react'
import { Container, Post, PostForm } from '../components'
import appwriteService from '../appwrite/config.js'
import { useNavigate, useParams } from 'react-router-dom'



function Editpost() {
    const [post, setposts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() =>{
        if (slug) {
            appwriteService.getPostbySlug(slug).then((post) => {
                if (post) {
                    setposts(post)
                }
         } )
          }  else {
                    navigate('/')
                }
            
        
    }, [slug, navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default Editpost