import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import {motion} from 'framer-motion'
import serviceDate from "../assets/data/serviceData"
import "./Services.css"
const Services = () => {
  return (
    <section className='services'>
        <Container>
            <Row>
                {
                    serviceDate.map((item,index)=> (
                        <Col lg='6' md='6' className='service-item-con' key={index}>
                        <motion.div whileHover={{scale:1.1}} className='service__item' style={{background: `${item.bg}`}}>
                            <span><i className={item.icon}></i></span>
                            <div>
                            <h3>{item.title}</h3>
                            <p>{item.subtitle}</p>
                            </div>
                        </motion.div>
                    </Col>
                    ))
                }
            </Row>
        </Container>
    </section>
  )
}

export default Services