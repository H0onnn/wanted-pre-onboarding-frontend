/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import { toast } from "react-hot-toast";
import { colors } from "../../constant/colors";
import Button from "../UI/Button";
import { createTodo } from "../../api/todo";
import { useTodoContext } from "../../context/TodoContex";
import TodoItem from "./TodoItem";

const TodoContainer = () => {
  const { todos: prevTodos, handleAddTodo } = useTodoContext();
  const [inputValue, setInputValue] = useState("");
  const todos = prevTodos;

  const handleSubmitClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (inputValue && inputValue.trim() === "") {
      toast.error("할 일을 입력해주세요!", {
        id: "empty-todo",
      });
      return;
    }

    try {
      const newTodo = await createTodo(inputValue);
      handleAddTodo(prevTodos, newTodo);
      toast.success("할 일이 추가되었습니다!", {
        id: "add-todo-success",
      });

      setInputValue("");
    } catch (error: any) {
      toast.error(error.message, {
        id: error.message,
      });
    }
  };

  return (
    <form css={containerStyle}>
      <div css={inputContainerStyle}>
        <input
          css={inputStyle}
          data-testid="new-todo-input"
          type="text"
          placeholder="오늘의 할 일"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          css={{
            marginLeft: "10px",
            height: "30px",
            textAlign: "center",
            lineHeight: "2",
          }}
          data-testid="new-todo-add-button"
          disabled={false}
          filled
          onClick={handleSubmitClick}
        >
          추가
        </Button>
      </div>
      <ul css={listingTodosStyle}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </form>
  );
};

export default TodoContainer;

const containerStyle = css`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  width: 80%;
  max-width: 600px;
  min-height: 550px;
  padding: 20px;
  margin: 0 auto;
  margin-top: 60px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
`;

const inputContainerStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const inputStyle = css`
  flex: 1;
  padding: 10px;
  outline: none;
  border-radius: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;

  &:focus {
    border-color: ${colors.primary};
    box-shadow: 0 0 0 1px ${colors.primary};
  }

  &::placeholder {
    padding-left: 5px;
    color: #aaa;
  }
`;

const listingTodosStyle = css`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
