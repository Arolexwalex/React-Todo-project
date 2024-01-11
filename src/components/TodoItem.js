import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { title, itemDelete, itemEdit } = this.props;
    return (
      <div>
        <li
          className="list-group-item text-capitalize
          d-flex justify-content-between my-2"
        >
          <h6>{title}</h6>
          <div className="todo-icons">
            <span className="mx-2 text-success" onClick={itemEdit}>
              <i className="fas fa-pen"></i>
            </span>
            <span className="mx-2 text-danger" onClick={itemDelete}>
              <i className="fas fa-trash"></i>
            </span>
          </div>
        </li>
      </div>
    );
  }
}
