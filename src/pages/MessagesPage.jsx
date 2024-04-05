import { useState, useEffect, useRef } from "react";

import ChatSideBar from "../components/ChatSideBar";
import NavBar from "../components/Navbar";

const MessagesPage = () => {
    const [convos, setConvos] = useState([]);
    const [currentConvo, setCurrentConvo] = useState(null);

    const wsRef = useRef(null);

    useEffect(() => {
        const token = localStorage.getItem("token");

        wsRef.current = new WebSocket(
            `ws://localhost:8000/ws/messages/?token=${token}`
        );

        const ws = wsRef.current;

        ws.onopen = () => {
            console.log("opened");
        };

        ws.onmessage = (e) => {
            const data = JSON.parse(e.data);
            console.log(data);
        };

        ws.onerror = () => {
            console.error("websocket error");
        };

        ws.onclose = () => {
            console.error("closed");
        };

        return () => {
            ws.close();
        };
    }, []);

    const sendMsg = (msg) => {
        wsRef.current.send(
            JSON.stringify({
                type: "msg",
                message: msg,
                // TODO temporary id (should be found dynamically)
                recipient_id: currentConvo.ad.id,
                ad_id: currentConvo.ad.id,
            })
        );
    };
    return (
        <section>
            <NavBar />
            <div>
                <ChatSideBar
                    convos={convos}
                    setConvos={setConvos}
                    currentConvo={currentConvo}
                    setCurrentConvo={setCurrentConvo}
                    sendMsg={sendMsg}
                />
            </div>
        </section>
    );
};

export default MessagesPage;
