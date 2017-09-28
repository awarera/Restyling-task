import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import counterpart from 'counterpart';

export default function PageTitle({ title }) {
  const name = counterpart('app.title');
  const translation = counterpart(`title.${title}`);
  return <Helmet title={`${name} | ${translation}`} />;
}

PageTitle.propTypes = { title: PropTypes.string.isRequired };
