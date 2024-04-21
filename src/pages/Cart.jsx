import React from "react";
import "./Cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/Ui/CommonSection";
import { Container, Row, Col } from "reactstrap";
// import tdImg from "../assets/images/arm-chair-01.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlices";
import { useSelector, useDispatch } from "react-redux";
import Checkout from './Checkout';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector(state=> state.cart.totalAmount);
  return (
    <Helmet title="Cart">
      <CommonSection tile="Shopping Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2 className="fs-4 text-center">No item Added to the cart</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <motion.th whileTap={{ scale: 1.2 }}>Delete</motion.th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3">
            <div className="d-flex gap-3 div__div">
              <h6>Subtotal</h6>
              <span>${totalAmount}</span>
            </div>
              <p>taxes and-shopping will calculate in checkout</p>
              <div>
                <button className="buy__btn"><Link to='/shop'>Continue Shopping</Link></button>
                <button className="buy__btn"><Link to='/checkout'>Checkout</Link></button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch()
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id))
  }
  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td>{item.quantity}px</td>
      <td>
        <motion.i whileTap={{scale:1.2}}
        onClick={deleteProduct}
        className="ri-delete-bin-line"></motion.i>
      </td>
    </tr>
  );
};
export default Cart;
