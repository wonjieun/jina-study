import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header.jsx';

function Layout({ navigation, children }) {
  return (
    <main>
      <Header>{navigation}</Header>
      <main>
        {children}
      </main>
      <footer>
        <span>© Jina</span>
      </footer>
    </main>
  );
}

Layout.propTypes = {
  navigation: PropTypes.element,
  children: PropTypes.element.isRequired
};

export default Layout;
