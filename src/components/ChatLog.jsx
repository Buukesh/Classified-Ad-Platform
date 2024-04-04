import React from "react";

const ChatLog = ({ messages }) => {
    return (
        <section>
            {messages.map((message, index) => (
                <div
                    key={index}
                    className={`chat ${
                        message.sender === "sender" ? "chat-start" : "chat-end"
                    }`}
                >
                    <div className="chat-bubble max-w-[50%]">
                        {message.message}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default ChatLog;
