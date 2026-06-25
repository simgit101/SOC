const MessageBubble = ({text, isSent}) => {

    return (
         <div className={`message ${isSent ? "sent" : "received"}`}>
            <p>{text}</p>
        </div>
    );
}
export default MessageBubble;