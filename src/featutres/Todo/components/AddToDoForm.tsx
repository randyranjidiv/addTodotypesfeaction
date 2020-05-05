import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToDo } from "../Actions";
import { Todo } from "MyModule";
export const AddToDoForm = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  console.log(state);
  const [title, setTitle] = useState("");
  const handleTitleChange: React.ReactEventHandler<HTMLInputElement> = e => {
    setTitle(e.currentTarget.value);
    console.log(e.currentTarget.value);
  };
  const AddItems = {
    addItme: AddToDo
  };
  const handleAddClick = () => {
    dispatch(AddItems.addItme(title));
  };
  return (
    <form
      onSubmit={ev => {
        ev.preventDefault();
      }}
    >
      <input
        style={{ width: 450 }}
        type="text"
        placeholder="Enter new item"
        value={title}
        onChange={handleTitleChange}
      />
      &nbsp;
      <button type="submit" onClick={handleAddClick} disabled={!title}>
        Add
      </button>
      <p>state</p>
    </form>
  );
};
