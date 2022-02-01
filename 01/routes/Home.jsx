import React, { Component } from 'react';
import Layout from '../components/Layout.jsx';
import Navigation from './Navigation.jsx';

const path = '/';
const action = () => <Layout navigation={<Navigation />}><Home /></Layout>;

class Home extends Component {
  render() {
    return (
      <section>Home</section>
    );
  }
}

export default { path, action };
