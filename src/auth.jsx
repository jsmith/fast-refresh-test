import React, { createContext, useState, useContext, useEffect } from "react";


export const UserContext = createContext({ name: undefined });

export const UserProvider = (props) => {
  const name = "Tester";
  console.log("auth.ts")
  return <UserContext.Provider value={{ name }}>{props.children}</UserContext.Provider>;
};

export const useUser = () => {
  return useContext(UserContext);
};
