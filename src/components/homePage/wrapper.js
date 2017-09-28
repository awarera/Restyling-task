import React from 'react';
import {
  Content,
  FullScreenContent,
  Partners,
} from './';

export default function HomePageWrapper() {
  return (
    <div className="home-page">
      <FullScreenContent
        contentType="vacationTablet"
        links={[{
          to: '/subscribe',
          title: 'subscribe',
        }, {
          to: '/features',
          title: 'features',
        }]}
      />
      <Partners />
      <Content
        contentType="earnMore"
        imageSide="left"
        links={[{
          to: '/owner-services',
          title: 'ownerServices',
        }, {
          to: '/tickets-and-deals',
          title: 'ticketsAndDeals',
        }]}
      />
      <Content
        contentType="reduceCallOuts"
        imageSide="right"
        links={[{
          to: '/property-guides',
          title: 'propertyGuides',
        }]}
      />
      <FullScreenContent
        contentType="howItWorks"
        links={[{
          to: '/how-it-works',
          title: 'findOutMore',
        }]}
      />
    </div>
  );
}
