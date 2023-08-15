/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TodoContainer from "../../components/todo/TodoContainer";
import { getTodos } from "../../api/todo";
import { toast } from "react-hot-toast";
import { useTokenContext } from "../../context/TokenContext";
import { useTodoContext } from "../../context/TodoContex";

const TodoPage = () => {
  const { setTodos } = useTodoContext();
  const { token } = useTokenContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/signin");
    }
    const fetchTodos = async () => {
      try {
        const fetchedTodos = await getTodos();
        setTodos(fetchedTodos);
      } catch (error: any) {
        toast.error(error.message, {
          id: error.message,
        });
      }
    };
    if (token) {
      fetchTodos();
    }
  }, [setTodos, token, navigate]);

  return (
    <>
      <div css={todoPageStyle}>
        <TodoContainer />
      </div>
    </>
  );
};

export default TodoPage;

const todoPageStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;
