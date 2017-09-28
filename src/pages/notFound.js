import React, { PropTypes } from 'react';
import { Layout } from './';
import { NotFound } from '../components';

export default function NotFoundPage({ route }) {
  return (
    <Layout route={route}>
      <NotFound />
    </Layout>
  );
}

NotFoundPage.propTypes = { route: PropTypes.any.isRequired };
