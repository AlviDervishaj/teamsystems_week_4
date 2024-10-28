import { Outlet } from "react-router"
import { Navigation } from "../Navigation/Navigation";
import { TodoProvider } from "../../store/todo";
import { UserProvider } from "../../store/user/user";

export const Layout = () => {
  return (
    <>
      <UserProvider>
        <Navigation />
        <TodoProvider>
          <Outlet />
        </TodoProvider>
      </UserProvider>
    </>
  )
}
