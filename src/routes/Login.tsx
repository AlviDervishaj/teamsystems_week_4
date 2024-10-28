import { FormEvent, useState } from "react"
import { useNavigate } from "react-router";
import { Input } from "../components/ui/Input";
import { useUser } from "../store/user/useUser";
export const Login = () => {
  const { signIn } = useUser();
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    const form = new FormData(event.currentTarget);
    const formData = {
      username: form.get("_username_"),
      password: form.get("_password_"),
    };
    if (!formData.username || !formData.password) {
      setError("Please fill in the form correctly !");
      return;
    }
    signIn(formData.username as string, formData.password as string);
    const wasSuccessfull: boolean = signIn(formData.username as string, formData.password as string);
    if (wasSuccessfull) {
      navigate("/");
      return;
    }
    else setError("Username / Password was incorrect.")
  }
  return (
    <div className="w-full h-full">
      <div className="max-w-xl pt-12 mx-auto">
        <form onSubmit={handleSubmit} className="w-fit mx-auto bg-slate-100 p-4 mt-20 rounded-md flex flex-col gap-8 items-center content-center justify-center">
          <Input name="_username_" title="Username" placeholder="Username" className="border-b-2 border-b-slate-700/40 text-slate-800 pl-3" />
          <Input name="_password_" type="password" title="Password" placeholder="Password" className="border-b-2 border-b-slate-700/40 pl-3 text-slate-800" />
          {error && <p className="text-xl text-center text-red-500 mb-3">{error}</p>}
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-lg">Log In</button>
        </form>
      </div>
    </div>
  )
}
