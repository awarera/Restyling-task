import React from 'react';
import { Translate } from '../';

export default function HomePagePartners() {
  const partners = [{
    name: 'home-away',
    url: 'http://www.homeaway.com',
    img: 'https://www.yourwelcome.com/content/dashboard/code-test/homeaway.png'
  }, {
    name: 'vrma',
    url: 'http://www.vrma.com',
    img: 'https://www.yourwelcome.com/content/dashboard/code-test/vrma.png'
  }, {
    name: 'asap',
    url: 'http://www.asap.com',
    img: 'https://www.yourwelcome.com/content/dashboard/code-test/asap.png'
  }];

  return (
    <div className="partners">
      <Translate
        component="h3"
        content="partners.title"
      />
      {partners.map((p, i) => (
        <div className="logos">
          <a href={p.url}>
            <img src={p.img} width="125%" height="125%"/>
          </a>
        </div>
      ))}
    </div>
  );
}
