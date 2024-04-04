import { useState, useEffect } from "react";
import { fetchData } from "../../utils";

import NavBar from "../components/Navbar";
import ChatSideBar from "../components/ChatSideBar";

const MessagesPage = () => {
    const [convos, setConvos] = useState([]);
    // Default conversations
    const userConversations = [
        "Conversation 1",
        "Conversation 2",
        "Conversation 3",
    ];
    useEffect(() => {
        const getConvos = async () => {
            const token = localStorage.getItem('token');
            const data = await fetchData("/api/messages/conversations", {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            });
            const adsArray = data.map(item => item.ad.title);
            setConvos(adsArray);
        };
        getConvos();
    }, []);

    return (
        <section>
            <NavBar />
            <div>
                <ChatSideBar sidebarItems={convos} />
            </div>
        </section>
    );
};

export default MessagesPage;
