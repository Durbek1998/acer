import React from 'react'
import "./Footer.css"
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
// import logo from "../../assets/images/eco-logo.png";
const Footer = () => {
    const year = new Date().getFullYear() 
  return (
    <footer className='footer'>
        <Container>
          <Row>
            <Col lg='4'>
                <div className='logo'>
                  {/* <img src={logo} alt='img'/> */}
                      <div>
                        <h1 className='text-white'>Multimart</h1>
                      </div>
                </div>
                      <p className='footer__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quo quam praesentium dignissimos qui culpa sunt aut dolores cumque quia.</p>
            </Col>
            <Col lg='3'>
            <div className='footer__quick-links'>
                    <h4 className='quick__links-title'>Top Category</h4>
                    <ListGroup>
                      <ListGroupItem className='ps-0 border-0'>
                        <Link to='#'>Mobile Phones</Link>
                      </ListGroupItem>
                      <ListGroupItem className='ps-0 border-0'>
                        <Link to='#'>Modern Sofa</Link>
                      </ListGroupItem>
                      <ListGroupItem className='ps-0 border-0'>
                        <Link to='#'>Arm Chair</Link>
                      </ListGroupItem>
                      <ListGroupItem className='ps-0 border-0'>
                        <Link to='#'>Smart Watches</Link>
                      </ListGroupItem>
                    </ListGroup>
              </div>
            </Col>
            <Col lg='2'>
            <div className='footer__quick-links'>
                    <h4 className='quick__links-title'>Useful Links</h4>
                    <ListGroup >
                      <ListGroupItem className='ps-0 border-0'>
                      <Link to='/cart'>Shop</Link>      
                      </ListGroupItem>
                      <ListGroupItem className='ps-0 border-0'>
                        <Link to='/cart'>Cart</Link>
                      </ListGroupItem>
                      <ListGroupItem className='ps-0 border-0'>
                        <Link to='/login'>Login</Link>
                      </ListGroupItem>
                      <ListGroupItem className='ps-0 border-0'>
                        <Link to='#'>Privacy Policy</Link>
                      </ListGroupItem>
                    </ListGroup>
              </div>
            </Col>
            <Col lg='3'>
            <div className='footer__quick-links'>
                    <h4 className='quick__links-title'>Cantact</h4>
                    <ListGroup className='footer__contact'>
                      <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2 '>
                        <span><i className='ri-map-pin-line'></i></span>
                          <p>Tashkent, Uzbekistan</p>
                      </ListGroupItem>  
                      <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                        <span><i className='ri-phone-line'></i></span>
                        <p>+998949532998</p>
                      </ListGroupItem>
                      <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                        <span><i className='ri-mail-line'></i></span>
                        <p>durbek.turayev1111@mail.ru</p>
                      </ListGroupItem>
                    </ListGroup>
              </div>
            </Col>
            <Col lg='12'>
               <p className='footer__copyright'>Copyright {year} developed by Turaev Durbek.All right reserved</p>
            </Col>

          </Row>
        </Container>

    </footer>
  )
}

export default Footer