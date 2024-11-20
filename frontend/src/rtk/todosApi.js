import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5012/' }), // Change this to your backend URL
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => 'todos',
    }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: 'todos',
        method: 'POST',
        body: todo,
      }),
    }),
    editTodo: builder.mutation({
      query: ({ id, ...todo }) => ({
        url: `todos/${id}`,
        method: 'PUT',
        body: todo,
      }),
    }),
    completeTodo: builder.mutation({
      query: (id) => ({
        url: `todos/${id}`,
        method: 'PUT',
        body: { isCompleted: true },
      }),
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `todos/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation, useEditTodoMutation, useCompleteTodoMutation, useDeleteTodoMutation } = todosApi;
