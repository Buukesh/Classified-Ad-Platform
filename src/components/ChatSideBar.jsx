import React, { useState, useEffect } from "react";
import ChatBox from "../components/ChatBox";
import ChatLog from "../components/ChatLog";
import { fetchData } from "../../utils"; // Import the fetchData function

const ChatSideBar = () => {
    const [convos, setConvos] = useState([]);
    const [currentConvo, setCurrentConvo] = useState(null); // Change initial state to null

    useEffect(() => {
        const getConvos = async () => {
            const token = localStorage.getItem("token");
            const data = await fetchData("/api/messages/conversations", {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            });
            setConvos(data);
        };
        getConvos();
    }, []);

    return (
        <section>
            <div className="drawer lg:drawer-open">
                <input
                    id="my-drawer-2"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col">
                    <label
                        htmlFor="my-drawer-2"
                        className="btn btn-primary drawer-button my-6 lg:hidden"
                    >
                        Open Conversations
                    </label>
                    <ChatLog messages={currentConvo ? currentConvo.messages : []} /> 
                    <ChatBox />
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer-2"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-300 text-base-content">
                        {convos.map((convo) => (
                            <li key={convo.id}>
                                <a onClick={() => setCurrentConvo(convo)}>{convo.ad.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ChatSideBar;
