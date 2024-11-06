import React from "react"
// import Dialog from "../../dialogs/Dialogs"
import Post from "./post/Post"
import Post2 from "./post2/Post2"
// import cat1 from "./post2/img/cat1.webp"
// import cat2 from "./post2/img/cat2.jpg"
// import cat3 from "./post2/img/cat3.jpeg"
// import cat4 from "./post2/img/cat4.png"
// let catNamedescription = [
//     {imageSrc: cat1, names:"Meikoon", description:"Meikoon is one of the largest domesticated cats. It can weight 4-8 kg and measure long 50-100cm", id:1},
//     {imageSrc: cat3, names:"Serval", description:"African servals are small, slender cats with long legs, a lean body, a short tail, and a small head. Their extra-long neck and legs give them the nickname-giraffe cat", id:2},
//     {imageSrc: cat2, names:"Sfinks", description:"Sphynx was developed through selective breeding of these animals, starting in the 1960s. They always have cold", id:3},
//     {imageSrc: cat4, names:"Bengal", description:"Bengal cat is a breed of hybrid cat created from crossing of an Asian leopard cat with domestic cats, especially the spotted Egyptian Mau.This cats are very adorable and affectionate", id:1}
// ]
function Posts(props) {
    return(
        <div className="posts">
            {/* <Post message="My name is Elon Musk and I create rockets with my company. Soon we are planning to go to expedition on a Mars" /> */}
            
            {props.post_data && props.post_data.map((e)=> <Post message={e.text} id={e.id} likes={e.likes}/>)}
            {props.description_cat && props.description_cat.map((e)=> <Post2 imageSrc={e.imageSrc} names={e.names} description={e.description} id={e.id}/>)}
            {/* <Dialog name="Mark Zuckerberg" />
            <Dialog name="Elon Musk" />
            <Dialog name="Bill Gates" /> */}
            {/* <Post2 names="Meinkoon" imageSrc={cat1} />
            <Post2 names="Serval" imageSrc={cat3} />
            <Post2 names="Sfinks" imageSrc={cat2} />
            <Post2 names="Bengal" imageSrc={cat4} /> */}
        </div>
    )
}

export default Posts;
// answer="hello, how are you?" 
// answer="hello,Im good. My company is planning to go to the Mars.Are you with me?"
// answer="hello,cool. When is the expedition?" 