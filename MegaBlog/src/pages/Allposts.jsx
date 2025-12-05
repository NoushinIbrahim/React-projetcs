import React, { useEffect, useState } from 'react'
import apowriteService from '../appwrite/config.js'
import { Post } from '../components/index.js'

function Allposts() {
    const [posts, setposts] = useState([])
    useEffect(() =>{}, [])

    apowriteService.getPosts([]).then((posts)=> 
    {
       if (posts) {
        setposts(posts.documents)
       }    
      
      })

  return (
    <div className="w-full py-8">
      <Container>
        <div className='flex flex-wrap'>
          {posts.map((post) => (
            <div key={post.$id} className='p-2 w-1/4'>
              <Post post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Allposts