const Sidebar = (props) => {
    return (
        <section className="sidebar">

            <input
                type="text"
                placeholder="Search Chat"
            />
            {props.contacts.map((contact, index) => (
            <div className="contact-name" key={index}>
                <div className="contact-info">
                <div className="dp">
                {contact.dp}
            </div>
            <div className="contact-text">
            <h3>{contact.name}</h3>
            <p>{contact.message}</p>
        </div>
        </div>
        </div>

            ))}
        </section>
    );
};
        

export default Sidebar;