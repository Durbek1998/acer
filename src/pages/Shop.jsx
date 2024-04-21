import React, { useState } from "react";
import CommoSection from "../components/Ui/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "./Shop.css";
import products from "../assets/data/products";
import ProductList from "./../components/Ui/ProductList";

const Shop = () => {
  const [productData, setProductData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "sofa") {
      const filteredProducts = products.filter(
        (item) => item.category === "sofa"
      );
      setProductData(filteredProducts);
    }
    if (filterValue === "mobile") {
      const filteredProducts = products.filter(
        (item) => item.category === "mobile"
      );
      setProductData(filteredProducts);
    }
    if (filterValue === "Chair") {
      const filteredProducts = products.filter(
        (item) => item.category === "chair"
      );
      setProductData(filteredProducts);
    }
    if (filterValue === "watch") {
      const filteredProducts = products.filter(
        (item) => item.category === "watch"
      );
      setProductData(filteredProducts);
    }
    if (filterValue === "wireless") {
      const filteredProducts = products.filter(
        (item) => item.category === "wireless"
      );
      setProductData(filteredProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductData(searchProducts);
  };

  return (
    <Helmet title="Shop">
      <CommoSection title="Product" />
      <section>
        <Container>
        <div className="shop_wrapper">
            <div className="shop_wrapper-item">
              <div className="filter__widget ">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="Chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>    

              {/* <div className="filter__widget ">
                <select>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div> */}
            </div>  
              <div className="search__box ">
                <input
                  type="text"
                  placeholder="Search........."
                  onChange={handleSearch}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
          </div>       
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {
              //  productData.length === 0? <h1>No Product are found</h1>
              //   : <ProductList date={productData}/>
              productData.length === 0 ? (
                <h1 className="text-center fs-2">NO products are found</h1>
              ) : (
                <ProductList data={productData} />
              )
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
