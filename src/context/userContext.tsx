import { User } from "firebase/auth";
import { onAuthStateChangedListener } from "../utils/firebaseUtils/firebaseUtils";
import { createContext, useState, FC, useEffect } from "react";

export type UserContextInterface = {
  currentUser: User | null | undefined;
  setCurrentUser?: (newValue: User | null) => void;
};

type ProviderProps = {
  children: JSX.Element;
};

export const UserContext = createContext<UserContextInterface>({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider: FC<ProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubcribe = onAuthStateChangedListener((user) => {
      setCurrentUser(user);
    });
    return unsubcribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
