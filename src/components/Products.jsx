import { useState, useEffect } from "react";
import { Row, Col, Button, Card } from "react-bootstrap";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => setProducts(result));
  }, []);

  return (
    <div>
      <h1 className="SectionTitle">Product Dashboard</h1>
      <Row>
        {products.map((product) => (
          <Col xs={12} sm={6} md={4} lg={3}key={product.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Products;
