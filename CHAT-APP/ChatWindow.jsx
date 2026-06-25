import MessageBubble from "./MessageBubble";

const ChatWindow = () => {

    return (
        <div>

            <section className="chat-area">
                <header className="chat-header">
                    <h2>Srishti</h2>
                </header>
                <section className="messagelist-area">
                <MessageBubble
                text="Hello!"
                isSent={false}
            />

            <MessageBubble
                text="Hi Srishti"
                isSent={true}
            />

            <MessageBubble
                text="Main sahi hun"
                isSent={false}
            />
            </section>
            </section>

        </div>
    );

}

export default ChatWindow;