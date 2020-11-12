import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Image, Container, Col, Row } from 'react-bootstrap';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import { AddCartModal } from '../shared/AddCartModal';
import Layout from '../shared/Layout';
import chair from '../../assets/chair.jpeg';

const Product = () => {
  // dummy data
  const product = {
    id: 1,
    img: chair,
    name: 'Chair',
    category: 'Sofa',
    manufacturer: 'Delhi Sofa Care',
    about: "It's a nice sofa set",
    condition: 'New',
    price: '500 INR',
  };
  let history = useHistory();
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className="m-5">
        <div>
          <h1>Product Detail</h1>
          <p>This is the detail information of the product</p>
        </div>

        <Container>
          <Row xs="2">
            <Col>
              <Image src={product.img} alt={product.name} />
            </Col>
            <Col>
              <h2>{product.name}</h2>
              <div>{product.about}</div>
              <div>
                <span className="font-weight-bold">Manufacturer: </span>
                {product.manufacturer}
              </div>
              <div>
                <span className="font-weight-bold">Category:</span>{' '}
                {product.category}
              </div>
              <div className="font-weight-bold">{product.price}</div>
              <>
                <Button className="mr-3" onClick={() => history.goBack()}>
                  Back
                </Button>
                <Button variant="warning" onClick={() => setOpen(true)}>
                  <AiOutlineShoppingCart />
                  <span className="px-3">Add to cart</span>
                </Button>
              </>
            </Col>
          </Row>
          <AddCartModal open={open} setOpen={setOpen} />
        </Container>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
