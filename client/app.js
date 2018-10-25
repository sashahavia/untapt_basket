import React, { Component } from 'react';
import AddItem from './components/AddItem';
import ShoppingList from './components/ShoppingList';
import { connect } from 'react-redux';
class App extends Component {
  render() {
    const { items } = this.props;
    console.log('here', items);
    let list;
    if (items) {
      list = <ShoppingList items={items} />;
    }
    return (
      <div className="container">
        <h1>Shopping List</h1>
        <AddItem />
        {list}
      </div>
    );
  }
}

const mapState = state => {
  return {
    items: state.items,
  };
};

export default connect(
  mapState,
  null
)(App);
