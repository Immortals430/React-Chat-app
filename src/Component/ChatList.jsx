import { useContext } from "react"
import { chatContext } from "../chatContext"
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";



export default function ChatList(){
    const {setToggleAddChat, filteredChats, filter} = useContext(chatContext);




    return(
        <>
        <aside>
            <div className="searchChat">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search for convrsation" onChange={filter} />
            </div>

            <div className="addNewChat"> 
                <p>CONVERSATION</p>
                <div onClick={()=> setToggleAddChat(prev=>!prev)}><i className="fa-solid fa-plus"></i></div>     
            </div>

            <div className="chatList">
                {filteredChats.map((user, i) => (
                    user.msg.length > 0 ? 

                    <Link to={`/${i}`} className="flex chatContainer" key={i}>
                        <div className="dpContainer" style={{ background: `url(${user.dp}) center/cover` }}></div>
                        <div className="flex chatSubCOntainer">
                            <h5>{user.name}</h5>
                            <small>{user.msg.map((value, i, userArr) => (
                                 i === (userArr.length - 1) ? value.msg : null
                                ))}
                            </small>
                        </div>     
                    </Link> 
                    
                    : null
                 
                    
 
                 
                ))}
            </div>
        </aside>

        <Outlet />
        </>
    )
}