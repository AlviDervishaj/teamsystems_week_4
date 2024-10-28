import { useCallback, useRef } from "react";
import { Button } from "../ui/Button"
import { Input } from "../ui/Input"
import { useTodos } from "../../store/todo/useTodos";

export const AddTodo = () => {
  const { createTodo } = useTodos();
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  const handleNewTodo = useCallback(() => {
    const title = titleRef.current?.value;
    const description = descriptionRef.current?.value;
    if (!title) return;
    if (!description) return;
    createTodo(title, description)
    titleRef.current.value = "";
    descriptionRef.current.value = "";
  }, [createTodo]);
  return (
    <section className="w-9/12 mx-auto flex flex-col items-center content-center justify-center gap-4">
      <Input ref={titleRef} placeholder="Todo title..." />
      <Input ref={descriptionRef} placeholder="Description title..." />
      <Button onClick={handleNewTodo}>Add New Todo</Button>
    </section>
  )
}
