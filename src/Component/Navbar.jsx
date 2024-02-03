import { useParams } from "react-router-dom"
import { useContext } from "react"
import { chatContext } from "../chatContext"

export default function Navbar(){
    const {id} = useParams()
    const {chats} = useContext(chatContext)

    return(
        <nav>
            <p>{chats[id].name}</p>
        </nav>
    )
}