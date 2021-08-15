import { createContext } from "react";
import { useInterpret } from "@xstate/react";
import { mapMachine } from "../machines/map.machine";

export const GlobalContext = createContext({});

export function GlobalProvider({ children }) {
  const mapService = useInterpret(mapMachine);
  return (
    <GlobalContext.Provider value={{ mapService }}>
      {children}
    </GlobalContext.Provider>
  );
}
