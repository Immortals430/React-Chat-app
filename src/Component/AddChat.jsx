import { useContext } from "react"
import { chatContext } from "../chatContext"
import { useNavigate } from "react-router-dom"

export default function AddChat(){
    const {chats,setToggleAddChat} = useContext(chatContext)
    const navigate = useNavigate()

    // toggle to start chat 
    function startChat(i){
        navigate(`/${i}`)
        setToggleAddChat(prev => !prev)
    }

    return (
        <section className="addChat" >
            <h3>Select to start conversation</h3>
            {chats.map((value, i) => (
                <div className="flex" key={i} onClick={()=> startChat(i)}>
                    <div className="dpContainer" style={{ background: `url(${value.dp}) center/cover` }}></div>
                    <h5>{value.name}</h5>
                </div>
            ))}
        </section>
    )
}