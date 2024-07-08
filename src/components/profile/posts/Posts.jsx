import React from "react"
import Dialog from "../../dialog/Dialog"
import Post from "./post/Post"
function Posts() {
    return(
        <div className="posts">
            <h2 className="posts-text">My posts</h2>
            <input placeholder="enter the post" />
            <button>Add post</button>
            <Post message="My name is Elon Musk and I create rockets with my company. Soon we are planning to go to expedition on a Mars" />
            <Dialog name="Mark Zuckerberg" />
            <Dialog name="Elon Musk" />
            <Dialog name="Bill Gates" />
        </div>
    )
}

export default Posts;
// answer="hello, how are you?" 
// answer="hello,Im good. My company is planning to go to the Mars.Are you with me?"
// answer="hello,cool. When is the expedition?" 