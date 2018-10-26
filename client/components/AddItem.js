import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItems } from '../store/items';

class AddItem extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      qty: 1,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeQty = this.handleChangeQty.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addItems(this.state.name, this.state.qty);
    evt.target.reset();
  }

  handleChangeName(evt) {
    evt.preventDefault();
    this.setState({ name: evt.target.value });
  }

  handleChangeQty(evt) {
    evt.preventDefault();
    this.setState({ qty: evt.target.value });
  }

  render() {
    return (
      <div className="add-item-form">
        <div className="form-heading">
          <h3>Add items to the list</h3>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={this.props.name}
            defaultValue={this.state.name}
            onChange={this.handleChangeName}
            placeholder="Item name"
            required
          />

          <input
            type="number"
            name="qty"
            defaultValue={this.state.qty}
            value={this.props.qty}
            onChange={this.handleChangeQty}
          />

          <button type="submit" value="Add item" className="add-item-btn">
            Add Item
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    addItems: (name, qty) => dispatch(addItems({ name, qty })),
  };
};

export default connect(
  null,
  mapDispatch
)(AddItem);
