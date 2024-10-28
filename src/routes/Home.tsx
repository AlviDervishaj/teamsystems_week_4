import { Todo } from "../components/Todo/Todo";
import { AddTodo } from "../components/AddTodo/AddTodo";
import { Button } from "../components/ui/Button";
import { useTodos } from "../store/todo/useTodos";

export const Home = () => {
  const { todos, deleteAllTodos } = useTodos();

  return (
    <div className="space-y-4 pt-4">
      <AddTodo />
      {todos.length === 0 && <p className="text-center text-2xl pt-4">No Todos Yet ...</p>}
      {todos.length >= 1 &&
        <section className="w-1/2 mx-auto pt-3 space-y-3">
          <Button onClick={deleteAllTodos} className="flex flex-row items-center content-center justify-center gap-3 text-xl mb-4">
            Clear All <img src="remove.png" alt="Delete All" />
          </Button>
          {todos.map(todo => <Todo key={todo.id} todo={todo} />)}
        </section>
      }
    </div>
  )
}
