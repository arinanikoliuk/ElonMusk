import React from "react"
import "./profile.css"
// import elon from "../../img/elon.jpg"
import Posts from "./posts/Posts"
import Profileinfo from "./profileinfo/Profileinfo" 
let postText=React.createRef()
function Profile(props) {
  let addPost=()=>{
    props.addPost(postText.current.value)
    // alert(document.querySelector("input").value)
    console.log(postText)
    alert(postText.current.value)
  }
    return(
      <div className="profile">
        <Profileinfo/>
          <h2 className="posts-text">My posts</h2>
          <input ref={postText} placeholder="enter the post" />
          <button onClick={addPost}>Add post</button>
        <Posts post_data={props.post1_data} addPost={props.addPost}/>
        <Posts description_cat={props.description_cats} addPost={props.addPost}/>
        {/* <Posts message={props.message} answer={props.answer} name={props.name} /> */}
      </div>
    )
}

export default Profile;