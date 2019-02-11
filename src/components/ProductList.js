import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import store from '../store';
import { addToCart } from '../actionCreators';


const styles = {
  products: {
    display: 'flex',
    alignItems: 'stretch',
    flexWrap: 'wrap'
  },
  product: {
    width: '220px',
    marginLeft: 10,
    marginRight: 10
  }
};


class ProductList extends Component {
  constructor() {
    super();

    this.state = {
      products: [
        { id: 1, name: "Hipster Ultimate", price: 300, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-1.jpg" },
        { id: 2, name: "On Motion Live", price: 100, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-2.jpg" },
        { id: 3, name: "Underground Max", price: 200, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg" },
      ]
    }
  }

  addToCart = (product) => {
    store.dispatch(addToCart(product));
  }

  render() {
    return (
      <div style={styles.products}>
        {this.state.products.map(product =>
          <div className="thumbnail" style={styles.product} key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="caption">
              <h4>{product.name}</h4>
              <p>
                <Button bsStyle="primary" onClick={() => this.addToCart(product)} role="button" disabled={product.inventory <= 0}>${product.price} <Glyphicon glyph="shopping-cart" /></Button>
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ProductList;