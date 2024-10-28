import { lazy } from "react";

export const Home = lazy(() => import("./Home").then(mod => ({ default: mod.Home })));
export const Login = lazy(() => import("./Login").then(mod => ({ default: mod.Login })));
