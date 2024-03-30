import { createContext, useState } from "react";
import PropTypes from "prop-types";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  return (
    <AppContext.Provider
      value={{
        token,
        setToken,
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
