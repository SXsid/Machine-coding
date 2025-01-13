
import Comments from "./comments"
import { dataProp } from "./data"
import useComments from "./hooks/useCommets"

function Nested({data}:{data:dataProp[]}) {
    const {comments}=useComments(data)
  return (
    <div>
      <div className="main-reply">
        <textarea className="reply-container"/>
        <button className="add-button">add</button>
      </div>
      {comments.map(value=>{
        return (
          <Comments key={value.id} id={value.id} msg={value.msg} upvote={value.upvote} downvote={value.downvote}
            timeStamp={value.timeStamp} replies={value.replies}
          />
        )
      })}
    </div>
  )
}

export default Nested
