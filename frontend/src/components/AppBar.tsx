import { Link } from 'react-router-dom';
import { Avatar } from './BlogCard';

export function AppBar() {
  return (
    <div className="w-dvw border-b border-slate-200 flex items-center justify-between px-5 sm:px-10 py-2  ">
      <Link className='font-bold cursor-pointer rounded-md tracking-tight text-xl shadow-lg shadow-black/10 ' to={'/blogs'}>
        <h2 className='px-1'>Scribe 🖊️</h2>
      </Link>
        <div>
        <Link to={'/publish'}>
        <button type="button" className="text-white bg-green-500 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 ">New</button>
        </Link>
            <Avatar size={40} name='Nikhil'/>
        </div>

    </div>
  )
}
