import React, {Component, PropTypes} from 'react';

class Contest extends Component {
  render(){
    return <div>
    <div onClick={this.props.contestListClick} className="link">BACK HOME NOW</div>
    {this.props.description}</div>;
  }
}

Contest.propTypes = {
  description: PropTypes.string,
  id: PropTypes.number.isRequired,
  contestListClick: PropTypes.func.isRequired
};

export default Contest;
