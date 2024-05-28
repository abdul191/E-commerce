import { useEffect } from "react";
import { Row, Col, Button, Card,Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
function Products() {
  const dispatch = useDispatch();
  const {data : products, status} =  useSelector(state => state.products)
  // dispatch action for fetch products 
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  if (status === "Loading"){
    return <Alert className="text-center">Loading ... </Alert>
  }
  if(status === "error"){
    return <Alert className="text-center" variant="danger" >SomeThing went Wrong! Try again Later</Alert>
  }

  function addedProducts(product) {
    dispatch(add(product));
  }
  return (
    <div className="text-center">
      <h1 className="my-3">Product Dashboard</h1>
      <Row className="px-5 m-0">
        {products.map((product) => (
          <Col xs={12} sm={6} md={4} lg={3} key={product.id} className="my-3">
            <Card style={{ height: "100%" }}>
              <Card.Img
                variant="top"
                src={product.image}
                className="mx-auto"
                style={{ width: "100px", height: "130px" }}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>RS{product.price}</Card.Text>
              </Card.Body>
              <Card.Footer style={{ background: "white" }}>
                <Button
                  variant="primary"
                  onClick={() => addedProducts(product)}>
                  Add To Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Products;
