import React, { createContext } from "react";

// Step 1: Context create
export const DataContext = createContext();

const UserContext = ({ children }) => {
  const username = "Ankii";

  return (
    // Step 2: Provider wrap
    <DataContext.Provider value={username}>
      {children}
    </DataContext.Provider>
  );
};

export default UserContext;
