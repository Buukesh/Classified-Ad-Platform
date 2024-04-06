import { useEffect, useRef } from "react";

import ChatSideBar from "../components/ChatSideBar";
import NavBar from "../components/Navbar";
import useAppContext from "../hooks/useAppContext";

const MessagesPage = () => {
    const { setCurrentConvo, currentConvo } = useAppContext();

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

            // update message list with new message
            // both sent and received messages appear here
            setCurrentConvo((currentConvo) => ({
                ...currentConvo,
                messages: [...currentConvo.messages, data],
            }));
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
        console.log(currentConvo);

        wsRef.current.send(
            JSON.stringify({
                type: "msg",
                message: msg,
                ad_id: currentConvo.ad.id,
                convo_id: currentConvo.id,
            })
        );
    };
    return (
        <section>
            <NavBar />
            <div>
                <ChatSideBar sendMsg={sendMsg} />
            </div>
        </section>
    );
};

export default MessagesPage;
