import { createContext, useState } from "react";
import data from "../Data";

export const AppContext = createContext();

export default function AppContextprovider({ children }) {
  const [loginClicked, setloginClicked] = useState(false);
  const [signUpClicked, setSignUpClicked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [close, setClose] = useState(false);
  const [subscribe, setSubscribe] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [dataItems,setDataItems] = useState(data);

  
  const selectProduct = (product) => {
    setSelectedProduct(product);
  };

  const value = {
    loginClicked,
    setloginClicked,
    signUpClicked,
    setSignUpClicked,
    isLoggedIn,
    setIsLoggedIn,
    close,
    setClose,
    subscribe,
    setSubscribe,
    selectProduct,
    setSelectedProduct,
    dataItems,
    setDataItems
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
