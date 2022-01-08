import React from 'react';
import PropTypes from 'prop-types';

function Header({ children }) {
  return (
    <header>
      <h1>My App</h1>
      {children}
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.element
};

export default Header;
