import React from "react";
import { Container, Row, Col } from "reactstrap";
// import productImg from "../assets/images/arm-chair-01.jpg";
import { db } from "../firebase.config";
import useGetData from "../custom hooks/useGetData";
import {doc, deleteDoc} from "firebase/firestore"
import {toast} from "react-toastify"

const AllProducts = () => {
  const { data: productsData, loading } = useGetData("products");
  // console.log(productsData)
  const deleteProduct = async(id)=> {
    await deleteDoc(doc(db, 'products', id))
    toast.success('Deleted!')
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  {/* <th><button className='btn btn-primary'>Delete</button></th> */}
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <h3 className="py-5 fw-bold">loading...</h3>
                ) : (
                  productsData.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img src={item.imgUrl} alt="" />
                      </td>
                      <td>{item.title}</td>
                      <td>{item.category}</td>
                      <td>${item.price}</td>
                      <td>
                        <button className="btn btn-danger"
                         onClick={()=> 
                         {deleteProduct(item.id)}}>Delete</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AllProducts;
