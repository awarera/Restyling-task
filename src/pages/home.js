import React, { PropTypes } from 'react';
import { Layout } from './';
import { HomePageWrapper } from '../components';

export default function HomePage({ route }) {
  return (
    <Layout route={route}>
      <HomePageWrapper />
    </Layout>
  );
}

HomePage.propTypes = { route: PropTypes.any.isRequired };
