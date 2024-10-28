import { createContext, Dispatch, SetStateAction } from "react";
import { TodoType } from "../../types";
type TodoContextType = {
  todos: TodoType[],
  setTodos: Dispatch<SetStateAction<TodoType[]>>,
  createTodo: (title: string, description: string) => void;
  removeTodo: (id: string) => void;
  markTodoAsCompleted: (id: string) => void;
  markTodoAsUnCompleted: (id: string) => void;
  deleteAllTodos: () => void;
}

const initialTodoContextValue: TodoContextType = {
  todos: [],
  setTodos: () => null,
  createTodo: () => null,
  removeTodo: () => null,
  markTodoAsCompleted: () => null,
  markTodoAsUnCompleted: () => null,
  deleteAllTodos: () => null,
}

export const TodoContext = createContext<TodoContextType>(initialTodoContextValue);
