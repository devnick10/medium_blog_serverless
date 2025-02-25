import { useParams } from "react-router-dom"
import { useBlog } from "../hooks/UseBlog"
import { Loading } from "../components/Loading"
import { BlogContent } from "../components/BlogContent"

function Blog() {

  const {id} = useParams()
  // f2d1db98-6ec3-4fff-91a5-cdba0ed9d487
  const {loading,blog} = useBlog({id:id || ""})

  if (loading) {
    return <Loading/>
  } 


  return (
    <div>
      <BlogContent blog={blog}/>
    </div>
  )
}

export default Blog