import cat1 from "../components/profile/posts/post2/img/cat1.webp"
import cat2 from "../components/profile/posts/post2/img/cat2.jpg"
import cat3 from "../components/profile/posts/post2/img/cat3.jpeg"
import cat4 from "../components/profile/posts/post2/img/cat4.png"
let state={
    post1_data:[
        {text:"Space X is the best company", id:1, likes:121}, 
        {text:"My rockets are explaining Mars", id:2, likes:345},
        {text:"Tesla is the best car you can have", id:3, likes:159}
    ],
    dialogs_data:[
        {name:"Elon Musk", id:1},
        {name:"Bill Geits", id:2},
        {name:"Mark Cukenberg", id:3}
    ],
    messages_data:[
        {message:"Go to Mars", id:1},
        {message:"Where is my chip", id:2},
        {message:"Hello", id:3},
    ],
    description_cats:[
        {imageSrc: cat1, names:"Meikoon", description:"Meikoon is one of the largest domesticated cats. It can weight 4-8 kg and measure long 50-100cm", id:1},
        {imageSrc: cat3, names:"Serval", description:"African servals are small, slender cats with long legs, a lean body, a short tail, and a small head. Their extra-long neck and legs give them the nickname-giraffe cat", id:2},
        {imageSrc: cat2, names:"Sfinks", description:"Sphynx was developed through selective breeding of these animals, starting in the 1960s. They always have cold", id:3},
        {imageSrc: cat4, names:"Bengal", description:"Bengal cat is a breed of hybrid cat created from crossing of an Asian leopard cat with domestic cats, especially the spotted Egyptian Mau.This cats are very adorable and affectionate", id:1}
    ]
}
export let addPost=(postText)=>{
    let newPost ={
        text:postText, id:4, likes:0
    }
    state.post1_data.push(newPost)
    console.log(state)
}

export default state;