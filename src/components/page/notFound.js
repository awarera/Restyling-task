import React from 'react';
import PropTypes from 'prop-types';
import { Translate } from '../';

export default function NotFound({ section }) {
  return (
    <Translate
      className={`not-found ${section}`}
      component="div"
      content={`notFound.${section}`}
    />
  );
}

NotFound.propTypes = { section: PropTypes.string };
NotFound.defaultProps = { section: 'general' };
