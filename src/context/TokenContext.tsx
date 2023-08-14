import React, { createContext, useContext, useState } from "react";

interface TokenContextType {
  token: string | null;
  saveTokenLocalStorage: (token: string) => void;
  removeTokenLocalStorage: () => void;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

const TokenContext = createContext<TokenContextType>({
  token: null,
  saveTokenLocalStorage: () => {},
  removeTokenLocalStorage: () => {},
  setToken: () => {},
});

export const useTokenContext = () => {
  return useContext(TokenContext);
};

export const storage = (props: string) => {
  if (typeof window !== "undefined") {
    const data = window.localStorage.getItem(props);
    if (data === null) {
      return null;
    } else {
      return JSON.parse(data).access_token;
    }
  }
};

export const TokenProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(storage("access_token"));

  const saveTokenLocalStorage = (token: string) => {
    localStorage.setItem(
      "access_token",
      JSON.stringify({ access_token: token })
    );
    setToken(token);
  };

  const removeTokenLocalStorage = () => {
    localStorage.removeItem("access_token");
    setToken(null);
  };

  return (
    <TokenContext.Provider
      value={{
        token,
        setToken,
        saveTokenLocalStorage,
        removeTokenLocalStorage,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};
