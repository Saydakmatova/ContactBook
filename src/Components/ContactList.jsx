import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const ContactList = (props) => {
  const openModalToEdit = (item) => {
    props.setContactToEdit(item);
    props.handleShow();
  };
  return (
    <div>
      <Row xs={1} md={3} className="g-4">
        {props.contacts.map((item) => (
          <Col key={item.id}>
            <Card>
              <Card.Img className="card-image" variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  Phone Number: <strong>{item.phone}</strong>
                </Card.Text>
                <Button
                  variant="info"
                  onClick={() => props.deleteContact(item.id)}
                >
                  <img
                    width={30}
                    height={30}
                    src="https://cdn-icons.flaticon.com/png/512/1531/premium/1531511.png?token=exp=1641555006~hmac=7c5be7046f490976e48b4c3db80599dd"
                    alt="Delete"
                  />
                </Button>
                <Button onClick={() => openModalToEdit(item)}>
                  <img
                    width={30}
                    height={30}
                    src="https://cdn-icons.flaticon.com/png/512/420/premium/420140.png?token=exp=1641403338~hmac=e445eccd286c3e0f6c0d3617edf79a71"
                    alt="Edit"
                  />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ContactList;
