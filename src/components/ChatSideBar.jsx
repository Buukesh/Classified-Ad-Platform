import { useEffect } from "react";

import { fetchData } from "../../utils";
import ChatBox from "../components/ChatBox";
import ChatLog from "../components/ChatLog";
import useAppContext from "../hooks/useAppContext";

const ChatSideBar = ({ sendMsg }) => {
    const {
        convos,
        setConvos,
        currentConvoId,
        setCurrentConvoId,
        getCurrentConvo,
    } = useAppContext();

    useEffect(() => {
        const getConvos = async () => {
            const token = localStorage.getItem("token");
            const data = await fetchData("/api/messages/conversations", {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            });
            setConvos(data);
            // always open latest convo when opening msg page
            setCurrentConvoId(data[data.length - 1].id);
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

                    <ChatLog
                        messages={
                            currentConvoId ? getCurrentConvo().messages : []
                        }
                    />
                    <ChatBox sendMsg={sendMsg} />
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
                                <a onClick={() => setCurrentConvoId(convo.id)}>
                                    {convo.ad.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ChatSideBar;
