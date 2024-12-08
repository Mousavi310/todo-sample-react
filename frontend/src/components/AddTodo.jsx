import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddTodoMutation } from '../rtk/todosApi';
import { Form, Input, Spin } from 'antd';
import  PrimaryButton from './PrimaryButton'
import  CurrentUser  from './CurrentUser';

const AddTodo = () => {
  const [addTodo, { isLoading }] = useAddTodoMutation();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    await addTodo(values);
    navigate('/');
  };

  return (
    <>
    <CurrentUser />
    <Form onFinish={onFinish}>
      {isLoading && <Spin />}
      <Form.Item name="title" label="Title">
        <Input />
      </Form.Item>
      <Form.Item>
        <PrimaryButton content={"Add"} />
      </Form.Item>
    </Form>
    </>
  );
};

export default AddTodo;
