import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { send } from "emailjs-com";

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    send(
      "service_97wr12k",
      "template_t76e09q",
      toSend,
      "user_bxTkayructoRtDxWu2YXq"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
    alert("your message has been sent!");
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
    console.log(toSend);
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            name="from_name"
            type="text"
            value={toSend.from_name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="reply_to"
            type="email"
            value={toSend.reply_to}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            name="message"
            type="text"
            value={toSend.message}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={onSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
