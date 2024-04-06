import { useEffect, useRef } from "react";

import ChatSideBar from "../components/ChatSideBar";
import NavBar from "../components/Navbar";
import useAppContext from "../hooks/useAppContext";

const MessagesPage = () => {
    const { setConvos, getCurrentConvo } = useAppContext();

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
            const convoId = data.conversation;

            // both sent and received messages appear here
            // update convo array with new message
            setConvos((prevConvos) => {
                const updatedConvos = prevConvos.map((convo) => {
                    if (convo.id === convoId) {
                        return {
                            ...convo,
                            messages: [...convo.messages, data],
                        };
                    } else {
                        return convo;
                    }
                });
                return updatedConvos;
            });
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
                ad_id: getCurrentConvo().ad.id,
                convo_id: getCurrentConvo().id,
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
