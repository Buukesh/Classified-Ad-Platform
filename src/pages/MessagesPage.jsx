import NavBar from "../components/Navbar";
import ChatSideBar from "../components/ChatSideBar";
import ChatBox from "../components/ChatBox";

const MessagesPage = () => {
    const sidebarItems = ["Sidebar Item 1", "Sidebar Item 2", "Sidebar Item 3"];
    return (
        <section>
            <NavBar />
            <div>
                <ChatSideBar sidebarItems={sidebarItems} />
                <ChatBox />
            </div>
        </section>
    );
};

export default MessagesPage;
