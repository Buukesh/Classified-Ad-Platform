import { createContext, useState } from "react";

import PropTypes from "prop-types";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    const [convos, setConvos] = useState([]);
    const [currentConvoId, setCurrentConvoId] = useState(null);

    const getCurrentConvo = () => {
        return convos.find((convo) => convo.id === currentConvoId) || null;
    };

    return (
        <AppContext.Provider
            value={{
                token,
                setToken,
                convos,
                setConvos,
                currentConvoId,
                setCurrentConvoId,
                getCurrentConvo,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppContext;
