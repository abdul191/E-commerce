import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card"
import { Row, Col, Button } from "react-bootstrap";
import { remove } from "../store/cartSlice";
function Cart() {
  const allProducts = useSelector((state) => state.cart);
  const dispatch =  useDispatch( )
  const removeToCart = (id) => {
    dispatch(remove(id))
  }
  return (
    <div>
          <Row className="px-5 m-0 text-center">
        {allProducts.map((product) => (
          <Col xs={12} md={6} key={product.id} className="my-3">
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
                  variant="danger"  onClick={() => removeToCart(product.id)}>
                  Remove from Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Cart;
