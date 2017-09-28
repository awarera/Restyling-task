import React from 'react';
import PropTypes from 'prop-types';
import { Link, Translate } from '../';

export default function FullScreenContent({ contentType, links }) {
  return (
    <div className={`content-full ${contentType}`}>
      <div className="content-img">
        <div className="content-copy">
          <Translate
            component="h2"
            content={`content.${contentType}.title`}
          />
          <Translate
            component="p"
            content={`content.${contentType}.copy`}
          />
          <div className="divider"></div>
          {links.map((l, i) => (
            <Link
              className={`button ${l.title}`}
              key={i}
              to={l.to}
            >
              <Translate content={`content.${contentType}.links.${l.title}`} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

FullScreenContent.propTypes = {
  contentType: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
};
