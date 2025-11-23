"use client"

import { createContext, ReactNode, useState, useContext } from "react";

interface Alert {
  message: string | null;
  type: "success" | "error" | "info" | "warning" | null;
}

interface AlertContextType {
  alerts: Alert;
  showAlert: (
    message: string,
    type?: "success" | "error" | "info" | "warning"
  ) => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

interface AlertProviderProps {
  children: ReactNode;
}

export const AlertContextProvider = ({ children }: AlertProviderProps) => {
  const [alerts, setAlerts] = useState<Alert>({ message: null, type: null });
  const showAlert = (
    message: string,
    type: "success" | "error" | "info" | "warning" = "info"
  ) => {
    setAlerts({ message, type });
    setTimeout(() => setAlerts({ message: null, type: null }), 3000);
  };

  return (
    <AlertContext.Provider value={{ alerts, showAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = (): AlertContextType => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within AlertContextProvider");
  }
  return context;
};
