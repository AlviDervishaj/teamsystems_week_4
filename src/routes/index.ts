import { lazy } from "react";

export const Home = lazy(() => import("./Home").then(mod => ({ default: mod.Home })));
