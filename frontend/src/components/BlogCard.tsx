import { Link } from "react-router-dom";

interface BlogCardProps {
    id:string
    authorname: string;
    title: string; 
    content: string;
    publishedDate: string;
}
export function BlogCard({ authorname, title, content, publishedDate ,id}: BlogCardProps) {
    return <Link to={`/blog/${id}`}>
    <div className=" border-slate-400 border-b p-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex items-center gap-2">
          <Avatar name={authorname}/> 
          <div className="font-extralight text-sm">{authorname}</div>
           <div>
            <Circle/>
           </div> 
           <div className="font-thin text-slate-500 text-sm">{publishedDate}</div>
        </div>
        <div className="text-xl font-semibold pt-2">
            {title}
        </div>
        <div className="text-md font-thin">
            {content.slice(0, 100) + "..."}
        </div>
        <div className="text-sm font-thin text-slate-500 pt-4">
            {`${Math.ceil(content.length / 100)} minute(s) read`}
        </div>

    </div>
    </Link>
}

function Circle() {
    return <div className="w-1 h-1 rounded-full bg-slate-500">
            
    </div>
}

export function Avatar({name,size=20}:{name:string,size?:number}) {
    return <div style={{width:size,height:size}} className={`relative inline-flex items-center  justify-center  overflow-hidden bg-gray-400 rounded-full`}>
        <span className="text-xs font-bold uppercase text-white">{name[0] ||"Anonymous"}</span>
    </div>
}
