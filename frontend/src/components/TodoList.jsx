import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetTodosQuery, useDeleteTodoMutation, useCompleteTodoMutation } from '../rtk/todosApi';
import { List, Button, Spin } from 'antd';

const TodoList = () => {
  const navigate = useNavigate();
  const { data: todos, error, isLoading } = useGetTodosQuery();
  const [deleteTodo] = useDeleteTodoMutation();
  const [completeTodo] = useCompleteTodoMutation();

  if (isLoading) return <Spin />;
  if (error) return <div>Error loading todos</div>;

  return (
    <div>
      <Button type="primary" onClick={() => navigate('/add')}>Add Todo</Button>
      <List
        itemLayout="horizontal"
        dataSource={todos}
        renderItem={(todo) => (
          <List.Item
            actions={[
              <Button onClick={() => completeTodo(todo.id)}>Complete</Button>,
              <Button onClick={() => navigate(`/edit/${todo.id}`)}>Edit</Button>,
              <Button onClick={() => deleteTodo(todo.id)}>Delete</Button>,
            ]}
          >
            <List.Item.Meta
              title={todo.title}
              description={todo.isCompleted ? 'Completed' : 'Incomplete'}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default TodoList;
