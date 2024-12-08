import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEditTodoMutation, useGetTodosQuery } from '../rtk/todosApi';
import { Form, Input, Button, Spin } from 'antd';
import  CurrentUser  from './CurrentUser';

const EditTodo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: todos } = useGetTodosQuery();
  const [editTodo] = useEditTodoMutation();
  const [form] = Form.useForm();
  const [initialValues, setInitialValues] = useState({ title: '' });

  useEffect(() => {
    if (todos) {
      const todo = todos.find((t) => t.id === parseInt(id));
      setInitialValues(todo);
      form.setFieldsValue(todo);
    }
  }, [todos, id, form]);

  const onFinish = async (values) => {
    await editTodo({ id, ...values });
    navigate('/');
  };

  if (!initialValues) return <Spin />;

  return (
    <>
      <CurrentUser />
      <Form form={form} initialValues={initialValues} onFinish={onFinish}>
        <Form.Item name="title" label="Title">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Save</Button>
        </Form.Item>
    </Form>
    </>
  );
};

export default EditTodo;
