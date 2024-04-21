import React from "react";
import { Link } from "react-router-dom";
// import productImg from "../../assets/images/arm-chair-01.jpg";
import "./ProductCard.css";
import { motion } from "framer-motion";
import { Col } from "reactstrap";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlices";
import { ToastContainer, toast } from 'react-toastify';

const ProductCard = ({item}) => {

const dispatch = useDispatch()

const addToCart = () => {
  dispatch(cartActions.addItem({
    id: item.id,
    productName: item.productName,
    price: item.price,
    imgUrl: item.imgUrl,
  })
  );
  // alert('product added to the cart')
  toast.success('Product added successfully ')
};
  return (
    <Col lg='3' md='4'>
      <div className="product__item">
        <div className="product__img">
          <motion.img whileHover={{scale:0.9}} src={item.imgUrl} alt="" />
        </div>
        <div className="py-2 product__info">
            <h3 className="product__name"><Link to={`/shop/${item.id}`}>{item.productName}</Link></h3>
            <span >{item.category}</span>
        </div>
        <div className="product__cart-bottom d-flex align-items-center justify-content-between p-2">
          <span className="price__info">{item.price}</span>
          <motion.span whileTap={{scale:1.2}} onClick={addToCart}>
            <i className="ri-add-line plus"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
