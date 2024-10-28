import { ReactNode, useCallback, useState } from "react";
import { TodoContext } from "./todoContext";
import { TodoType } from "../../types";
import { v7 } from "uuid";
import { useUser } from "../user/useUser";

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const { user } = useUser();

  const createTodo = useCallback((title: string, description: string) => {
    setTodos(prev => [...prev, { title, description, id: v7(), completed: false, userId: user.id }])
  }, [user.id]);

  const markTodoAsCompleted = useCallback((id: string) => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) todo.completed = true;
      return todo;
    }))
  }, []);

  const markTodoAsUnCompleted = useCallback((id: string) => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) todo.completed = false;
      return todo;
    }))
  }, []);

  const deleteAllTodos = useCallback(() => {
    setTodos([]);
  }, [setTodos]);

  const removeTodo = useCallback((id: string) => {
    setTodos(prev => prev.filter(predicate => predicate.id !== id))
  }, []);

  return (
    <TodoContext.Provider value={{ todos, setTodos, createTodo, markTodoAsCompleted, removeTodo, markTodoAsUnCompleted, deleteAllTodos }}>
      {children}
    </TodoContext.Provider>
  )
}
