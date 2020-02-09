import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  top: 100px;
  right: 0;
  position: absolute;
  z-index: 2100;

  p {
    padding: 10px;
  }
  i {
    position: relative;
    top: 26px;
    color: #2f52a0;
    right: 2px;
    padding: 5px;
    font-size: 20px;
  }
  @media (max-width: 768px) {
    font-size: 10px;
    top: 30px;
  }
`;

class ToggleBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: true
    };
    this.toggleBox = this.toggleBox.bind(this);
  }

  toggleBox() {
    const { opened } = this.state;
    this.setState({
      opened: !opened
    });
  }

  render() {
    var { title, children } = this.props;
    const { opened } = this.state;

    if (opened) {
      title = <i className="fas fa-window-close"></i>;
    } else {
      title = <i className="fas fa-arrow-circle-left"></i>;
    }

    return (
      <StyledDiv>
        <div className="boxTitle" onClick={this.toggleBox}>
          {title}
        </div>
        {opened && <div className="boxContent">{children}</div>}
      </StyledDiv>
    );
  }
}

export default ToggleBox;
