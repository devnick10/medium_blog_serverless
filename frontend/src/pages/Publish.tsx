import { useState } from "react"
import { AppBar } from "../components/AppBar"
import axios from "axios"
import { BACKEND_URL } from "../config/config"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"



export default function Publish() {

  const [title,setTitle]= useState("")
  const [description,setDescription]= useState("")

  const navigate = useNavigate() 
  return (<div>
    <AppBar />
    <div className="pt-10 flex flex-col items-center">
      <div>
        <input value={title} onChange={e=>setTitle(e.target.value)} className="outline-none py-2 px-4 text-2xl font-semibold w-screen max-w-screen-lg h-24  rounded-md bg-gray-50 border-0" placeholder="Title" type="text" />
      </div>
      <div>
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
        <textarea value={description} onChange={e=>setDescription(e.target.value)} id="message" rows={4} className=" w-screen max-w-screen-lg block p-2.5  text-xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300  outline-none" placeholder="Write your thoughts here..."></textarea>
      </div>
      <div className="flex justify-start w-screen max-w-screen-lg mt-2">
        <button onClick={async()=>{
           
          try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
              title,
              content:description
            },{headers:{"Authorization":localStorage.getItem("token")}})
  
            navigate(`/blog/${response.data.id}`)
            toast.success("Blog published.")
          } catch (error) {
            console.log(error)
            toast.error("blog publish failed.")
          }       


        }} type="submit" className="inline-flex items-center py-2.5 px-4 text-md font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-blue-800">
          Puplish post
        </button>
      </div>
    </div>
  </div>

  )
}
