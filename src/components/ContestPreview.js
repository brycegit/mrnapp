import React, { Component } from 'react';

class ContestPreview extends Component {
  click = () => {
    this.props.onClick(this.props.id);
  };
  render(){
    return (
      <div onClick={this.click}>
      <div>{this.props.categoryName}</div>
      <div>{this.props.contestName}</div>
      </div>
    );
  }
}

ContestPreview.propTypes = {
  categoryName: React.PropTypes.string.isRequired,
  contestName: React.PropTypes.string,
  onClick: React.PropTypes.func.isRequired,
  id: React.PropTypes.number.isRequired
};

export default ContestPreview;
