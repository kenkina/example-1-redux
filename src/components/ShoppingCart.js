import React, { Component } from 'react';
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';
import store from '../store';
import { removeFromCart } from '../actionCreators';


const styles = {
  footer: {
    fontWeight: 'bold'
  }
}


class ShoppingCart extends Component {
  constructor() {
    super();

    this.state = {
      cart: []
    }

    store.subscribe(() => {
      this.setState({
        cart: store.getState().cart
      });
    })
  }

  removeFromCart = (product) => {
    store.dispatch(removeFromCart(product.id));
  }

  render() {
    return (
      <Panel header="Shopping Cart">
        <Table>
          <tbody>
            {this.state.cart.map(product =>
              <tr key={product.id}>
                <td>{product.name}</td>
                <td className="text-right">${product.price}</td>
                <td className="text-right"><Button bsSize="xsmall" bsStyle="danger" onClick={() => this.removeFromCart(product)}><Glyphicon glyph="trash" /></Button></td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" style={styles.footer}>
                Total: ${this.state.cart.reduce((sum, product) => sum + product.price, 0)}
              </td>
            </tr>
          </tfoot>
        </Table>

      </Panel>
    )
  }
}

export default ShoppingCart;
