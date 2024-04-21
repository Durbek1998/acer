import React,{useState, useEffect} from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img.png'
import "./Home.css"
import {motion} from "framer-motion"
import Services from '../services/Services'
import products from '../assets/data/products'
import counterImg from '../assets/images/counter-timer-img.png'
import Clock from "../components/Ui/Clock"
import ProductList from '../components/Ui/ProductList'

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestSalesProducts, setBestSalesProducts] = useState([])
  const [mobileProducts, setMobileProducts] = useState([])
  const [wireleProducts,setWirelessProducts] = useState([])
  const [popularProducts, setPopularProducts] = useState([])

  useEffect(()=> {
    const filterTrendingProducts = products.filter(
      (item)=> item.category === "chair"
    );
    const filteredBestSalesProducts = products.filter(
      (item)=> item.category === "sofa"
    );
    const filteredMobileProducts = products.filter(
      (item) => item.category === "mobile"
    )
    const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    )
    const filteredPopularProducts = products.filter(
      (item) => item.category === "watch"
    )
    
    setTrendingProducts(filterTrendingProducts)
    setBestSalesProducts(filteredBestSalesProducts)
    setMobileProducts(filteredMobileProducts)
    setWirelessProducts(filteredWirelessProducts)
    setPopularProducts(filteredPopularProducts)
  },[]);

  const year = new Date(). getFullYear();
  return (
    <Helmet title={"home"}>
      <section className='hero__section'>
          <Container>
              <Row>
                  <Col lg='6' md='6'>
                    <div className='hero__content'>
                        <p className='hero__subtitle'>Trending product in {year}</p>
                        <h2>Make Your Interior More Minimalist & Modern</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, at voluptates corrupti maiores facilis repudiandae porro provident nobis. Aspernatur, ex.</p>
                        <motion.button whileTap={{scale:1.2}} className='buy__btn'><Link to="/shop">SHOP NOW</Link></motion.button>
                    </div>
                  </Col>
                  <Col lg='6' md='6'>
                    <div className='hero__img'>
                      <img src={heroImg} alt='hero-img'/>
                    </div>
                  </Col>
              </Row>
          </Container>
      </section>
      <Services/>
      <section className='trending__products'>
          <Container>
            <Row>
              <Col lg='12' className='text-center'>
                <h2 className='section-title'>Trinding Products </h2>
              </Col>
             
              <ProductList data={trendingProducts}/>
            </Row>
          </Container>
      </section>
      
      <section className='best__sales'>
          <Container>
            <Row>
              <Col lg='12' className='text-center'>
                  <h2 className='section__title'>Best Sales</h2>
              </Col>

          
               <ProductList data={bestSalesProducts}/>

            </Row>
          </Container>
      </section>

      <section className='timer__count'>
          <Container>
            <Row>
              <Col lg='6' md='6'>
              
                <div className='clock__top-content'>
                    <h4 className='text-white fs6 mb-2'>Limited Offer</h4>
                    <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
                <Clock/>
                <button className='buy__btn store__btn'><Link to='/shop'>Visit Store</Link></button>
                </div>
              </Col>

              <Col lg='6' md='6' className='text-end clock-img'>
                <img src={counterImg} alt=""/>
              </Col>
            </Row>
          </Container>
      </section>
      <section className='new__arrivals'>
            <Container>
                <Row>
                    <Col lg='12' className='text-center mb-4'>
                        <h2 className='section__title'>New arrivals</h2>
                    </Col>
                     <ProductList data={mobileProducts}/>
                      <ProductList data={wireleProducts}/>

                </Row>
            </Container>
      </section>
      <section className='popular__category'>
            <Container>
                <Row>
                    <Col lg='12' className='text-center'>
                        <h2 className='section__title'>Popular in Category</h2>
                    </Col>
                    
                     <ProductList data={popularProducts}/>
                </Row>
            </Container>
      </section>
    </Helmet>
  )
}

export default Home