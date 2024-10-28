import { useContext } from "react";
import { TodoContext } from "./todoContext";

export const useTodos = () => {
  return useContext(TodoContext);
};

