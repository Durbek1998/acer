import React from 'react'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import Helmet from "../components/Helmet/Helmet"
import CommonSection from "../components/Ui/CommonSection"
import "./Checkout.css"
import { motion } from "framer-motion";
import { useSelector } from 'react-redux';
const Checkout = () => {

  const totalQty = useSelector(state  => state.cart.totalQuantity)
  const totalAmount = useSelector(state => state.cart.totalAmount)


  return (
    <Helmet title="chechout">
      <CommonSection title = "Checkout"/>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <h6 className='mb-4 fw-bold'>Billing information</h6>
              <Form>
                <FormGroup className="form__group">
                      <input type="text"className='form-control' placeholder='Enter you name'/>
                </FormGroup>
                
                <FormGroup className="form__group">
                      <input type="email" className='form-control' placeholder='Enter your email'/>
                </FormGroup>
                
                <FormGroup className="form__group">
                      <input type="number" className='form-control' placeholder='Enter you number'/>
                </FormGroup>
                
                <FormGroup className="form__group">
                      <input type="text" className='form-control' placeholder='Street address'/>
                </FormGroup>

                <FormGroup className="form__group ">
                      <input type="text" className='form-control' placeholder='City'/>
                </FormGroup>  
                
                <FormGroup className="form__group">
                      <input type="text" className='form-control' placeholder='Postal code'/>
                </FormGroup>  

                <FormGroup className="form__group">
                      <input type="text" className='form-control'  placeholder='Country'/>
                </FormGroup>  
              </Form>
            </Col>
            <Col lg='4'>
                <div className='checkout__cart'>
                    <h6>
                      Total Qty: <span>{totalQty} items</span>
                    </h6>
                    <h6>
                      Subtotal: <span>${totalAmount}</span>
                    </h6>
                    <h6>
                      <span>Shipping:<br/>
                       free shipping </span><span>$0</span>
                    </h6>
                    <h4>Total Cost: <span>{totalAmount}</span></h4>
                <motion.button whileTap={{scale:1.2}} className='buy__btn auth__btn w-100 bg-light color-dark text-dark'>Place an order</motion.button>
                </div>

            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout