import { createContext } from "react";

type context = {
  collapse: boolean;
  setCollapse: (collapse: boolean) => void;

  theme: string;
  setTheme: (theme: string) => void;
};
export const AppContext = createContext<context>({} as context);
