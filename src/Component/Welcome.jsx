import { useContext } from "react"
import { chatContext } from "../chatContext"
import AddChat from "./AddChat"

export default function Welcome(){

    const {toggleAddChat} = useContext(chatContext)

    return (
        <>
            <main>
                <section className="welcome">
                {toggleAddChat ? <AddChat /> : null}
                    
                <h1>Wecome to React Chart App</h1>
                <p>Start sending message to your close one</p>
                </section>
            </main>



        </>
    )
}