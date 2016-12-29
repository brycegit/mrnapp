import React, {Component, PropTypes} from 'react';

class Contest extends Component {
  render(){
    return <div>{this.props.description}</div>;
  }
}

Contest.propTypes = {
  description: PropTypes.string,
  id: PropTypes.number.isRequired
};

export default Contest;
