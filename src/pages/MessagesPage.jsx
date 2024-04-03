import NavBar from "../components/Navbar";
import ChatSideBar from "../components/ChatSideBar";

const MessagesPage = () => {
    const sidebarItems = ["Sidebar Item 1", "Sidebar Item 2", "Sidebar Item 3"];
    return (
        <section>
            <NavBar />
            <ChatSideBar sidebarItems={sidebarItems} />
        </section>
    );
};

export default MessagesPage;
