import { useState, useEffect } from "react";

import { fetchData } from "../../utils";
import ChatSideBar from "../components/ChatSideBar";
import NavBar from "../components/Navbar";

const MessagesPage = () => {

    return (
        <section>
            <NavBar />
            <div>
                <ChatSideBar />
            </div>
        </section>
    );
};

export default MessagesPage;