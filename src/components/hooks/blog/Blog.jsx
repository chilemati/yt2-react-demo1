import React, { useState } from 'react'
import { blogData } from './blogData'
import { useNavigate } from 'react-router-dom';
import Swiper from '../../swiper/Swiper';
import PaginatedItems from '../../pagination/Pagination';
import Render from '../../pagination/Render';

const Blog = () => {
    let [blog,setBlog] = useState(blogData);
    let redir = useNavigate();
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <div className='flex items-center justify-center flex-col gap-4 ' >
        <h2>Lastest Blogs</h2>
        <div className="">
            {
              blog.map(each=> (
                <div onClick={()=> redir('/blog/'+each.id) } className='shadow mb-3 hover:bg-orange-200 hover:text-blue-500 rounded w-[50vw] py-2 px-4 ' key={each.id} >
                    <h5> {each.title} </h5>
                    <p className='text-[8px]' > Author: {each.author} </p>
                     </div>
              ))
            }
        </div>
        <Swiper />
        <PaginatedItems itemsPerPage={4} items={blog} />
    </div>
  )
}

export default Blog