import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"

function Signup() {
  return (
    <div>
      <div className="grid md:grid-cols-2 ">
        <div className="">
          <Auth  type="signup"/>
        </div>
        <div className="hidden md:block">
          <Quote />
        </div>
      </div>
    </ div>
  )
}

export default Signup