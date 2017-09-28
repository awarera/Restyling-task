import React from 'react';
import { Link, Translate } from '../';

export default function Header() {
  const menu = [{
    title: 'home',
    to: '/',
  }, {
    title: 'features',
    to: '/features',
  }, {
    title: 'howItWorks',
    to: '/how-it-works',
  }, {
    title: 'logIn',
    to: '/log-in',
  }, {
    title: 'subscribe',
    to: '/subscribe',
  }];

  return (
    <div className="header">
      <Link to="/">
        <div className="logo" />
      </Link>
      <div className="menu">
        {menu.map((m, i) => (
          <Link
            activeClassName="active"
            exact
            key={i}
            to={m.to}
          >
            <Translate content={`menu.${m.title}`} />
          </Link>
        ))}
      </div>
    </div>
  );
}
