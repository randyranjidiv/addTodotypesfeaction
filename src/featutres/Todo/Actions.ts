import { ToDo } from "MyModule";
import cuid from "cuid";
import { createAction } from "typesafe-actions";
export const AddToDo = createAction("ADD_ToDo", (title: string) => ({
  id: cuid(),
  title
}))<ToDo>();
