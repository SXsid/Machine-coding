import { useState } from "react"
import { dataProp } from "./data"


function Comments({upvote,downvote,msg,timeStamp,replies}:dataProp) {
  const [toggle,setToggle]=useState(false)
  const handleToggle=()=>{
    setToggle(!toggle)
  }
  return (
    <>
      <div className="comment-container">

            <p>{msg}</p>
            <div style={{display:"flex",gap:"10px"}}>
              <button className="add-button">Upvote({upvote})</button><button className="add-button">downVote({downvote} )</button><button className="add-button" onClick={handleToggle}>{toggle?"hide replies":"repies"}({replies.length})</button>
              
            </div>
            <p>{new Date(timeStamp).toLocaleString()}</p>

      </div>
      {toggle && <div className="main-reply">
        <textarea className="reply-container"/>
        <button className="add-button">add</button>
      </div>}

      {toggle&&replies.map(value=>{
        return(
          <Comments key={value.id} id={value.id} msg={value.msg} upvote={value.upvote} downvote={value.downvote}
          timeStamp={value.timeStamp} replies={value.replies}/>)
      })}


    </>
  )
}

export default Comments
