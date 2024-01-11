import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, itemChange, itemSubmit, editItem } = this.props;
    return (
      <div className="card card-body mt 3">
        <form onSubmit={itemSubmit}>
          <div className="input-group">
            <div className="input-group-text bg-primary text-white">
              <i className="fas fa-book" />
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="Enter todo items"
              value={item}
              onChange={itemChange}
            />
          </div>
          <div className="list-group">
            <button
              type="submit"
              className={
                editItem
                  ? "btn btn-block btn-sm btn-success mt-3"
                  : "btn btn-block btn-sm btn-primary mt-3"
              }
            >
              {editItem ? "Edit Item" : "Add Item"}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
