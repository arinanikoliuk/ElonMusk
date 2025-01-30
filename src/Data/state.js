import cat1 from "../components/profile/posts/post2/img/cat1.webp"
import cat2 from "../components/profile/posts/post2/img/cat2.jpg"
import cat3 from "../components/profile/posts/post2/img/cat3.jpeg"
import cat4 from "../components/profile/posts/post2/img/cat4.png"
import spaceX from "../img/spaceX.avif"
import rocket from "../img/rocket.jpg"
import tesla from "../img/tesla.jpg"
// import {rerenderTree} from "../index.js" 
let store={
    _state:{
        profile_page:{
            post1_data:[
                {image:spaceX, title:"The Company", text:"Space X is the best company in the world. Here we design the most necesary rockets, satelits and telescopes", id:1, likes:121}, 
                {image:rocket, title:"About Rockets", text:"The rockets are explaining Mars. There are 151 total launches. The rockets of Elon Musk are expolring the space every day more and more ", id:2, likes:345},
                {image:tesla, title:"Cars", text:"Tesla is the best car you can have. It does not contaminate the Earth because it is electric. In the world are 140500 people emloying Teslas", id:3, likes:159}
            ],
            description_cats:[
                {imageSrc: cat1, names:"Meikoon", description:"Meikoon is one of the largest domesticated cats. It can weight 4-8 kg and measure long 50-100cm", id:1},
                {imageSrc: cat3, names:"Serval", description:"African servals are small, slender cats with long legs, a lean body, a short tail, and a small head. Their extra-long neck and legs give them the nickname-giraffe cat", id:2},
                {imageSrc: cat2, names:"Sfinks", description:"Sphynx was developed through selective breeding of these animals, starting in the 1960s. They always have cold", id:3},
                {imageSrc: cat4, names:"Bengal", description:"Bengal cat is a breed of hybrid cat created from crossing of an Asian leopard cat with domestic cats, especially the spotted Egyptian Mau.This cats are very adorable and affectionate", id:1}
            ],
            new_post_text: "hello friends"
        },
        dialogs_page:{
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
            new_dialog_text: "put a message"
        },
        navMenu: {
            friends:[
                {ava:cat1, name:"Eva", id:1},
                {ava:cat2, name:"Mark", id:2},
                {ava:cat3, name:"Sophia", id:3},
            ]
        }
    },
    
    onNewDialogText(text){
        this._state.dialogs_page.new_dialog_text=text
        this.rerenderTree(this._state)
    },
    
    onNewPostText(text){
        this._state.profile_page.new_post_text=text
        this.rerenderTree(this._state)
    },
    
    addPost(postText){
        let newPost ={
            image:tesla, title:"Cars", text:postText, id:4, likes:0
        }
        this._state.profile_page.post1_data.unshift(newPost)
        this._state.profile_page.new_post_text=""
        // state.profile_page.post1_data.push(newPost)
        this.rerenderTree(this._state)
    },
    
    addMessage(dialogsText){
        let newMessage ={
           message:dialogsText, name:"Arisha", id:4
        }
        this._state.dialogs_page.messages_data.push(newMessage)
        this._state.dialogs_page.dialogs_data.push(newMessage)
        this._state.dialogs_page.new_dialog_text=""
        this.rerenderTree(this._state)
    },
    
    
    rerenderTree(){
        console.log("test rerender")
    },
     
    subscribe(observer){
        this.rerenderTree=observer;
    },
    
    getState(){
        return this._state
    }
    // window.state=state
}

export default store;