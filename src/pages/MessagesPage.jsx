import NavBar from "../components/Navbar";
import ChatSideBar from "../components/ChatSideBar";

const MessagesPage = () => {
    const userConversations = [
        "Conversation 1",
        "Conversation 2",
        "Conversation 3",
    ];

    return (
        <section>
            <NavBar />
            <div>
                <ChatSideBar sidebarItems={userConversations} />
            </div>
        </section>
    );
};

export default MessagesPage;
