import { Blog } from "../pages/Blogs"
import { AppBar } from "./AppBar"
import { Avatar } from "./BlogCard"

export function BlogContent({ blog }: { blog: Blog }) {
    return (<div>
        <AppBar />
        <div className="flex justify-center items-center">
            <div className="grid sm:grid-cols-12 grid-cols-1 pt-10 px-10 max-w-screen-xl">
                <div className="col-span-8">
                    <div className="sm:text-5xl text-2xl font-extrabold tracking-wide">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 sm:text-xl  text-sm pt-2">
                        {"Post on  2nd December 2025"}
                    </div>
                    <div className=" text-xl">
                        {blog.content}
                    </div>

                </div>
                <div className="hidden sm:block px-6 col-span-4 ">
                    <h3 className="text-slate-500 font-semibold text-lg">
                    Author
                    </h3>
                    <div className="flex gap-2">
                        <div className="flex flex-col justify-center">

                        <Avatar name={blog.user.name} size={40} />
                        </div>
                        <div>
                            <div className="text-xl font-bold">
                                {blog.user.name}
                            </div>
                            <div className="pt-2 text-slate-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, ad.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
