import { createContext, useContext, useState } from "react";
import { TodoProps } from "../types";

interface TodoContextProps {
  todos: TodoProps[];
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
  handleAddTodo: (todos: TodoProps[], newTodo: TodoProps) => void;
  handleUpdateTodo: (
    todos: TodoProps[],
    newTodo: TodoProps,
    id: number
  ) => void;
  handleDeleteTodo: (todos: TodoProps[], id: number) => void;
}

const TodoContext = createContext<TodoContextProps>({
  todos: [],
  setTodos: () => {},
  handleAddTodo: () => {},
  handleUpdateTodo: () => {},
  handleDeleteTodo: () => {},
});

export const useTodoContext = () => {
  return useContext(TodoContext);
};

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<TodoProps[]>([]);

  const handleAddTodo = (todos: TodoProps[], newTodo: TodoProps) => {
    const todoData = [...todos, newTodo];

    setTodos(todoData);
  };

  const handleUpdateTodo = (
    todos: TodoProps[],
    newTodo: TodoProps,
    id: number
  ) => {
    const updatedTodos = todos.map((todo) => (todo.id === id ? newTodo : todo));
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (todos: TodoProps[], id: number) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        handleAddTodo,
        handleUpdateTodo,
        handleDeleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
