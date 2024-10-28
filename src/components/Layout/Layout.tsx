import { Outlet } from "react-router"
import { Navigation } from "../Navigation/Navigation";
import { UserProvider } from "../../store/user";

export const Layout = () => {
  return (
    <>
      <Navigation />
      <UserProvider>
        <Outlet />
      </UserProvider>
    </>
  )
}
