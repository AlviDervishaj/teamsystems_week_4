import { NavLink } from "react-router-dom"
import { useUser } from "../../store/user/useUser"
import { Button } from "../ui/Button";

export const Navigation = () => {
  const { user, signOut } = useUser();
  return (
    <nav className="w-dvw h-fit p-2 bg-teal-800/70">
      <ul className="flex flex-row items-center content-center justify-evenly p-2">
        <li className="text-lg">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="text-lg">
          <NavLink to="/">About</NavLink>
        </li>
        <li className="text-lg">
          <NavLink to="/">Contact</NavLink>
        </li>
        {user.username.trim() === "" ? <li className="text-lg">
          <NavLink to="/login">Login</NavLink>
        </li> :
          <li className="text-lg">
            <Button onClick={signOut}>Log Out</Button>
          </li>
        }
      </ul>
    </nav>
  )
}
