import { NavLink } from "react-router-dom"

export const Navigation = () => {
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
        <li className="text-lg">
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  )
}
