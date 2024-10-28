import { createContext, ReactNode } from "react";

type UserType = {
  username: string,
  email: string,
  password: string,
};

const initialUserContextValue: UserType = {
  username: "",
  email: "",
  password: ""
};

const UserContext = createContext<UserType>(initialUserContextValue);

export const UserProvider = ({ children }: { children: ReactNode }) => <UserContext.Provider value={initialUserContextValue}>
  {children}
</UserContext.Provider>
