import React from "react";
import ChatBox from "../components/ChatBox";
import ChatLog from "../components/ChatLog";

const ChatSideBar = ({ sidebarItems, messages }) => {

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
                    <ChatLog messages={messages} />
                    <ChatBox />
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer-2"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-300 text-base-content">
                        {sidebarItems.map((item, idx) => (
                            <li key={idx}>
                                <a>{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ChatSideBar;
