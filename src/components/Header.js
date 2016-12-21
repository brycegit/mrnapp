import React from 'react';

const Header = (props) => {
  return(
    <h2>YO YO in Component {props.message}</h2>
  );
};

Header.propTypes = {
  message: React.PropTypes.string.isRequired
};

export default Header;
