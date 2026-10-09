
import React, { useEffect, useState } from 'react'

const Post = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))

  }, [])

  return (
    // <div>
    //   <h1>Posts</h1>

    //   {posts.map((post) => (
    //     <div key={post.id}>
    //       <h2>{post.title}</h2>
    //       <p>{post.body}</p>
    //     </div>
    //   ))}

    // </div>
     <div className="post-container">

    <h1>Posts</h1>

    <div className="post-grid">

      {posts.map((post) => (
        <div className="post-card" key={post.id}>

          <h2>{post.id}. {post.title}</h2>

          <p>{post.body}</p>

          <button>Read More</button>

        </div>
      ))}

    </div>

  </div>
    
 

  )
}

export default Post
  
