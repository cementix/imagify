import { useState } from "react";
import { AppContext } from "./AppContext";

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(true);

  const value = { user, setUser };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
