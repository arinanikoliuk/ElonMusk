import React from "react"
import Dialog from "../../dialogs/Dialogs"
import Post from "./post/Post"
import Post2 from "./post2/Post2"
import cat1 from "./post2/img/cat1.webp"
import cat2 from "./post2/img/cat2.jpg"
import cat3 from "./post2/img/cat3.jpeg"
import cat4 from "./post2/img/cat4.png"
let post1_data=[
    {text:"Space X is the best company", id:1, likes:121}, 
    {text:"My rockets are explaining Mars", id:2, likes:345},
    {text:"Tesla is the best car you can have", id:3, likes:159}
]
function Posts() {
    return(

        <div className="posts">
            <h2 className="posts-text">My posts</h2>
            <input placeholder="enter the post" />
            <button>Add post</button>
            {/* <Post message="My name is Elon Musk and I create rockets with my company. Soon we are planning to go to expedition on a Mars" /> */}
            {post1_data.map((e)=> <Post message={e.text} id={e.id} likes={e.likes}/>)}
            {/* <Dialog name="Mark Zuckerberg" />
            <Dialog name="Elon Musk" />
            <Dialog name="Bill Gates" /> */}
            <Post2 names="Meinkoon" imageSrc={cat1} />
            <Post2 names="Serval" imageSrc={cat3} />
            <Post2 names="Sfinks" imageSrc={cat2} />
            <Post2 names="Bengal" imageSrc={cat4} />
        </div>
    )
}

export default Posts;
// answer="hello, how are you?" 
// answer="hello,Im good. My company is planning to go to the Mars.Are you with me?"
// answer="hello,cool. When is the expedition?" 