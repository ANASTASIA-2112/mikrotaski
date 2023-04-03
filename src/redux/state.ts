let onChange =()=> {

}




export type MessageType = {
    id:number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likeCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    addPost: (postAdd:any) => void
    profilePage:(newTextPost:any) => void
    newTextPost:string
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    message: Array<MessageType>
    addPost:(postAdd:string)=>void
}
export type SideBarPropsType = {
    id: number
    name: string
}
export type StateType = {
    profilePage: {
        posts: Array<PostType>
        newTextPost : string


    },
    dialogsPage: {
        dialogs: Array<DialogType>
        message: Array<MessageType>
    }
}

export let state: StateType = {
    profilePage: {
        posts: [
            {id: 0, message: "Hi, how are you?", likeCount: 12},
            {id: 1, message: "It is mu first post", likeCount: 15},
            {id: 2, message: "Good", likeCount: 19},
        ],
        newTextPost : ' ',



    },
    dialogsPage: {
        dialogs: [

            {id: 1, name: 'Dimych'},
            {id: 2, name: "Andrey"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Sasha"},
            {id: 5, name: "Victor"},
            {id: 6, name: "Valera"},
        ],
        message: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How is your it-kamasutra"},
            {id: 3, message: "Good"},
            {id: 4, message: "Yo"},
            {id: 5, message: "Yo"},
            {id: 6, message: "Yo"},
        ],
    },

}
export const addPost=(postAdd:any)=>{
    let newPost={
        id: 0,
        message:postAdd,
        likeCount:0
    };


        state.profilePage.posts.unshift(newPost)
       onChange();


}

export const profilePage=(newTextPost:any) => {
        state.profilePage.newTextPost= newTextPost;
        onChange();
}
export const subscribe=(observe:()=>void)=> {
    onChange=observe;

}


export default state;