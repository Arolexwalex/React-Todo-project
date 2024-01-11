import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default class App extends Component {
  state = {
    items: [],
    id: 0,
    item: "",
    editItem: false,
  };
  itemChange = (aro) => {
    this.setState({
      item: aro.target.value,
    });
  };

  itemSubmit = (aro) => {
    aro.preventDefault();

    const newItem = {
      id: this.state.id,
      item: this.state.item,
    };
    console.log(newItem);

    const updateItems = [...this.state.items, newItem];
    this.setState({
      items: updateItems,
      id: this.state.id + 11111,
      item: "",
      editItem: false,
    });
  };
  clearList = () => {
    this.setState({
      items: [],
    });
  };
  itemDelete = (id) => {
    const filterItems = this.state.items.filter((content) => content.id !== id);
    this.setState({
      items: filterItems,
    });
  };

  itemEdit = (id) => {
    const editContents = this.state.items.filter(
      (content) => content.id !== id
    );
    const itemSelected = this.state.items.find((content) => content.id === id);
    this.setState({
      items: editContents,
      item: itemSelected.item,
      editItem: true,
      id: id,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              itemChange={this.itemChange}
              itemSubmit={this.itemSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              itemDelete={this.itemDelete}
              itemEdit={this.itemEdit}
              clearList={this.clearList}
            />
          </div>
        </div>
      </div>
    );
  }
}
