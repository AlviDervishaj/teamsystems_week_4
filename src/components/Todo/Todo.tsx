import { memo } from "react";
import { Button } from "../ui/Button";
import { TodoType } from "../../types";
import { useTodos } from "../../store/todo/useTodos";
export const Todo = memo(({ todo }: { todo: TodoType }) => {
  const { removeTodo, markTodoAsCompleted, markTodoAsUnCompleted } = useTodos();
  return (
    <div className={`${todo.completed ? "order-last opacity-50" : "order-first opacity-100"} flex flex-row items-center content-center justify-between p-3 border border-slate-300 w-full h-fit rounded-lg`}>
      <div className="w-full flex flex-col items-start content-center justify-center gap-2 pr-4">
        <p className={`${todo.completed ? "line-through" : "decoration-none"} text-xl w-full bg-transparent text-slate-200 outline-none`}>{todo.title}</p>
        <p className="text-xl tracking-wide text-slate-300">{todo.description}</p>
      </div>
      <section className="gap-2 flex flex-row">
        {todo.completed ?
          <Button onClick={() => markTodoAsUnCompleted(todo.id)}>
            <img src="undo.png" alt="Undo Mark As Completed" className="w-8 max-w-8 h-8 max-h-8" />
          </Button>
          :
          <Button onClick={() => markTodoAsCompleted(todo.id)}>
            <img src="correct.png" alt="Mark As Completed Button" className="w-8 max-w-8 h-8 max-h-8" />
          </Button>
        }
        <Button onClick={() => removeTodo(todo.id)}>
          <img src="remove.png" alt="Delete Todo" className="w-8 max-w-8 h-8 max-h-8" />
        </Button>
      </section>
    </div>
  );
}, (prevProps, nextProps) => { return prevProps.todo.completed === nextProps.todo.completed })
