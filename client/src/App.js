import React from 'react';

// React-Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Chat Components
import ChatPane from './components/ChatPane';
import SidePane from './components/SidePane';
import MsgPane from './components/MsgPane';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userHasEnteredChat: false
    };
  }

  render() {
    return (
      <div className="App">
        <Container fluid className="chatroom bg-white">
          <Row>
            <Col>
              <Row className="">
                <Col className="chat bg-black text-light"><ChatPane userHasEnteredChat={this.state.userHasEnteredChat} /></Col>
              </Row>
              <Row className="message bg-black text-light">
                <Col><MsgPane /></Col>
              </Row>
            </Col>
            <Col className="sidebar bg-black text-light" sm={2} lg={1}><SidePane /></Col>
          </Row>
        </Container>
      </div>
    );
  }

}

