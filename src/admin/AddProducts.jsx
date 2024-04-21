import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { toast } from "react-toastify";

import { db, storage } from "../firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterShortDesc, setEnterShortDesc] = useState("");
  const [enterDescription, setenterDescription] = useState("");
  const [enterPrice, setEnterPrice] = useState("");
  const [enterCategory, setEnterCategory] = useState("");
  const [enterProductImg, setEnterProductImg] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const addproduct = async (e) => {
    e.preventDefault();
    setLoading(true);
    // const product = {
    //   title: enterTitle,
    //   shortDesc: enterShortDesc,
    //   description:enterDescription,
    //   category:enterCategory,
    //   price:enterPrice,
    //   imgUrl:enterProductImg
    // };

    try {
      const docRef = await collection(db, "products");
      const storageRef = ref(
        storage,
        `productImages/${Date.now() + enterProductImg.name}`
      );
      const uploadTask = uploadBytesResumable(storageRef, enterProductImg);

      uploadTask.on(
        () => {
          toast.error("images not uploaded!");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await addDoc(docRef, {
              productName: enterTitle,
              shortDesc: enterShortDesc,
              description: enterDescription,
              category: enterCategory,
              price: enterPrice,
              imgUrl: downloadURL,
            });
          });
          setLoading(false);
          toast.success("product succsessfully added!");
          navigate("/dashboard/all-products");
        }
      );
    } catch (err) {
      setLoading(false);
      toast.error("product not added!");
    }
  };

  // toast.success('product succsessfully added!')

  // console.log(product)

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            {loading ? (
              <h4 className="py-5">Loading....</h4>
            ) : (
              <>
                <h4 className="mb-4">Add Product</h4>
                <Form onSubmit={addproduct}>
                  <FormGroup className="form__group">
                    <span>Product title</span>
                    <input
                      type="text"
                      placeholder=" "
                      className="form-control"
                      value={enterTitle}
                      onChange={(e) => setEnterTitle(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <span>Short Description</span>
                    <input
                      type="text"
                      placeholder="lorem..."
                      className="form-control"
                      value={enterShortDesc}
                      onChange={(e) => setEnterShortDesc(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <span> Description</span>
                    <input
                      type="text"
                      placeholder="Description..."
                      className="form-control"
                      value={enterDescription}
                      onChange={(e) => setenterDescription(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <div className="d-flex align-items-center justify-content-between gap-5">
                    <FormGroup className="form__group w-50">
                      <span> Price</span>
                      <input
                        type="text"
                        placeholder="$"
                        className="form-control"
                        value={enterPrice}
                        onChange={(e) => setEnterPrice(e.target.value)}
                        required
                      />
                    </FormGroup>
                    <FormGroup className=" w-50">
                      <span> Category</span>
                      <select
                        className=" w-100"
                        value={enterCategory}
                        onChange={(e) => setEnterCategory(e.target.value)}
                        required
                      >
                        <option>Select category</option>
                        <option value="chair">Chair</option>
                        <option value="sofa">Sofa</option>
                        <option value="mobile">Mobile</option>
                        <option value="watch">Watch</option>
                        <option value="wireless">Wireless</option>
                      </select>
                    </FormGroup>
                  </div>

                  <FormGroup className="form__group">
                    <span>Product Image</span>
                    <input
                      type="file"
                      className="form-control"
                      onChange={(e) => setEnterProductImg(e.target.files[0])}

                      //  value={enterProductImg}
                    />
                  </FormGroup>
                  <button className="buy__btn">Add Product</button>
                </Form>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AddProducts;
