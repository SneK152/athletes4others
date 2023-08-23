"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface ContextProps {
  currentPage: string;
  setCurrentPage: Dispatch<SetStateAction<string>>;
}

const Context = createContext<ContextProps>(undefined!);

export function ContextProvider({ children }: any) {
  const [currentPage, setCurrentPage] = useState<string>("#home");
  return (
    <Context.Provider
      value={{
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function usePageContext(): ContextProps {
  const context = useContext(Context);

  if (typeof context === "undefined") {
    throw new Error(
      "usePageContext should be used within the Context provider!"
    );
  }

  return context;
}
