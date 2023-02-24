import React, { useEffect, useState } from 'react'
import AlbumCard from './components/AlbumCard'
import useAxios from '../../../../Hooks/useAxios'

const Albums = () => {
    const [albums, setalbums] = useState([])
    const [photos, setphotos] = useState([])
    const request = useAxios()


    async function getData(){
        try {
            let res = await request({
                method: "GET",
                url: "albums",
            })
            let ppl = await request({
                method: "GET",
                url: "photos"
            })
            setalbums(res)
            setphotos(ppl)
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
        {albums.map(item => (<AlbumCard key={item.id} id={item.id} title={item.title}  photos={photos} />))}
        </div>
    </div>
  )
}

export default Albums