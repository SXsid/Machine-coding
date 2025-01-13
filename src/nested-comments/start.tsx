import { data } from "./data"
import Nested from "./Nested-Comments"
import "./style.css"

function Start() {
  return (
    <div className="main-cotnatiner">
      <Nested data={data}/>
    </div>
  )
}

export default Start
