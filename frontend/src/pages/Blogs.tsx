import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import {Loading} from "../components/Loading"
import { useBlogs } from "../hooks/UseBlogs"

export interface Blog {
    id: string
    title: string
    content: string
    user: { name: string }
}

function Blogs() {
    const { loading, blogs } = useBlogs()
    if (loading) {
        return <Loading/> 
    }

    return (
        <div>
            <AppBar />
            <div className="flex justify-center">
                <div>
                    {
                        blogs.map((blog: Blog) => (
                            <BlogCard key={blog.id} id={blog.id} title={blog.title} content={blog.content} authorname={blog.user.name} publishedDate={"Feb 2 2025"} />
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

export default Blogs