import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="130" cy="130" r="130" />
    <rect x="0" y="269" rx="0" ry="0" width="280" height="30" />
    <rect x="0" y="309" rx="0" ry="0" width="280" height="60" />
    <rect x="-9" y="379" rx="0" ry="0" width="100" height="40" />
    <rect x="181" y="379" rx="21" ry="21" width="100" height="40" />
  </ContentLoader>
);
