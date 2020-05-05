import * as React from "react";
import { render } from "react-dom";
import { AddToDoForm } from "./featutres/Todo/components/AddToDoForm";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Todo } from "./featutres/Todo/Reducer";
const store = createStore(Todo);

const rootElement = document.getElementById("root");
render(
  <div>
    <Provider store={store}>
      <AddToDoForm />
    </Provider>
  </div>,
  rootElement
);
