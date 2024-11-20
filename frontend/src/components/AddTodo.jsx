import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddTodoMutation } from '../rtk/todosApi';
import { Form, Input, Button, Spin } from 'antd';

const AddTodo = () => {
  const [addTodo, { isLoading }] = useAddTodoMutation();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    await addTodo(values);
    navigate('/');
  };

  return (
    <Form onFinish={onFinish}>
      {isLoading && <Spin />}
      <Form.Item name="title" label="Title">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Add Todo</Button>
      </Form.Item>
    </Form>
  );
};

export default AddTodo;
