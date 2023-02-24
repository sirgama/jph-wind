import React, { useEffect, useState } from 'react'
import PostCard from './components/PostCard'
import useAxios from '../../../../Hooks/useAxios'

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState([])
    const request = useAxios()


    async function getData(){
        try {
            let res = await request({
                method: "GET",
                url: "posts",
            })
            let ppl = await request({
                method: "GET",
                url: "users"
            })
            setPosts(res)
            setUsers(ppl)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])
    
    

  return (
    <div className="w-full ">
        <div className='md:flex md:flex-wrap gap-10 items-center justify-center justify-items-center '>
        {posts.map(item => (<PostCard key={item.id} id={item.userId} title={item.title} body={item.body} users={users} />))}
        </div>
    </div>
  )
}

export default Posts