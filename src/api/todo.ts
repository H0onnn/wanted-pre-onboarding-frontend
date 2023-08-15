import { axiosBase } from "./axios";
import { TodoProps } from "../types";

export const getTodos = async (): Promise<TodoProps[]> => {
  const response = await axiosBase.get<TodoProps[]>("/todos");
  return response.data;
};

export const createTodo = async (todo: string): Promise<TodoProps> => {
  const response = await axiosBase.post<TodoProps>("/todos", { todo });
  const newTodo = response.data;

  return newTodo;
};

export const updateTodo = async (todo: TodoProps): Promise<TodoProps> => {
  const data = {
    todo: todo.todo,
    isCompleted: todo.isCompleted,
  };

  const response = await axiosBase.put<TodoProps>(`/todos/${todo.id}`, data);
  const updatedTodo = response.data;

  return updatedTodo;
};

export const deleteTodo = async (id: number): Promise<void> => {
  await axiosBase.delete(`/todos/${id}`);
};
