import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommmonSection from "../components/Ui/CommonSection";
import { Container, Row, Col } from "reactstrap";
import "./Productdetails.css";
import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlices";
import {toast} from "react-toastify";
// import ProductList from "../components/Ui/ProductList"

const PRoductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const {
    imgUrl,
    productName,
    price,
    avgRating,
    shortDesc,
  } = product;

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id,
      image:imgUrl,
      productName,
      price,
    })
    );
    toast.success('Product added successfuly')
  }


  return (
    <Helmet title={productName}>
      <CommmonSection title={productName} />
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} />
            </Col>
            <Col lg="6">
              <div className="product__details">
                <h2>{productName}</h2>
                <div className="product__rating d-flex align-items-center gap-3 mb-4">
                  <div>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-half-s-line"></i>
                    </span>
                  </div>
                  <p>({avgRating}ratings)</p>
                </div>

                <span className="fw-bold">${price}</span>
                <p>{shortDesc}</p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn" onClick={addToCart}>
                  Add Cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
        
        
    </Helmet>
  );
};

export default PRoductDetails;
