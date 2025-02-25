import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config/config"
import { Blog } from "../pages/Blogs"

export function useBlog({id}:{id:string}) {
    const [loading, setLoading] = useState(false)
    const [blog,setBlog] = useState<Blog>({id:"",user:{name:""},title:"",content:""})
    
        useEffect(()=>{
            setLoading(true)
            axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
                headers:{
                Authorization:localStorage.getItem("token")
            }
        })
        .then(res=>{
            setBlog(res.data.blog)   
            setLoading(false)
        })
        .finally(()=>{
          setLoading(false)
        })

    },[id])

    return {
        loading,
        blog
    }
}
