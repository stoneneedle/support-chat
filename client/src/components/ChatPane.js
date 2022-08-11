import React from 'react';
import ChatWindow from './ChatWindow';
import Landing from './Landing';

export default class ChatPane extends React.Component {
  componentToRender = <></>;

  constructor(props) {
    super(props);

    if (this.props.userHasEnteredChat) {
      this.componentToRender = <ChatWindow />;
    } else {
      this.componentToRender = <Landing />;
    }
  }

  render() {
    return(
      this.componentToRender
    );


  }
}