import React from 'react'
import { useParams } from 'react-router-dom'

const BlogInfo = () => {
    let {blog} = useParams()
  return (
    <div>
        <h2>Blog Info for: {blog} </h2>
    </div>
  )
}

export default BlogInfo