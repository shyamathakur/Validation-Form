
import { Button, Card } from 'antd';
import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]); // State to manage the shopping cart

  useEffect(() => {
    // Fetch data from the API
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        const initialProducts = data.products.slice(0, 15).map((product) => ({
          ...product,
          quantity: 0, // Add quantity property to each product
        }));
        setProducts(initialProducts);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Function to add a product to the cart
  const addToCart = (product) => {
    const updatedCart = [...cart];
    const existingProduct = updatedCart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      product.quantity = 1;
      updatedCart.push(product);
    }

    setCart(updatedCart);
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  // Function to increase the quantity of a product in the cart
  const increaseQuantity = (productId) => {
    const updatedCart = [...cart];
    const product = updatedCart.find((item) => item.id === productId);
    if (product) {
      product.quantity += 1;
      setCart(updatedCart);
    }
  };

  // Function to decrease the quantity of a product in the cart
  const decreaseQuantity = (productId) => {
    const updatedCart = [...cart];
    const product = updatedCart.find((item) => item.id === productId);
    if (product && product.quantity > 0) {
      product.quantity -= 1;
      setCart(updatedCart);
    }
  };

  // Function to calculate the grand total of items in the cart
  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <div>
      <h2>Product List</h2>
      <div className="product-list">
        {products.map((product) => (
          <Card key={product.id} className="product-card">
            <h3>{product.title}</h3>
            <img src={product.thumbnail} alt={product.title} style={{ width: '400px' }} />
            {product.images[1] && (
              <img src={product.images[0]} alt={`Image 1`} />
            )}
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
            <Button onClick={() => addToCart(product)}>Add To My Cart</Button>
            <p>Quantity: {product.quantity}</p> {/* Display product quantity */}
            <Button onClick={() => increaseQuantity(product.id)}>+</Button>
            <Button onClick={() => decreaseQuantity(product.id)} disabled={product.quantity === 0}>-</Button>
          </Card>
        ))}
      </div>
      <div>
        <h2>Shopping Cart</h2>
        <div className="cart">
          {cart.map((product) => (
            <Card key={product.id} className="cart-item">
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              <p>Quantity: {product.quantity}</p> {/* Display product quantity */}
              <Button onClick={() => removeFromCart(product.id)}>Remove</Button>
            </Card>
          ))}
        </div>
        <p>Total: ${calculateTotal()}</p>
      </div>
    </div>
  );
}

export default Dashboard;
