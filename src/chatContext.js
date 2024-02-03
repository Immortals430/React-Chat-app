import { createContext, useEffect } from "react";
import { useState } from "react";


export const chatContext = createContext()

export default function ChatContextProvider({children}){

    const [toggleAddChat, setToggleAddChat] = useState(false)
    // dummy json data
    const [chats, setChats] = useState([
        {
            name: "Modi",
            dp: "https://img.etimg.com/thumb/width-1200,height-900,imgsize-25742,resizemode-75,msid-102700702/news/india/pm-modi-changes-social-media-dp-to-tricolour-urges-people-to-do-same.jpg",
            msg: [
                {messenger: 'sender', msg: 'Whatsup Bro'},
                {messenger: 'receiver', msg: 'Hello! Whats going on?'},
                {messenger: 'sender', msg: 'Demonetization'}
            ]
        },
        {
            name: "Thor",
            dp: "https://cdn.mos.cms.futurecdn.net/5grCpksAsditHvWpvttz6Q-1200-80.jpg",
            msg: [
                {messenger: 'sender', msg: 'I will send u mail'},
                {messenger: 'receiver', msg: 'Do u have laptop?'},
                {messenger: 'sender', msg: 'Why?'}
            ]
        },
        {
            name: "Modi",
            dp: "https://img.etimg.com/thumb/width-1200,height-900,imgsize-25742,resizemode-75,msid-102700702/news/india/pm-modi-changes-social-media-dp-to-tricolour-urges-people-to-do-same.jpg",
            msg: [
                {messenger: 'sender', msg: 'Whatsup Bro'},
                {messenger: 'receiver', msg: 'Hello! Whats going on?'},
                {messenger: 'sender', msg: 'Demonetization'}
            ]
        },
        {
            name: "Modi",
            dp: "https://img.etimg.com/thumb/width-1200,height-900,imgsize-25742,resizemode-75,msid-102700702/news/india/pm-modi-changes-social-media-dp-to-tricolour-urges-people-to-do-same.jpg",
            msg: []
        },
        {
            name: "Modi",
            dp: "https://img.etimg.com/thumb/width-1200,height-900,imgsize-25742,resizemode-75,msid-102700702/news/india/pm-modi-changes-social-media-dp-to-tricolour-urges-people-to-do-same.jpg",
            msg: []
        },
        {
            name: "Modi",
            dp: "https://img.etimg.com/thumb/width-1200,height-900,imgsize-25742,resizemode-75,msid-102700702/news/india/pm-modi-changes-social-media-dp-to-tricolour-urges-people-to-do-same.jpg",
            msg: []
        }
    ])
    const [filteredChats, setFilteredChats] = useState([])

    // set filtered chats on initial render
    useEffect(() => {
        setFilteredChats(chats)
    }, [chats])


    // filter chats
    function filter(e){
        const filteredUsers = chats.filter(user =>
            user.name.toLowerCase().includes(e.target.value.toLowerCase())
          );
          setFilteredChats([...filteredUsers])
    }

    

    return (
        <chatContext.Provider  value={{chats, setChats, setToggleAddChat,toggleAddChat,filter, setFilteredChats, filteredChats}}>
            {children}
        </chatContext.Provider>
    )
}