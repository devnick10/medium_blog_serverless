import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import { lazy,Suspense } from "react"
import { Toaster } from "react-hot-toast"
const LazySignup =  lazy (() => import ("./pages/Signup"))
const LazySignin =  lazy (() => import ("./pages/Signin"))
const LazyBlog =  lazy (() => import ("./pages/Blog"))
const LazyBlogs =  lazy (() => import ("./pages/Blogs"))
const LazyPublish =  lazy (() => import ("./pages/Publish"))
 

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/signup" element={<Suspense><LazySignup/></Suspense>}/>
        <Route path="/signin" element={<Suspense><LazySignin/></Suspense>}/>
        <Route path="/blogs" element={<Suspense><LazyBlogs/></Suspense>}/>
        <Route path="/publish" element={<Suspense><LazyPublish/></Suspense>}/>
        <Route path="/blog/:id" element={<Suspense><LazyBlog/></Suspense>}/>
      </Routes>
      <Toaster/>
    </Router>
    </div>
  )
}

export default App