import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddContact = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let newContact = {
      name,
      phone,
      image,
      id: Date.now(),
    };
    props.addContact(newContact);
    setName("");
    setPhone("");
    setImage("");
  }
  return (
    <div className="add-product">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Enter name..."
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            type="number"
            rows={3}
            placeholder="Enter phone number..."
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            onChange={(e) => setImage(e.target.value)}
            value={image}
            type="text"
            placeholder="Enter image..."
          />
        </Form.Group>
        <Button type="submit">Add contact</Button>
      </Form>
    </div>
  );
};

export default AddContact;
