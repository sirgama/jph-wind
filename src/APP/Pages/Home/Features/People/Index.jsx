import React, { useEffect, useState } from 'react'
import PeopleCard from './components/PeopleCard'
import useAxios from '../../../../Hooks/useAxios'

const People = () => {
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
        {users.map(item => (<PeopleCard key={item?.id} id={item.userId} title={item.title} body={item.body} item={item} />))}
        </div>
    </div>
  )
}

export default People