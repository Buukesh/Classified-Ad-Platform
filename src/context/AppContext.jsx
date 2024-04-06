import { createContext, useState } from "react";

import PropTypes from "prop-types";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    const [convos, setConvos] = useState([]);
    const [currentConvo, setCurrentConvo] = useState(null);

    return (
        <AppContext.Provider
            value={{
                token,
                setToken,
                convos,
                setConvos,
                currentConvo,
                setCurrentConvo,
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
