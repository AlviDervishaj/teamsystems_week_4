import { ReactNode, useCallback, useState } from "react";
import { UserContext } from "./userContext";
import { UserType } from "../../types";
import { v7 } from "uuid";

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType>({ username: "", email: "", password: "", id: "" });

  const signIn = useCallback((username: string, password: string) => {
    if (username === "Admin" && password === "AdminAdmin") {
      setUser({ username: username, password: password, email: "", id: v7() });
      return true;
    }
    console.log({ here: false });
    setUser({ username: "", password: "", email: "", id: "" });
    return false;
  }, []);

  const signOut = useCallback(() => {
    setUser({ username: "", email: "", password: "", id: "" });
    return true;
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, signIn, signOut }}>
      {children}
    </UserContext.Provider>
  )
}
