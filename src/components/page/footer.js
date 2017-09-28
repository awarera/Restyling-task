import React from 'react';
import { Link, Translate } from '../';

const date = new Date();

export default function Footer() {
  const columns = [{
    links: [{
      title: 'servicedAparments',
      to: '/serviced-apartments',
    }, {
      title: 'affiliateProgram',
      to: '/affiliate-program',
    }],
    title: 'learnMore',
  }, {
    links: [{
      title: 'vacationRentalTools',
      to: '/vacataion-rental-tools',
    }, {
      title: 'airbnbHostTips',
      to: '/airbnb-host-tips',
    }],
    title: 'tips',
  }, {
    links: [{
      title: 'help',
      to: '/help',
    }, {
      title: 'contact',
      to: '/contact',
    }, {
      title: 'faqs',
      to: '/faqs',
    }],
    title: 'help',
  }];

  const socialMedia = [{
    to: 'https://twitter.com/yourwelcometv',
    type: 'twitter',
    img: 'https://www.yourwelcome.com/content/dashboard/code-test/twitter.png'
  }, {
    to: 'https://www.facebook.com/yourwelcomeTV',
    type: 'facebook',
    img: 'https://www.yourwelcome.com/content/dashboard/code-test/facebook.png'
  }, {
    to: 'https://www.linkedin.com/company/10174171',
    type: 'linkedin',
    img: 'https://www.yourwelcome.com/content/dashboard/code-test/linkedin.png'
  }, {
    to: 'https://www.instagram.com/yourwelcometv',
    type: 'instagram',
    img: 'https://www.yourwelcome.com/content/dashboard/code-test/instagram.png'
  }];

  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-col">
          <div className="footer-logo" />
        </div>
        {columns.map((c, i) => (
          <div
            className="footer-col"
            key={i}
          >
            <Translate
              component="h4"
              content={`footer.title.${c.title}`}
            />
            <ul>
              {c.links.map((l, ii) => (
                <Link
                  key={ii}
                  to={l.to}
                >
                  <Translate
                    component="li"
                    content={`footer.link.${l.title}`}
                  />
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-wrapper">
        <div className="copyright">
          <Translate
            content="footer.copyright"
            with={{
              date: date.getFullYear(),
            }}
            unsafe
          />
        </div>
        <div className="social-media">
          {socialMedia.map((s, i) => (
            <a
              href={s.to}
              key={i}
            >
            <img src={s.img} width="80%" height="80%"/>
              <div className={`icon-${s.type}`} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
