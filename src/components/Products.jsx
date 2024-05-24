import { useState, useEffect } from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";
function Products() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => setProducts(result));
    console.log(setProducts);
  }, []);

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
