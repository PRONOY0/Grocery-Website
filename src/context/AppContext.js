import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextprovider({ children }) {
  const [loginClicked, setloginClicked] = useState(false);
  const [signUpClicked, setSignUpClicked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

const value = {
    loginClicked,
    setloginClicked,
    signUpClicked,
    setSignUpClicked,
    isLoggedIn,
    setIsLoggedIn,
  };

  return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>;
}