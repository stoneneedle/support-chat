import React from 'react';

// React-Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Chat Components
import ChatWindow from './components/ChatWindow';
import Sidebar from './components/Sidebar';
import Login from './components/Login';


export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Container fluid className="chatroom bg-white">
          <Row>
            <Col>
              <Row className="">
                <Col className="chat bg-black text-light"><ChatWindow /></Col>
              </Row>
              <Row className="message bg-black text-light">
                <Col><Login /></Col>
              </Row>
            </Col>
            <Col className="sidebar bg-black text-light" sm={2} lg={1}><Sidebar /></Col>
          </Row>
        </Container>
      </div>
    );
  }

}

