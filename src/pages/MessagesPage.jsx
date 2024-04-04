import { useState, useEffect } from "react";

import { fetchData } from "../../utils";
import ChatSideBar from "../components/ChatSideBar";
import NavBar from "../components/Navbar";

const MessagesPage = () => {
    const [convos, setConvos] = useState([]);
    const [currentConvo, setCurrentConvo] = useState([]);

    useEffect(() => {
        const getConvos = async () => {
            const token = localStorage.getItem("token");
            const data = await fetchData("/api/messages/conversations", {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            });
            const adsArray = data.map((item) => item.ad.title);
            setConvos(adsArray);

            setCurrentConvo(data[0]);
        };
        getConvos();
    }, []);

    const messages = currentConvo.messages || [];

    return (
        <section>
            <NavBar />
            <div>
                <ChatSideBar sidebarItems={convos} messages={messages} />
            </div>
        </section>
    );
};

export default MessagesPage;
