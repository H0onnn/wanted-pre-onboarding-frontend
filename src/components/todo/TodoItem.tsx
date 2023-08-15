/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { colors } from "../../constant/colors";
import Button from "../UI/Button";
import { updateTodo, deleteTodo } from "../../api/todo";
import { TodoProps } from "../../types";
import { useTodoContext } from "../../context/TodoContex";
import { toast } from "react-hot-toast";

const TodoItem = ({ todo, userId, id, isCompleted }: TodoProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);
  const {
    todos: prevTodos,
    handleUpdateTodo,
    handleDeleteTodo,
  } = useTodoContext();

  const handleToggleComplete = async () => {
    const newTodo = {
      todo,
      id,
      userId,
      isCompleted: !isCompleted,
    };
    try {
      await updateTodo(newTodo);
      handleUpdateTodo(prevTodos, newTodo, id);
    } catch (error: any) {
      toast.error(error.message, {
        id: error.message,
      });
    }
  };

  const handleEdit = () => {
    if (editedTodo.trim() === "") {
      toast.error("할 일을 입력해주세요!", {
        id: "empty-todo",
      });
      return;
    }
    setIsEditing(true);
  };

  const handleSave = async () => {
    const newTodo = {
      todo: editedTodo,
      id,
      userId,
      isCompleted,
    };

    try {
      await updateTodo(newTodo);
      handleUpdateTodo(prevTodos, newTodo, id);
      setIsEditing(false);
      toast.success("정상적으로 수정되었습니다.", {
        id: "update-success",
      });
    } catch (error: any) {
      toast.error(error.message, {
        id: error.message,
      });
    }
  };

  const handleCancel = () => {
    setEditedTodo(todo);
    setIsEditing(false);
  };

  const handleDelete = async () => {
    try {
      await deleteTodo(id);
      handleDeleteTodo(prevTodos, id);
      toast.success("성공적으로 삭제되었습니다.", {
        id: "delete-success",
      });
    } catch (error: any) {
      toast.error(error.message, {
        id: error.message,
      });
    }
  };

  return (
    <li css={itemStyle}>
      <label css={labelStyle(isCompleted)}>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={handleToggleComplete}
          css={checkboxStyle}
        />
        {isEditing ? (
          <input
            type="text"
            value={editedTodo}
            onChange={(e) => setEditedTodo(e.target.value)}
            data-testid="modify-input"
            css={inputEditStyle}
          />
        ) : (
          <span>{todo}</span>
        )}
      </label>
      {isEditing ? (
        <div css={buttonContainerStyle}>
          <Button
            data-testid="submit-button"
            onClick={handleSave}
            css={buttonStyle}
            disabled={false}
            filled
            type="button"
          >
            제출
          </Button>
          <Button
            data-testid="cancel-button"
            onClick={handleCancel}
            css={buttonStyle}
            disabled={false}
            type="button"
          >
            취소
          </Button>
        </div>
      ) : (
        <div css={buttonContainerStyle}>
          <Button
            data-testid="modify-button"
            onClick={handleEdit}
            css={buttonStyle}
            disabled={false}
            type="button"
          >
            수정
          </Button>
          <Button
            data-testid="delete-button"
            onClick={handleDelete}
            css={buttonStyle}
            disabled={false}
            type="button"
          >
            삭제
          </Button>
        </div>
      )}
    </li>
  );
};

export default TodoItem;

const itemStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const labelStyle = (isCompleted: boolean) => css`
  display: flex;
  align-items: center;
  span {
    opacity: ${isCompleted ? 0.5 : 1};
    text-decoration: ${isCompleted ? "line-through" : "none"};
  }
`;

const checkboxStyle = css`
  appearance: none;
  width: 20px;
  height: 20px;
  background: #fff;
  border: 1px solid ${colors.primary};
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  margin-right: 10px;

  &:checked {
    background: ${colors.primary};
  }
`;

const inputEditStyle = css`
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
`;

const buttonContainerStyle = css`
  display: flex;
  gap: 5px;
`;

const buttonStyle = css`
  width: 40px;
  height: 30px;
  text-align: center;
  line-height: 2;
`;
