import React from "react"
import "./profile.css"
// import elon from "../../img/elon.jpg"
import Posts from "./posts/Posts"
import Profileinfo from "./profileinfo/Profileinfo" 
let postText=React.createRef()
function Profile(props) {
  let addPost=()=>{
    props.dispatch({type:"ADD-POST"})
    // alert(document.querySelector("input").value)
    // alert(postText.current.value)
  }
  let onNewPostText=()=>{
    props.dispatch({type:"NEW-POST",text:postText.current.value})
  }
  console.log(props)
    return(
      <div className="profile">
        <Profileinfo/>
          <h2 className="posts-text">My posts</h2>
          <input onChange={onNewPostText} value={props.new_post_text} ref={postText} placeholder="enter the post" />
          <button onClick={addPost}>Add post</button>
        <Posts post_data={props.data.post1_data} dispatch={props.dispatch} new_post_text={props.new_post_text}/>
        <Posts description_cat={props.data.description_cats} dispatch={props.dispatch}/>
        {/* <Posts message={props.message} answer={props.answer} name={props.name} /> */}
      </div>
    )
}

export default Profile;