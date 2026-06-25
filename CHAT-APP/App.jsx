import Sidebar from "./Components/Sidebar";
import ChatWindow from "./Components/ChatWindow";
import MessageInput from "./Components/MessageInput";
import "./App.css";

const App = () => {
    const contacts = [
        {
            name: "Srishti",
            message: "Hey, kaise hai yaar?",
            dp: "Sr"
        },
        {
            name: "Shikta",
            message: "Chal kal milte hain",
            dp: "Sh"
        },
        {
            name: "Swayam",
            message: "Project kitna huya?",
            dp: "Sw"
        }
    ];

    return (
        <main>
            <Sidebar contacts={contacts}/>
            <div className="chat-area">
              <ChatWindow />
              <MessageInput />
              </div>
              </main>
              );
            }
            export default App;

