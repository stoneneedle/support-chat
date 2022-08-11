import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

// React-Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default class Landing extends React.Component {

  render() {
    return(
      <>
        <Container fluid>
          <Form>
            <Row>
              <Col>
                <InputGroup className="mb-2">
                  <InputGroup.Text className="chat-form-label" id="basic-addon1">Name</InputGroup.Text>
                  <Form.Control
                    className="chat-form"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </Col>
              <Col>
                <InputGroup className="mb-2">
                  <InputGroup.Text className="chat-form-label" id="basic-addon1">Image Link</InputGroup.Text>
                  <Form.Control
                    className="chat-form"
                    placeholder="https://i.imgur.com/EJOjIMC.jpeg"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <InputGroup className="mb-2">
                  <InputGroup.Text className="chat-form-label" id="basic-addon1">Color</InputGroup.Text>
                  <Form.Control
                    className="chat-form"
                    placeholder="#ffffff"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </Col>
              <Col>
                <InputGroup className="mb-2">
                  <InputGroup.Text className="chat-form-label" id="basic-addon1">Page Link</InputGroup.Text>
                  <Form.Control
                    className="chat-form"
                    placeholder="https://example.com/"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <InputGroup className="mb-2">
                  <InputGroup.Text className="chat-form-label" id="basic-addon1">Password</InputGroup.Text>
                  <Form.Control
                    className="chat-form"
                    type="password"
                    placeholder="mypass123"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </Col>
              <Col>
                <InputGroup className="mb-2">
                  <InputGroup.Text className="chat-form-label" id="basic-addon1">Icon</InputGroup.Text>
                  <Form.Select className="chat-form" aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </InputGroup>
              </Col>
            </Row>
            <Button type="submit" className="chat-form">Join</Button>
          </Form>
        </Container>

      </>
    );
  }
}