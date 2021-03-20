import React,{useState,useEffect} from 'react'
// import Navbar from './components/Navbar/Navbar'
// import Products from './components/Products/Products'
import { commerce } from './lib/commerce';
import { Products, Navbar,Cart,Checkout,Landing,Footer } from './components';//Check index.js in components folder
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const App = () => {
  const [products, setproducts] = useState([]);
  const [cart, setcart] = useState({})
  const [order, setorder] = useState({});
  const [errorMessage, seterrorMessage] = useState('');

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setproducts(data);
  }

 

  const fetchCart = async () => {
    setcart(await commerce.cart.retrieve());

  }

  const handleAddToCart = async (productId, quanitity) => { //parameters are passed check product.jsx to know what is in parameter
    const {cart} = await commerce.cart.add(productId, quanitity)
    setcart(cart);
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setcart(cart);
  }
  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId)
    setcart(cart)
  }
  
  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setcart(cart)
  }
  // const refreshCart = async () => {
  //   const newCart = await commerce.cart.refresh();
  //   setcart(newCart)
  // }

    const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setcart(newCart);
  };
  // const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
  //   try {
  //     const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder)
  //     setorder(incomingOrder);
  //     refreshCart();
  //   } catch (error) {
  //     seterrorMessage("ERRORR Test")
  //   }
  // }
    
  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
      setorder(incomingOrder);
      console.log("**ORDER**");
      console.table(order)
      // refreshCart();
    } catch (error) {
      seterrorMessage(error.data.error.message);
    }
  };
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  
  
  // console.log(cart);
  
 
  return (
    <Router>
       <div>
        <Navbar totalItems={cart.total_items} />

        <Switch>

          <Route exact path="/">
            <Landing/>
             <Products products={products} onAddToCart={ handleAddToCart}/>
          </Route>
         
          <Route exact path="/cart">
            <Cart cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          </Route>
          
          <Route exact path="/checkout">
            <Checkout
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              refreshCart={refreshCart}
              error={errorMessage}
             />
          </Route>

        </Switch>
         <Footer/>
    </div>
    </Router>
  )
}

export default App
