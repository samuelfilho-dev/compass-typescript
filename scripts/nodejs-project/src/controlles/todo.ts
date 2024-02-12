import { RequestHandler } from "express";

import { Todo } from "../models/todo";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, _) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);
  res.status(201).json({ message: "Create new Todo.", createTodo: newTodo });
};

export const getTodos: RequestHandler = (req, res, _) => {
  res.json({ todos: TODOS });
};

export const updateTodo: RequestHandler<{ id: string }> = (req, res, _) => {
  const todoId = req.params.id;
  const updateText = (req.body as { text: string }).text;

  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);

  if (todoIndex < 0) throw new Error("Cloud not find Todo!");

  TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updateText);

  res.json({ message: "Updated!", updateTodo: TODOS[todoIndex] });
};

export const deleteTodo: RequestHandler<{ id: string }> = (req, res, _) => {
  const todoId = req.params.id;
  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
  if (todoIndex < 0) throw new Error("Cloud not find Todo!");

  TODOS.splice(todoIndex, 1);

  res.status(204).json({ message: "Deleted!" });
};
