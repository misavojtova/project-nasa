import React, { createContext, useState } from "react";

const DropIconsContext = createContext(null);

export function DropIconsContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropIconsContext.Provider value={{ handleToggle, isOpen, setIsOpen }}>
      {children}
    </DropIconsContext.Provider>
  );
}

export default DropIconsContext;
