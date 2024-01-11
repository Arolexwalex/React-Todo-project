import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { items, clearList, itemDelete, itemEdit } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>

        {items.map((content) => {
          return (
            <TodoItem
              itemDelete={() => itemDelete(content.id)}
              itemEdit={() => itemEdit(content.id)}
              key={items.id}
              title={content.item}
            />
          );
        })}
        {/* <TodoItem /> */}

        <button
          type="button"
          className="btn btn-danger btn-sm btn-block mt-5"
          onClick={clearList}
        >
          Clear List
        </button>
      </ul>
    );
  }
}
