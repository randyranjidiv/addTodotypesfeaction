import { createReducer } from "typesafe-actions";
import { ToDo } from "MyModule";
import cuid from "cuid";
import { AddToDo } from "./Actions";

export const Todo = createReducer([
  {
    id: cuid(),
    title: "Hello there"
  }
] as ToDo[]).handleAction(AddToDo, (state, action) => console.log(action));
