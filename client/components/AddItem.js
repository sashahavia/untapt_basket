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
      <form onSubmit={this.handleSubmit}>
        <label>
          Item name:
          <input
            type="text"
            name="name"
            value={this.props.name}
            defaultValue={this.state.name}
            onChange={this.handleChangeName}
          />
        </label>
        <label>
          Qty:
          <input
            type="number"
            name="qty"
            defaultValue={this.state.qty}
            value={this.props.qty}
            onChange={this.handleChangeQty}
          />
        </label>
        <input type="submit" value="Add to Basket" />
      </form>
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
