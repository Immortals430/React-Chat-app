import Navbar from "./Navbar"
import Welcome from "./Welcome"
import { useParams } from "react-router-dom"
import { useContext, useRef } from "react"
import { chatContext } from "../chatContext"
import AddChat from "./AddChat"

export default function Conversation(){
    const {id} = useParams()
    const {chats, setChats, toggleAddChat} = useContext(chatContext)
    const msgInput = useRef()
     
    // send msg
    function sendMsg(){
        setChats((prev) => {
            let newArr = [...prev]
            newArr[id].msg.push({
                messenger: "receiver",
                msg: msgInput.current.value
            })
            msgInput.current.value = ""
            return newArr
        })
    }

    return (
        <>
        {id >= 0 ? 

        <main>
            <Navbar />

            {toggleAddChat ? <AddChat /> : null}

            <section className="conversation">

                {chats[id].msg.map((value, i) => {
                    if(value.messenger === 'sender') return <div className="msg theremsg" key={i}>{value.msg}</div>   
                    else return <div className="mymsg msg" key={i}>{value.msg}</div>      
                })}
           
                <div className="msgInputCon">
                    <input className="msgInput" placeholder="Type your message" ref={msgInput} />
                    <button onClick={sendMsg}>Send</button>
                </div>
            </section>

        </main>  : <Welcome />

        }
        </>
    )
}