import { useState, useEffect } from "react";
import { fetchData } from "../../utils";

import NavBar from "../components/Navbar";
import ChatSideBar from "../components/ChatSideBar";

const MessagesPage = () => {
    const [userConvos, setUserConvos] = useState([]);
    // Default conversations
    const userConversations = [
        "Conversation 1",
        "Conversation 2",
        "Conversation 3",
    ];
    useEffect(() => {
        const getUserConvos = async () => {
            const token = localStorage.getItem('token') || '';
            // Put API url here to fetch conversations
            try {
            const data = await fetchData("/api/messages", {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}` // Include the authorization header
                }
              });
            setUserConvos(data);
            } catch (error) {
                console.error("Failed to fetch conversations:", error);
                // Handle error state appropriately, perhaps set an error message in state and display it
            }
        };
        getUserConvos();
    }, []);

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
