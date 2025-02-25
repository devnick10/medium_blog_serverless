import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config/config"


export function useBlogs() {
    const [loading, setLoading] = useState(false)
    const [blogs,setBlogs] = useState([])


    useEffect(()=>{
        setLoading(true)
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })
        .then(res=>{
            setBlogs(res.data.blogs)   
            setLoading(false)
        }).finally(()=>{
          setLoading(false)
        })
    },[])

    return {
        loading,
        blogs
    }
}