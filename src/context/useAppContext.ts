"use client";

import { useContext } from "react";
import { AppContext } from "./appContext";

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppContext");
  }
  return context;
};
