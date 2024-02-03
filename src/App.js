import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ChatList from "./Component/ChatList";
import Conversation from "./Component/Conversation";
import ChatContextProvider from "./chatContext";

function App() {
  
  const routes = createBrowserRouter([{
    path: "/",
    element: <ChatList />,
    children: [
      {index: true, element: <Conversation />},
      {path: "/:id", element: <Conversation /> }
    ]
  }])


  return (

    <ChatContextProvider>
     <RouterProvider router={routes} />
    </ChatContextProvider >

  );
}

export default App;
