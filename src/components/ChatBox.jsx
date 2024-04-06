import { useState } from "react";

const ChatBox = ({ sendMsg }) => {
    const [msg, setMsg] = useState("");

    const handleChange = (e) => {
        setMsg(e.target.value);
    };

    return (
        <section className="">
            <div className="p-4 flex">
                <input
                    id="userinput"
                    type="text"
                    placeholder="Type a message"
                    className="w-full px-3 py-2 border-blue-500 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={handleChange}
                    value={msg}
                />
                <button
                    id="sendbutton"
                    className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
                    onClick={() => {
                        sendMsg(msg);
                        // clear msg bar after sending
                        setMsg("");
                    }}
                >
                    Send
                </button>
            </div>
        </section>
    );
};

export default ChatBox;
