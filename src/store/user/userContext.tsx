import { createContext, Dispatch, SetStateAction } from "react";
import { UserType } from "../../types";
type UserContextType = {
  user: UserType,
  setUser: Dispatch<SetStateAction<UserType>>,
  signIn: (username: string, password: string) => boolean,
  signOut: () => boolean,
}

const initialUserContextValue: UserContextType = {
  user: { username: "", password: "", id: "", email: "" },
  setUser: () => null,
  signIn: () => false,
  signOut: () => false,
}

export const UserContext = createContext<UserContextType>(initialUserContextValue);

